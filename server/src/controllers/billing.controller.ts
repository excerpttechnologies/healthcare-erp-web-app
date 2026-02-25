import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export const getInvoices = async (req: Request, res: Response) => {
    try {
        const invoices = await prisma.invoice.findMany({
            include: { patient: true },
            orderBy: { createdAt: 'desc' },
        });
        res.json(invoices);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createInvoice = async (req: Request, res: Response) => {
    try {
        const { patientId, amount, dueDate, items, insurance } = req.body;

        const invoice = await prisma.invoice.create({
            data: {
                patientId,
                amount,
                dueDate: new Date(dueDate),
                items,
                insurance,
            },
        });

        res.status(201).json(invoice);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
