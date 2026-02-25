import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import mongoose from 'mongoose';
import {
    getActiveSlides,
    createSlide,
    updateSlide,
    deleteSlide,
} from '../services/homepageSlide.service';

const slideSchema = z.object({
    title: z.string().min(1),
    subtitle: z.string().optional(),
    imageUrl: z.string().url(),
    buttonText: z.string().optional(),
    buttonLink: z.string().url().optional(),
    order: z.number().int().optional(),
    isActive: z.boolean().optional(),
});

export const getHomepageSlides = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const slides = await getActiveSlides();
        res.json({ data: slides });
    } catch (error) {
        next(error);
    }
};

export const createHomepageSlide = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = slideSchema.parse(req.body);

        const slide = await createSlide(payload);

        res.status(201).json({
            message: 'Slide created successfully',
            data: slide,
        });
    } catch (error) {
        next(error);
    }
};

export const updateHomepageSlide = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: 'Invalid slide id' });
        }

        const payload = slideSchema.partial().parse(req.body);

        const slide = await updateSlide(id, payload);

        if (!slide) {
            return res.status(404).json({ message: 'Slide not found' });
        }

        res.json({
            message: 'Slide updated successfully',
            data: slide,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteHomepageSlide = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: 'Invalid slide id' });
        }

        const slide = await deleteSlide(id);

        if (!slide) {
            return res.status(404).json({ message: 'Slide not found' });
        }

        res.json({
            message: 'Slide deleted successfully',
        });
    } catch (error) {
        next(error);
    }
};

