import { generateImageCommand } from "../../src/commands/image/generateImage";

describe("Image Commands", () => {
  test("generateImageCommand generates an image", async () => {
    const ctx: any = {
      message: { text: "/generate A futuristic city" },
      replyWithPhoto: jest.fn(),
    };

    await generateImageCommand(ctx);
    expect(ctx.replyWithPhoto).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ caption: "Here is your AI-generated image!" })
    );
  });
});