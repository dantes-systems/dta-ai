import { Context } from "telegraf";
import { solveCode } from "../../lib/AIUtils";

export const solveCodeCommand = async (ctx: Context) => {
  const problem = ctx.message?.text?.replace("/solve", "").trim();
  if (!problem) {
    await ctx.reply("Please provide a coding problem. Example: /solve Write a Python function to reverse a string.");
    return;
  }

  try {
    const solution = await solveCode(problem);
    await ctx.reply(`Solution:\n${solution}`);
  } catch (error) {
    console.error("Error in solveCodeCommand:", error);
    await ctx.reply("Failed to solve the coding problem. Please try again later.");
  }
};