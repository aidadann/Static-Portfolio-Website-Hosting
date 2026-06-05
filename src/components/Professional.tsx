"use client";

import { motion } from "framer-motion";
import { ProjectGrid } from "./ProjectGrid";
import { Contact } from "./Contact";
import { SpotlightCard } from "./SpotlightCard";
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

        <div className="relative pl-8 ml-4">
          {/* Animated vertical line */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-card-border to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
          />

          <motion.div 
            className="absolute w-4 h-4 bg-accent rounded-full -left-[7.5px] top-1 shadow-[0_0_10px_rgba(255,0,51,0.8)]"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Computer Science (Computer Network and Security)</h3>
          <p className="text-accent font-medium mb-4">Universiti Teknologi Malaysia • 2022 - 2026</p>
          <p className="text-muted leading-relaxed max-w-3xl">
            Current CGPA: 3.77 <br />
            Athletics team of UTM
          </p>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Work Experience</h2>
        <div className="h-1 w-20 bg-accent mb-12 rounded-full" />

        <div className="relative pl-8 ml-4 space-y-12">
          {/* Animated vertical line */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-card-border to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
          />

          {/* Experience Item 1 */}
          <div className="relative">
            <motion.div 
              className="absolute w-4 h-4 bg-accent rounded-full -left-[39.5px] top-1 shadow-[0_0_10px_rgba(255,0,51,0.8)]"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <h3 className="text-2xl font-bold text-white mb-1">Software Tester Intern</h3>
            <p className="text-accent font-medium mb-4">AmBank (M) Berhad • Oct 2025 - Feb 2026</p>
            <p className="text-muted leading-relaxed max-w-3xl">
              Performed User Acceptance Testing (UAT), regression, sanity, and back-testing for AmBank's digital banking platform (AmOnline).<br />
              <span className="block mt-2">• Logged, documented, and tracked defects using OpenText ALM.</span>
              <span className="block mt-1">• Verified content accuracy (translations, localization, system configs) across web and mobile platforms.</span>
              <span className="block mt-1">• Collaborated with BAs and Test Managers, following strict banking compliance standards.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Technical Skills</h2>
        <div className="h-1 w-20 bg-accent mb-12 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Cloud, label: "Cloud & DevOps", desc: "Azure, Terraform, GitHub Actions" },
            { icon: Terminal, label: "Networking", desc: "CCNA, DevNet, Routing & Switching" },
            { icon: Code, label: "Languages", desc: "Python, Bash, JS, PHP, Solidity, C/C++" },
            { icon: Database, label: "Databases", desc: "Azure Cosmos DB, MySQL" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group"
            >
              <SpotlightCard className="p-6 h-full">
                <skill.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{skill.label}</h3>
                <p className="text-sm text-muted">{skill.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Featured Work</h2>
        <div className="h-1 w-20 bg-accent mb-12 rounded-full" />
        <ProjectGrid />
      </div>

      <Contact />
    </motion.div>
  );
}
