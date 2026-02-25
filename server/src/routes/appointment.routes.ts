import { Router } from 'express';
import { bookAppointment, getAppointments } from '../controllers/appointment.controller';
import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

router.use(protect);

router.get('/', authorize('ADMIN', 'DOCTOR', 'RECEPTIONIST'), getAppointments);
router.post('/', authorize('ADMIN', 'RECEPTIONIST', 'PATIENT'), bookAppointment);

export default router;
