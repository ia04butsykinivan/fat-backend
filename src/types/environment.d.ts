declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      TELEGRAM_BOT_TOKEN: string;
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
  }
}

export {};
