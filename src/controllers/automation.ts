import prisma from '../services/db';
import { ACTIONS } from '../utils/constants';
import { telegramNewMessage } from '../services/telegram';

export const createAutomation = async (req, res) => {
  const automation = await prisma.automation.create({
    data: {
      triggerId: req.body.triggerId,
      actionId: req.body.actionId,
      userId: req.user.id,
    },
  });

  res.json(automation);
};

export const triggerAutomation = async (req, res) => {
  const automation = await prisma.automation.findFirst({
    where: {
      id: req.body.id,
      userId: req.user.id,
    },
  });

  const action = await prisma.action.findFirst({
    where: {
      id: automation.actionId,
    },
  });

  if (action.key === ACTIONS.TELEGRAM_NEW_MESSAGE) {
    const telegramConnection = await prisma.connection.findFirst({
      where: {
        userId: req.user.id,
        serviceId: 1,
      },
    });

    await telegramNewMessage(telegramConnection.chatId, 'Hello from automation');
  }

  res.json(automation);
};
