import { startCommand } from "../../src/commands/general/start";
import { helpCommand } from "../../src/commands/general/help";

describe("General Commands", () => {
  test("startCommand sends a welcome message", async () => {
    const ctx: any = { reply: jest.fn() };

    await startCommand(ctx);
    expect(ctx.reply).toHaveBeenCalledWith("Welcome to DTA AI! Type /help to see available commands.");
  });

  test("helpCommand provides a list of commands", async () => {
    const ctx: any = { reply: jest.fn() };

    await helpCommand(ctx);
    expect(ctx.reply).toHaveBeenCalledWith(expect.stringContaining("/start"));
  });
});