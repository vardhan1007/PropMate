"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedText({ activeIndex }: { activeIndex: number }) {
  const texts = ["home.", "villa.", "apartment.", "mansion."];
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={activeIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="text-blue-400 inline-block"
      >
        {texts[activeIndex]}
      </motion.span>
    </AnimatePresence>
  );
}