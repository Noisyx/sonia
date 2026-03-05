import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import ProductCard from "@/app/components/ProductCard";
import { parfums } from "@/lib/data/parfums";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatXof(amount: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(amount);
}

export async function generateStaticParams() {
  return parfums.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const parfum = parfums.find((p) => p.slug === slug);
  if (!parfum) return { title: "Parfum introuvable" };
  return {
    title: `${parfum.nom} — ${parfum.marque}`,
    description: parfum.description,
  };
}

export default async function ParfumPage({ params }: PageProps) {
  const { slug } = await params;
  const parfum = parfums.find((p) => p.slug === slug);
  if (!parfum) notFound();

  const heroImage = parfum.images[0] || "/images/boutique-hero.jpg";
  const minPrix = Math.min(...parfum.formats.map((f) => f.prix));
  const maxPrix = Math.max(...parfum.formats.map((f) => f.prix));

  const similar = parfums
    .filter((p) => p.slug !== parfum.slug)
    .filter((p) => p.famille === parfum.famille || p.marque === parfum.marque)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-24 px-4 md:px-12" style={{ background: "var(--cream, #F5F0E8)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted,#8A8078)" }}>
            <Link href="/parfums" className="hover:text-(--gold,#C9A96E) transition-colors">
              Parfums
            </Link>
            <span className="px-2">/</span>
            <span style={{ color: "var(--black,#0D0D0D)" }}>{parfum.nom}</span>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Galerie */}
            <div className="relative overflow-hidden rounded-3xl bg-black/80 aspect-[3/4]">
              <Image
                src={heroImage}
                alt={`${parfum.nom} — ${parfum.marque}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, 92vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              {(parfum.coupDeCoeur || parfum.nouveaute) && (
                <div className="absolute top-4 left-4 flex gap-2">
                  {parfum.coupDeCoeur && (
                    <span className="rounded-full bg-(--gold,#C9A96E) px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black">
                      Coup de cœur
                    </span>
                  )}
                  {parfum.nouveaute && (
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black">
                      Nouveauté
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Infos */}
            <div>
              <div className="text-xs uppercase tracking-[0.22em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                {parfum.marque}
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight" style={{ color: "var(--black,#0D0D0D)" }}>
                {parfum.nom}
              </h1>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs" style={{ color: "var(--charcoal,#2C2C2C)" }}>
                  {parfum.famille}
                </span>
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs" style={{ color: "var(--charcoal,#2C2C2C)" }}>
                  {parfum.genre}
                </span>
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs" style={{ color: "var(--charcoal,#2C2C2C)" }}>
                  {parfum.concentration}
                </span>
              </div>

              <p className="mt-6 text-sm md:text-base leading-relaxed" style={{ color: "var(--muted,#8A8078)" }}>
                {parfum.description}
              </p>

              <div className="mt-8 rounded-2xl bg-white/70 backdrop-blur p-4 md:p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted,#8A8078)" }}>
                    Prix
                  </div>
                  <div className="text-lg font-medium text-(--gold,#C9A96E)">
                    {minPrix === maxPrix ? formatXof(minPrix) : `${formatXof(minPrix)} – ${formatXof(maxPrix)}`}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-xs uppercase tracking-[0.18em] mb-3" style={{ color: "var(--muted,#8A8078)" }}>
                    Formats
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {parfum.formats.map((f) => (
                      <div
                        key={f.taille}
                        className={`rounded-xl border px-4 py-3 ${
                          f.enStock ? "border-black/10 bg-white" : "border-black/5 bg-white/50 opacity-60"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium" style={{ color: "var(--black,#0D0D0D)" }}>
                            {f.taille}
                          </span>
                          <span className="text-xs" style={{ color: "var(--muted,#8A8078)" }}>
                            {f.enStock ? "En stock" : "Rupture"}
                          </span>
                        </div>
                        <div className="mt-2 text-sm font-medium text-(--gold,#C9A96E)">{formatXof(f.prix)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-(--gold,#C9A96E) px-6 py-3 text-sm font-medium text-black hover:bg-(--gold-dark,#9E7B4A) transition-colors"
                  >
                    Appeler la boutique
                  </Link>
                  <Link
                    href="/la-boutique"
                    className="inline-flex items-center justify-center rounded-full border border-(--gold,#C9A96E) px-6 py-3 text-sm font-medium text-(--gold,#C9A96E) hover:bg-(--gold,#C9A96E) hover:text-black transition-colors"
                  >
                    Nous trouver
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {similar.length > 0 && (
            <section className="mt-16 pb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8" style={{ color: "var(--black,#0D0D0D)" }}>
                Vous aimerez aussi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {similar.map((p) => {
                  const prixMin = Math.min(...p.formats.map((f) => f.prix));
                  const badge = p.coupDeCoeur ? "Coup de cœur" : p.nouveaute ? "Nouveauté" : undefined;
                  return (
                    <div key={p.id}>
                      <ProductCard
                        href={`/parfums/${p.slug}`}
                        marque={p.marque}
                        nom={p.nom}
                        famille={p.famille}
                        prix={prixMin}
                        imageSrc={p.images[0] || "/images/boutique-hero.jpg"}
                        badge={badge}
                      />
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

