import { Context } from "telegraf";

export const helpCommand = async (ctx: Context) => {
  await ctx.reply(`
Here are the commands you can use:
/start - Start the bot
/help - Get help
/chat <query> - Ask an AI-powered question
/solve <problem> - Solve a coding problem
/generate <description> - Generate an AI image
/transform - Transform a portrait photo
/changeclothes <description> - Change clothes in a photo
/admin - Admin-specific commands
  `);
};