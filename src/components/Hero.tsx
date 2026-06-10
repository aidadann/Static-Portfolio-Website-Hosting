"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12 noise-overlay">
      {/* Phantom Thief Red Spotlight Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,0,60,0.4)_0%,transparent_70%)] animate-pulse pointer-events-none" />

      {/* Halftone Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,60,0.15)_3px,transparent_3px)] bg-[size:12px_12px] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Profile Avatar Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-36 h-36 md:w-64 md:h-64 mb-8 md:mb-12 p5-panel bg-black border-2 md:border-4 border-white shadow-[6px_6px_0_rgba(255,0,60,1)] md:shadow-[12px_12px_0_rgba(255,0,60,1)] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent mix-blend-overlay z-10 opacity-40" />
          <Image
            src="/profile.jpg"
            alt="Aidan Andrew Daniel"
            fill
            className="object-cover grayscale contrast-125"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col items-center"
        >
          <div className="p5-panel bg-black border-2 md:border-4 border-white px-4 md:px-8 py-1 md:py-2 transform -skew-x-6 md:-skew-x-12 mb-4 md:mb-6 shadow-[4px_4px_0_rgba(255,0,60,1)] md:shadow-[8px_8px_0_rgba(255,0,60,1)]">
            <h2 className="text-sm md:text-3xl font-black text-white uppercase tracking-[0.15em] md:tracking-[0.3em]">
              Cloud Infrastructure Engineer
            </h2>
          </div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-9xl lg:text-[10rem] font-black tracking-tighter text-white mb-6 md:mb-8 leading-none uppercase italic transform -skew-x-6 md:-skew-x-12 drop-shadow-[4px_4px_0_rgba(255,0,60,1)] md:drop-shadow-[8px_8px_0_rgba(255,0,60,1)]"
          >
            <span className="p5-glitch-hover inline-block transition-transform duration-300 hover:scale-105">
              AIDAN ANDREW DANIEL
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <a
              href="https://thankful-sky-05855b100.7.azurestaticapps.net"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-5 bg-accent text-white font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-sm md:text-xl border-2 md:border-4 border-white shadow-[4px_4px_0_rgba(0,0,0,1)] md:shadow-[8px_8px_0_rgba(0,0,0,1)] transform -skew-x-6 md:-skew-x-12 hover:bg-white hover:text-black hover:shadow-[12px_12px_0_rgba(255,0,60,1)] hover:-translate-y-1 transition-all"
            >
              <FileText className="w-6 h-6 transform skew-x-12" />
              <span className="transform skew-x-12">TAKE YOUR HEART</span>
              <ArrowRight className="w-6 h-6 transform skew-x-12 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
