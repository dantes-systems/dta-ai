import { Context } from "telegraf";

export const authMiddleware = async (ctx: Context, next: () => Promise<void>) => {
  const userId = ctx.from?.id;

  if (!userId) {
    await ctx.reply("Authentication failed. Please ensure you're using the bot correctly.");
    return;
  }

  console.log(`User authenticated: ${userId}`);
  await next();
};