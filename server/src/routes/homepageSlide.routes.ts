import { Router } from 'express';
import { protect, authorize } from '../middleware/auth.middleware';
import {
    getHomepageSlides,
    createHomepageSlide,
    updateHomepageSlide,
    deleteHomepageSlide,
} from '../controllers/homepageSlide.controller';

const router = Router();

// Public endpoint for homepage slider
router.get('/', getHomepageSlides);

// Protected admin endpoints for managing slides
router.use(protect, authorize('ADMIN'));

router.post('/', createHomepageSlide);
router.put('/:id', updateHomepageSlide);
router.delete('/:id', deleteHomepageSlide);

export default router;

