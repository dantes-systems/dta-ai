import { chatCommand } from "../../src/commands/ai/chat";
import { solveCodeCommand } from "../../src/commands/ai/solveCode";

describe("AI Commands", () => {
  test("chatCommand responds to a query", async () => {
    const ctx: any = {
      message: { text: "/chat What is AI?" },
      reply: jest.fn(),
    };

    await chatCommand(ctx);
    expect(ctx.reply).toHaveBeenCalledWith(expect.stringContaining("AI"));
  });

  test("solveCodeCommand solves a problem", async () => {
    const ctx: any = {
      message: { text: "/solve Write a Python function to reverse a string." },
      reply: jest.fn(),
    };

    await solveCodeCommand(ctx);
    expect(ctx.reply).toHaveBeenCalledWith(expect.stringContaining("def"));
  });
});