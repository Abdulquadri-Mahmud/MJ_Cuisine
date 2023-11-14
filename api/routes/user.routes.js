import express from 'express';
import { signup } from '../controller/user.auth.controller.js';

const router = express();

router.get('/signup', signup);

export default router;