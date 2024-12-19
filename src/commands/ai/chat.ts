import { Context } from "telegraf";
import { chatGPTResponse } from "../../lib/AIUtils";

export const chatCommand = async (ctx: Context) => {
  const query = ctx.message?.text?.replace("/chat", "").trim();
  if (!query) {
    await ctx.reply("Please provide a query. Example: /chat What is AI?");
    return;
  }

  try {
    const response = await chatGPTResponse(query);
    await ctx.reply(response);
  } catch (error) {
    console.error("Error in chatCommand:", error);
    await ctx.reply("Failed to fetch an AI response. Please try again later.");
  }
};