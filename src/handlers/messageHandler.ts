import { Context } from "telegraf";

export const messageHandler = async (ctx: Context) => {
  try {
    const message = ctx.message?.text;
    if (message) {
      console.log(`Received message: ${message} from user: ${ctx.from?.id}`);
    }
  } catch (error) {
    console.error("Error in messageHandler:", error);
    await ctx.reply("An error occurred while processing your message.");
  }
};