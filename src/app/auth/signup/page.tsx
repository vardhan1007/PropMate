"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { 
  User, Mail, Lock, ArrowRight, Star, 
  CheckCircle2, ShieldCheck, AlertCircle, Loader2, Sparkles 
} from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();

  const colors = {
    red: "#F04770",
    orange: "#F78C6A",
    yellow: "#FFD167",
    green: "#06D7A0",
    blue: "#108AB1",
    dark: "#073A4B"
  };

  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    if (isVerified) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 1500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) return setError("Passwords do not match!");
    if (!isVerified) return setError("Please complete the human verification.");

    setLoading(true);

    try {
      // UPDATED: Now points to the correct /api subfolder to avoid build conflicts
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email.toLowerCase(),
          password: formData.password
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Redirect to sign in with success message
        router.push("/auth/signin?success=Account Created! Please sign in.");
      } else {
        setError(data.message || "Failed to create account.");
        setLoading(false);
      }
    } catch (err) {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navbar isAuthPage={true} />
      
      <div className="absolute top-[-5%] left-[-5%] w-[800px] h-[800px] rounded-full opacity-20 blur-[130px] -z-10" 
           style={{ background: `radial-gradient(circle, ${colors.yellow}, ${colors.orange})` }} />
      <div className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-15 blur-[120px] -z-10" 
           style={{ background: `radial-gradient(circle, ${colors.blue}, ${colors.green})` }} />

      <div className="flex items-center justify-center p-6 min-h-screen pt-32">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 rounded-[45px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(7,58,75,0.15)] border border-slate-100">
          
          {/* Left Panel: Branding */}
          <div className="hidden lg:flex p-20 flex-col justify-center relative overflow-hidden" 
               style={{ background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.blue} 100%)` }}>
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl opacity-30" style={{ backgroundColor: colors.orange }} />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ backgroundColor: colors.green }} />

            <div className="relative z-10 space-y-12">
              <div className="p-8 rounded-[35px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl self-start max-w-sm rotate-[-2deg]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={colors.yellow} stroke="none" />)}
                </div>
                <p className="text-white/90 font-bold italic mb-6">"Clean, modern, and incredibly fast."</p>
                <p className="text-sm font-black text-white/80 uppercase tracking-widest">Verified Platform</p>
              </div>
              <h2 className="text-5xl font-serif font-black text-white leading-tight">Your Future <br /> <span className="italic" style={{ color: colors.yellow }}>Starts Here</span></h2>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="bg-white p-10 lg:p-16 flex flex-col justify-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" 
                   style={{ backgroundColor: `${colors.green}10`, border: `1px solid ${colors.green}20` }}>
                <Sparkles size={12} style={{ color: colors.green }} />
                <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: colors.green }}>Member Access</span>
              </div>
              <h1 className="text-4xl font-serif font-black mb-2 tracking-tight" style={{ color: colors.dark }}>Create Account</h1>
              <p className="text-slate-500 font-medium text-sm">Join the PropMate community today</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && (
                <div className="p-4 rounded-2xl flex items-center gap-3 text-sm font-bold border animate-shake" 
                     style={{ backgroundColor: `${colors.red}10`, borderColor: `${colors.red}20`, color: colors.red }}>
                  <AlertCircle size={18} /> {error}
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#108AB1] transition-colors" size={16} />
                  <input 
                    type="text" required placeholder="John Doe" value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white outline-none text-sm font-semibold focus:ring-4 focus:ring-[#108AB1]/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#108AB1] transition-colors" size={16} />
                  <input 
                    type="email" required placeholder="you@example.com" value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white outline-none text-sm font-semibold focus:ring-4 focus:ring-[#108AB1]/10 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#108AB1] transition-colors" size={16} />
                    <input 
                      type="password" required placeholder="••••••••" value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white outline-none text-sm font-semibold focus:ring-4 focus:ring-[#108AB1]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Confirm</label>
                  <div className="relative group">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#108AB1] transition-colors" size={16} />
                    <input 
                      type="password" required placeholder="••••••••" value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white outline-none text-sm font-semibold focus:ring-4 focus:ring-[#108AB1]/10 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Human Verification Box */}
              <div onClick={handleVerify} className={`p-4 rounded-2xl border transition-all duration-500 flex items-center justify-between cursor-pointer relative ${isVerified ? 'bg-green-50/50 border-green-200' : 'bg-blue-50/50 border-blue-100'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${isVerified ? 'bg-[#06D7A0] border-[#06D7A0]' : 'bg-white border-blue-200'}`} style={isVerified ? { backgroundColor: colors.green, borderColor: colors.green } : {}}>
                    {isVerifying ? <Loader2 size={12} className="animate-spin text-blue-500" /> : isVerified ? <CheckCircle2 size={14} className="text-white" /> : null}
                  </div>
                  <span className={`text-xs font-bold ${isVerified ? 'text-green-700' : 'text-slate-600'}`}>
                    {isVerifying ? "Verifying..." : isVerified ? "Identity Verified" : "Secure Verification"}
                  </span>
                </div>
                <ShieldCheck size={20} style={{ color: isVerified ? colors.green : colors.blue }} className={!isVerified ? 'opacity-50' : ''} />
              </div>

              <button disabled={loading} className="group relative w-full py-5 rounded-2xl overflow-hidden shadow-xl transition-all hover:scale-[1.01] active:scale-95 disabled:grayscale" style={{ backgroundColor: colors.blue, boxShadow: `0 15px 30px -10px ${colors.blue}60` }}>
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-black uppercase tracking-widest text-sm">
                  {loading ? <Loader2 className="animate-spin" /> : "Create Account"}
                  {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                </span>
              </button>
            </form>

            <p className="mt-8 text-center text-sm font-semibold text-slate-500">
              Already have an account? <Link href="/auth/signin" className="font-black hover:underline" style={{ color: colors.blue }}>Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}