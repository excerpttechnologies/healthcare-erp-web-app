import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

const appointmentSchema = z.object({
    patientId: z.string(),
    doctorId: z.string(),
    date: z.string(),
    time: z.string(),
    reason: z.string(),
    notes: z.string().optional(),
});

export const bookAppointment = async (req: Request, res: Response) => {
    try {
        const validatedData = appointmentSchema.parse(req.body);

        const appointment = await prisma.appointment.create({
            data: {
                ...validatedData,
                date: new Date(validatedData.date),
            },
        });

        res.status(201).json(appointment);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await prisma.appointment.findMany({
            include: {
                patient: true,
                doctor: true,
            },
            orderBy: { date: 'asc' },
        });
        res.json(appointments);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
