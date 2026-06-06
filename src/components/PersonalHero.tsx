"use client";

import { motion } from "framer-motion";
import { Smile } from "lucide-react";

export function PersonalHero() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-12 overflow-hidden noise-overlay">
      {/* Phantom Thief Yellow/Red Spotlight Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,0,0.2)_0%,transparent_70%)] animate-pulse pointer-events-none" />
      
      {/* Halftone Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,0,0.15)_3px,transparent_3px)] bg-[size:12px_12px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 12 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="w-32 h-32 bg-[var(--color-secondary)] border-4 border-black p5-panel flex items-center justify-center mb-12 shadow-[12px_12px_0_rgba(255,0,60,1)]"
        >
          <Smile className="w-16 h-16 text-black" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex flex-col items-center"
        >
          <div className="p5-panel bg-black border-4 border-white px-8 py-2 transform -skew-x-12 mb-6 shadow-[8px_8px_0_rgba(255,255,0,1)]">
            <h2 className="text-xl md:text-3xl font-black text-[var(--color-secondary)] uppercase tracking-[0.3em]">
              The Confidant
            </h2>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-6 leading-none uppercase italic transform -skew-x-12 drop-shadow-[8px_8px_0_rgba(255,0,60,1)]"
          >
            <span className="p5-glitch-hover inline-block">OTHER SIDE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white bg-black p-4 border-l-4 border-accent max-w-2xl leading-relaxed font-bold tracking-widest uppercase transform skew-x-6 shadow-[4px_4px_0_rgba(255,0,60,1)]"
          >
            "Take your time." The phantom thief's journey outside the metaverse.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
