import fs from "fs";
import path from "path";

const generateEnv = () => {
  const envContent = `
BOT_TOKEN=your-telegram-bot-token
MONGO_URI=your-mongodb-uri

ADMIN_PORT=3000
ADMIN_USERNAME=your-telegram-username

OPENAI_API_KEY=your-openai-api-key
IMAGE_GEN_API_KEY=your-image-generation-api-key
`;

  const envPath = path.resolve(__dirname, "../.env");

  if (fs.existsSync(envPath)) {
    console.log(".env file already exists.");
    return;
  }

  fs.writeFileSync(envPath, envContent.trim());
  console.log(".env file created successfully.");
};

generateEnv();