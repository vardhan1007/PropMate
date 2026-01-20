"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 0, text: "homes.", image: "properties/home.jpg" },
  { id: 1, text: "villas.", image: "properties/vill.jpg" },
  { id: 3, text: "apartments.", image: "properties/apartment.jpg" },
  { id: 6, text: "mansion.", image: "properties/mansionhouse.jpg" },
  { id: 7, text: "properties.", image: "properties/collage.jpg" }
];

export default function HeroSlideshow({ activeIndex }: { activeIndex: number }) {
  // SAFETY FIX: This ensures the index always stays between 0 and 4
  const safeIndex = activeIndex % slides.length;
  const currentSlide = slides[safeIndex];

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      <AnimatePresence mode="popLayout" initial={false}>
        {/* Use safeIndex as the key to trigger animations correctly */}
        <motion.div 
          key={safeIndex} 
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.95 }} 
          transition={{ duration: 2.5, ease: [0.19, 1, 0.22, 1] }} 
          className="absolute inset-0"
        >
          <img src={currentSlide.image} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center text-white px-8 pt-40">
        <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.8em] mb-8 block">
          LATEST COLLECTION
        </span>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[1.05]">
          Find your dream <br />
          <div className="h-[1.4em] relative overflow-hidden flex justify-center items-center mt-2">
            <AnimatePresence mode="popLayout">
              <motion.span 
                key={safeIndex} 
                initial={{ y: "100%", opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                exit={{ y: "-100%", opacity: 0 }} 
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} 
                className="text-blue-500 font-serif italic absolute py-1"
              >
                {currentSlide.text}
              </motion.span>
            </AnimatePresence>
          </div>
        </h1>

        <div className="mt-12 flex items-center justify-center gap-6">
          <div className="font-black text-2xl w-12 text-blue-400 font-mono">
            0{safeIndex + 1}
          </div>
          <div className="flex gap-3 p-1.5 rounded-full bg-white/5 border border-white/10">
            {slides.map((_, i) => (
              <div key={i} className="relative h-2.5 overflow-hidden rounded-full transition-all">
                <motion.div 
                  animate={{ 
                    width: i === safeIndex ? 60 : 16, 
                    backgroundColor: i === safeIndex ? "#3B82F6" : "rgba(255,255,255,0.2)" 
                  }} 
                  transition={{ type: "spring", stiffness: 100 }} 
                  className="h-full rounded-full" 
                />
                {i === safeIndex && (
                  <motion.div 
                    className="absolute inset-0 bg-white/40" 
                    initial={{ x: "-100%" }} 
                    animate={{ x: "0%" }} 
                    transition={{ duration: 4, ease: "linear" }} 
                  />
                )}
              </div>
            ))}
          </div>
          <div className="font-bold text-xs opacity-30">/ 0{slides.length}</div>
        </div>
      </div>
    </div>
  );
}