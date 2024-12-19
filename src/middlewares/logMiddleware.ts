import { Context } from "telegraf";

export const logMiddleware = async (ctx: Context, next: () => Promise<void>) => {
  const userId = ctx.from?.id;
  const message = ctx.message?.text || "Non-text message";

  console.log(`User: ${userId}, Message: "${message}"`);
  await next();
};