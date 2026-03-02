# 🛍️ Site Vitrine — Boutique Parfums

## Vision & Concept

Un site vitrine élégant pour une **boutique de parfums** proposant une sélection curatée de grandes marques et de parfums de niche. L'ambiance est raffinée mais accessible : tons crème, dorés et noirs, typographie serif chic, animations douces. Le site doit donner envie de visiter la boutique ou de commander en ligne.

---

## Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS + CSS variables custom
- **Animations** : Framer Motion
- **Fonts** : Google Fonts — `Cormorant Garamond` (display) + `Raleway` (corps)
- **Images** : Next/Image avec optimisation
- **Formulaire de contact** : React Hook Form + Resend (ou Nodemailer)
- **Déploiement** : Vercel

---

## Palette de Couleurs

```css
:root {
  --cream:     #F5F0E8;   /* fond principal */
  --ivory:     #FAF7F2;   /* fond sections claires */
  --gold:      #C9A96E;   /* accent doré */
  --gold-dark: #9E7B4A;   /* doré foncé */
  --black:     #0D0D0D;   /* noir profond */
  --charcoal:  #2C2C2C;   /* texte principal */
  --muted:     #8A8078;   /* texte secondaire */
  --white:     #FFFFFF;
}
```

---

## Structure des Pages

### 1. `/` — Page d'accueil

**Hero Section**
- Plein écran, fond sombre ou image boutique/intérieur
- Titre : "Votre boutique parfums à Lomé"
- Sous-titre : courte accroche (ex : "Une sélection exclusive de parfums de luxe et de niche")
- CTA : "Voir nos parfums" + "Nous trouver" (boutons côte à côte)
- Animation d'entrée fade-in staggered

**Section "La Boutique"**
- Deux colonnes : photo de l'intérieur de la boutique + texte de présentation
- Ambiance chaleureuse, humaine, locale
- Horaires d'ouverture mis en avant
- Lien vers Google Maps

**Section Sélection du Moment**
- Titre centré : "Nos coups de cœur"
- Grille 3 colonnes de cartes produits
- Chaque carte : Image, Marque, Nom du parfum, Famille olfactive, Prix
- Hover : overlay doré + bouton "Découvrir"

**Section Marques**
- Logos des marques distribuées (grille ou carousel)
- Fond ivoire, logos en niveaux de gris → couleur au hover

**Section Témoignages Clients**
- Citations Google Reviews ou avis clients
- Nom, note étoiles, date

**Section "Besoin de Conseils ?"**
- Fond noir
- Texte : mise en avant du conseil personnalisé en boutique
- CTA : "Prendre rendez-vous" ou "Nous contacter"

**Footer**
- Adresse, téléphone, email
- Horaires d'ouverture
- Réseaux sociaux (Instagram, Facebook)
- Navigation rapide
- Copyright

---

### 2. `/parfums` — Page Catalogue

- Filtres : Marque, Famille olfactive (Floral, Oriental, Boisé, Frais), Genre (Femme, Homme, Mixte), Format
- Grille produits : 3 colonnes desktop / 2 tablette / 1 mobile
- Badge "Nouveauté" ou "Coup de cœur" sur certains produits
- Tri : Prix, Nouveautés, Popularité

---

### 3. `/parfums/[slug]` — Page Produit

**Layout deux colonnes**
- Gauche : galerie images
- Droite :
  - Marque (petite typo uppercase)
  - Nom du parfum (grande typo serif)
  - Famille olfactive + concentration (EdP, EdT…)
  - Description
  - **Pyramide olfactive** : Tête / Cœur / Fond
  - Sélecteur de taille avec prix
  - Bouton "Disponible en boutique" ou "Commander"
  - Disponibilité en stock

**Section "Vous aimerez aussi"**
- 3 produits similaires

---

### 4. `/marques` — Page Marques

- Grille de toutes les marques distribuées
- Clic sur une marque → filtre la page catalogue
- Courte description de chaque marque (optionnel)

---

### 5. `/la-boutique` — Page À Propos

