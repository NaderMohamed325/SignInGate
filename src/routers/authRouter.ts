import express from 'express';
import { SignUp } from '../controllers/authController';
import { signInValidation } from '../utils/middlewares/SignInValidation';

const authRouter = express.Router();

authRouter.post('/', signInValidation, SignUp);

export { authRouter };