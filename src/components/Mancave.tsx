"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Trophy, Clock, Skull, Sword, Map, Ghost, Package, Heart, Car, Home } from "lucide-react";

interface MancaveProps {
  onBack: () => void;
}

const GAMES = [
  { id: 1, title: "Baldur's Gate 3", hours: "150 hrs", icon: Sword, desc: "Spent 100 hours in character creation, and 50 hours trying to romance a vampire." },
  { id: 2, title: "Skyrim", hours: "200 hrs", icon: Map, desc: "Modded the game until it broke, fixed it, played for 10 minutes, and went back to modding." },
  { id: 3, title: "The Witcher 3", hours: "100 hrs", icon: Skull, desc: "Ignored my adoptive daughter being hunted by a dimensional wild hunt to play a card game with merchants." },
  { id: 4, title: "Elden Ring", hours: "100 hrs", icon: Ghost, desc: "Died to the Tree Sentinel 50 times before realizing I was supposed to walk past him." },
  { id: 5, title: "FIFA Series", hours: ">5000 hrs", icon: Trophy, desc: "A toxic abusive relationship that I pay $70 for every single year." },
  { id: 6, title: "Dragon's Dogma", hours: "150 hrs", icon: Heart, desc: "Wolves hunt in packs! Also, I threw my pawn off a cliff for annoying me." },
  { id: 7, title: "Minecraft & Terraria", hours: "500 hrs", icon: Package, desc: "Spent weeks building a dirt mansion just to have it blown up by a green hissing pickle." },
  { id: 8, title: "Atlus Games", hours: "200 hrs", icon: Clock, desc: "A high school simulator where I save the world with the power of friendship and crippling anxiety." },
  { id: 9, title: "GTA Series", hours: "1000 hrs", icon: Car, desc: "Obeyed all traffic laws for exactly 3 minutes before going on a 5-star rampage." },
  { id: 10, title: "The Sims", hours: "100 hrs", icon: Home, desc: "Spent 5 hours designing a house, put my Sim in a pool, and deleted the ladder." },
];

export function Mancave({ onBack }: MancaveProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="min-h-screen bg-background text-white relative z-50 pt-12 pb-32 px-4 md:px-8 overflow-y-auto"
    >
      {/* Persona 5 Halftone Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,51,0.08)_2px,transparent_2px)] bg-[size:15px_15px] pointer-events-none z-0" />
      <div className="fixed top-0 left-0 right-0 h-96 bg-gradient-to-b from-accent/20 to-transparent pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <button
          onClick={onBack}
          className="p5-button mb-12 flex items-center gap-2 px-6 py-3 bg-white text-black font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-colors shadow-xl"
        >
          <ArrowLeft className="w-5 h-5" /> Return to Reality
        </button>

        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic drop-shadow-[4px_4px_0_rgba(255,0,51,1)]">
            Hall of <span className="text-accent drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">Fame</span>
          </h1>
          <div className="h-3 w-48 bg-white mt-4 p5-tag shadow-[4px_4px_0_rgba(255,0,51,1)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAMES.map((game, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              key={game.id}
              className="p5-panel group bg-card border-2 border-card-border p-6 hover:border-accent hover:bg-accent/5 transition-all relative overflow-hidden shadow-2xl hover:-translate-y-2 hover:translate-x-2"
            >
              <div className="absolute -right-8 -top-8 text-white/5 group-hover:text-accent/10 transition-colors">
                <game.icon className="w-48 h-48 rotate-12" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-accent transition-colors italic">{game.title}</h3>
                </div>
                <div className="inline-block px-3 py-1 bg-black border border-accent text-accent font-black text-sm uppercase tracking-widest p5-tag mb-4 shadow-[0_0_10px_rgba(255,0,51,0.3)]">
                  {game.hours}
                </div>
                <p className="text-white/80 leading-relaxed font-bold">"{game.desc}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
