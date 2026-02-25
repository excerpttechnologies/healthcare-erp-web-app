import { Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { AuthRequest } from '../middleware/auth.middleware';
import {
    createMedia,
    deleteMediaById,
    getMediaById,
    getMediaForEntity,
    determineFileType,
} from '../services/media.service';
import { RelatedEntity } from '../models/media.model';
import path from 'path';
import fs from 'fs';
import { uploadPaths } from '../middleware/upload.middleware';

export const uploadMedia = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { relatedEntity, relatedId } = req.body;

        if (relatedEntity && !['patient', 'doctor', 'report'].includes(relatedEntity)) {
            return res.status(400).json({ message: 'Invalid relatedEntity value' });
        }

        if (relatedId && !mongoose.isValidObjectId(relatedId)) {
            return res.status(400).json({ message: 'Invalid relatedId' });
        }

        determineFileType(req.file.mimetype);

        const media = await createMedia({
            fileName: req.file.originalname,
            storedFileName: req.file.filename,
            mimeType: req.file.mimetype,
            size: req.file.size,
            uploadedBy: req.user.id,
            relatedEntity: relatedEntity as RelatedEntity | undefined,
            relatedId: relatedId || undefined,
        });

        return res.status(201).json({
            message: 'File uploaded successfully',
            data: media,
        });
    } catch (error) {
        next(error);
    }
};

export const getMedia = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { variant } = req.query;

        const media = await getMediaById(id);

        if (!media) {
            return res.status(404).json({ message: 'Media not found' });
        }

        if (variant === 'original' || variant === 'thumbnail') {
            const storedFileName =
                variant === 'thumbnail'
                    ? path.basename(media.thumbnailUrl || '')
                    : path.basename(media.fileUrl);

            const baseDir =
                variant === 'thumbnail' ? uploadPaths.thumbnailsDir : uploadPaths.originalsDir;
            const filePath = path.join(baseDir, storedFileName);

            if (!fs.existsSync(filePath)) {
                return res.status(404).json({ message: 'File not found on disk' });
            }

            return res.sendFile(filePath);
        }

        return res.json({
            data: media,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteMedia = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const deleted = await deleteMediaById(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Media not found' });
        }

        return res.json({
            message: 'Media deleted successfully',
        });
    } catch (error) {
        next(error);
    }
};

export const getMediaByEntity = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const { type, id } = req.params;
        const page = parseInt((req.query.page as string) || '1', 10);
        const limit = parseInt((req.query.limit as string) || '20', 10);

        if (!['patient', 'doctor', 'report'].includes(type)) {
            return res.status(400).json({ message: 'Invalid entity type' });
        }

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: 'Invalid relatedId' });
        }

        const result = await getMediaForEntity(type as RelatedEntity, id, page, limit);

        return res.json(result);
    } catch (error) {
        next(error);
    }
};

