import { Context } from "telegraf";

export const callbackQueryHandler = async (ctx: Context) => {
  try {
    const callbackData = ctx.callbackQuery?.data;
    if (callbackData) {
      console.log(`Received callback query: ${callbackData}`);
      await ctx.answerCbQuery("Action processed successfully!");
    }
  } catch (error) {
    console.error("Error in callbackQueryHandler:", error);
    await ctx.answerCbQuery("An error occurred while processing your action.");
  }
};