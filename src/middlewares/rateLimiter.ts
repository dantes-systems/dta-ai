import { Context } from "telegraf";

const userRequests: { [key: string]: number } = {};
const RATE_LIMIT = 5; // Maximum number of requests per minute

export const rateLimiter = async (ctx: Context, next: () => Promise<void>) => {
  const userId = ctx.from?.id;
  if (!userId) return await ctx.reply("Unable to verify user. Try again.");

  const now = Date.now();
  const lastRequest = userRequests[userId] || 0;

  if (now - lastRequest < 60000 / RATE_LIMIT) {
    await ctx.reply("You are sending requests too quickly. Please slow down.");
    return;
  }

  userRequests[userId] = now;
  await next();
};