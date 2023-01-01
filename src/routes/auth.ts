import { Router } from 'express';
import { signIn, signUp } from '../controllers/auth';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middlewares/validation';

const authRouter = Router();

authRouter.post(
  '/sign-up',
  body('username').isString(),
  body('password').isString(),
  handleValidationErrors,
  signUp
);
authRouter.post(
  '/sign-in',
  body('username').isString(),
  body('password').isString(),
  handleValidationErrors,
  signIn
);

export default authRouter;
