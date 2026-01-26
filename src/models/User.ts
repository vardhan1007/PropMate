import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// This check prevents Mongoose from redefining the model during hot-reloads
const User = models.User || model("User", UserSchema);
export default User;