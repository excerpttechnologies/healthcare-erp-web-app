import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export const getDashboardStats = async (req: Request, res: Response) => {
    try {
        const totalAppointments = await prisma.appointment.count();
        const activePatients = await prisma.patient.count(); // Simplified for demo
        const totalStaff = await prisma.user.count({
            where: { role: { in: ['DOCTOR', 'RECEPTIONIST'] } }
        });

        // Available beds logic - would normally check Bed model
        const availableBeds = 42;

        // Revenue calculation
        const invoices = await prisma.invoice.findMany({
            where: { status: 'PAID' }
        });
        const monthlyRevenue = invoices.reduce((acc, inv) => acc + inv.amount, 0);

        const criticalCases = 12; // Placeholder

        res.json({
            appointments: totalAppointments,
            activePatients,
            staff: totalStaff,
            availableBeds,
            revenue: monthlyRevenue,
            criticalCases,
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
