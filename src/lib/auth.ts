import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "./mongodb"; // Ensure this path is also correct
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        try {
          await connectToDatabase();
          const user = await User.findOne({ email: credentials?.email });
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(credentials.password, user.password);
          if (!passwordsMatch) return null;

          return { id: user._id.toString(), name: user.name, email: user.email };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/auth/signin" },
};
