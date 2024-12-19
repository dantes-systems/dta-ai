import { Telegraf } from "telegraf";
import { startCommand } from "./commands/general/start";
import { helpCommand } from "./commands/general/help";
import { chatCommand } from "./commands/ai/chat";
import { solveCodeCommand } from "./commands/ai/solveCode";
import { generateImageCommand } from "./commands/image/generateImage";
import { transformPortraitCommand } from "./commands/image/transformPortrait";
import { changeClothesCommand } from "./commands/image/changeClothes";
import { statsCommand } from "./commands/admin/stats";
import { manageUsersCommand } from "./commands/admin/manageUsers";
import { feedbackCommand } from "./commands/general/feedback";
import { authMiddleware } from "./middlewares/authMiddleware";
import { validateUser } from "./middlewares/validateUser";
import { rateLimiter } from "./middlewares/rateLimiter";
import { logMiddleware } from "./middlewares/logMiddleware";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { config } from "./config";

// Initialize the bot
const bot = new Telegraf(config.BOT_TOKEN);

// Middleware setup
bot.use(logMiddleware);
bot.use(authMiddleware);
bot.use(validateUser);
bot.use(rateLimiter);
bot.use(errorMiddleware);

// General Commands
bot.start(startCommand);
bot.help(helpCommand);
bot.command("chat", chatCommand);
bot.command("solve", solveCodeCommand);
bot.command("feedback", feedbackCommand);

// Image Commands
bot.command("generate", generateImageCommand);
bot.command("transform", transformPortraitCommand);
bot.command("changeclothes", changeClothesCommand);

// Admin Commands
bot.command("stats", statsCommand);
bot.command("manage", manageUsersCommand);

// Launch the bot
bot.launch().then(() => {
  console.log("DTA AI Bot is running...");
});

// Graceful shutdown
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));