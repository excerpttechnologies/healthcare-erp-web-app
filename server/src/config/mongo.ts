import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/healthcare_erp';

export const connectMongo = async () => {
    if (mongoose.connection.readyState === 1) {
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI);
        // eslint-disable-next-line no-console
        console.log('✅ Connected to MongoDB');
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('❌ MongoDB connection error:', error);
        throw error;
    }
};

