"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const marques = [
  {
    name: "Maison Francis Kurkdjian",
    logo: "/logos/maison-francis-kurkdjian.png",
    alt: "Logo Maison Francis Kurkdjian",
  },
  {
    name: "Creed",
    logo: "/logos/creed.png",
    alt: "Logo Creed",
  },
  {
    name: "Byredo",
    logo: "/logos/byredo.png",
    alt: "Logo Byredo",
  },
  {
    name: "Dior",
    logo: "/logos/dior.png",
    alt: "Logo Dior",
  },
  {
    name: "Dolce & Gabbana",
    logo: "/logos/dolcegabbana.png",
    alt: "Logo Dolce & Gabbana",
  },
  {
    name: "Chanel",
    logo: "/logos/chanel.png",
    alt: "Logo Chanel",
  },
  // Ajoutez d'autres marques ici
];

export default function Marques() {
  return (
    <section
      className="w-full py-16 px-4 md:px-12 bg-ivory"
      style={{ background: "var(--ivory, #FAF7F2)" }}
      id="marques"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-9 text-charcoal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ color: "var(--charcoal, #2C2C2C)" }}
        >
          Nos marques partenaires
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {marques.map((marque, idx) => (
            <motion.div
              key={marque.name}
              className="flex justify-center items-center grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="relative w-32 h-14 sm:w-36 sm:h-16 flex items-center">
                <Image
                  src={marque.logo}
                  alt={marque.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 16vw, 12vw"
                  loading={idx < 2 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}