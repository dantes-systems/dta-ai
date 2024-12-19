import { Telegraf } from "telegraf";
import { config } from "../src/config";

describe("Bot Integration Tests", () => {
  let bot: Telegraf;

  beforeAll(() => {
    bot = new Telegraf(config.BOT_TOKEN);
  });

  afterAll(() => {
    bot.stop();
  });

  test("Bot responds to /start command", async () => {
    const ctx: any = { reply: jest.fn() };

    await bot.handleUpdate({ message: { text: "/start", from: { id: "12345" } }, ...ctx });
    expect(ctx.reply).toHaveBeenCalledWith("Welcome to DTA AI! Type /help to see available commands.");
  });
});