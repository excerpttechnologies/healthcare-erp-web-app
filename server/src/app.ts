import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { errorMiddleware } from './middleware/error.middleware';

// Load environment variables
dotenv.config();

const app = express();

// Security Middleware
app.use(helmet());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
}));

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

import authRoutes from './routes/auth.routes';
import patientRoutes from './routes/patient.routes';
import appointmentRoutes from './routes/appointment.routes';
import billingRoutes from './routes/billing.routes';
import mediaRoutes from './routes/media.routes';
import homepageSlideRoutes from './routes/homepageSlide.routes';
import { getDashboardStats } from './controllers/dashboard.controller';
import { protect } from './middleware/auth.middleware';

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/homepage/slides', homepageSlideRoutes);
app.get('/api/dashboard/stats', protect, getDashboardStats);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Healthcare ERP Backend is running' });
});

// Error Handling
app.use(errorMiddleware);

export default app;
