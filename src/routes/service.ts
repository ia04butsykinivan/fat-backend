import { Router } from 'express';
import { getServices, getService } from '../controllers/service';

const serviceRouter = Router();

serviceRouter.get('/service', getServices);
serviceRouter.get('/service/:id', getService);

export default serviceRouter;
