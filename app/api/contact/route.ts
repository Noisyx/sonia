import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  prenom?: string;
  email: string;
  sujet?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let data: ContactPayload;
  try {
    data = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const prenom = (data.prenom || "").toString().trim();
  const email = (data.email || "").toString().trim();
  const sujet = (data.sujet || "").toString().trim() || "Nouveau message (contact)";
  const message = (data.message || "").toString().trim();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Email invalide" }, { status: 400 });
  }
  if (!message || message.length < 5) {
    return NextResponse.json({ ok: false, error: "Message trop court" }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || user;

  if (!host || !port || !user || !pass || !to || !from) {
    return NextResponse.json(
      { ok: false, error: "SMTP non configuré (variables d’environnement manquantes)" },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[Contact] ${sujet}`,
      text: [
        `Prénom: ${prenom || "-"}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Erreur inconnue";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

