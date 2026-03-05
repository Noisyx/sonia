"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProductCardProps = {
  href?: string;
  marque: string;
  nom: string;
  famille: string;
  prix: number;
  imageSrc: string;
  imageAlt?: string;
  badge?: "Coup de cœur" | "Nouveauté" | string;
};

export default function ProductCard({
  href,
  marque,
  nom,
  famille,
  prix,
  imageSrc,
  imageAlt,
  badge,
}: ProductCardProps) {
  const content = (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-[color:var(--ivory,#FAF7F2)] shadow-lg shadow-black/5 cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-black/80">
        <Image
          src={imageSrc}
          alt={imageAlt || nom}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute top-3 left-3 rounded-full bg-(--gold,#C9A96E) px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black">
            {badge}
          </span>
        )}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pt-4 pb-5">
        <div className="mb-1 text-[11px] uppercase tracking-[0.22em] text-muted" style={{ color: "var(--muted,#8A8078)" }}>
          {marque}
        </div>
        <h3 className="mb-1 text-lg font-serif tracking-tight text-black" style={{ color: "var(--black,#0D0D0D)" }}>
          {nom}
        </h3>
        <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted" style={{ color: "var(--muted,#8A8078)" }}>
          {famille}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-base font-medium text-(--gold,#C9A96E)">
            {new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "XOF",
              maximumFractionDigits: 0,
            }).format(prix)}
          </span>

          <span className="text-xs uppercase tracking-[0.18em] text-muted group-hover:text-(--gold,#C9A96E) transition-colors">
            Découvrir
          </span>
        </div>
      </div>
    </motion.article>
  );

  if (href) {
    return (
      <Link href={href} aria-label={`${nom} — ${marque}`}>
        {content}
      </Link>
    );
  }

  return content;
}

