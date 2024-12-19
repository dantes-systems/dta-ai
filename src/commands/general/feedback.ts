import { Context } from "telegraf";

export const feedbackCommand = async (ctx: Context) => {
  const feedback = ctx.message?.text?.replace("/feedback", "").trim();
  if (!feedback) {
    await ctx.reply("Please provide your feedback. Example: /feedback I love this bot!");
    return;
  }

  console.log(`Feedback received from ${ctx.from?.id}: ${feedback}`);
  await ctx.reply("Thank you for your feedback!");
};