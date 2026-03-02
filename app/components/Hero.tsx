"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, rgba(13,13,13,0.92), rgba(41,33,26,0.85)), url('/images/boutique-hero.jpg') center/cover no-repeat",
      }}
    >
      {/* Overlay to strengthen darkness */}
      <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-4 text-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ color: "var(--gold, #C9A96E)" }}
        >
          Votre boutique parfums à Lomé
        </motion.h1>
        <motion.p
          className="mb-8 text-lg md:text-2xl font-light text-ivory max-w-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ color: "var(--ivory, #FAF7F2)" }}
        >
          Une sélection exclusive de parfums de luxe et de niche
        </motion.p>
        <motion.div
          className="flex gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <Link
              href="/parfums"
              className="px-7 py-3 rounded-full bg-[var(--gold,#C9A96E)] text-black font-medium text-base md:text-lg shadow-lg transition hover:bg-[var(--gold-dark,#9E7B4A)]"
            >
              Voir nos parfums
            </Link>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <Link
              href="/la-boutique"
              className="px-7 py-3 rounded-full border border-[var(--gold,#C9A96E)] text-[var(--gold,#C9A96E)] font-medium text-base md:text-lg shadow-lg transition hover:bg-[var(--gold-dark,#9E7B4A)] hover:text-white"
            >
              Nous trouver
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}