"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

const PROJECTS = [
  {
    title: "Blockchain Tracker",
    description: "A hybrid on-chain/off-chain investment tracking system with Vue 3, Laravel, and Solidity smart contracts.",
    tags: ["Solidity", "Laravel", "Vue.js", "Web3"],
    github: "#",
    demo: "#",
  },
  {
    title: "Azure Cloud Resume",
    description: "Fully automated CI/CD pipeline and Infrastructure as Code using Terraform, deployed on Azure Static Web Apps.",
    tags: ["Azure", "Terraform", "GitHub Actions"],
    github: "#",
    demo: "#",
  },
  {
    title: "URL Scam Checker",
    description: "Modular URL analysis system integrating heuristic checks and threat intelligence APIs to prevent SSRF and detect malicious URLs.",
    tags: ["Security", "Laravel", "Vue.js"],
    github: "#",
    demo: "#",
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
          className="group relative flex flex-col justify-between p-6 rounded-2xl bg-card border border-card-border hover:border-accent/50 hover:shadow-[0_0_30px_rgba(255,0,51,0.15)] transition-all overflow-hidden"
        >
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
                className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                <GitBranch className="w-4 h-4" />
                Source
              </a>
              <a
                href={project.demo}
                className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
