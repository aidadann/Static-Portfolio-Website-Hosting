"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Carousel3DProps {
  items: {
    title: string;
    desc: string;
    img: string;
  }[];
}

export function Carousel3D({ items }: Carousel3DProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  // Helper to calculate shortest offset in a circular array
  const getOffset = (index: number) => {
    const half = Math.floor(items.length / 2);
    let offset = index - activeIndex;
    
    // Normalize offset to be between -half and +half
    if (offset > half) offset -= items.length;
    if (offset < -half) offset += items.length;
    
    return offset;
  };

  return (
    <div className="relative w-full h-[550px] flex items-center justify-center overflow-hidden py-10" style={{ perspective: 1200 }}>
      {/* Edge gradient fade */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

      {items.map((item, i) => {
        const offset = getOffset(i);
        const absOffset = Math.abs(offset);
        const isCenter = offset === 0;

        return (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] md:w-[400px] h-[400px] rounded-3xl bg-card border border-card-border overflow-hidden shadow-2xl cursor-pointer"
            onClick={() => setActiveIndex(i)}
            initial={false}
            animate={{
              x: `calc(-50% + ${offset * 180}px)`, // Adjust 180px for overlap spacing
              y: "-50%",
              scale: isCenter ? 1 : Math.max(0.6, 1 - absOffset * 0.15),
              rotateY: offset * -25,
              z: isCenter ? 100 : -absOffset * 150,
              opacity: isCenter ? 1 : Math.max(0, 1 - absOffset * 0.4),
              zIndex: items.length - absOffset,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 25,
              mass: 1
            }}
            style={{
              // Add a subtle glow to the center card
              boxShadow: isCenter ? "0 0 40px rgba(255, 0, 51, 0.2)" : "none"
            }}
          >
            <Image src={item.img} alt={item.title} fill className="object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/40 to-black/80" />
            
            {/* Dark overlay for non-center cards */}
            {!isCenter && (
              <div className="absolute inset-0 bg-black/40 z-20 transition-opacity" />
            )}
            
            <div className="relative z-30 p-8 flex flex-col h-full justify-start">
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors ${isCenter ? 'text-accent' : 'text-white'}`}>
                {item.title}
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </div>
          </motion.div>
        );
      })}

      {/* Controls */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-6 z-30">
        <button onClick={prev} className="w-12 h-12 rounded-full bg-black/80 border border-card-border flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-110 transition-all shadow-lg">
          <ChevronLeft className="w-6 h-6 text-white pr-0.5" />
        </button>
        <button onClick={next} className="w-12 h-12 rounded-full bg-black/80 border border-card-border flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-110 transition-all shadow-lg">
          <ChevronRight className="w-6 h-6 text-white pl-0.5" />
        </button>
      </div>
    </div>
  );
}
