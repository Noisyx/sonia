export type ParfumFamille = "Floral" | "Oriental" | "Boisé" | "Frais" | "Chypré";
export type ParfumGenre = "Femme" | "Homme" | "Mixte";
export type ParfumConcentration = "EdC" | "EdT" | "EdP" | "Parfum";
export type ParfumTaille = "30ml" | "50ml" | "75ml" | "100ml";

export type Parfum = {
  id: string;
  slug: string;
  marque: string;
  nom: string;
  description: string;
  famille: ParfumFamille;
  genre: ParfumGenre;
  concentration: ParfumConcentration;
  formats: {
    taille: ParfumTaille;
    prix: number; // XOF
    enStock: boolean;
  }[];
  images: string[];
  coupDeCoeur?: boolean;
  nouveaute?: boolean;
};

export const parfums: Parfum[] = [
  {
    id: "p1",
    slug: "baccarat-rouge-540",
    marque: "Maison Francis Kurkdjian",
    nom: "Baccarat Rouge 540",
    description: "Un sillage ambré-boisé, lumineux et addictif.",
    famille: "Boisé",
    genre: "Mixte",
    concentration: "EdP",
    formats: [
      { taille: "50ml", prix: 195000, enStock: true },
      { taille: "100ml", prix: 295000, enStock: true },
    ],
    images: ["/images/Astrologer.jpg"],
    coupDeCoeur: true,
  },
  {
    id: "p2",
    slug: "aventus",
    marque: "Creed",
    nom: "Aventus",
    description: "Iconique, fruité-boisé, puissant et élégant.",
    famille: "Boisé",
    genre: "Homme",
    concentration: "EdP",
    formats: [
      { taille: "50ml", prix: 210000, enStock: true },
      { taille: "100ml", prix: 345000, enStock: false },
    ],
    images: ["/images/Dolce.jpg"],
  },
  {
    id: "p3",
    slug: "sauvage",
    marque: "Dior",
    nom: "Sauvage",
    description: "Frais, aromatique, boisé. Un classique moderne.",
    famille: "Frais",
    genre: "Homme",
    concentration: "EdT",
    formats: [
      { taille: "50ml", prix: 85000, enStock: true },
      { taille: "100ml", prix: 125000, enStock: true },
    ],
    images: ["/images/Sauvage Dior .jpg"],
    nouveaute: true,
  },
];

