"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

type Parfum = {
  id: string;
  marque: string;
  nom: string;
  famille: string;
  prix: number;
  image: string;
};

const coupsDeCoeur: Parfum[] = [
  {
    id: "1",
    marque: "Maison Francis Kurkdjian",
    nom: "Baccarat Rouge 540",
    famille: "Boisé Ambré",
    prix: 295,
    image: "/images/Astrologer.jpg",
  },
  {
    id: "2",
    marque: "Creed",
    nom: "Aventus",
    famille: "Fruité Boisé",
    prix: 345,
    image: "/images/Dolce.jpg",
  },
  {
    id: "3",
    marque: "Byredo",
    nom: "GSauvage Dior",
    famille: "Boisé Aromatique",
    prix: 179,
    image: "/images/Sauvage Dior .jpg",
  },
  {
    id: "4",
    marque: "Maison Margiela",
    nom: "Replica Jazz Club",
    famille: "Oriental Boisé",
    prix: 119,
    image: "/images/Los 20 Mejores.jpg",
  },
  {
    id: "5",
    marque: "Dior",
    nom: "Fève Délicieuse",
    famille: "Oriental Gourmand",
    prix: 256,
    image: "/images/parfum for men.jpg",
  },
  {
    id: "6",
    marque: "Tom Ford",
    nom: "Oud Wood",
    famille: "Boisé Epicé",
    prix: 310,
    image: "/images/Parfum homme.jpg",
  },
];

export default function Moments() {
  return (
    <section
      className="w-full py-16 px-4 md:px-12 bg-cream"
      style={{ background: "var(--cream, #F5F0E8)" }}
      id="moment"
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.13 * idx }}
              viewport={{ once: true }}
            >
              <ProductCard
                marque={parfum.marque}
                nom={parfum.nom}
                famille={parfum.famille}
                prix={parfum.prix}
                imageSrc={parfum.image}
                badge="Coup de cœur"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}