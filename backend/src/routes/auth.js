import express from 'express';
import authController from '../Controllers/authController.js';
// import { login } from '../services/authService.js';

const authRouter = express.Router();
authRouter.use(express.json());

authRouter.post('/login', authController.login);

authRouter.post('/create', authController.create);

export default authRouter;
