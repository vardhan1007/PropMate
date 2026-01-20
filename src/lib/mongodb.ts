import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI; // Grabs your secret link

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

export const connectToDatabase = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return; // Already connected
    await mongoose.connect(MONGODB_URI);
    console.log("🚀 Connected to PropMate Database");
  } catch (error) {
    console.error("❌ Database connection error:", error);
  }
};