"use client";

import { X, Apple, PlayCircle, Smartphone } from "lucide-react";

export default function AppInstallModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Glassy Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Card */}
      <div className="relative bg-white rounded-[40px] shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors">
          <X size={24} className="text-slate-400" />
        </button>

        <div className="p-10 text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-100">
            <span className="text-white font-black text-4xl">P</span>
          </div>

          <h2 className="text-3xl font-black text-slate-900 mb-2">Install PropMate App</h2>
          <p className="text-slate-500 font-medium mb-8">Take your real estate search everywhere. Fast, secure, and AI-powered.</p>

          <div className="grid grid-cols-1 gap-4">
            {/* App Store Button */}
            <button className="flex items-center justify-center gap-4 bg-slate-900 hover:bg-slate-800 text-white p-5 rounded-2xl transition-all active:scale-95 group">
              <Apple size={28} />
              <div className="text-left">
                <p className="text-[10px] font-bold opacity-60 uppercase leading-tight">Download on the</p>
                <p className="text-xl font-bold leading-tight">App Store</p>
              </div>
            </button>

            {/* Play Store Button */}
            <button className="flex items-center justify-center gap-4 border-2 border-slate-100 hover:border-blue-200 hover:bg-slate-50 text-slate-900 p-5 rounded-2xl transition-all active:scale-95">
              <PlayCircle size={28} className="text-blue-600" />
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-tight">Get it on</p>
                <p className="text-xl font-bold leading-tight tracking-tight">Google Play</p>
              </div>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
            <Smartphone size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Available for iOS & Android</span>
          </div>
        </div>
      </div>
    </div>
  );
}