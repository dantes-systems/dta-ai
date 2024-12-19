import mongoose from "mongoose";
import { config } from "../../src/config";

export default async () => {
  await mongoose.connect(config.MONGO_URI);
  console.log("Global setup: Connected to MongoDB.");
};