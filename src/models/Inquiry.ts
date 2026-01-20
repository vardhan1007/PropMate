import mongoose, { Schema, model, models } from "mongoose";

const InquirySchema = new Schema(
  {
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
    propertyId: { type: String, required: true },
    category: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Inquiry = models.Inquiry || model("Inquiry", InquirySchema);
export default Inquiry;