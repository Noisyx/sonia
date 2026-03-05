"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Testimonial = {
  id: string;
  nom: string;
  avis: string;
  note: number;
  date: string;
};

const temoignages: Testimonial[] = [
  {
    id: "1",
    nom: "Fatima A.",
    avis:
      "Accueil chaleureux et conseils personnalisés. J'ai découvert des parfums incroyables que je n'aurais jamais testés seule. Boutique magnifique !",
    note: 5,
    date: "Avril 2024",
  },
  {
    id: "2",
    nom: "Kevin S.",
    avis:
      "Très belle sélection de marques ! Le personnel prend vraiment le temps de conseiller, on sent la passion. Je recommande vivement.",
    note: 5,
    date: "Mars 2024",
  },
  {
    id: "3",
    nom: "Mélanie D.",
    avis:
      "Un service de grande qualité et un choix raffiné de parfums. Coup de cœur pour l'ambiance unique de la boutique.",
    note: 4,
    date: "Février 2024",
  },
];

function renderStars(n: number) {
  return (
    <span>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < n ? "text-gold" : "text-muted"}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function Feedback() {
  // Option carousel possible dans le futur, ici statique
  const [selected, setSelected] = useState(0);

  return (
    <section
      className="w-full py-16 px-4 md:px-12 bg-white"
      id="temoignages"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-10 text-charcoal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ color: "var(--charcoal, #2C2C2C)" }}
        >
          Ils partagent leur expérience
        </motion.h2>
        <div className="flex flex-col gap-8">
          {temoignages.map((t, idx) => (
            <motion.div
              key={t.id}
              className="bg-ivory rounded-xl p-6 shadow-md flex flex-col gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.09 * idx }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-charcoal leading-relaxed font-serif">
                “{t.avis}”
              </p>
              <div className="flex items-center gap-3 mt-3">
                <span className="font-semibold text-gold-dark">{t.nom}</span>
                <span className="text-gold text-sm">{renderStars(t.note)}</span>
                <span className="text-muted text-xs">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}