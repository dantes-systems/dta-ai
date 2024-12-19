import mongoose from "mongoose";
import { User } from "../src/lib/Mongo/Models/User";
import { config } from "../src/config";

const adminTools = async (action: string, username: string) => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to MongoDB.");

    switch (action) {
      case "ban":
        await User.updateOne({ username }, { $set: { "membership.status": "inactive" } });
        console.log(`User ${username} has been banned.`);
        break;

      case "unban":
        await User.updateOne({ username }, { $set: { "membership.status": "active" } });
        console.log(`User ${username} has been unbanned.`);
        break;

      case "list":
        const users = await User.find({}, { username: 1, membership: 1 });
        console.log("User List:", users);
        break;

      default:
        console.log("Invalid action. Use: ban, unban, list.");
    }

    process.exit(0);
  } catch (error) {
    console.error("Error in admin tools:", error);
    process.exit(1);
  }
};

// Example usage
const action = process.argv[2];
const username = process.argv[3];
if (!action) {
  console.error("Please provide an action (ban|unban|list).");
  process.exit(1);
}

adminTools(action, username || "");