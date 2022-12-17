import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN as string;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  if (!msg.text || !msg.from) {
    return;
  }

  const hi = 'hi';

  if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}`);
  }
});
