import { motion } from "motion/react";
import { Github, Instagram, Cpu, Globe, Camera } from "lucide-react";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-20 pb-10"
    >
      {/* HERO */}
      <section className="text-center py-20 relative overflow-hidden">
        {/* Speed lines background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="speed-line w-40 top-1/4 left-0" style={{ animationDelay: '0s' }} />
          <div className="speed-line w-60 top-1/2 left-0" style={{ animationDelay: '0.5s' }} />
          <div className="speed-line w-32 top-3/4 left-0" style={{ animationDelay: '1s' }} />
        </div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-8"
        >
          {/* Racing frame for photo with glow */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-racing-red p-1 relative z-10 overflow-hidden bg-racing-green shadow-[0_0_30px_rgba(225,6,0,0.4)]">
            <img 
              src="/profile.jpg" 
              alt="Kenrick Kiflie"
              className="w-full h-full rounded-full object-cover object-center scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Animated pulse ring */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-racing-red -z-10"
          />
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-racing-red transform rotate-45 -z-10" />
          <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-racing-green transform rotate-45 -z-10" />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter font-racing italic"
        >
          KENRICK KIFLIE
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-4 text-xl tracking-widest uppercase"
        >
          🏎️ Future Developer | Speed • Precision • Passion
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-6"
        >
          <a 
            href="https://github.com/Ladiesman217-21" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-3 rounded-sm font-bold flex items-center gap-2 hover:bg-gray-200 transition-transform hover:-translate-y-1"
          >
            <Github size={20} /> GitHub
          </a>
          <a 
            href="https://instagram.com/Ceikknr_" 
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white px-8 py-3 rounded-sm font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-all hover:-translate-y-1"
          >
            <Instagram size={20} /> Instagram
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto px-6">
        <div className="bg-racing-green/20 border-l-4 border-racing-red p-8 rounded-r-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6 font-racing italic">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Saya adalah seorang pelajar yang memiliki minat besar dalam dunia teknologi,
            khususnya dalam pengembangan web dan pemrograman C++.
            Saya suka belajar hal baru dan membangun project sederhana dengan konsep modern.
          </p>
        </div>
      </section>

      {/* QUOTE */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative py-10 px-8 border-y border-white/10"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-racing-red text-white px-4 py-1 text-xs font-bold tracking-widest uppercase italic">
            Inspiration
          </div>
          <blockquote className="text-2xl md:text-3xl font-racing italic leading-tight text-white mb-4">
            "The easiest thing in life is to give up... The hardest thing is to keep going."
          </blockquote>
          <cite className="text-racing-red font-bold tracking-widest uppercase text-sm not-italic">
            — Lewis Hamilton
          </cite>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center font-racing italic">Experience</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-racing-green p-8 rounded-lg shadow-xl border-b-4 border-racing-red group"
          >
            <div className="bg-racing-dark w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-racing-red transition-colors">
              <Cpu className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">C++ Programming</h3>
            <p className="text-gray-300">Membuat program logika dasar dan fungsi custom dengan efisiensi tinggi.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-racing-green p-8 rounded-lg shadow-xl border-b-4 border-racing-red group"
          >
            <div className="bg-racing-dark w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-racing-red transition-colors">
              <Globe className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-gray-300">Membangun website modern menggunakan teknologi terbaru seperti React, Tailwind, dan Laravel.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-racing-green p-8 rounded-lg shadow-xl border-b-4 border-racing-red group"
          >
            <div className="bg-racing-dark w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-racing-red transition-colors">
              <Camera className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Photography</h3>
            <p className="text-gray-300">Pengalaman fotografi tingkat menengah, menangkap momen dengan presisi dan visi artistik.</p>
          </motion.div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center font-racing italic">Achievements</h2>
        <div className="bg-racing-green/10 border border-white/5 p-8 rounded-2xl space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-start gap-4"
          >
            <div className="w-2 h-2 mt-2.5 bg-racing-red rounded-full flex-shrink-0" />
            <p className="text-lg text-gray-200">Student Council of SMAK Frateran Year 2025/2026</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="w-2 h-2 mt-2.5 bg-racing-red rounded-full flex-shrink-0" />
            <p className="text-lg text-gray-200">Won 1st Place in AVC Amikom For "Best Director" Of a Short Film</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4"
          >
            <div className="w-2 h-2 mt-2.5 bg-racing-red rounded-full flex-shrink-0" />
            <p className="text-lg text-gray-200">English Intermediate Level 3 certified by OXFORD University</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
