import { connectToDatabase } from "@/lib/mongodb";
import Property from "@/models/Property";
import { NextResponse } from "next/server";

// This function handles "GET" requests to /api/properties
export async function GET() {
  try {
    // 1. Establish the database connection
    await connectToDatabase();

    // 2. Fetch all documents from the 'properties' collection
    const properties = await Property.find({});

    // 3. Return the data to the frontend
    return NextResponse.json(properties);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch properties" }, 
      { status: 500 }
    );
  }
}