import { Context } from "telegraf";
import { transformPortrait } from "../../lib/ImageUtils";

export const transformPortraitCommand = async (ctx: Context) => {
  if (!ctx.message?.photo) {
    await ctx.reply("Please send a photo with the command to transform it.");
    return;
  }

  try {
    const fileId = ctx.message.photo[ctx.message.photo.length - 1].file_id;
    const file = await ctx.telegram.getFileLink(fileId);
    const transformedImage = await transformPortrait(file);

    await ctx.replyWithPhoto({ source: transformedImage });
  } catch (error) {
    console.error("Error in transformPortraitCommand:", error);
    await ctx.reply("Failed to transform the portrait. Please try again later.");
  }
};