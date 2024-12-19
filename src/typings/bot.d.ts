import { Context } from "telegraf";

// Custom types for the Telegram bot
interface Command {
  name: string;
  description: string;
  execute: (ctx: Context, args?: string[]) => Promise<void>;
}

interface BotUser {
  id: string;            // Telegram user ID
  username?: string;     // Optional Telegram username
  isAdmin?: boolean;     // Whether the user is an admin
}

interface UsageStats {
  imageGeneration: {
    gImages: number;
    tImages: number;
    cImages: number;
  };
  aiResponse: {
    questionsAsked: number;
    codingProblemsSolved: number;
  };
}