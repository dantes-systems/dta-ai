import dotenv from "dotenv";

dotenv.config();

export const BOT_TOKEN = process.env.BOT_TOKEN || "";
export const MONGO_URI = process.env.MONGO_URI || "";
export const ADMIN_PORT = process.env.ADMIN_PORT || 3000;