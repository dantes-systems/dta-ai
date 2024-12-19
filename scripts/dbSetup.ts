import mongoose from "mongoose";
import { User } from "../src/lib/Mongo/Models/User";
import { config } from "../src/config";

const setupDatabase = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to MongoDB.");

    // Example: Ensure a unique index on username
    await User.collection.createIndex({ username: 1 }, { unique: true });
    console.log("Indexes set up successfully.");

    // Example: Seed initial data if required
    const adminExists = await User.findOne({ username: "admin" });
    if (!adminExists) {
      await User.create({
        _id: "123456",
        username: "admin",
        registry: { isReg: true, regOn: new Date() },
        membership: { status: "active", planName: "bedrock", startedOn: new Date(), endsOn: new Date() },
        usage: {
          imageGeneration: { gImages: 0, tImages: 0, cImages: 0 },
          aiResponse: { questionsAsked: 0, codingProblemsSolved: 0 },
        },
        settings: { language: "en", notifications: { onSuccess: true, onError: true, onMembershipExpiration: true } },
        lastActive: new Date(),
      });
      console.log("Admin user created.");
    }

    console.log("Database setup complete.");
    process.exit(0);
  } catch (error) {
    console.error("Error setting up the database:", error);
    process.exit(1);
  }
};

setupDatabase();