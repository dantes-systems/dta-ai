import { Telegraf } from "telegraf";
import { config } from "dotenv";

export const initTelegramClient = (botToken: string) => {
  const bot = new Telegraf(botToken);

  bot.catch((err) => {
    console.error("Telegram bot error:", err);
  });

  return bot;
};