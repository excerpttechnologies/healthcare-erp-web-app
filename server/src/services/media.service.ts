import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { Media, IMedia, MediaFileType, RelatedEntity } from '../models/media.model';
import { uploadPaths } from '../middleware/upload.middleware';

interface CreateMediaParams {
    fileName: string;
    storedFileName: string;
    mimeType: string;
    size: number;
    uploadedBy: string;
    relatedEntity?: RelatedEntity;
    relatedId?: string;
}

export const determineFileType = (mimeType: string): MediaFileType => {
    if (mimeType === 'application/pdf') {
        return 'pdf';
    }

    if (mimeType.startsWith('image/')) {
        return 'image';
    }

    throw new Error('Unsupported file type');
};

const buildFileUrl = (storedFileName: string) => {
    // This is a logical URL; actual file streaming is handled via /api/media/:id
    return `/uploads/media/original/${storedFileName}`;
};

const buildThumbnailUrl = (storedFileName: string) => {
    return `/uploads/media/thumbnails/${storedFileName}`;
};

export const processImageAndCreateThumbnail = async (storedFileName: string) => {
    const inputPath = path.join(uploadPaths.originalsDir, storedFileName);
    const outputPath = path.join(uploadPaths.thumbnailsDir, storedFileName);

    // Compress main image (in-place)
    await sharp(inputPath)
        .resize({ width: 1600, withoutEnlargement: true })
        .jpeg({ quality: 80 })
        .toBuffer()
        .then((buffer) => fs.writeFile(inputPath, buffer));

    // Create thumbnail
    await sharp(inputPath)
        .resize(300, 300, { fit: 'cover' })
        .jpeg({ quality: 70 })
        .toFile(outputPath);
};

export const createMedia = async (params: CreateMediaParams): Promise<IMedia> => {
    const fileType = determineFileType(params.mimeType);

    let thumbnailUrl: string | undefined;
    if (fileType === 'image') {
        await processImageAndCreateThumbnail(params.storedFileName);
        thumbnailUrl = buildThumbnailUrl(params.storedFileName);
    }

    const doc = await Media.create({
        fileName: params.fileName,
        fileUrl: buildFileUrl(params.storedFileName),
        thumbnailUrl,
        storageType: 'local',
        fileType,
        mimeType: params.mimeType,
        size: params.size,
        uploadedBy: params.uploadedBy,
        relatedEntity: params.relatedEntity,
        relatedId: params.relatedId,
    });

    return doc;
};

export const getMediaById = async (id: string) => {
    return Media.findById(id);
};

export const deleteMediaById = async (id: string) => {
    const media = await Media.findById(id);
    if (!media) {
        return null;
    }

    const storedFileName = path.basename(media.fileUrl);
    const originalPath = path.join(uploadPaths.originalsDir, storedFileName);
    const thumbnailPath = media.thumbnailUrl
        ? path.join(uploadPaths.thumbnailsDir, path.basename(media.thumbnailUrl))
        : null;

    try {
        await fs.unlink(originalPath);
    } catch {
        // ignore if file already removed
    }

    if (thumbnailPath) {
        try {
            await fs.unlink(thumbnailPath);
        } catch {
            // ignore if file already removed
        }
    }

    await media.deleteOne();
    return media;
};

export const getMediaForEntity = async (
    relatedEntity: RelatedEntity,
    relatedId: string,
    page = 1,
    limit = 20
) => {
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
        Media.find({ relatedEntity, relatedId })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit),
        Media.countDocuments({ relatedEntity, relatedId }),
    ]);

    return {
        items,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
};