- Histoire de la boutique (qui sommes-nous, depuis quand)
- L'équipe / la gérante avec photo
- Photo de l'intérieur, ambiance
- Valeurs : sélection rigoureuse, conseil personnalisé, accessibilité
- Adresse + carte Google Maps intégrée
- Horaires détaillés

---

### 6. `/contact` — Page Contact

- Formulaire : Prénom, Email, Sujet, Message
- Adresse complète avec plan
- Numéro de téléphone cliquable
- Réseaux sociaux
- Option : lien vers WhatsApp Business

---

## Composants UI à Créer

| Composant | Description |
|-----------|-------------|
| `<Navbar />` | Logo, navigation, fond transparent → opaque au scroll |
| `<ProductCard />` | Image, marque, nom, famille, prix, hover effect |
| `<BrandLogo />` | Logo marque avec effet hover couleur |
| `<OlfactivePyramid />` | Visualisation des 3 niveaux olfactifs |
| `<SizeSelector />` | Sélection taille + prix dynamique |
| `<StoreInfo />` | Bloc adresse + horaires réutilisable |
| `<TestimonialCard />` | Avis client avec étoiles |
| `<AnimatedSection />` | Wrapper Framer Motion scroll reveal |
| `<GoldDivider />` | Séparateur décoratif doré |
| `<Footer />` | Footer avec infos boutique complètes |

---

## Animations & Interactions

```
Page load        → Fade-in hero text (staggered, 0.8s)
Scroll           → Sections révélées en fade-up
Hover carte      → Scale 1.02 + overlay doré (200ms)
Hover logo marque → Passage gris → couleur
Navbar scroll    → Fond transparent → blanc/crème opaque
Boutons CTA      → Fill animation au hover
```

---

## Typographie

```css
/* Titres */
font-family: 'Cormorant Garamond', serif;
font-weight: 300 | 400 | 600;
letter-spacing: 0.05em;

/* Corps, navigation, labels */
font-family: 'Raleway', sans-serif;
font-weight: 300 | 400 | 500;
letter-spacing: 0.08em;
```

---

## Données Exemple — Produit

```typescript
interface Parfum {
  id: string;
  slug: string;
  marque: string;          // ex: "Dior", "Maison Margiela", "Byredo"
  nom: string;
  description: string;
  famille: 'Floral' | 'Oriental' | 'Boisé' | 'Frais' | 'Chypré';
  genre: 'Femme' | 'Homme' | 'Mixte';
  concentration: 'EdC' | 'EdT' | 'EdP' | 'Parfum';
  notes: {
    tete: string[];
    coeur: string[];
    fond: string[];
  };
  formats: {
    taille: '30ml' | '50ml' | '75ml' | '100ml';
    prix: number;
    enStock: boolean;
  }[];
  images: string[];
  coupDeCoeur?: boolean;
  nouveaute?: boolean;
}
```

---

## Infos Boutique (à personnaliser)

```typescript
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
}
```

---

## Structure Dossiers

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  # Accueil
│   ├── parfums/
│   │   ├── page.tsx              # Catalogue
│   │   └── [slug]/page.tsx       # Fiche produit
│   ├── marques/
│   │   └── page.tsx
│   ├── la-boutique/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── ui/
│   ├── sections/
│   └── layout/
├── lib/
│   ├── data/                     # parfums.json, marques.json
│   └── utils.ts
├── public/
│   └── images/
└── styles/
    └── globals.css
```

---

## Checklist Développement

- [ ] Initialiser Next.js 14 + TypeScript + Tailwind
- [ ] Configurer les fonts (Cormorant Garamond + Raleway)
- [ ] Système de design (CSS variables, composants de base)
- [ ] Navbar responsive avec effet scroll
- [ ] Page d'accueil complète
- [ ] Page catalogue avec filtres
- [ ] Page produit dynamique
- [ ] Page marques
- [ ] Page "La Boutique" avec carte et horaires
- [ ] Formulaire de contact fonctionnel
- [ ] Animations Framer Motion
- [ ] Responsive mobile-first
- [ ] SEO metadata toutes les pages
- [ ] Déploiement Vercel

---

*Remplacer les données exemples par les vraies informations de votre boutique avant le développement.*