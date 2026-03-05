"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur text-white border-b border-(--gold,#C9A96E)" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo Sonia Parfumerie"
            width={1024}
            height={1024}
            className="h-20 md:h-24 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase">
          <Link href="/la-boutique" className="hover:text-(--gold,#C9A96E) transition-colors">
            La Boutique
          </Link>
          <Link href="#moment" className="hover:text-(--gold,#C9A96E) transition-colors">
            Sélection
          </Link>
          <Link href="#marques" className="hover:text-(--gold,#C9A96E) transition-colors">
            Marques
          </Link>
          <Link href="#temoignages" className="hover:text-(--gold,#C9A96E) transition-colors">
            Avis
          </Link>
          <Link href="#conseil" className="hover:text-(--gold,#C9A96E) transition-colors">
            Conseils
          </Link>
        </div>

        <Link
          href="/la-boutique"
          className="inline-flex items-center justify-center rounded-full border border-(--gold,#C9A96E) px-4 py-2 text-xs uppercase tracking-[0.18em] bg-black/80 text-(--gold,#C9A96E) hover:bg-(--gold,#C9A96E) hover:text-black transition-colors"
        >
          Visiter la boutique
        </Link>
      </nav>
    </header>
  );
}

