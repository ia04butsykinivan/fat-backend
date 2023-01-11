import { Router } from 'express';
import { getAutomations, createAutomation, triggerAutomation } from '../controllers/automation';
import { body } from 'express-validator';
import { handleValidationErrors } from '../middlewares/validation';

const automationRouter = Router();

automationRouter.get('/automation', getAutomations);
automationRouter.post(
  '/automation',
  body('triggerId').isInt(),
  body('actionId').isInt(),
  handleValidationErrors,
  createAutomation
);
automationRouter.post(
  '/automation/trigger',
  body('id').isInt(),
  handleValidationErrors,
  triggerAutomation
);

export default automationRouter;
