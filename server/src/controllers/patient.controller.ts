import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

const patientSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    dob: z.string().or(z.date()),
    gender: z.string(),
    email: z.string().email(),
    phone: z.string(),
    bloodGroup: z.string(),
    address: z.string().optional(),
    city: z.string().optional(),
    emergencyContact: z.string(),
    emergencyPhone: z.string(),
    insuranceProvider: z.string().optional(),
    insuranceNumber: z.string().optional(),
    medicalHistory: z.string().optional(),
    allergies: z.string().optional(),
    medications: z.string().optional(),
});

export const createPatient = async (req: Request, res: Response) => {
    try {
        const validatedData = patientSchema.parse(req.body);

        // Parse date if string
        if (typeof validatedData.dob === 'string') {
            validatedData.dob = new Date(validatedData.dob);
        }

        const patient = await prisma.patient.create({
            data: validatedData as any,
        });

        res.status(201).json(patient);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getPatients = async (req: Request, res: Response) => {
    try {
        const patients = await prisma.patient.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json(patients);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getPatientById = async (req: Request, res: Response) => {
    try {
        const patient = await prisma.patient.findUnique({
            where: { id: req.params.id },
            include: {
                appointments: true,
                medicalRecords: true,
                invoices: true,
            },
        });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.json(patient);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
