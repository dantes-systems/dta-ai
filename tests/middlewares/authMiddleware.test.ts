import { authMiddleware } from "../../src/middlewares/authMiddleware";

describe("Auth Middleware", () => {
  test("authMiddleware allows authorized users", async () => {
    const ctx: any = { from: { id: "authorized_user_id" }, proceed: jest.fn(), reply: jest.fn() };

    await authMiddleware(ctx, jest.fn());
    expect(ctx.proceed).toBeCalled();
  });

  test("authMiddleware rejects unauthorized users", async () => {
    const ctx: any = { from: { id: "unauthorized_user_id" }, proceed: jest.fn(), reply: jest.fn() };

    await authMiddleware(ctx, jest.fn());
    expect(ctx.reply).toHaveBeenCalledWith("You are not authorized to use this bot.");
  });
});