"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { signIn } from "next-auth/react";
import { Mail, Lock, ArrowRight, AlertCircle, Loader2, Star, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

function SignInContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [isLoading, setIsLoading] = useState(false);

  const successMsg = searchParams.get("success");

  const colors = {
    red: "#F04770",
    orange: "#F78C6A",
    yellow: "#FFD167",
    green: "#06D7A0",
    blue: "#108AB1",
    dark: "#073A4B"
  };

  const handleSignIn = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  const result = await signIn("credentials", {
    redirect: false, // This prevents the automatic 404 redirect
    email,
    password,
  });

  if (result?.error) {
    setError(result.error);
    setIsLoading(false);
  } else {
    // Success! Now we tell it exactly where to go
    router.push("/"); 
    router.refresh(); 
  }
};

  return (
    <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 rounded-[45px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(7,58,75,0.15)] border border-slate-100">
      
      {/* Left Panel: Form Section */}
      <div className="bg-white p-12 lg:p-20 flex flex-col justify-center">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" 
               style={{ backgroundColor: `${colors.blue}10`, border: `1px solid ${colors.blue}20` }}>
            <Sparkles size={12} style={{ color: colors.blue }} />
            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: colors.blue }}>Secure Access</span>
          </div>
          <h1 className="text-4xl font-serif font-black mb-2 tracking-tight" style={{ color: colors.dark }}>Welcome Back</h1>
          <p className="text-slate-500 font-medium">Sign in to manage your premium assets</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          {successMsg && !error && (
            <div className="p-4 rounded-2xl flex items-center gap-3 text-sm font-bold border animate-in fade-in" 
                 style={{ backgroundColor: `${colors.green}10`, borderColor: `${colors.green}20`, color: colors.green }}>
              <CheckCircle2 size={18} />
              {successMsg}
            </div>
          )}

          {error && (
            <div className="p-4 rounded-2xl flex items-center gap-3 text-sm font-bold border animate-shake" 
                 style={{ backgroundColor: `${colors.red}10`, borderColor: `${colors.red}20`, color: colors.red }}>
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-slate-400">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 transition-colors text-slate-300 group-focus-within:text-[#108AB1]" size={18} />
              <input 
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white transition-all outline-none font-semibold focus:ring-4 focus:ring-[#108AB1]/10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Password</label>
              <button type="button" className="text-[10px] font-black uppercase tracking-widest hover:underline" style={{ color: colors.orange }}>Forgot?</button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 transition-colors text-slate-300 group-focus-within:text-[#108AB1]" size={18} />
              <input 
                type="password" required value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white transition-all outline-none font-semibold focus:ring-4 focus:ring-[#108AB1]/10"
              />
            </div>
          </div>

          <button 
            disabled={isLoading}
            className="group relative w-full py-5 rounded-2xl overflow-hidden shadow-xl transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-70"
            style={{ backgroundColor: colors.blue, boxShadow: `0 15px 30px -10px ${colors.blue}60` }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-white font-black uppercase tracking-widest text-sm">
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : "Sign In"}
              {!isLoading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </span>
          </button>
        </form>

        <p className="mt-10 text-center text-sm font-semibold text-slate-500">
          Don't have an account? <Link href="/auth/signup" className="hover:underline font-black" style={{ color: colors.blue }}>Sign up</Link>
        </p>
      </div>

      {/* Right Panel: Showcase */}
      <div className="hidden lg:flex p-20 flex-col justify-center relative overflow-hidden" 
           style={{ background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.blue} 100%)` }}>
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full blur-3xl opacity-30" style={{ backgroundColor: colors.orange }} />
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ backgroundColor: colors.green }} />

          <div className="relative z-10 space-y-12">
            <div className="p-8 rounded-[35px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl self-start max-w-sm">
               <div className="flex gap-1 mb-4">
                 {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={colors.yellow} stroke="none" />)}
               </div>
               <p className="text-white/90 font-bold italic mb-6">"Fast, secure, and beautiful."</p>
               <div className="flex items-center gap-2">
                 <ShieldCheck size={16} style={{ color: colors.green }} />
                 <p className="text-sm font-black text-white/80 uppercase tracking-widest">Verified Platform</p>
               </div>
            </div>
            <h2 className="text-5xl font-serif font-black text-white leading-tight">
              Join PropMate <br /> <span className="italic" style={{ color: colors.yellow }}>Today</span>
            </h2>
          </div>
      </div>
    </div>
  );
}

export default function SignInPage() {
  const colors = {
    orange: "#F78C6A",
    yellow: "#FFD167",
    green: "#06D7A0",
    blue: "#108AB1",
  };

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navbar isAuthPage={true} />
      
      <div className="absolute top-[-5%] right-[-5%] w-[800px] h-[800px] rounded-full opacity-20 blur-[130px] -z-10" 
           style={{ background: `radial-gradient(circle, ${colors.yellow}, ${colors.orange})` }} />
      <div className="absolute bottom-[-5%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-15 blur-[120px] -z-10" 
           style={{ background: `radial-gradient(circle, ${colors.blue}, ${colors.green})` }} />

      <div className="flex items-center justify-center p-6 min-h-screen pt-32">
        <Suspense fallback={<Loader2 className="animate-spin" />}>
          <SignInContent />
        </Suspense>
      </div>
    </main>
  );
}