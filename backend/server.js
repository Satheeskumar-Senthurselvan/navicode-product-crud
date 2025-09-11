import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDatabase from './db/connectDB.js';
import productRoutes from './routes/productRoute.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

app.use('/api/products', productRoutes);

connectDatabase();

app.use((req, res, next) => {
    if (req.originalUrl.startsWith('/api/')) {
        return res.status(404).json({ success: false, message: 'API Route Not Found' });
    }
    res.status(404).send('<!DOCTYPE html><html><head><title>Not Found</title></head><body><h1>404 Not Found</h1><p>The requested URL was not found on this server.</p></body></html>');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
