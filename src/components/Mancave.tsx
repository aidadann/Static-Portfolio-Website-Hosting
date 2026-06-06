"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Trophy, Clock, Skull, Sword, Map, Ghost, Package, Heart, Car, Home } from "lucide-react";
import Image from "next/image";

interface MancaveProps {
  onBack: () => void;
}

// Map games to their placeholder background image paths
const GAMES = [
  { id: 1, title: "Baldur's Gate 3", hours: "150 hrs", icon: Sword, desc: "Spent 100 hours in character creation, and 50 hours trying to romance a vampire.", img: "/bg3.jpg" },
  { id: 2, title: "Skyrim", hours: "200 hrs", icon: Map, desc: "Modded the game until it broke, fixed it, played for 10 minutes, and went back to modding.", img: "/skyrim.jpg" },
  { id: 3, title: "The Witcher 3", hours: "100 hrs", icon: Skull, desc: "Ignored my adoptive daughter being hunted by a dimensional wild hunt to play a card game with merchants.", img: "/witcher3.jpg" },
  { id: 4, title: "Elden Ring", hours: "100 hrs", icon: Ghost, desc: "Died to the Tree Sentinel 50 times before realizing I was supposed to walk past him.", img: "/eldenring.jpg" },
  { id: 5, title: "FIFA Series", hours: ">5000 hrs", icon: Trophy, desc: "A toxic abusive relationship that I pay $70 for every single year.", img: "/fifa.jpg" },
  { id: 6, title: "Dragon's Dogma", hours: "150 hrs", icon: Heart, desc: "Wolves hunt in packs! Also, I threw my pawn off a cliff for annoying me.", img: "/dragonsdogma.jpg" },
  { id: 7, title: "Minecraft & Terraria", hours: "500 hrs", icon: Package, desc: "Spent weeks building a dirt mansion just to have it blown up by a green hissing pickle, then switched to 2D to get murdered by a giant floating eyeball.", img: "/minecraft.jpg" },
  { id: 8, title: "Atlus Games", hours: "200 hrs", icon: Clock, desc: "A high school simulator where I save the world with the power of friendship and crippling anxiety... plus a fantasy road trip featuring a talking fairy and intense political assassinations.", img: "/persona.jpg" },
  { id: 9, title: "GTA Series", hours: "1000 hrs", icon: Car, desc: "Obeyed all traffic laws for exactly 3 minutes before going on a 5-star rampage.", img: "/gta.jpg" },
  { id: 10, title: "The Sims", hours: "100 hrs", icon: Home, desc: "Spent 5 hours designing a house, put my Sim in a pool, and deleted the ladder.", img: "/sims.jpg" },
];

export function Mancave({ onBack }: MancaveProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="min-h-screen bg-background text-white relative z-50 pt-8 pb-32 px-4 md:px-8 overflow-y-auto"
    >
      {/* Persona 5 Halftone Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,51,0.08)_2px,transparent_2px)] bg-[size:15px_15px] pointer-events-none z-0" />
      <div className="fixed top-0 left-0 right-0 h-96 bg-gradient-to-b from-accent/20 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="w-full flex justify-start mb-8">
          <button
            onClick={onBack}
            className="p5-button flex items-center gap-2 px-6 py-3 bg-white text-black font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-colors shadow-[6px_6px_0_rgba(255,0,51,1)]"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
        </div>

        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <div className="p5-panel bg-black border-[3px] border-white px-12 py-4 shadow-[8px_8px_0_rgba(255,0,51,1)] transform -rotate-2">
            <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white uppercase drop-shadow-[2px_2px_0_rgba(255,0,51,1)]">
              THIEVES DEN
            </h1>
          </div>
          <div className="p5-tag bg-white text-black px-6 py-1 mt-4 text-xl font-black tracking-[0.2em] transform rotate-1 shadow-[4px_4px_0_rgba(255,0,51,1)]">
            AWARDS GALLERY
          </div>
        </motion.div>

        {/* Centered Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-4 justify-items-center max-w-6xl w-full">
          {GAMES.map((game, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              key={game.id}
              className="group relative w-full aspect-[3/4] p5-panel bg-card border-[3px] border-white overflow-hidden cursor-pointer shadow-[6px_6px_0_rgba(0,0,0,0.8)] hover:shadow-[10px_10px_0_rgba(255,0,51,1)] hover:-translate-y-2 hover:-rotate-2 transition-all duration-300 flex flex-col"
            >
              {/* Normal State: Polaroid Style Plaque */}
              <div className="absolute inset-0 bg-black flex flex-col p-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                <div className="w-full h-2/3 bg-card-border/20 border-2 border-white/20 flex items-center justify-center p5-panel relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_2px,transparent_2px)] bg-[size:10px_10px]" />
                  <game.icon className="w-16 h-16 text-white/50 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                </div>
                <div className="flex-1 flex items-center justify-center text-center p-2">
                  <h3 className="text-lg font-black uppercase text-white tracking-widest leading-tight">{game.title}</h3>
                </div>
              </div>

              {/* Hover State: Game Background & Pop-up Info */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image src={game.img} alt={game.title} fill className="object-cover opacity-50 mix-blend-luminosity" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent" />
                </div>
                
                {/* Overlay Text Content */}
                <div className="absolute inset-0 p-3 flex flex-col justify-between z-20">
                  <div className="bg-white p5-tag px-2 py-1 border-2 border-black self-start transform -rotate-3 shadow-[2px_2px_0_rgba(0,0,0,1)]">
                    <p className="font-black text-xs text-black uppercase tracking-wider">{game.hours}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="bg-black p5-panel p-2 border-2 border-white transform rotate-2 shadow-[4px_4px_0_rgba(255,0,51,1)]">
                      <h3 className="text-sm font-black uppercase text-white leading-tight">{game.title}</h3>
                    </div>
                    <div className="bg-white text-black p5-panel p-2 border-2 border-black transform -rotate-1 shadow-[4px_4px_0_rgba(0,0,0,1)]">
                      <p className="font-bold text-[10px] uppercase leading-tight italic">"{game.desc}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
