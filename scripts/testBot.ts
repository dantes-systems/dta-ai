import { Telegraf } from "telegraf";
import { config } from "../src/config";

const bot = new Telegraf(config.BOT_TOKEN);

const testBot = async () => {
  try {
    console.log("Starting test...");

    const me = await bot.telegram.getMe();
    console.log("Bot Info:", me);

    const testMessage = await bot.telegram.sendMessage(
      "your-telegram-user-id",
      "Test message from DTA AI Bot!"
    );
    console.log("Test message sent:", testMessage.message_id);

    console.log("Test completed successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Test failed:", error);
    process.exit(1);
  }
};

testBot();