import Image from "next/image";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/Footer";

const boutique = {
  nom: "SONIA",
  adresseLigne1: "LOMÉ, TOGO",
  telephone: "+228 98061996",
  email: "sonia@gmail.com",
  horaires: [
    { jour: "Lundi", heures: "10h – 19h" },
    { jour: "Mardi", heures: "10h – 19h" },
    { jour: "Mercredi", heures: "10h – 19h" },
    { jour: "Jeudi", heures: "10h – 19h" },
    { jour: "Vendredi", heures: "10h – 19h" },
    { jour: "Samedi", heures: "10h – 19h30" },
    { jour: "Dimanche", heures: "Fermé" },
  ],
};

export default function LaBoutiquePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-24" style={{ background: "var(--cream, #F5F0E8)" }}>
        <section className="px-4 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                À propos
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight" style={{ color: "var(--black,#0D0D0D)" }}>
                La boutique {boutique.nom}
              </h1>
              <p className="mt-5 text-sm md:text-base leading-relaxed" style={{ color: "var(--muted,#8A8078)" }}>
                {boutique.nom} est une parfumerie à Lomé qui sélectionne des fragrances de luxe et de niche. Notre promesse :
                un conseil sincère, une expérience élégante, et des parfums qui racontent une histoire.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/70 backdrop-blur p-4 border border-black/5">
                  <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted,#8A8078)" }}>
                    Sélection
                  </div>
                  <div className="mt-1 text-sm font-medium" style={{ color: "var(--black,#0D0D0D)" }}>
                    Marques & niches
                  </div>
                </div>
                <div className="rounded-2xl bg-white/70 backdrop-blur p-4 border border-black/5">
                  <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted,#8A8078)" }}>
                    Conseil
                  </div>
                  <div className="mt-1 text-sm font-medium" style={{ color: "var(--black,#0D0D0D)" }}>
                    Sur mesure
                  </div>
                </div>
                <div className="rounded-2xl bg-white/70 backdrop-blur p-4 border border-black/5">
                  <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted,#8A8078)" }}>
                    Service
                  </div>
                  <div className="mt-1 text-sm font-medium" style={{ color: "var(--black,#0D0D0D)" }}>
                    Accueil premium
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-(--gold,#C9A96E) px-6 py-3 text-sm font-medium text-black hover:bg-(--gold-dark,#9E7B4A) transition-colors"
                >
                  Appeler
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-(--gold,#C9A96E) px-6 py-3 text-sm font-medium text-(--gold,#C9A96E) hover:bg-(--gold,#C9A96E) hover:text-black transition-colors"
                >
                  Envoyer un email
                </Link>
                <Link
                  href="/parfums"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-sm font-medium hover:bg-white transition-colors"
                >
                  Voir le catalogue
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-black/80 aspect-[4/5]">
              <Image
                src="/images/logo2.png"
                alt="Intérieur de la boutique"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, 92vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        <section className="mt-14 px-4 md:px-12 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-3xl bg-white/70 backdrop-blur p-6 md:p-8 border border-black/5">
              <h2 className="text-2xl md:text-3xl font-serif font-bold" style={{ color: "var(--black,#0D0D0D)" }}>
                Infos & horaires
              </h2>

              <div className="mt-6">
                <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted,#8A8078)" }}>
                  Adresse
                </div>
                <div className="mt-2 text-sm md:text-base" style={{ color: "var(--charcoal,#2C2C2C)" }}>
                  {boutique.adresseLigne1}
                </div>
              </div>

              <div className="mt-6">
                <div className="text-xs uppercase tracking-[0.18em] mb-3" style={{ color: "var(--muted,#8A8078)" }}>
                  Horaires
                </div>
                <ul className="space-y-2 text-sm">
                  {boutique.horaires.map((h) => (
                    <li key={h.jour} className="flex items-center justify-between gap-4">
                      <span style={{ color: "var(--charcoal,#2C2C2C)" }}>{h.jour}</span>
                      <span style={{ color: "var(--muted,#8A8078)" }}>{h.heures}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-3xl bg-black text-white p-6 md:p-8 border border-(--gold,#C9A96E)">
              <h2 className="text-2xl md:text-3xl font-serif font-bold" style={{ color: "var(--ivory,#FAF7F2)" }}>
                Nous trouver
              </h2>
              <p className="mt-4 text-sm md:text-base" style={{ color: "var(--muted,#8A8078)" }}>
                Cliquez pour ouvrir l’itinéraire sur Google Maps et venir découvrir nos nouveautés en boutique.
              </p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-(--gold,#C9A96E) px-6 py-3 text-sm font-medium text-black hover:bg-(--gold-dark,#9E7B4A) transition-colors"
              >
                Ouvrir Google Maps
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

