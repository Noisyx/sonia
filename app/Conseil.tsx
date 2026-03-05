 "use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Conseil() {
  return (
    <section
      className="w-full py-16 px-4 md:px-12 bg-black"
      id="conseil"
      style={{ background: "var(--black, #0D0D0D)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ color: "var(--gold, #C9A96E)" }}
        >
          Besoin de conseils&nbsp;?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-white mb-8 font-serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          style={{ color: "var(--white, #FFF)" }}
        >
          Profitez d’un accompagnement personnalisé en boutique pour choisir le parfum qui vous ressemble vraiment. Venez nous rencontrer ou contactez-nous pour un conseil sur-mesure.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full bg-gold text-black font-bold transition hover:bg-gold-dark shadow-md"
            style={{ background: "var(--gold, #C9A96E)", color: "var(--black, #0D0D0D)" }}
          >
            Nous contacter
          </Link>
          <a
            href="https://goo.gl/maps/dummyurl"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border-2 border-gold text-gold font-bold transition hover:bg-gold hover:text-black"
            style={{
              borderColor: "var(--gold, #C9A96E)",
              color: "var(--gold, #C9A96E)",
            }}
          >
            Prendre rendez-vous
          </a>
        </motion.div>
      </div>
    </section>
  );
}