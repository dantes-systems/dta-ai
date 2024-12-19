import { Context } from "telegraf";

export const startCommand = async (ctx: Context) => {
  await ctx.reply("Welcome to DTA AI! Type /help to see available commands.");
};