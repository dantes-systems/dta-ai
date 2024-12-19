import { Schema, model } from "mongoose";

const SessionSchema = new Schema({
  userId: { type: String, required: true },
  sessionData: { type: Object, default: {} },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true },
});

export const Session = model("session", SessionSchema);