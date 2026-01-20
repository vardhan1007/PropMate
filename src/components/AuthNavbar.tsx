"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function AuthNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 transition-transform group-hover:scale-105">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tight">PropMate</span>
        </Link>

        {/* Wide Home Button */}
        <Link href="/">
          <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-2.5 rounded-xl font-bold transition-all border border-slate-200 shadow-sm">
            <Home size={20} className="text-blue-600" />
            <span>Return Home</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}