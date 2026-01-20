import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();

    const newInquiry = new Inquiry(body);
    await newInquiry.save();

    return NextResponse.json({ message: "Inquiry sent successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send inquiry" }, { status: 500 });
  }
}