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
        <h2 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase italic -skew-x-6 drop-shadow-[4px_4px_0_rgba(255,0,51,1)]">Education</h2>
        <div className="h-2 w-32 bg-accent mb-12 p5-tag shadow-[4px_4px_0_rgba(255,255,255,1)]" />

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
          <div className="p5-panel bg-card border-2 border-card-border p-6 shadow-[8px_8px_0_rgba(255,0,51,0.3)] ml-4 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_rgba(255,0,51,0.5)] transition-all">
            <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-1">Bachelor of Computer Science</h3>
            <p className="text-accent font-black uppercase text-sm tracking-widest mb-4 border-b border-card-border pb-2 inline-block">Universiti Teknologi Malaysia • 2022 - 2026</p>
            <p className="text-white font-bold leading-relaxed max-w-3xl">
              Current CGPA: 3.77 <br />
              Athletics team of UTM
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase italic -skew-x-6 drop-shadow-[4px_4px_0_rgba(255,0,51,1)]">Work Experience</h2>
        <div className="h-2 w-32 bg-accent mb-12 p5-tag shadow-[4px_4px_0_rgba(255,255,255,1)]" />

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
          <div className="p5-panel bg-card border-2 border-card-border p-6 shadow-[8px_8px_0_rgba(255,0,51,0.3)] ml-4 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_rgba(255,0,51,0.5)] transition-all relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="text-8xl font-black">01</span>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-1">Software Tester Intern</h3>
            <p className="text-accent font-black uppercase text-sm tracking-widest mb-4 border-b border-card-border pb-2 inline-block">AmBank (M) Berhad • Oct 2025 - Feb 2026</p>
            <p className="text-white font-bold leading-relaxed max-w-3xl relative z-10">
              Performed User Acceptance Testing (UAT), regression, sanity, and back-testing for AmBank's digital banking platform (AmOnline).<br />
              <span className="block mt-2 text-accent p5-tag bg-black px-2 py-1 inline-block border border-accent/30 mb-1">• Logged, documented, and tracked defects using OpenText ALM.</span><br />
              <span className="block mt-1 text-accent p5-tag bg-black px-2 py-1 inline-block border border-accent/30 mb-1">• Verified content accuracy (translations, localization, system configs) across web and mobile platforms.</span><br />
              <span className="block mt-1 text-accent p5-tag bg-black px-2 py-1 inline-block border border-accent/30">• Collaborated with BAs and Test Managers, following strict banking compliance standards.</span>
            </p>
          </div>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase italic -skew-x-6 drop-shadow-[4px_4px_0_rgba(255,0,51,1)]">Technical Skills</h2>
        <div className="h-2 w-32 bg-accent mb-12 p5-tag shadow-[4px_4px_0_rgba(255,255,255,1)]" />

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
        <h2 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase italic -skew-x-6 drop-shadow-[4px_4px_0_rgba(255,0,51,1)]">Featured Projects</h2>
        <div className="h-2 w-32 bg-accent mb-12 p5-tag shadow-[4px_4px_0_rgba(255,255,255,1)]" />
        <ProjectGrid />
      </div>

      <Contact />
    </motion.div>
  );
}
