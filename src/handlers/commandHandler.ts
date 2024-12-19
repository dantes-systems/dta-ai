import { Context } from "telegraf";

export const commandHandler = async (ctx: Context) => {
  const command = ctx.message?.text?.split(" ")[0];
  switch (command) {
    case "/start":
      await ctx.reply("Welcome to DTA AI! Type /help to see available commands.");
      break;
    case "/help":
      await ctx.reply("Here are the commands you can use:\n/start - Start the bot\n/help - Get help");
      break;
    default:
      await ctx.reply("Unknown command. Type /help for a list of commands.");
  }
};