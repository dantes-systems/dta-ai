import { Context } from "telegraf";

export const errorMiddleware = async (ctx: Context, next: () => Promise<void>) => {
  try {
    await next();
  } catch (error) {
    console.error("Error occurred:", error);
    await ctx.reply("An unexpected error occurred. Please try again later.");
  }
};