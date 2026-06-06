"use client";

import { motion } from "framer-motion";
import { Smile } from "lucide-react";

export function PersonalHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-4 overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[20%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 12 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="w-24 h-24 bg-accent border-[4px] border-white p5-panel flex items-center justify-center mb-8 shadow-[8px_8px_0_rgba(255,0,51,0.5)]"
        >
          <Smile className="w-10 h-10 text-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none uppercase italic -skew-x-6 drop-shadow-[6px_6px_0_rgba(255,0,51,1)]"
        >
          Welcome to the <br />
          <span className="text-white drop-shadow-[4px_4px_0_rgba(255,255,255,0.3)]">
            Other Side
          </span> of the server.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          No Terraform state files or routing protocols here. Just a collection of things I do when I'm not staring at a terminal. Grab a coffee and stay a while!
        </motion.p>
      </div>
    </section>
  );
}
