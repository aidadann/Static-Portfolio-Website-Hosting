"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { PersonalHero } from "@/components/PersonalHero";
import { NavigationDock } from "@/components/NavigationDock";
import { Professional } from "@/components/Professional";
import { Personal } from "@/components/Personal";
import { SecretPuzzle } from "@/components/SecretPuzzle";
import { Mancave } from "@/components/Mancave";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"professional" | "personal">("professional");
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [showMancave, setShowMancave] = useState(false);

  // Scroll to top when tab switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <main className="relative min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {showMancave ? (
          <motion.div key="mancave" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Mancave onBack={() => setShowMancave(false)} />
          </motion.div>
        ) : (
          <motion.div key="main-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AnimatePresence mode="wait">
              {activeTab === "professional" ? (
                <motion.div
                  key="prof-view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Hero />
                  <div id="work" className="relative z-10 bg-background pt-12">
                    <Professional />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="pers-view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <PersonalHero />
                  <div id="personal" className="relative z-10 bg-background pt-12">
                    <Personal />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <NavigationDock 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              onSecretClick={() => setShowPuzzle(true)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <SecretPuzzle 
        isOpen={showPuzzle} 
        onClose={() => setShowPuzzle(false)} 
        onUnlock={() => {
          setShowPuzzle(false);
          setShowMancave(true);
        }} 
      />
    </main>
  );
}
