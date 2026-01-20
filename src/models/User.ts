import mongoose, { Schema, model, models } from "mongoose";

// 1. Define the Schema
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true, // Prevents duplicate accounts
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      // We don't set a minLength here because we will store the HASHED version
    },
    image: {
      type: String,
      default: "", // For future profile picture support
    },
  },
  { 
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

// 2. Export the Model
// 'models.User' checks if the model already exists so we don't redefine it during hot-reloads
const User = models.User || model("User", UserSchema);

export default User;