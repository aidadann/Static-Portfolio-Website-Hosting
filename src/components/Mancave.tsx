"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Trophy, Clock, Skull, Sword, Map, Ghost, Package, Heart, Car, Home } from "lucide-react";
import Image from "next/image";

interface MancaveProps {
  onBack: () => void;
}

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
      className="min-h-screen bg-[#1a1a1a] text-white relative z-50 pt-8 pb-32 px-4 md:px-8 overflow-y-auto noise-overlay"
    >
      {/* Charcoal/Slate Textured Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_2px,transparent_2px)] bg-[size:20px_20px] pointer-events-none z-0" />
      <div className="fixed top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#D4AF37]/10 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="w-full flex justify-start mb-8">
          <button
            onClick={onBack}
            className="p5-button flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-[6px_6px_0_rgba(0,0,0,1)]"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
        </div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-24 text-center flex flex-col items-center"
        >
          <div className="p5-panel bg-black border-2 md:border-[4px] border-[#D4AF37] px-6 py-3 md:px-16 md:py-6 shadow-[6px_6px_0_rgba(212,175,55,0.4)] md:shadow-[12px_12px_0_rgba(212,175,55,0.4)] transform -skew-x-6 md:-skew-x-12">
            <h1 className="text-3xl md:text-8xl font-black tracking-widest text-[#D4AF37] uppercase drop-shadow-[2px_2px_0_rgba(0,0,0,1)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
              HALL OF FAME
            </h1>
          </div>
          <div className="p5-tag bg-white text-black px-4 py-1 md:px-8 md:py-2 mt-4 md:mt-6 text-sm md:text-2xl font-black tracking-[0.2em] md:tracking-[0.3em] shadow-[3px_3px_0_rgba(0,0,0,1)] md:shadow-[6px_6px_0_rgba(0,0,0,1)]">
            GAMES GALLERY
          </div>
        </motion.div>

        {/* Diamond Trophy Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-12 p-2 md:p-4 justify-items-center relative z-10 max-w-6xl">
          {GAMES.map((game, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              key={game.id}
              className="group relative w-32 h-32 md:w-48 md:h-48 cursor-crosshair"
            >
              {/* Diamond Container */}
              <div className="absolute inset-0 bg-black border-2 md:border-4 border-[#D4AF37] shadow-[4px_4px_0_rgba(0,0,0,0.8)] md:shadow-[10px_10px_0_rgba(0,0,0,0.8)] transition-all duration-500 transform rotate-45 group-hover:bg-[#D4AF37] group-hover:scale-110 group-hover:rotate-0 group-hover:border-white overflow-hidden z-10">
                {/* Normal State: Ghostly Outline */}
                <div className="absolute inset-0 flex items-center justify-center -rotate-45 group-hover:opacity-0 transition-opacity duration-300">
                  <game.icon className="w-10 h-10 md:w-16 md:h-16 text-[#D4AF37]/50 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
                </div>

                {/* Hover State: High-res Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black">
                  <Image src={game.img} alt={game.title} fill className="object-cover opacity-60 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-500" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
              </div>

              {/* Popup Info (Outside the diamond so it doesn't get clipped) */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 md:mt-8 w-48 md:w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none flex flex-col items-center">
                <div className="bg-white p5-tag px-3 py-1 border-2 border-black mb-2 shadow-[4px_4px_0_rgba(0,0,0,1)]">
                  <p className="font-black text-xs text-black uppercase tracking-widest">{game.hours}</p>
                </div>
                <div className="bg-black p5-panel p-3 border-2 border-[#D4AF37] text-center shadow-[6px_6px_0_rgba(212,175,55,1)]">
                  <h3 className="text-lg font-black uppercase text-white mb-2">{game.title}</h3>
                  <p className="font-bold text-[10px] text-gray-300 uppercase leading-tight italic">"{game.desc}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
