"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
// 1. Correct Import for Auth Hooks
import { useSession, signOut } from "next-auth/react";

export default function Navbar({ activeIndex, isAuthPage = false }: { activeIndex?: number; isAuthPage?: boolean }) {
  // 2. FIXED: Session hook must be INSIDE the component function
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "COMMERCIAL", path: "/properties/commercial", sub: ["Retail", "Office", "Industrial"] },
    { name: "RESIDENTIAL", path: "/properties/residential", sub: ["Villas", "Apartments", "Houses"] },
    { name: "INVESTMENT", path: "/properties/investment", sub: ["Funds", "Land"] },
    { name: "MIXED-USE", path: "/properties/mixed-use", sub: ["Complexes"] }, 
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] mt-4 px-8">
      <div 
        className={`max-w-[1750px] mx-auto px-10 grid grid-cols-[1.5fr_5fr_1.2fr] items-center transition-all duration-500 rounded-xl border shadow-2xl ${
          isAuthPage 
            ? "bg-white/90 backdrop-blur-md border-slate-200 py-2" // Auth/Light Theme
            : `bg-slate-950 border-slate-800 ${isScrolled ? "py-1" : "py-2"}` // Standard Dark Theme
        }`}
      >
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/20">P</div>
          <span 
            className={`text-xl font-black tracking-tighter uppercase font-sans transition-colors duration-300 ${
              isAuthPage ? "text-[#073A4B]" : "text-white"
            }`}
          >
            PROPMATE
          </span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="flex justify-center items-center h-full gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="group relative h-full flex items-center">
              <button 
                className={`text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-1.5 py-6 transition-colors ${
                  isAuthPage 
                    ? "text-[#073A4B]/70 group-hover:text-[#108AB1]" 
                    : "text-white/80 group-hover:text-blue-500"
                }`}
              >
                {item.name} 
                <ChevronDown size={12} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[110]">
                <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
                <div 
                  className={`border shadow-2xl rounded-xl overflow-hidden p-1 ${
                    isAuthPage ? "bg-white border-slate-100" : "bg-slate-900 border-slate-800"
                  }`}
                >
                  {item.sub.map((sub) => (
                    <Link 
                      key={sub} 
                      href={`/properties/${sub.toLowerCase()}`} 
                      className={`block px-4 py-3 text-[9px] font-black transition-all rounded-lg uppercase tracking-widest ${
                        isAuthPage 
                          ? "text-[#073A4B]/60 hover:bg-[#108AB1]/10 hover:text-[#108AB1]" 
                          : "text-white/60 hover:bg-blue-600 hover:text-white"
                      }`}
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ACTION BUTTON (Dynamic State) */}
        <div className="flex justify-end">
          {session ? (
            <div className="flex items-center gap-5">
              <div className="text-right">
                <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest leading-none">Welcome</p>
                <p className={`text-xs font-bold mt-1 ${isAuthPage ? 'text-[#073A4B]' : 'text-white'}`}>
                  {session.user?.name?.split(' ')[0]}
                </p>
              </div>
              <button 
                onClick={() => signOut()}
                className="px-5 py-2 bg-red-500/10 border border-red-500/20 text-red-500 font-black text-[9px] uppercase tracking-widest rounded-lg hover:bg-red-500 hover:text-white transition-all active:scale-95"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link 
              href="/auth/signin" 
              className={`px-6 py-2 font-black text-[10px] uppercase tracking-widest rounded-lg shadow-lg transition-all active:scale-95 ${
                isAuthPage 
                  ? "bg-[#073A4B] text-white hover:bg-[#108AB1]" 
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
            >
              SIGN IN
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}