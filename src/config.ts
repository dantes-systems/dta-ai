import dotenv from "dotenv";
dotenv.config();

export const config = {
  BOT_TOKEN: process.env.BOT_TOKEN || "",
  MONGO_URI: process.env.MONGO_URI || "",
  ADMIN_PORT: process.env.ADMIN_PORT || "3000",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  IMAGE_GEN_API_KEY: process.env.IMAGE_GEN_API_KEY || "",
};

if (!config.BOT_TOKEN || !config.MONGO_URI) {
  console.error("Required environment variables are missing. Please check your .env file.");
  process.exit(1);
}