"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AllPropertiesHub() {
  const { data: session, status } = useSession();

  // 1. LOADING STATE
  if (status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-blue-500" size={40} />
      </div>
    );
  }

  // 2. GATED UI: Only show the Lock if NOT logged in
  if (!session) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar isAuthPage={true} />
        <div className="flex items-center justify-center min-h-screen pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 px-6 text-center"
          >
            <div className="w-20 h-20 bg-[#073A4B]/5 rounded-full flex items-center justify-center mb-8">
              <Lock className="text-[#073A4B]" size={32} />
            </div>
            <h2 className="text-4xl font-serif font-black text-slate-900 mb-4 tracking-tight">Master Collection Locked</h2>
            <p className="text-slate-500 max-w-md mb-10 leading-relaxed font-medium">
              The full Master Collection hub is reserved for PropMate members. Please sign in to unlock advanced search and heritage details.
            </p>
            <Link 
              href="/auth/signin" 
              className="bg-[#073A4B] text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[11px] hover:bg-[#108AB1] transition-all shadow-xl hover:scale-105"
            >
              Sign In to Access
            </Link>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  // 3. AUTHENTICATED UI: The Discovery Hub for Members
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar isAuthPage={true} />
      <div className="pt-40 px-10 max-w-[1750px] mx-auto pb-24">
        <div className="mb-16">
          <h1 className="text-6xl font-serif font-black text-slate-900 mb-4">Discovery Hub</h1>
          <p className="text-slate-500 text-lg">Welcome back, {session.user?.name}. Explore the full depth of our Indian heritage collection.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/properties/villas" className="h-[400px] group relative overflow-hidden rounded-[3rem] bg-slate-200">
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all z-10" />
               <div className="absolute bottom-10 left-10 z-20 text-white">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-300">Browse</span>
                  <h3 className="text-3xl font-serif font-bold">Villas Collection</h3>
               </div>
            </Link>
            {/* Add more collection links here */}
        </div>
      </div>
      <Footer />
    </main>
  );
}