"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X } from "lucide-react";

interface SecretPuzzleProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlock: () => void;
}

export function SecretPuzzle({ isOpen, onClose, onUnlock }: SecretPuzzleProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  // Reset code every time the puzzle opens
  useEffect(() => {
    if (isOpen) {
      setCode("");
      setError(false);
    }
  }, [isOpen]);

  const handleInput = (num: string) => {
    if (code.length < 3) {
      setCode(code + num);
    }
  };

  const handleSubmit = () => {
    if (code.length !== 3) return;
    if (code === "404") {
      setTimeout(() => onUnlock(), 500);
    } else {
      setError(true);
      setTimeout(() => {
        setCode("");
        setError(false);
      }, 800);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
        >
          <div className="absolute top-8 right-8 z-50">
            <button onClick={onClose} className="p-2 text-muted hover:text-white transition-colors p5-button bg-card border border-card-border hover:border-accent">
              <X className="w-6 h-6" />
            </button>
          </div>

          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 1.1, opacity: 0 }}
            className="p5-panel bg-card border-2 border-accent p-8 md:p-12 max-w-sm w-full mx-4 flex flex-col items-center relative shadow-[0_0_50px_rgba(255,0,51,0.3)]"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(255,0,51,0.5)_1px,transparent_1px)] bg-[size:10px_10px]" />
            
            <motion.div 
              animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
              className="relative z-10 flex flex-col items-center"
            >
              <Lock className={`w-12 h-12 mb-6 ${error ? 'text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]' : 'text-accent drop-shadow-[0_0_10px_rgba(255,0,51,0.8)]'}`} />
              <h2 className="text-2xl font-black text-white mb-2 tracking-widest uppercase">Restricted Area</h2>
              <p className="text-muted text-sm mb-8 text-center font-bold">Hint: HTTP Status Code for &quot;Not Found&quot;</p>

              <div className="flex gap-4 mb-8">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`w-14 h-16 flex items-center justify-center text-3xl font-black rounded border-2 ${error ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-card-border text-white bg-black'} p5-tag shadow-inner`}>
                    {code[i] || "_"}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 w-full">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, "OK"].map((btn) => (
                  <button
                    key={btn}
                    onClick={() => {
                      if (btn === "C") {
                        setCode("");
                        setError(false);
                      } else if (btn === "OK") {
                        handleSubmit();
                      } else {
                        handleInput(btn.toString());
                      }
                    }}
                    className={`h-12 p5-button font-black text-lg transition-colors ${
                      btn === "C" 
                        ? 'bg-card-border text-muted hover:bg-white hover:text-black' 
                        : btn === "OK" 
                          ? code.length === 3 
                            ? 'bg-accent text-white hover:bg-white hover:text-black cursor-pointer' 
                            : 'bg-accent/30 text-white/40 cursor-not-allowed' 
                          : 'bg-black text-white border border-card-border hover:border-accent hover:text-accent hover:bg-accent/10'
                    }`}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
