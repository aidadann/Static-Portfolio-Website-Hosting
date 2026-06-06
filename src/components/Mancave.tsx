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
      className="min-h-screen bg-background text-white relative z-50 pt-12 pb-32 px-4 md:px-8 overflow-y-auto"
    >
      {/* Persona 5 Halftone Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,51,0.08)_2px,transparent_2px)] bg-[size:15px_15px] pointer-events-none z-0" />
      <div className="fixed top-0 left-0 right-0 h-96 bg-gradient-to-b from-accent/20 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <button
          onClick={onBack}
          className="p5-button mb-12 flex items-center gap-2 px-6 py-3 bg-white text-black font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-colors shadow-[6px_6px_0_rgba(255,0,51,1)]"
        >
          <ArrowLeft className="w-5 h-5" /> Return to Reality
        </button>

        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16 -skew-x-6"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase drop-shadow-[6px_6px_0_rgba(255,0,51,1)]">
            Thieves Den <span className="text-accent drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">Awards</span>
          </h1>
          <div className="h-3 w-48 bg-white mt-4 p5-tag shadow-[4px_4px_0_rgba(255,0,51,1)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {GAMES.map((game, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              key={game.id}
              className="group relative h-72 w-full p5-panel bg-card border-[3px] border-card-border overflow-hidden cursor-pointer shadow-[8px_8px_0_rgba(255,0,51,0.5)] hover:shadow-[12px_12px_0_rgba(255,0,51,1)] hover:-translate-y-2 transition-all duration-300"
            >
              {/* Normal State: Monochromatic Award Plaque */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                <game.icon className="w-24 h-24 text-card-border mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                <h3 className="text-2xl font-black uppercase text-card-border tracking-widest">{game.title}</h3>
              </div>

              {/* Hover State: Game Background & Info */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {/* Background Image (User uploads these to public/) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent to-black">
                  <Image src={game.img} alt={game.title} fill className="object-cover mix-blend-overlay opacity-60" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
                
                {/* Pop-up Info */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                  <div className="bg-black p5-panel p-3 border-2 border-white inline-block w-fit -skew-x-6 transform shadow-[4px_4px_0_rgba(255,0,51,1)]">
                    <h3 className="text-xl font-black uppercase text-white">{game.title}</h3>
                  </div>

                  <div className="bg-white p5-panel p-3 border-2 border-accent text-black self-end -skew-x-6 shadow-[-4px_4px_0_rgba(255,0,51,1)]">
                    <p className="font-black text-lg uppercase">{game.hours}</p>
                  </div>

                  <div className="bg-accent/90 backdrop-blur-sm p-4 border-l-4 border-white">
                    <p className="text-white font-bold leading-tight italic">"{game.desc}"</p>
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
