"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X, Key } from "lucide-react";

interface SecretPuzzleProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlock: () => void;
}

type Block = {
  id: string;
  type: 'H' | 'V';
  x: number;
  y: number;
  len: number;
  isKey?: boolean;
};

const INITIAL_BLOCKS: Block[] = [
  { id: 'K', type: 'H', x: 0, y: 1, len: 2, isKey: true },
  { id: 'A', type: 'V', x: 2, y: 0, len: 2 },
  { id: 'B', type: 'H', x: 2, y: 2, len: 2 },
  { id: 'C', type: 'V', x: 3, y: 0, len: 2 },
];

const CELL_SIZE = 80;

export function SecretPuzzle({ isOpen, onClose, onUnlock }: SecretPuzzleProps) {
  const [blocks, setBlocks] = useState<Block[]>(INITIAL_BLOCKS);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setBlocks(INITIAL_BLOCKS);
      setIsSolved(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const keyBlock = blocks.find(b => b.isKey);
    if (keyBlock && keyBlock.x === 2 && keyBlock.y === 1) {
      setIsSolved(true);
      setTimeout(() => {
        onUnlock();
      }, 1500);
    }
  }, [blocks, onUnlock]);

  const isOccupied = (x: number, y: number, otherBlocks: Block[]) => {
    return otherBlocks.some(b => {
      if (b.type === 'H') return b.y === y && x >= b.x && x < b.x + b.len;
      if (b.type === 'V') return b.x === x && y >= b.y && y < b.y + b.len;
      return false;
    });
  };

  const getBounds = (block: Block) => {
    const otherBlocks = blocks.filter(b => b.id !== block.id);
    if (block.type === 'H') {
      let minX = 0;
      for (let x = block.x - 1; x >= 0; x--) {
        if (isOccupied(x, block.y, otherBlocks)) {
          minX = x + 1;
          break;
        }
      }
      let maxX = 4 - block.len;
      for (let x = block.x + block.len; x < 4; x++) {
        if (isOccupied(x, block.y, otherBlocks)) {
          maxX = x - block.len;
          break;
        }
      }
      return { min: minX, max: maxX };
    } else {
      let minY = 0;
      for (let y = block.y - 1; y >= 0; y--) {
        if (isOccupied(block.x, y, otherBlocks)) {
          minY = y + 1;
          break;
        }
      }
      let maxY = 4 - block.len;
      for (let y = block.y + block.len; y < 4; y++) {
        if (isOccupied(block.x, y, otherBlocks)) {
          maxY = y - block.len;
          break;
        }
      }
      return { min: minY, max: maxY };
    }
  };

  const handleDragEnd = (block: Block, offset: { x: number, y: number }) => {
    if (isSolved) return;
    const bounds = getBounds(block);
    
    const dragDistance = block.type === 'H' ? offset.x : offset.y;
    const cellsMoved = Math.round(dragDistance / CELL_SIZE);
    
    if (cellsMoved !== 0) {
      let newPos = (block.type === 'H' ? block.x : block.y) + cellsMoved;
      newPos = Math.max(bounds.min, Math.min(bounds.max, newPos));
      
      setBlocks(prev => prev.map(b => 
        b.id === block.id 
          ? { ...b, [block.type === 'H' ? 'x' : 'y']: newPos }
          : b
      ));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md noise-overlay"
        >
          <div className="absolute top-8 right-8 z-50">
            <button onClick={onClose} className="p-3 bg-black border-2 border-white hover:bg-accent transition-colors p5-button shadow-[4px_4px_0_rgba(255,255,255,1)]">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 1.1, opacity: 0 }}
            className="flex flex-col items-center"
          >
            <div className="p5-panel bg-black border-[4px] border-white px-8 py-2 transform -skew-x-12 mb-8 shadow-[8px_8px_0_rgba(255,0,60,1)]">
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-[0.2em]">
                {isSolved ? "PALACE INFILTRATED" : "UNLOCK THE GATES"}
              </h2>
            </div>
            
            <div className="relative flex items-center">
              {/* Main Grid Container */}
              <div 
                className="relative bg-[#111] border-[4px] border-accent p5-panel shadow-[0_0_50px_rgba(255,0,60,0.4)]"
                style={{ width: CELL_SIZE * 4, height: CELL_SIZE * 4 }}
              >
                {/* Grid Lines Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #ff003c 1px, transparent 1px), linear-gradient(to bottom, #ff003c 1px, transparent 1px)',
                    backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
                  }}
                />

                {blocks.map(block => {
                  const width = block.type === 'H' ? block.len * CELL_SIZE : CELL_SIZE;
                  const height = block.type === 'V' ? block.len * CELL_SIZE : CELL_SIZE;
                  
                  const bounds = getBounds(block);
                  const dragConstraints = block.type === 'H' 
                    ? { left: (bounds.min - block.x) * CELL_SIZE, right: (bounds.max - block.x) * CELL_SIZE, top: 0, bottom: 0 }
                    : { top: (bounds.min - block.y) * CELL_SIZE, bottom: (bounds.max - block.y) * CELL_SIZE, left: 0, right: 0 };
                  
                  return (
                    <motion.div
                      key={block.id}
                      drag={!isSolved ? (block.type === 'H' ? 'x' : 'y') : false}
                      dragConstraints={dragConstraints}
                      dragElastic={0}
                      dragMomentum={false}
                      onDragEnd={(e, info) => handleDragEnd(block, info.offset)}
                      animate={{
                        x: block.x * CELL_SIZE + (isSolved && block.isKey ? CELL_SIZE * 1.5 : 0),
                        y: block.y * CELL_SIZE
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className={`absolute p-1 cursor-grab active:cursor-grabbing ${block.isKey ? 'z-30' : 'z-10'}`}
                      style={{ width, height, top: 0, left: 0 }}
                    >
                      <div className={`w-full h-full border-2 p5-panel flex items-center justify-center shadow-[4px_4px_0_rgba(0,0,0,0.8)] transition-colors overflow-hidden relative ${
                        block.isKey 
                          ? 'bg-[#D4AF37] border-white text-black' 
                          : 'bg-black border-white hover:border-accent'
                      }`}>
                        {!block.isKey && (
                          <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, #ff003c 10px, #ff003c 20px)' }} />
                        )}
                        {block.isKey && <Key className="w-8 h-8 transform -rotate-12 relative z-10" />}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Exit Lock */}
              <div className="absolute -right-16 top-[80px] w-16 h-20 flex items-center justify-center z-20 pointer-events-none">
                <motion.div
                  animate={isSolved ? { scale: [1, 1.5, 0], opacity: [1, 1, 0], rotate: [0, 15, -15, 0] } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Lock className={`w-12 h-12 ${isSolved ? 'text-[#D4AF37]' : 'text-accent drop-shadow-[0_0_15px_rgba(255,0,60,0.8)]'}`} />
                </motion.div>
              </div>
            </div>

            <p className="mt-12 text-white font-bold tracking-widest uppercase bg-black px-6 py-3 border-2 border-accent transform skew-x-6 shadow-[6px_6px_0_rgba(255,0,60,1)] text-center max-w-sm pointer-events-none">
              Slide the barricades.<br/>Clear the path for the golden key.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
