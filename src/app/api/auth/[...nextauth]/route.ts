import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextRequest } from "next/server";

const handler = NextAuth(authOptions);

// Use this exact async/await pattern for Next.js 16
export async function GET(req: NextRequest, { params }: { params: Promise<{ nextauth: string[] }> }) {
  const resolvedParams = await params;
  return handler(req, { params: resolvedParams });
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ nextauth: string[] }> }) {
  const resolvedParams = await params;
  return handler(req, { params: resolvedParams });
}