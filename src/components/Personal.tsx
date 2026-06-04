"use client";

import { motion } from "framer-motion";
import { Camera, Music, BookOpen, Coffee } from "lucide-react";

export function Personal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-24 pb-48"
    >
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Beyond the Code</h2>
        <div className="h-1 w-20 bg-accent mb-12 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl bg-card border border-card-border relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity group-hover:rotate-12 duration-500">
              <Camera className="w-64 h-64 text-white" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Camera className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white">Photography</h3>
            </div>
            <p className="text-muted leading-relaxed relative z-10 text-lg">
              Capturing moments in urban environments and nature. I focus on high-contrast black and white photography, emphasizing geometric structures and shadow play.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl bg-card border border-card-border relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity group-hover:-rotate-12 duration-500">
              <BookOpen className="w-64 h-64 text-white" />
            </div>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white">Continuous Learning</h3>
            </div>
            <p className="text-muted leading-relaxed relative z-10 text-lg">
              Currently diving deep into Web3 architectures, AI agents, and systems programming. I believe in constantly pushing the boundaries of my knowledge.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
