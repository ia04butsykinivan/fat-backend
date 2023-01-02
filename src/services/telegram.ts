import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import prisma from './db';
import { comparePasswords } from '../models/auth';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN as string;

const bot = new TelegramBot(token, { polling: true });

const global = {
  auth: {
    isStarted: false,
    username: '',
    password: '',
  },
};

bot.on('message', (msg) => {
  if (!msg.text || !msg.from) {
    return;
  }

  if (global.auth.isStarted) {
    continueAuth(msg);
  }

  if (msg.text === '/start') {
    startAuth(msg);
  }
});

/*
 * Authorization
 */
const startAuth = (msg) => {
  global.auth.isStarted = true;

  bot.sendMessage(msg.chat.id, 'Please enter your username');
};

const continueAuth = (msg) => {
  const { username, password } = global.auth;

  if (!username) {
    global.auth.username = msg.text;

    bot.sendMessage(msg.chat.id, 'Please enter your password');
  }

  if (username && !password) {
    global.auth.password = msg.text;

    stopAuth(msg);
  }
};

const stopAuth = async (msg) => {
  const { username, password } = global.auth;

  const user = await prisma.user.findUnique({
    where: { username: username },
  });

  const isValid = await comparePasswords(password, user.password);

  if (!isValid) {
    resetAuth();

    bot.sendMessage(msg.chat.id, 'Invalid username or password');
    return;
  }

  await prisma.connection.create({
    data: {
      chatId: msg.chat.id,
      serviceId: 1,
      userId: user.id,
    },
  });

  resetAuth();

  bot.sendMessage(msg.chat.id, 'You are logged in');
};

const resetAuth = () => {
  global.auth = {
    isStarted: false,
    username: '',
    password: '',
  };
};

/*
 * Actions
 */
export const telegramNewMessage = async (chatId, message) => {
  bot.sendMessage(chatId, message);
};
