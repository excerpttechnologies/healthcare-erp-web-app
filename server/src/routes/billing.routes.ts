import { Router } from 'express';
import { getInvoices, createInvoice } from '../controllers/billing.controller';
import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

router.use(protect);

router.get('/', authorize('ADMIN', 'RECEPTIONIST'), getInvoices);
router.post('/', authorize('ADMIN', 'RECEPTIONIST'), createInvoice);

export default router;
