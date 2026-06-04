"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Play, Pause, SkipForward, SkipBack, Heart, Clock, Code, Activity, Moon, Coffee } from "lucide-react";
import Image from "next/image";

const SONGS = [
  { title: "Try Again", artist: "JAEHYUN, d.ear", src: "/music/try-again.mp3" },
  { title: "Toronto 2014", artist: "Daniel Caesar", src: "/music/toronto-2014.mp3" },
  { title: "Pano", artist: "Zack Tabudlo", src: "/music/pano.mp3" },
];

export function Personal() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        // Play method returns a promise, we catch errors (like missing files or autoplay blocks)
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % SONGS.length);
  };

  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + SONGS.length) % SONGS.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-24 pb-48"
    >
      <audio
        ref={audioRef}
        src={SONGS[currentSong].src}
        onEnded={nextSong}
      />

      {/* Hobbies Bento Grid */}
      <div className="mb-32">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Off Duty</h2>
        <div className="h-1 w-20 bg-accent mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Large card - Athletics */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 row-span-1 rounded-3xl bg-card border border-card-border relative overflow-hidden group shadow-lg"
          >
            {/* User to upload /athletics.jpg */}
            <Image src="/athletics.jpg" alt="Athletics" fill className="object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => e.currentTarget.style.display = 'none'} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 p-8 h-full flex flex-col justify-start">
              <h3 className="text-3xl font-bold text-white mb-2">Athletics</h3>
              <p className="text-gray-300 max-w-sm leading-relaxed">Bronze medalist for 400m hurdles at SUKIPT 2024 and proud Sabah athlete for SUKMA 2024.</p>
            </div>
          </motion.div>

          {/* Square card - Traveling */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-1 row-span-1 rounded-3xl bg-card border border-card-border relative overflow-hidden group shadow-lg"
          >
            <Image src="/traveling.jpg" alt="traveling" fill className="object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => e.currentTarget.style.display = 'none'} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 p-8 h-full flex flex-col justify-start">
              <h3 className="text-2xl font-bold text-white mb-2">Traveling</h3>
              <p className="text-gray-300 text-sm">Capturing moments and exploring aesthetics.</p>
            </div>
          </motion.div>

          {/* Square card - Gaming */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-1 row-span-1 rounded-3xl bg-card border border-card-border relative overflow-hidden group shadow-lg"
          >
            <Image src="/gaming.jpg" alt="Gaming" fill className="object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => e.currentTarget.style.display = 'none'} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 p-8 h-full flex flex-col justify-start">
              <h3 className="text-2xl font-bold text-white mb-2">Gaming</h3>
              <p className="text-gray-300 text-sm">Relaxing in digital worlds when the IDE is closed.</p>
            </div>
          </motion.div>

          {/* Wide card - Quote */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 row-span-1 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 p-8 flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(255,0,51,0.1)]"
          >
            <h3 className="text-2xl md:text-3xl font-medium text-white italic tracking-tight">"There is no cloud, it's just someone else's computer."</h3>
            <p className="text-accent mt-4 font-semibold tracking-widest uppercase text-sm">— A tired engineer</p>
          </motion.div>
        </div>
      </div>

      {/* Components of Life (Flashcards) */}
      <div className="mb-32">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Components of Aidan</h2>
        <div className="h-1 w-20 bg-accent mb-12 rounded-full" />

        {/* Horizontal Scroll Container - Now with visible scrollbar */}
        <div className="flex gap-6 overflow-x-auto pb-6 pt-4 snap-x snap-mandatory custom-scrollbar">
          {[
            { title: "The Architect", desc: "Always drawing cloud diagrams and mapping infrastructure before writing a single line of Terraform.", img: "/architect.jpg" },
            { title: "The Athlete", desc: "Pushing limits on the track. Training hard for the next 400m hurdles.", img: "/athlete.jpg" },
            { title: "The Troubleshooter", desc: "Staring at terminal logs until the matrix reveals itself and the bug is fixed.", img: "/troubleshooter.jpg" },
            { title: "The Learner", desc: "Endlessly studying. Currently diving deep into Web3 and advanced cloud automation.", img: "/learner.jpg" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="min-w-[320px] md:min-w-[400px] snap-center shrink-0 h-[400px] rounded-3xl bg-card border border-card-border relative overflow-hidden group shadow-lg"
            >
              <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => e.currentTarget.style.display = 'none'} />
              {/* Dark top gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/40 to-transparent" />

              {/* Text moved to top */}
              <div className="relative z-10 p-8 flex flex-col h-full justify-start">
                <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-200 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Misc Stats */}
      <div>
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Miscellaneous</h2>
        <div className="h-1 w-20 bg-accent mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Music Player */}
          <div className="md:col-span-5 rounded-3xl bg-card border border-card-border p-8 flex flex-col justify-between relative overflow-hidden group shadow-lg">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <Music className="w-6 h-6 text-accent" />
                <span className="text-xs font-bold tracking-widest text-muted uppercase">On Repeat</span>
              </div>
              <div className="space-y-4">
                {SONGS.map((song, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setCurrentSong(i);
                      setIsPlaying(true);
                    }}
                    className={`flex items-center gap-4 group/song cursor-pointer p-3 rounded-xl border transition-colors ${currentSong === i ? 'bg-accent/10 border-accent/30' : 'bg-black/20 border-transparent hover:border-accent/30'
                      }`}
                  >
                    <div className="w-12 h-12 bg-black/50 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden shrink-0">
                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover/song:opacity-100 transition-opacity" />
                      {currentSong === i && isPlaying ? (
                        <Pause className="w-4 h-4 text-accent relative z-10" />
                      ) : (
                        <Play className="w-4 h-4 text-white opacity-50 group-hover/song:opacity-100 transition-opacity relative z-10 ml-0.5" />
                      )}
                    </div>
                    <div>
                      <p className={`font-medium text-sm ${currentSong === i ? 'text-accent' : 'text-white'}`}>
                        {song.title}
                      </p>
                      <p className="text-muted text-xs">{song.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 relative z-10 flex items-center justify-center gap-8 bg-black/30 p-4 rounded-2xl border border-white/5">
              <SkipBack onClick={prevSong} className="w-5 h-5 text-muted hover:text-white cursor-pointer transition-colors" />
              <div
                onClick={togglePlay}
                className="w-14 h-14 bg-accent rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(255,0,51,0.4)] hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white ml-1.5" />
                )}
              </div>
              <SkipForward onClick={nextSong} className="w-5 h-5 text-muted hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Daily Routine Timeline */}
          <div className="md:col-span-7 rounded-3xl bg-card border border-card-border p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6 text-accent" /> Daily Routine
            </h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-card-border before:to-transparent">

              {[
                { time: "08:00 AM", label: "Wake up & Coffee", icon: Coffee },
                { time: "10:00 AM", label: "Work / Gaming", icon: Code },
                { time: "05:00 PM", label: "Run / Workout", icon: Activity },
                { time: "09:00 PM", label: "Girlfriend", icon: Heart },
                { time: "11:00 PM", label: "Sleep", icon: Moon },
              ].map((step, i) => (
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={i}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  {/* Icon Node */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-card-border bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-accent transition-colors ml-[2px] md:ml-0">
                    <step.icon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  {/* Content Box */}
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-5 rounded-2xl border border-card-border bg-black/20 group-hover:border-accent/30 group-hover:bg-black/40 transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <time className="text-xs font-bold tracking-widest uppercase text-accent">{step.time}</time>
                    </div>
                    <div className="text-lg font-bold text-white">{step.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
