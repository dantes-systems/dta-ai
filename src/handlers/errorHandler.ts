export const errorHandler = async (error: any, ctx: any) => {
  console.error("Global Error:", error);
  if (ctx) {
    try {
      await ctx.reply("An unexpected error occurred. Please try again later.");
    } catch (replyError) {
      console.error("Error sending error message to user:", replyError);
    }
  }
};