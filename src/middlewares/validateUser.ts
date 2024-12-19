import { Context } from "telegraf";
import { User } from "../lib/Mongo/Models/User";

export const validateUser = async (ctx: Context, next: () => Promise<void>) => {
  const userId = ctx.from?.id;

  if (!userId) {
    await ctx.reply("Validation failed. Unable to fetch user details.");
    return;
  }

  const user = await User.findById(userId);

  if (!user) {
    await ctx.reply("You are not registered. Please register using /start.");
    return;
  }

  console.log(`User validated: ${userId}`);
  await next();
};