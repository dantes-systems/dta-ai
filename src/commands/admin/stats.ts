import { Context } from "telegraf";
import { User } from "../../lib/Mongo/Models/User";

export const statsCommand = async (ctx: Context) => {
  const totalUsers = await User.countDocuments();
  await ctx.reply(`Total registered users: ${totalUsers}`);
};