import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Ensure this path is correct
import { NextRequest } from "next/server";

// 1. Initialize the internal NextAuth handler
const handler = NextAuth(authOptions);

// 2. Define GET and POST with the new async params signature
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ nextauth: string[] }> }
) {
  // We do not need to manually await params for NextAuth to work, 
  // but the function signature MUST declare params as a Promise for the build to pass.
  return handler(request, { params });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ nextauth: string[] }> }
) {
  return handler(request, { params });
}