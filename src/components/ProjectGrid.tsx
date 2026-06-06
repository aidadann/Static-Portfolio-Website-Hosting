"use client";

import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const PROJECTS = [
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="group"
        >
          <SpotlightCard className="flex flex-col justify-between p-6 h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0 pointer-events-none" />

            <div className="z-10">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="z-10 mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-white/80 bg-white/5 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors z-20 relative"
                >
                  <GitBranch className="w-4 h-4" />
                  Source
                </a>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
  );
}
