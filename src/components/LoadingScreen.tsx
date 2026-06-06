"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const IMAGES_TO_PRELOAD = [
  "/athletics.jpg", 
  "/gaming.jpg",
  "/traveling.jpg",
];

export function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const total = IMAGES_TO_PRELOAD.length;

    if (total === 0) {
      setTimeout(() => setIsReady(true), 1500);
      return;
    }

    IMAGES_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === total) setTimeout(() => setIsReady(true), 1500);
      };
      img.onerror = () => {
        loaded++;
        if (loaded === total) setTimeout(() => setIsReady(true), 1500);
      }
    });
  }, []);

  useEffect(() => {
    if (isReady) {
      setIsExiting(true);
      setTimeout(onLoadComplete, 800);
    }
  }, [isReady, onLoadComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="loader"
          exit={{ 
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-accent flex flex-col items-center justify-center overflow-hidden"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          {/* Halftone background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.15)_3px,transparent_3px)] bg-[size:12px_12px]" />
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="relative z-10"
          >
            <Star className="w-24 h-24 text-black fill-black" />
            <Star className="w-24 h-24 text-white fill-transparent absolute inset-0 -translate-x-1 translate-y-1" />
          </motion.div>
          
          <motion.div 
            className="mt-8 relative z-10 p5-panel bg-black px-8 py-3 shadow-[8px_8px_0_rgba(255,255,255,1)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white text-3xl font-black uppercase tracking-widest flex items-center gap-2">
              Take Your Time <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>...</motion.span>
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
