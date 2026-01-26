import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  location: String,
  type: { type: String, enum: ["Residential", "Commercial", "Investment"] },
  images: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.models.Property || mongoose.model("Property", PropertySchema);