import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadsRoot = path.resolve(__dirname, '../../uploads');
const mediaRoot = path.join(uploadsRoot, 'media');
const originalsDir = path.join(mediaRoot, 'original');
const thumbnailsDir = path.join(mediaRoot, 'thumbnails');

// Ensure upload directories exist at startup
[uploadsRoot, mediaRoot, originalsDir, thumbnailsDir].forEach((dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

const storage = multer.diskStorage({
    destination: (_req, file, cb) => {
        cb(null, originalsDir);
    },
    filename: (_req, file, cb) => {
        const ext = path.extname(file.originalname);
        const baseName = path.basename(file.originalname, ext).replace(/\s+/g, '-');
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${baseName}-${uniqueSuffix}${ext.toLowerCase()}`);
    },
});

const MAX_FILE_SIZE_MB = Number(process.env.MAX_FILE_SIZE_MB || 5);

const fileFilter: multer.Options['fileFilter'] = (_req, file, cb) => {
    const allowedImage = /^image\//.test(file.mimetype);
    const allowedPdf = file.mimetype === 'application/pdf';

    if (!allowedImage && !allowedPdf) {
        return cb(new Error('Only image and PDF files are allowed'));
    }

    cb(null, true);
};

export const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: MAX_FILE_SIZE_MB * 1024 * 1024,
    },
});

export const uploadPaths = {
    uploadsRoot,
    mediaRoot,
    originalsDir,
    thumbnailsDir,
};

