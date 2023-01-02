import { Router } from 'express';
import { protect } from '../middlewares/protect';
import authRouter from './auth';
import automationRouter from './automation';
import serviceRouter from './service';

const router = Router();

const subroutes = [serviceRouter, automationRouter];

router.use(authRouter);
router.use(protect, subroutes);

export default router;
