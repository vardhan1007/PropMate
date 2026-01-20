"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import PropertyGrid from "@/components/PropertyGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 8;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      <Navbar activeIndex={activeIndex} />

      {/* Hero Section receives activeIndex to control the background loop */}
      <section className="relative">
        <HeroSlideshow activeIndex={activeIndex} />
      </section>

      <section className="max-w-[1750px] mx-auto px-8 py-24 md:py-32">
        <div className="mb-16">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">
            Investment Opportunities
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter uppercase">
            Featured <br /> Properties
          </h2>
        </div>
        <PropertyGrid />
      </section>

      {/* The CTA Section contains the "Explore the Collection" button pointing to /properties */}
      <CTASection />

      <Footer />
    </main>
  );
}