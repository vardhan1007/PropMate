import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Ensure this path is correct
import { NextRequest } from "next/server";

// 1. Initialize the handler
const handler = NextAuth(authOptions);

// 2. Export GET and POST with the correct Next.js 15/16 signatures
// We explicitly type 'context' to include params as a Promise
export async function GET(
  req: NextRequest, 
  context: { params: Promise<{ nextauth: string[] }> }
) {
  // We don't actually need to await params here as NextAuth handles it internally,
  // but the function signature MUST match what Next.js expects
  return handler(req, context);
}

export async function POST(
  req: NextRequest, 
  context: { params: Promise<{ nextauth: string[] }> }
) {
  return handler(req, context);
}