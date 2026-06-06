"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text & Buttons */}
        <div className="flex flex-col items-start text-left">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl font-medium text-muted mb-4"
          >
            Aspiring Cloud Infrastructure Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-cinzel text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tighter text-white mb-6 leading-tight"
          >
            Hello I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
              Aidan Andrew Daniel
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-muted max-w-xl mb-10 leading-relaxed"
          >
            I specialize in architecting scalable cloud solutions, automating complex CI/CD pipelines, and building robust, high-performance infrastructure tailored for modern web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="https://thankful-sky-05855b100.7.azurestaticapps.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-hover transition-colors shadow-[0_0_20px_rgba(209,168,79,0.4)]"
            >
              <FileText className="w-5 h-5" />
              View Cloud Resume
            </a>

            <div className="flex items-center gap-3 ml-2 mt-4 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/aidan-andrew-daniel-b77764255/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-card-border bg-card hover:border-accent hover:text-accent transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/aidadann"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-card-border bg-card hover:border-accent hover:text-accent transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Animated Glow Behind Image */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-accent rounded-full blur-[50px] opacity-50"
            />

            {/* Spinning Outer Layer */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border-2 border-dashed border-accent/40"
            />

            {/* Image Container */}
            <div className="absolute inset-0 rounded-full border-4 border-card-border bg-card overflow-hidden shadow-2xl z-10 flex items-center justify-center">
              <div className="w-full h-full relative flex items-center justify-center bg-card text-muted">
                {/* 
                  To show your photo, save an image named "profile.jpg" in the "public" folder.
                  The Image component will automatically load it. 
                */}
                <Image
                  src="/profile.jpg"
                  alt="Aidan Andrew Daniel"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // This hides the broken image icon if profile.jpg is missing
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-sm absolute -z-10">Upload profile.jpg to /public</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
