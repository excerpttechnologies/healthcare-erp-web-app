import { Router } from 'express';
import {
    createPatient,
    getPatients,
    getPatientById
} from '../controllers/patient.controller';
import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

router.use(protect); // All patient routes require auth

router.get('/', authorize('ADMIN', 'DOCTOR', 'RECEPTIONIST'), getPatients);
router.post('/', authorize('ADMIN', 'RECEPTIONIST'), createPatient);
router.get('/:id', authorize('ADMIN', 'DOCTOR', 'RECEPTIONIST', 'PATIENT'), getPatientById);

export default router;
