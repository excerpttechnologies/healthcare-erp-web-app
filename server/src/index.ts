import app from './app';
import { connectMongo } from './config/mongo';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectMongo();

        app.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`
    🚀 Server ready at: http://localhost:${PORT}
    🏥 Healthcare ERP Backend is live!
  `);
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
