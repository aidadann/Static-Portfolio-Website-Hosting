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
    <div className="fixed bottom-8 left-12 z-50 transform -skew-x-12">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-4 p-2 bg-black border-4 border-white shadow-[8px_8px_0_rgba(255,0,60,1)]"
      >
        <button
          onClick={() => setActiveTab("professional")}
          className={clsx(
            "relative flex items-center gap-2 px-6 py-3 text-lg font-black uppercase tracking-widest transition-colors",
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
          <span className="z-10">Mission</span>
        </button>

        <button
          onClick={() => setActiveTab("personal")}
          className={clsx(
            "relative flex items-center gap-2 px-6 py-3 text-lg font-black uppercase tracking-widest transition-colors",
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
          <span className="z-10">Confidant</span>
        </button>
        
        <div className="w-1 h-8 bg-white mx-2" />
        
        <button 
          onClick={onSecretClick}
          className="flex items-center justify-center w-12 h-12 bg-black hover:bg-accent transition-colors group border-2 border-transparent hover:border-white"
        >
          <Gamepad2 className="w-6 h-6 text-white transition-colors" />
        </button>
      </motion.div>
    </div>
  );
}
