import { Router } from 'express';
import { protect } from '../middlewares/protect';
import authRouter from './auth';

const router = Router();

const subroutes = [];

router.use(authRouter);
router.use(subroutes, protect);

export default router;
