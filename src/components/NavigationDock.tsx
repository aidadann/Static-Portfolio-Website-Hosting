"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Gamepad2 } from "lucide-react";
import clsx from "clsx";

export function NavigationDock({
  activeTab,
  setActiveTab,
  onSecretClick,
}: {
  activeTab: "professional" | "personal";
  setActiveTab: (tab: "professional" | "personal") => void;
  onSecretClick: () => void;
}) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-50 md:-skew-x-12">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-1 md:gap-4 p-1.5 md:p-2 bg-black border-2 md:border-4 border-white shadow-[4px_4px_0_rgba(255,0,60,1)] md:shadow-[8px_8px_0_rgba(255,0,60,1)]"
      >
        <button
          onClick={() => setActiveTab("professional")}
          className={clsx(
            "relative flex items-center gap-2 px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-black uppercase tracking-widest transition-colors",
            activeTab === "professional" ? "text-white" : "text-muted hover:text-white"
          )}
        >
          {activeTab === "professional" && (
            <motion.div
              layoutId="nav-bg"
              className="absolute inset-0 bg-accent -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Briefcase className="w-5 h-5 z-10" />
          <span className="hidden md:inline z-10">Mission</span>
        </button>

        <button
          onClick={() => setActiveTab("personal")}
          className={clsx(
            "relative flex items-center gap-2 px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-black uppercase tracking-widest transition-colors",
            activeTab === "personal" ? "text-white" : "text-muted hover:text-white"
          )}
        >
          {activeTab === "personal" && (
            <motion.div
              layoutId="nav-bg"
              className="absolute inset-0 bg-accent -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <User className="w-5 h-5 z-10" />
          <span className="hidden md:inline z-10">Confidant</span>
        </button>
        
        <div className="w-0.5 md:w-1 h-6 md:h-8 bg-white mx-1 md:mx-2" />
        
        <button 
          onClick={onSecretClick}
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black hover:bg-accent transition-colors group border-2 border-transparent hover:border-white"
        >
          <Gamepad2 className="w-5 h-5 md:w-6 md:h-6 text-white transition-colors" />
        </button>
      </motion.div>
    </div>
  );
}
