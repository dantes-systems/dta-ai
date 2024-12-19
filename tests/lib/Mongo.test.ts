import mongoose from "mongoose";
import { User } from "../../src/lib/Mongo/Models/User";
import { config } from "../../src/config";

describe("MongoDB User Model", () => {
  beforeAll(async () => {
    await mongoose.connect(config.MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test("Can create a user", async () => {
    const user = new User({ _id: "12345", username: "testuser", registry: { isReg: true, regOn: new Date() } });
    await user.save();

    const foundUser = await User.findById("12345");
    expect(foundUser?.username).toBe("testuser");
  });
});