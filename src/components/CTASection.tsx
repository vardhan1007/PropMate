"use client";

import React from "react";
// FIXED: Removed Link from lucide-react to avoid icon conflict
import { ArrowRight, Sparkles } from "lucide-react";
// FIXED: Import Link from next/link for navigation
import Link from "next/link"; 

export default function CTASection() {
  return (
    <section className="py-16 px-8 bg-white relative overflow-hidden">
      {/* Dynamic Animated Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-200/40 to-indigo-200/40 blur-[130px] rounded-full -z-10 animate-pulse transition-all duration-1000" />
      
      {/* Secondary Moving Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 blur-[120px] rounded-full -z-10 animate-bounce transition-all duration-1000" style={{ animationDuration: '8s' }} />

      <div className="max-w-7xl mx-auto flex justify-center">
        {/* Slim Glass Container with Enhanced Hover Glow */}
        <div 
          className="group relative w-full max-w-5xl py-12 px-8 overflow-hidden rounded-[40px] transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(59,130,246,0.3)] hover:scale-[1.01]"
        >
          {/* Frosted Glass Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/40 to-indigo-50/60 backdrop-blur-xl border border-white/60" />
          
          {/* THE GLOW EFFECT: Background light inside the card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/0 via-blue-400/5 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Sweep Shine Animation */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-600/5 border border-blue-600/10 shadow-sm">
              <Sparkles size={12} className="text-blue-600 animate-pulse" />
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[9px]">
                Exclusive Collection For You
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 tracking-tighter mb-8 leading-tight">
              Ready to <span className="text-blue-600 italic">Begin</span> Your Legacy?
            </h2>
            
            {/* Explore Button - FIXED: Styled to match your established blue theme */}
            <Link href="/properties">
              <button className="bg-blue-600 text-white font-black text-[11px] tracking-[0.2em] px-10 py-5 rounded-full uppercase hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center gap-3">
                Explore the Collection 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Internal Corner Glows */}
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-blue-400/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-indigo-400/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
        </div>
      </div>
    </section>
  );
}