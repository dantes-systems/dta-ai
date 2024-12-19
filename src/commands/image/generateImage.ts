import { Context } from "telegraf";
import { generateImage } from "../../lib/AIUtils";

export const generateImageCommand = async (ctx: Context) => {
  const prompt = ctx.message?.text?.replace("/generate", "").trim();
  if (!prompt) {
    await ctx.reply("Please provide a description for the image. Example: /generate A futuristic city at night.");
    return;
  }

  try {
    const imageUrl = await generateImage(prompt);
    await ctx.replyWithPhoto(imageUrl, { caption: "Here is your AI-generated image!" });
  } catch (error) {
    console.error("Error in generateImageCommand:", error);
    await ctx.reply("Failed to generate the image. Please try again later.");
  }
};