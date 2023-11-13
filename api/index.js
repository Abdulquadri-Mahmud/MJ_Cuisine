import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

mongoose.connect(process.env.db).then(() => {
    console.log('Database Connected Successfully!');
    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
}).catch((error) => {
    console.log(error, 'Error while connecting to server!');
});