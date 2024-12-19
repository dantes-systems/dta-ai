import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  _id: { type: String, required: true }, // Telegram user ID
  username: { type: String, required: true },
  registry: {
    isReg: { type: Boolean, default: false },
    regOn: { type: Date },
  },
  membership: {
    status: { type: String, enum: ["active", "inactive"], default: "inactive" },
    planName: { type: String, enum: ['newbie', 'iron', 'gold', 'diamond', 'platinum', 'netherite', 'bedrock'] },
    startedOn: { type: Date },
    endsOn: { type: Date },
  },
  usage: {
    imageGeneration: {
      gImages: { type: Number, default: 0 },
      tImages: { type: Number, default: 0 },
      cImages: { type: Number, default: 0 },
    },
    aiResponse: {
      questionsAsked: { type: Number, default: 0 },
      codingProblemsSolved: { type: Number, default: 0 },
    },
  },
  settings: {
    language: { type: String, default: "default" },
    notifications: {
      onSuccess: { type: Boolean, default: true },
      onError: { type: Boolean, default: true },
      onMembershipExpiration: { type: Boolean, default: true },
    },
  },
  lastActive: { type: Date, default: Date.now },
});

export const User = model("User", UserSchema);