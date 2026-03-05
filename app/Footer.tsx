"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="w-full bg-black py-12 px-4 md:px-12 text-white font-serif"
      style={{ background: "var(--black, #0D0D0D)", color: "var(--white, #FFF)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Coordonnées */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-gold" style={{ color: "var(--gold, #C9A96E)" }}>
            Notre boutique
          </h3>
          <p className="mb-1">Parfumerie Élégance</p>
          <p className="mb-1">123 Avenue de la Liberté</p>
          <p className="mb-1">Lomé, Togo</p>
          <p>
            Tél&nbsp;:{" "}
            <a href="tel:+22891234567" className="hover:underline text-gold" style={{ color: "var(--gold, #C9A96E)" }}>
              +228 91 23 45 67
            </a>
          </p>
          <p>
            Email&nbsp;:{" "}
            <a href="mailto:contact@votreparfumerie.com" className="hover:underline text-gold" style={{ color: "var(--gold, #C9A96E)" }}>
              contact@votreparfumerie.com
            </a>
          </p>
        </div>

        {/* Horaires */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-gold" style={{ color: "var(--gold, #C9A96E)" }}>
            Horaires
          </h3>
          <ul className="text-sm">
            <li>Lun&nbsp;: Fermé</li>
            <li>Mar - Ven&nbsp;: 09h30 - 19h00</li>
            <li>Sam&nbsp;: 10h00 - 19h00</li>
            <li>Dim&nbsp;: 15h00 - 18h00</li>
          </ul>
        </div>

        {/* Navigation rapide */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-gold" style={{ color: "var(--gold, #C9A96E)" }}>
            Navigation rapide
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Accueil
              </Link>
            </li>
            <li>
              <a href="#boutique" className="hover:underline">
                La Boutique
              </a>
            </li>
            <li>
              <a href="#moment" className="hover:underline">
                Sélection du Moment
              </a>
            </li>
            <li>
              <a href="#marques" className="hover:underline">
                Marques
              </a>
            </li>
            <li>
              <a href="#temoignages" className="hover:underline">
                Témoignages
              </a>
            </li>
            <li>
              <a href="#conseil" className="hover:underline">
                Conseils
              </a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-gold" style={{ color: "var(--gold, #C9A96E)" }}>
            Suivez-nous
          </h3>
          <div className="flex gap-4 mb-3">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark text-2xl transition"
              style={{ color: "var(--gold, #C9A96E)" }}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-dark text-2xl transition"
              style={{ color: "var(--gold, #C9A96E)" }}
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
          <span className="block text-xs text-muted" style={{ color: "var(--muted, #8A8078)" }}>
            @votreparfumerie
          </span>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-12 border-t border-gold pt-6 text-center text-xs text-muted" style={{ borderColor: "var(--gold, #C9A96E)", color: "var(--muted, #8A8078)" }}>
        © {new Date().getFullYear()} Parfumerie Élégance. Tous droits réservés.
      </div>
    </footer>
  );
}