"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Hero } from "@/components/Hero";
import { NavigationDock } from "@/components/NavigationDock";
import { Professional } from "@/components/Professional";
import { Personal } from "@/components/Personal";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"professional" | "personal">("professional");

  return (
    <main className="relative min-h-screen bg-background">
      <Hero />
      
      <div id="work" className="relative z-10 bg-background pt-12">
        <AnimatePresence mode="wait">
          {activeTab === "professional" ? (
            <Professional key="professional" />
          ) : (
            <Personal key="personal" />
          )}
        </AnimatePresence>
      </div>

      <NavigationDock activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  );
}
