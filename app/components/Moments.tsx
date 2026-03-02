"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Parfum = {
  id: string;
  marque: string;
  nom: string;
  famille: string;
  prix: string;
  image: string;
};

const coupsDeCoeur: Parfum[] = [
  {
    id: "1",
    marque: "Maison Francis Kurkdjian",
    nom: "Baccarat Rouge 540",
    famille: "Boisé Ambré",
    prix: "295€",
    image: "/images/Astrologer.jpg",
  },
  {
    id: "2",
    marque: "Creed",
    nom: "Aventus",
    famille: "Fruité Boisé",
    prix: "345€",
    image: "/images/Dolce & Gabbana.jpg",
  },
  {
    id: "3",
    marque: "Byredo",
    nom: "GSauvage Dior",
    famille: "Boisé Aromatique",
    prix: "179€",
    image: "/images/Sauvage Dior .jpg",
  },
];

export default function Moments() {
  return (
    <section
      className="w-full py-16 px-4 md:px-12 bg-cream"
      style={{ background: "var(--cream, #F5F0E8)" }}
      id="moments"
    >
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-9 text-gold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ color: "var(--gold, #C9A96E)" }}
        >
          Nos coups de cœur
        </motion.h2>

        {/* Grille de parfums */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {coupsDeCoeur.map((parfum, idx) => (
            <motion.div
              key={parfum.id}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.13 * idx }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-[3/4] bg-ivory overflow-hidden">
                <Image
                  src={parfum.image}
                  alt={parfum.nom}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-75 transition opacity-100 pointer-events-none" />
                {/* Overlay bouton */}
                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
                  <button
                    className="mb-6 px-6 py-2 text-base rounded-full bg-[var(--gold,#C9A96E)] text-black font-semibold shadow-lg hover:bg-[var(--gold-dark,#9E7B4A)] transition"
                  >
                    Découvrir
                  </button>
                </div>
              </div>
              {/* Infos */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="uppercase text-xs tracking-wider font-semibold text-gold" style={{ color: "var(--gold, #C9A96E)" }}>
                    {parfum.marque}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-charcoal mt-1 mb-2" style={{ color: "var(--charcoal, #2C2C2C)" }}>
                    {parfum.nom}
                  </h3>
                  <p className="text-sm text-muted mb-1" style={{ color: "var(--muted, #8A8078)" }}>
                    {parfum.famille}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="text-base font-semibold text-black">{parfum.prix}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}