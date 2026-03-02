"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const boutique = {
  nom: "SONIA",
  adresse: "LOMÉ, TOGO",
  telephone: "+228 98061996",
  email: "sonia@gmail.com",
  horaires: {
    "Lundi": "10h – 19h",
    "Mardi": "10h – 19h",
    "Mercredi": "10h – 19h",
    "Jeudi": "10h – 19h",
    "Vendredi": "10h – 19h",
    "Samedi": "10h – 19h30",
    "Dimanche": "Fermé",
  },
  reseaux: {
    instagram: "@votreboutique",
    facebook: "votreboutique",
  }
};

export default function BoutiqueSection() {
  return (
    <section
      className="w-full bg-ivory flex flex-col lg:flex-row items-center justify-center px-4 md:px-12 py-16 gap-12"
      style={{
        background: "var(--ivory, #FAF7F2)"
      }}
      id="la-boutique"
    >
      {/* Photo de la boutique */}
      <motion.div
        className="w-full max-w-md lg:max-w-xl rounded-xl overflow-hidden shadow-lg flex-shrink-0"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="/images/logo2.png"
            alt="Intérieur de la boutique SONIA"
            fill
            className="object-cover"
            loading="lazy"
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
      </motion.div>

      {/* Présentation + Infos */}
      <motion.div
        className="flex flex-col items-start max-w-xl flex-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl font-serif font-bold mb-3 text-charcoal"
          style={{ color: "var(--charcoal, #2C2C2C)" }}
        >
          La Boutique {boutique.nom}
        </h2>
        <p className="mb-5 text-base md:text-lg text-muted" style={{ color: "var(--muted, #8A8078)" }}>
          Un écrin chaleureux situé au cœur de Lomé, dédié à l’art du parfum.
          Profitez de conseils personnalisés et découvrez une sélection unique de fragrances d’exception.
        </p>
        <div className="mb-3 text-base text-black flex flex-col gap-1 font-light">
          <span><span className="font-medium">Adresse :</span> {boutique.adresse}</span>
          <span><span className="font-medium">Téléphone :</span> <a href={`tel:${boutique.telephone}`} className="underline text-gold hover:text-gold-dark transition">{boutique.telephone}</a></span>
          <span><span className="font-medium">Email :</span> <a href={`mailto:${boutique.email}`} className="underline text-gold hover:text-gold-dark transition">{boutique.email}</a></span>
        </div>

        <div className="mt-4 mb-7">
          <h3 className="font-semibold text-[var(--gold,#C9A96E)] mb-2">Horaires d&apos;ouverture</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-black text-sm">
            {Object.entries(boutique.horaires).map(([jour, horaires]) => (
              <li key={jour} className="flex justify-between">
                <span className="font-medium">{jour}</span>
                <span className={horaires === "Fermé" ? "text-red-500" : ""}>{horaires}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 mt-3 items-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=LOMÉ%2C%20TOGO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-full bg-black text-white font-medium text-sm shadow-lg transition hover:bg-charcoal"
          >
            Voir sur la carte
          </a>
          <a
            href="https://instagram.com/votreboutique"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gold hover:text-gold-dark text-sm"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/votreboutique"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gold hover:text-gold-dark text-sm"
          >
            Facebook
          </a>
        </div>
      </motion.div>
    </section>
  );
}