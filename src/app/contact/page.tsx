"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Sparkles 
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />
      
      {/* Background Mesh Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50/60 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-50/50 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-8 pt-48 pb-24 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={16} className="text-blue-600 animate-pulse" />
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">Get In Touch</span>
          </div>
          <h1 className="text-6xl font-serif font-black text-slate-900 tracking-tighter mb-6">
            Contact <span className="text-blue-600 italic">Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg font-medium">
            Have questions about finding your dream home? We're here to help. Reach out and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel: Contact Info */}
          <div className="lg:col-span-1 p-10 rounded-[40px] bg-white/60 backdrop-blur-xl border border-white shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 space-y-10">
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Let's Talk</h3>
                <p className="text-slate-500 text-sm font-semibold">We'd love to hear from you</p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <MapPin />, label: "Visit Us", val: "123 Innovation Drive, Tech City, TC 10001" },
                  { icon: <Phone />, label: "Call Us", val: "+1 (555) 123-4567" },
                  { icon: <Mail />, label: "Email Us", val: "hello@propmate.com" },
                  { icon: <Clock />, label: "Working Hours", val: "Mon - Fri: 9AM - 6PM" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-slate-900 font-bold text-sm">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="lg:col-span-2 p-10 rounded-[40px] bg-white/80 backdrop-blur-2xl border-2 border-white shadow-2xl relative">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Send a Message</h3>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", placeholder: "John Doe" },
                { label: "Email Address", placeholder: "you@example.com" },
                { label: "Phone Number", placeholder: "+1 (555) 000-0000" },
                { label: "Subject", placeholder: "How can we help?" }
              ].map((input, idx) => (
                <div key={idx} className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">{input.label}</label>
                  <input 
                    type="text" 
                    placeholder={input.placeholder}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all outline-none text-slate-900 font-semibold placeholder:text-slate-300"
                  />
                </div>
              ))}
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-6 py-4 rounded-3xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all outline-none text-slate-900 font-semibold placeholder:text-slate-300 resize-none"
                />
              </div>
              
              <button className="md:col-span-2 group relative w-full py-5 bg-blue-600 rounded-3xl overflow-hidden shadow-xl shadow-blue-200 transition-all hover:scale-[1.02] active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-black uppercase tracking-[0.2em] text-sm">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}