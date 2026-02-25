import { Router } from 'express';
import { upload } from '../middleware/upload.middleware';
import { protect, authorize } from '../middleware/auth.middleware';
import {
    uploadMedia,
    getMedia,
    deleteMedia,
    getMediaByEntity,
} from '../controllers/media.controller';

const router = Router();

router.use(protect);

router.post(
    '/upload',
    authorize('ADMIN', 'DOCTOR', 'RECEPTIONIST'),
    upload.single('file'),
    uploadMedia
);

router.get('/:id', authorize('ADMIN', 'DOCTOR', 'RECEPTIONIST', 'PATIENT'), getMedia);

router.delete('/:id', authorize('ADMIN', 'DOCTOR', 'RECEPTIONIST'), deleteMedia);

router.get(
    '/entity/:type/:id',
    authorize('ADMIN', 'DOCTOR', 'RECEPTIONIST'),
    getMediaByEntity
);

export default router;

