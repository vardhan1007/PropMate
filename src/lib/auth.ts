import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  // CRITICAL: This logs the EXACT reason for the 500 error in your terminal
  debug: true, 
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        try {
          if (!credentials?.email || !credentials?.password) return null;

          // Ensure DB connection isn't timing out
          await connectToDatabase();
          
          const user = await User.findOne({ email: credentials.email.toLowerCase() });
          
          if (!user) {
            console.log("LOGIN_FAIL: User not found");
            return null;
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
          if (!isPasswordValid) {
            console.log("LOGIN_FAIL: Password mismatch");
            return null;
          }

          return { id: user._id.toString(), email: user.email, name: user.name };
        } catch (error) {
          console.error("AUTH_CALLBACK_CRASH:", error);
          throw new Error("Internal server error during auth");
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/auth/signin" },
  // Optional but recommended: ensures the host is trusted for Next.js 16
  trustHost: true, 
};