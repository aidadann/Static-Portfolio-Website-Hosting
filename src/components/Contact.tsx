"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 noise-overlay">
      <div className="p5-panel bg-[#dfdfdf] border-[8px] border-black p-8 md:p-12 shadow-[16px_16px_0_rgba(255,0,60,1)] transform -rotate-1">
        
        {/* Ransom Note Title */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {["S", "E", "N", "D", " ", "U", "S", " ", "A", " ", "C", "A", "L", "L", "I", "N", "G", " ", "C", "A", "R", "D"].map((char, i) => {
            if (char === " ") return <div key={i} className="w-4" />;
            const isRed = i % 3 === 0;
            const isYellow = i % 5 === 0;
            const bgClass = isRed ? "bg-accent text-white" : isYellow ? "bg-secondary text-black" : "bg-black text-white";
            const fontClass = i % 2 === 0 ? "font-serif" : "font-sans";
            const rotation = i % 2 === 0 ? "rotate-3" : "-rotate-3";
            return (
              <motion.span
                key={i}
                whileHover={{ scale: 1.2, rotate: 0 }}
                className={`text-3xl md:text-5xl font-black uppercase flex items-center justify-center w-10 h-12 md:w-14 md:h-16 border-2 border-black transform ${rotation} ${bgClass} ${fontClass} shadow-[4px_4px_0_rgba(0,0,0,0.5)]`}
              >
                {char}
              </motion.span>
            );
          })}
        </div>

        <form className="space-y-8 max-w-2xl mx-auto relative z-20">
          <div className="flex flex-col">
            <label className="text-black font-black uppercase text-xl mb-2 flex gap-2">
              <span className="bg-white px-2 border-2 border-black transform -rotate-2">Name</span>
            </label>
            <input
              type="text"
              placeholder="YOUR CODENAME"
              className="w-full bg-white border-4 border-black p-4 text-xl font-black uppercase text-black placeholder:text-gray-400 focus:outline-none focus:border-accent transform rotate-1 shadow-[6px_6px_0_rgba(0,0,0,1)]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black font-black uppercase text-xl mb-2 flex gap-2">
              <span className="bg-black text-white px-2 border-2 border-black transform rotate-2">Email</span>
            </label>
            <input
              type="email"
              placeholder="HIDEOUT@METAVERSE.COM"
              className="w-full bg-white border-4 border-black p-4 text-xl font-black uppercase text-black placeholder:text-gray-400 focus:outline-none focus:border-accent transform -rotate-1 shadow-[6px_6px_0_rgba(0,0,0,1)]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black font-black uppercase text-xl mb-2 flex gap-2">
              <span className="bg-accent text-white px-2 border-2 border-black transform -rotate-1">Message</span>
            </label>
            <textarea
              rows={4}
              placeholder="WE ARE COMING FOR YOU..."
              className="w-full bg-white border-4 border-black p-4 text-xl font-black uppercase text-black placeholder:text-gray-400 focus:outline-none focus:border-accent transform rotate-2 shadow-[6px_6px_0_rgba(0,0,0,1)] resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p5-button bg-accent text-white font-black text-3xl md:text-4xl uppercase tracking-[0.2em] py-6 border-4 border-black shadow-[10px_10px_0_rgba(0,0,0,1)] flex items-center justify-center gap-4 group transition-colors hover:bg-black"
          >
            <Mail className="w-8 h-8 transform -rotate-12 group-hover:rotate-0 transition-transform" />
            <span className="transform -skew-x-12">DISPATCH</span>
            <Send className="w-8 h-8 transform rotate-12 group-hover:translate-x-4 transition-transform" />
          </motion.button>
        </form>
      </div>
    </div>
  );
}
