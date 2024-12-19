import mongoose from "mongoose";

export default async () => {
  await mongoose.disconnect();
  console.log("Global teardown: Disconnected from MongoDB.");
};