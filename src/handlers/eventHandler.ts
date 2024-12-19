import { Telegraf } from "telegraf";

export const setupEventHandlers = (bot: Telegraf) => {
  bot.on("new_chat_members", async (ctx) => {
    const newMembers = ctx.message?.new_chat_members;
    for (const member of newMembers || []) {
      await ctx.reply(`Welcome to the group, ${member.first_name}!`);
    }
  });

  bot.on("left_chat_member", async (ctx) => {
    const leftMember = ctx.message?.left_chat_member;
    if (leftMember) {
      await ctx.reply(`${leftMember.first_name} has left the group.`);
    }
  });

  bot.on("sticker", async (ctx) => {
    await ctx.reply("Nice sticker!");
  });
};