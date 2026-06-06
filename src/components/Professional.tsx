"use client";

import { motion } from "framer-motion";
import { ProjectGrid } from "./ProjectGrid";
import { Contact } from "./Contact";
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
        <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic -skew-x-6 drop-shadow-[6px_6px_0_rgba(255,0,60,1)]">
          <span className="p5-glitch-hover inline-block">Education</span>
        </h2>
        <div className="h-4 w-48 bg-secondary mb-12 p5-tag shadow-[4px_4px_0_rgba(255,255,255,1)]" />

        <div className="relative pl-8 ml-4">
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-accent via-white to-transparent origin-top p5-tag"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
          />

          <div className="p5-panel bg-black noise-overlay border-4 border-white p-8 shadow-[12px_12px_0_rgba(255,0,60,1)] ml-4 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_rgba(255,255,0,1)] transition-all">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-white mb-2 transform -skew-x-6">Bachelor of Computer Science</h3>
            <p className="text-secondary font-black uppercase text-lg tracking-widest mb-4 border-b-4 border-accent pb-2 inline-block transform -skew-x-6">Universiti Teknologi Malaysia • 2022 - 2026</p>
            <p className="text-white font-bold leading-relaxed max-w-3xl font-sans text-xl relative z-20">
              Current CGPA: 3.77 <br />
              Athletics team of UTM
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic -skew-x-6 drop-shadow-[6px_6px_0_rgba(255,0,60,1)]">
          <span className="p5-glitch-hover inline-block">Work Experience</span>
        </h2>
        <div className="h-4 w-48 bg-secondary mb-12 p5-tag shadow-[4px_4px_0_rgba(255,255,255,1)]" />

        <div className="relative pl-8 ml-4 space-y-12">
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-accent via-white to-transparent origin-top p5-tag"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
          />

          {/* Experience Item 1 */}
          <div className="p5-panel bg-black noise-overlay border-4 border-white p-8 shadow-[12px_12px_0_rgba(255,0,60,1)] ml-4 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_rgba(255,255,0,1)] transition-all relative">
            <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
              <span className="text-9xl font-black text-accent transform -skew-x-12 inline-block">01</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-white mb-2 transform -skew-x-6 relative z-20">Software Tester Intern</h3>
            <p className="text-secondary font-black uppercase text-lg tracking-widest mb-4 border-b-4 border-accent pb-2 inline-block transform -skew-x-6 relative z-20">AmBank (M) Berhad • Oct 2025 - Feb 2026</p>
            <p className="text-white font-bold font-sans text-lg leading-relaxed max-w-3xl relative z-20">
              Performed User Acceptance Testing (UAT), regression, sanity, and back-testing for AmBank's digital banking platform (AmOnline).<br />
              <span className="block mt-4 text-black p5-tag bg-white px-3 py-1 inline-block font-black uppercase mb-2">• Logged, documented, and tracked defects using OpenText ALM.</span><br />
              <span className="block text-black p5-tag bg-white px-3 py-1 inline-block font-black uppercase mb-2">• Verified content accuracy across web and mobile platforms.</span><br />
              <span className="block text-black p5-tag bg-white px-3 py-1 inline-block font-black uppercase mb-2">• Collaborated with BAs and Test Managers, following strict banking compliance standards.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic -skew-x-6 drop-shadow-[6px_6px_0_rgba(255,0,60,1)]">
          <span className="p5-glitch-hover inline-block">The Persona List</span>
        </h2>
        <div className="h-4 w-48 bg-secondary mb-12 p5-tag shadow-[4px_4px_0_rgba(255,255,255,1)]" />

        <div className="flex flex-wrap justify-center gap-8 px-4">
          {[
            { icon: Cloud, label: "Cloud & DevOps", desc: "Azure, Terraform, GitHub Actions", affinity: "STR: 99" },
            { icon: Terminal, label: "Networking", desc: "CCNA, DevNet, Routing & Switching", affinity: "AGI: 85" },
            { icon: Code, label: "Languages", desc: "Python, Bash, JS, PHP, Solidity, C/C++", affinity: "MAG: 92" },
            { icon: Database, label: "Databases", desc: "Azure Cosmos DB, MySQL", affinity: "END: 88" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 5 : -5 }}
              className="group relative w-64 h-72 flex items-center justify-center cursor-crosshair"
            >
              {/* Hexagon Background */}
              <div className="absolute inset-0 bg-black p5-hexagon border-4 border-white shadow-[10px_10px_0_rgba(255,0,60,1)] transition-colors group-hover:bg-accent noise-overlay" />
              
              {/* Hexagon Content */}
              <div className="relative z-20 flex flex-col items-center text-center p-6 mt-4">
                <skill.icon className="w-12 h-12 text-secondary mb-4 group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-widest">{skill.label}</h3>
                <p className="text-sm text-gray-300 font-bold group-hover:text-white mb-4">{skill.desc}</p>
                
                {/* Affinity Stats Pop-up on Hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-secondary text-black px-4 py-1 p5-tag font-black">
                  {skill.affinity}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic -skew-x-6 drop-shadow-[6px_6px_0_rgba(255,0,60,1)]">
          <span className="p5-glitch-hover inline-block">The Heist Log</span>
        </h2>
        <div className="h-4 w-48 bg-secondary mb-12 p5-tag shadow-[4px_4px_0_rgba(255,255,255,1)]" />
        <ProjectGrid />
      </div>

      <Contact />
    </motion.div>
  );
}
