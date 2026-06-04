"use client";

import { motion } from "framer-motion";
import { ProjectGrid } from "./ProjectGrid";
import { Terminal, Database, Cloud, Code } from "lucide-react";

export function Professional() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-24 pb-48"
    >
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Education</h2>
        <div className="h-1 w-20 bg-accent mb-12 rounded-full" />
        
        <div className="relative border-l border-card-border pl-8 ml-4">
          <div className="absolute w-4 h-4 bg-accent rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_rgba(255,0,51,0.8)]" />
          <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Science in Information Technology</h3>
          <p className="text-accent font-medium mb-4">University Name • 2020 - 2024</p>
          <p className="text-muted leading-relaxed max-w-3xl">
            Focus on Software Engineering, Cloud Computing, and Network Security.
          </p>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Technical Skills</h2>
        <div className="h-1 w-20 bg-accent mb-12 rounded-full" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Code, label: "Frontend", desc: "React, Vue, Next.js, Tailwind" },
            { icon: Terminal, label: "Backend", desc: "Node.js, Laravel, Python" },
            { icon: Database, label: "Database", desc: "PostgreSQL, MySQL, Redis" },
            { icon: Cloud, label: "Infrastructure", desc: "Azure, Terraform, Docker" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-card-border hover:border-accent/50 transition-colors"
            >
              <skill.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{skill.label}</h3>
              <p className="text-sm text-muted">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Featured Work</h2>
        <div className="h-1 w-20 bg-accent mb-12 rounded-full" />
        <ProjectGrid />
      </div>
    </motion.div>
  );
}
