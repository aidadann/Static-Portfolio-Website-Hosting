"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Globe, Gamepad2 } from "lucide-react";
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
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-2 p-2 rounded-full bg-card backdrop-blur-md border border-card-border shadow-2xl"
      >
        <button
          onClick={() => setActiveTab("professional")}
          className={clsx(
            "relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors",
            activeTab === "professional" ? "text-white" : "text-muted hover:text-white"
          )}
        >
          {activeTab === "professional" && (
            <motion.div
              layoutId="nav-bg"
              className="absolute inset-0 bg-accent rounded-full shadow-[0_0_15px_rgba(255,0,51,0.5)] -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Briefcase className="w-4 h-4 z-10" />
          <span className="hidden sm:inline z-10">Professional</span>
        </button>

        <button
          onClick={() => setActiveTab("personal")}
          className={clsx(
            "relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors",
            activeTab === "personal" ? "text-white" : "text-muted hover:text-white"
          )}
        >
          {activeTab === "personal" && (
            <motion.div
              layoutId="nav-bg"
              className="absolute inset-0 bg-accent rounded-full shadow-[0_0_15px_rgba(255,0,51,0.5)] -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <User className="w-4 h-4 z-10" />
          <span className="hidden sm:inline z-10">Personal</span>
        </button>
        
        <div className="w-px h-6 bg-card-border mx-2" />
        
        <button 
          onClick={onSecretClick}
          className="flex items-center justify-center w-10 h-10 rounded-full text-muted hover:text-white hover:bg-card-border transition-colors group"
        >
          <Gamepad2 className="w-4 h-4 group-hover:text-accent transition-colors" />
        </button>
      </motion.div>
    </div>
  );
}
