"use client";

import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { parfums } from "@/lib/data/parfums";

type SortKey = "popular" | "priceAsc" | "priceDesc" | "newest";

function minPriceXof(prices: number[]) {
  return prices.length ? Math.min(...prices) : 0;
}

export default function ParfumsPage() {
  const [q, setQ] = useState("");
  const [marque, setMarque] = useState<string>("Toutes");
  const [famille, setFamille] = useState<string>("Toutes");
  const [genre, setGenre] = useState<string>("Tous");
  const [taille, setTaille] = useState<string>("Toutes");
  const [sort, setSort] = useState<SortKey>("popular");

  const facets = useMemo(() => {
    const marques = Array.from(new Set(parfums.map((p) => p.marque))).sort();
    const familles = Array.from(new Set(parfums.map((p) => p.famille))).sort();
    const genres = Array.from(new Set(parfums.map((p) => p.genre))).sort();
    const tailles = Array.from(new Set(parfums.flatMap((p) => p.formats.map((f) => f.taille)))).sort();
    return { marques, familles, genres, tailles };
  }, []);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let list = parfums.filter((p) => {
      const matchQ =
        !needle ||
        p.nom.toLowerCase().includes(needle) ||
        p.marque.toLowerCase().includes(needle) ||
        p.famille.toLowerCase().includes(needle);

      const matchMarque = marque === "Toutes" || p.marque === marque;
      const matchFamille = famille === "Toutes" || p.famille === famille;
      const matchGenre = genre === "Tous" || p.genre === genre;
      const matchTaille = taille === "Toutes" || p.formats.some((f) => f.taille === taille);

      return matchQ && matchMarque && matchFamille && matchGenre && matchTaille;
    });

    list = list.sort((a, b) => {
      const aPrice = minPriceXof(a.formats.map((f) => f.prix));
      const bPrice = minPriceXof(b.formats.map((f) => f.prix));

      if (sort === "priceAsc") return aPrice - bPrice;
      if (sort === "priceDesc") return bPrice - aPrice;
      if (sort === "newest") return (b.nouveaute ? 1 : 0) - (a.nouveaute ? 1 : 0);

      // popular (simple heuristic for now)
      return (b.coupDeCoeur ? 1 : 0) - (a.coupDeCoeur ? 1 : 0);
    });

    return list;
  }, [q, marque, famille, genre, taille, sort]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-24 px-4 md:px-12" style={{ background: "var(--cream, #F5F0E8)" }}>
        <div className="max-w-6xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight" style={{ color: "var(--black,#0D0D0D)" }}>
              Parfums
            </h1>
            <p className="mt-2 text-sm md:text-base" style={{ color: "var(--muted,#8A8078)" }}>
              Filtrez par marque, famille olfactive, genre et format.
            </p>
          </header>

          <section className="mb-10 rounded-2xl bg-white/70 backdrop-blur p-4 md:p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-4">
                <label className="block text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                  Recherche
                </label>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Ex: Dior, Floral, Aventus…"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-(--gold,#C9A96E)"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                  Marque
                </label>
                <select
                  value={marque}
                  onChange={(e) => setMarque(e.target.value)}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
                >
                  <option value="Toutes">Toutes</option>
                  {facets.marques.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                  Famille
                </label>
                <select
                  value={famille}
                  onChange={(e) => setFamille(e.target.value)}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
                >
                  <option value="Toutes">Toutes</option>
                  {facets.familles.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                  Genre
                </label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
                >
                  <option value="Tous">Tous</option>
                  {facets.genres.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                  Format
                </label>
                <select
                  value={taille}
                  onChange={(e) => setTaille(e.target.value)}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
                >
                  <option value="Toutes">Toutes</option>
                  {facets.tailles.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-3">
                <label className="block text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                  Trier
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm"
                >
                  <option value="popular">Popularité</option>
                  <option value="newest">Nouveautés</option>
                  <option value="priceAsc">Prix (croissant)</option>
                  <option value="priceDesc">Prix (décroissant)</option>
                </select>
              </div>

              <div className="md:col-span-9 flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted,#8A8078)" }}>
                  {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setQ("");
                    setMarque("Toutes");
                    setFamille("Toutes");
                    setGenre("Tous");
                    setTaille("Toutes");
                    setSort("popular");
                  }}
                  className="rounded-full border border-(--gold,#C9A96E) px-4 py-2 text-xs uppercase tracking-[0.18em] text-(--gold,#C9A96E) hover:bg-(--gold,#C9A96E) hover:text-black transition-colors"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          </section>

          <section className="pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p) => {
                const prixMin = minPriceXof(p.formats.map((f) => f.prix));
                const badge = p.coupDeCoeur ? "Coup de cœur" : p.nouveaute ? "Nouveauté" : undefined;
                return (
                  <ProductCard
                    key={p.id}
                    href={`/parfums/${p.slug}`}
                    marque={p.marque}
                    nom={p.nom}
                    famille={p.famille}
                    prix={prixMin}
                    imageSrc={p.images[0] || "/images/boutique-hero.jpg"}
                    badge={badge}
                  />
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="mt-10 rounded-2xl bg-white/70 p-8 text-center" style={{ color: "var(--muted,#8A8078)" }}>
                Aucun parfum ne correspond à vos filtres.
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

