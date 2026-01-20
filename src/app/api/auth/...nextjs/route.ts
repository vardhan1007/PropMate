import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

import { connectToDatabase } from "@/lib/mongodb";

import User from "@/models/User";

import bcrypt from "bcryptjs";



// Export authOptions so other pages can use them

export const authOptions = {

  providers: [

    CredentialsProvider({

      name: "credentials",

      credentials: {},

      async authorize(credentials: any) {

        try {

          await connectToDatabase();

          const user = await User.findOne({ email: credentials?.email.toLowerCase() });

          if (!user) return null;



          const passwordsMatch = await bcrypt.compare(credentials.password, user.password);

          if (!passwordsMatch) return null;



          return user;

        } catch (error) {

          console.error("Auth error:", error);

          return null;

        }

      },

    }),

  ],

  session: { strategy: "jwt" as const },

  secret: process.env.NEXTAUTH_SECRET,

  pages: { signIn: "/auth/signin" },

};



const handler = NextAuth(authOptions);

// THIS IS THE FIX for the 500 error in Next.js 15/16

export { handler as GET, handler as POST };