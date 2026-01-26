import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // 1. Connect to Database
    await connectToDatabase();

    // 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists." },
        { status: 400 }
      );
    }

    // 3. Hash the password (Security First!)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create and Save the User
    const newUser = new User({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}