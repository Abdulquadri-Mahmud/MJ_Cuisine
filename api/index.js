import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userAuthRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

// app.use(express.json());

const port = 3000;

mongoose.connect(process.env.db).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
    console.log('Database connected successfully');
}).catch((error) => {
    console.log('Error while connecting to database');
});

app.use('/api/auth',userAuthRoutes);