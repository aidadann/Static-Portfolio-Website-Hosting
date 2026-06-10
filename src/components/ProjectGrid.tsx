"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const PROJECTS = [
  {
    title: "Intellecta AI",
    description: "Full-stack AI educational platform. Swallows PDFs and generates spaced-repetition flashcards, interactive exercises, and Mermaid.js visual diagrams.",
    tags: ["React", "FastAPI", "Gemini 2.5", "Tailwind"],
    github: "https://github.com/aidadann/Intellecta",
  },
  {
    title: "Blockchain Investment Tracker",
    description: "Hybrid on-chain/off-chain system. Built secure Solidity smart contracts to permanently ledger investment records. Developed robust REST API in Laravel 11 for rapid caching.",
    tags: ["Solidity", "Laravel 11", "Vue 3", "Hardhat"],
    github: "https://github.com/aidadann/Blockchain-Powered-Investment-Tracking-System",
  },
  {
    title: "Azure Cloud Resume",
    description: "Designed a full-stack, serverless cloud architecture following DevOps/IaC best practices. Engineered GitHub Actions workflows to automate testing and secure deployments.",
    tags: ["Azure", "Terraform", "GitHub Actions", "CI/CD"],
    github: "https://github.com/aidadann/Cloud-Resume",
  },
  {
    title: "URL Scam Checker",
    description: "Modular URL analysis system integrating heuristic checks and threat intelligence APIs to prevent SSRF and detect malicious URLs.",
    tags: ["Security", "Laravel", "Vue.js"],
    github: "https://github.com/aidadann/URL-Scam-Checker-System",
  },
];

export function ProjectGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <>
      {/* Desktop: Horizontal Accordion */}
      <div className="hidden md:flex w-full h-[600px] gap-2 overflow-hidden px-4">
        {PROJECTS.map((project, index) => {
          const isActive = hoveredIndex === index;
          return (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
              layout
              initial={false}
              animate={{
                flex: isActive ? 3 : 1,
                filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                opacity: isActive ? 1 : 0.6
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              className={clsx(
                "relative h-full overflow-hidden p5-panel border-4 cursor-crosshair transition-colors duration-300",
                isActive ? "border-white bg-accent" : "border-gray-600 bg-black"
              )}
            >
              <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

              <div className={clsx(
                "absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500",
                isActive ? "translate-y-0" : "translate-y-8"
              )}>
                <div className="relative z-20">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className={clsx(
                      "font-black uppercase tracking-widest leading-none transform -skew-x-12",
                      isActive ? "text-4xl md:text-5xl text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" : "text-2xl text-white transform -rotate-90 origin-bottom-left absolute bottom-0 left-8 whitespace-nowrap"
                    )}>
                      {project.title}
                    </h3>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-black bg-white p-4 font-bold text-lg max-w-xl leading-relaxed mb-6 border-4 border-black p5-panel shadow-[6px_6px_0_rgba(0,0,0,1)]">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-4 py-1 text-sm font-black uppercase text-secondary bg-black border-2 border-secondary p5-tag shadow-[2px_2px_0_rgba(0,0,0,1)] transform -skew-x-12"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xl font-black uppercase text-white bg-black px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors transform -skew-x-12 p5-button group shadow-[4px_4px_0_rgba(0,0,0,1)]"
                      >
                        <GitBranch className="w-6 h-6 transform skew-x-12" />
                        <span className="transform skew-x-12 tracking-widest">Access Dossier</span>
                        <ExternalLink className="w-5 h-5 transform skew-x-12 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: Vertical Stacked Cards */}
      <div className="flex flex-col gap-6 px-4 md:hidden">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative overflow-hidden p5-panel border-4 border-white bg-accent"
          >
            <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

            <div className="relative z-20 p-6">
              <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-4 transform -skew-x-6 drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">
                {project.title}
              </h3>

              <p className="text-black bg-white p-3 font-bold text-sm leading-relaxed mb-4 border-2 border-black p5-panel shadow-[4px_4px_0_rgba(0,0,0,1)]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-0.5 text-xs font-black uppercase text-secondary bg-black border border-secondary p5-tag transform -skew-x-6"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-black uppercase text-white bg-black px-4 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors transform -skew-x-6 p5-button group shadow-[3px_3px_0_rgba(0,0,0,1)]"
              >
                <GitBranch className="w-4 h-4 transform skew-x-6" />
                <span className="transform skew-x-6 tracking-widest">Access Dossier</span>
                <ExternalLink className="w-4 h-4 transform skew-x-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
