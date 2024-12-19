import { MiddlewareFn } from "telegraf";

export const middlewareHandler: MiddlewareFn = async (ctx, next) => {
  try {
    console.log(`Processing request from user: ${ctx.from?.id}`);
    await next();
  } catch (error) {
    console.error("Error in middlewareHandler:", error);
    if (ctx) {
      await ctx.reply("An error occurred while processing your request.");
    }
  }
};