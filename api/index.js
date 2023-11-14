import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userAuthRoute from './routes/user.auth.routes.js'

dotenv.config();

const app = express();

app.use(express.json());

const port = 3000;

mongoose.connect(process.env.db).then(() => {
    console.log('Database connected successfully');
}).catch((error) => {
    console.log('Error while connecting to database');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use('/api/auth', userAuthRoute);