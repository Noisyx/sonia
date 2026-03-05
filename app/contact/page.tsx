 "use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/Footer";

const boutique = {
  nom: "SONIA",
  adresse: "LOMÉ, TOGO",
  telephone: "+228 98061996",
  email: "sonia@gmail.com",
  whatsapp: "+228 98061996",
};

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = sujet || `Contact — ${boutique.nom}`;
    const body = [
      `Prénom: ${prenom || "-"}`,
      `Email: ${email || "-"}`,
      "",
      message || "",
    ].join("\n");

    const params = new URLSearchParams({ subject, body });
    return `mailto:${boutique.email}?${params.toString()}`;
  }, [prenom, email, sujet, message]);

  async function submitToApi() {
    setStatus("sending");
    setErrorMsg("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ prenom, email, sujet, message }),
    });

    const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!res.ok || !json?.ok) {
      setStatus("error");
      setErrorMsg(json?.error || "Impossible d’envoyer le message pour le moment.");
      return;
    }

    setStatus("sent");
    setPrenom("");
    setEmail("");
    setSujet("");
    setMessage("");
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-24" style={{ background: "var(--cream, #F5F0E8)" }}>
        <section className="px-4 md:px-12">
          <div className="max-w-6xl mx-auto">
            <header className="mb-10">
              <div className="text-xs uppercase tracking-[0.22em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                Contact
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight" style={{ color: "var(--black,#0D0D0D)" }}>
                Nous contacter
              </h1>
              <p className="mt-2 text-sm md:text-base" style={{ color: "var(--muted,#8A8078)" }}>
                Une question, un conseil parfum, une disponibilité en boutique ? Écrivez-nous.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="rounded-3xl bg-white/70 backdrop-blur p-6 md:p-8 border border-black/5">
                <h2 className="text-2xl md:text-3xl font-serif font-bold" style={{ color: "var(--black,#0D0D0D)" }}>
                  Formulaire
                </h2>

                <form
                  className="mt-6 grid grid-cols-1 gap-4"
                  onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    try {
                      await submitToApi();
                    } catch {
                      setStatus("error");
                      setErrorMsg("Erreur réseau. Vous pouvez utiliser le fallback email.");
                    }
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                        Prénom
                      </label>
                      <input
                        value={prenom}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrenom(e.target.value)}
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-(--gold,#C9A96E)"
                        placeholder="Votre prénom"
                        autoComplete="given-name"
                        disabled={status === "sending"}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                        Email
                      </label>
                      <input
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-(--gold,#C9A96E)"
                        placeholder="vous@email.com"
                        type="email"
                        autoComplete="email"
                        required
                        disabled={status === "sending"}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                      Sujet
                    </label>
                    <input
                      value={sujet}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSujet(e.target.value)}
                      className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-(--gold,#C9A96E)"
                      placeholder="Ex: Conseil parfum boisé"
                      disabled={status === "sending"}
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] mb-2" style={{ color: "var(--muted,#8A8078)" }}>
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                      className="min-h-36 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-(--gold,#C9A96E)"
                      placeholder="Dites-nous ce que vous recherchez (notes, budget, occasion…)"
                      required
                      disabled={status === "sending"}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center justify-center rounded-full bg-(--gold,#C9A96E) px-6 py-3 text-sm font-medium text-black hover:bg-(--gold-dark,#9E7B4A) transition-colors disabled:opacity-60"
                    >
                      {status === "sending" ? "Envoi…" : "Envoyer"}
                    </button>
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center justify-center rounded-full border border-(--gold,#C9A96E) px-6 py-3 text-sm font-medium text-(--gold,#C9A96E) hover:bg-(--gold,#C9A96E) hover:text-black transition-colors"
                    >
                      Fallback email
                    </a>
                  </div>

                  {status === "sent" && (
                    <div className="rounded-2xl bg-white border border-black/5 p-4 text-sm" style={{ color: "var(--charcoal,#2C2C2C)" }}>
                      Message envoyé. Nous vous répondrons rapidement.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="rounded-2xl bg-white border border-black/5 p-4 text-sm" style={{ color: "var(--charcoal,#2C2C2C)" }}>
                      <span className="font-medium">Échec de l’envoi.</span> {errorMsg}
                    </div>
                  )}

                  <p className="text-xs" style={{ color: "var(--muted,#8A8078)" }}>
                    Si l’envoi direct échoue, utilisez “Fallback email”.
                  </p>
                </form>
              </div>

              <div className="rounded-3xl bg-black text-white p-6 md:p-8 border border-(--gold,#C9A96E)">
                <h2 className="text-2xl md:text-3xl font-serif font-bold" style={{ color: "var(--ivory,#FAF7F2)" }}>
                  Coordonnées
                </h2>

                <div className="mt-6 space-y-4 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted,#8A8078)" }}>
                      Adresse
                    </div>
                    <div className="mt-1" style={{ color: "var(--ivory,#FAF7F2)" }}>
                      {boutique.adresse}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted,#8A8078)" }}>
                      Téléphone
                    </div>
                    <a
                      className="mt-1 inline-block hover:text-(--gold,#C9A96E) transition-colors"
                      href={`tel:${boutique.telephone.replace(/\s/g, "")}`}
                      style={{ color: "var(--ivory,#FAF7F2)" }}
                    >
                      {boutique.telephone}
                    </a>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted,#8A8078)" }}>
                      Email
                    </div>
                    <a
                      className="mt-1 inline-block hover:text-(--gold,#C9A96E) transition-colors"
                      href={`mailto:${boutique.email}`}
                      style={{ color: "var(--ivory,#FAF7F2)" }}
                    >
                      {boutique.email}
                    </a>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted,#8A8078)" }}>
                      WhatsApp
                    </div>
                    <a
                      className="mt-1 inline-block hover:text-(--gold,#C9A96E) transition-colors"
                      href={`https://wa.me/${boutique.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--ivory,#FAF7F2)" }}
                    >
                      Écrire sur WhatsApp
                    </a>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/la-boutique"
                    className="inline-flex items-center justify-center rounded-full border border-(--gold,#C9A96E) px-6 py-3 text-sm font-medium text-(--gold,#C9A96E) hover:bg-(--gold,#C9A96E) hover:text-black transition-colors"
                  >
                    Horaires & adresse
                  </Link>
                  <Link
                    href="/parfums"
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition-colors"
                  >
                    Voir le catalogue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-14">
          <Footer />
        </div>
      </main>
    </>
  );
}

