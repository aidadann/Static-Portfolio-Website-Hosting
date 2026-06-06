"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    // Add global class to hide default cursor when this component is active
    document.documentElement.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!isMounted || (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches)) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none"
      style={{ zIndex: 999999 }}
      animate={{
        x: mousePosition.x - 4, // Offset slightly to align the tip of the SVG arrow
        y: mousePosition.y - 4,
        scale: isHovering ? 1.2 : 1,
        rotate: isHovering ? -15 : 0,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">
        {/* Outer Black Border */}
        <path d="M2 2L14 36L18 20L34 16L2 2Z" fill="black" />
        {/* Inner Red Fill */}
        <path d="M5 6L14 30L17 19L30 15L5 6Z" fill="#ff0033" />
      </svg>
    </motion.div>
  );
}
