import { Context } from "telegraf";
import { changeClothes } from "../../lib/ImageUtils";

export const changeClothesCommand = async (ctx: Context) => {
  const description = ctx.message?.text?.replace("/changeclothes", "").trim();
  if (!ctx.message?.photo || !description) {
    await ctx.reply("Please send a photo with a description of the clothes to change. Example: /changeclothes Red jacket with black jeans.");
    return;
  }

  try {
    const fileId = ctx.message.photo[ctx.message.photo.length - 1].file_id;
    const file = await ctx.telegram.getFileLink(fileId);
    const updatedImage = await changeClothes(file, description);

    await ctx.replyWithPhoto({ source: updatedImage });
  } catch (error) {
    console.error("Error in changeClothesCommand:", error);
    await ctx.reply("Failed to change clothes in the photo. Please try again later.");
  }
};