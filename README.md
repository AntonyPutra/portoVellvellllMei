# 📂 Mei's Archival File Folder Portfolio // BINUS B28 DKV

An interactive, production-ready, highly aesthetic skeuomorphic **"Archival File Folder & Scrapbook"** portfolio web application built with **React, Vite, Tailwind CSS, Lucide React, and Framer Motion** for **Mei**, a Visual Communication Design (DKV / Desain Komunikasi Visual) student at **BINUS University (Binusian 28 / B28)**.

> **“Curating ideas into tangible visual narratives.”**  
> *Instagram:* [@kyuu__rious](https://www.instagram.com/kyuu__rious)

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 18 + Vite (fast HMR and optimized production bundle)
- **Styling**: Tailwind CSS with custom skeuomorphic color tokens & drop shadows
- **Motion & Physics**: Framer Motion (spring physics for folder opening, tab transitions, and 3D hover effects)
- **Icons**: Lucide React
- **Asset Architecture**: Decoupled static asset pipeline consuming images from a centralized static server:
  ```javascript
  const ASSETS_BASE_URL = import.meta.env.VITE_ASSETS_BASE_URL || "http://100.73.16.92:8095";
  ```
- **Error Handling**: Graceful SVG vector fallbacks (`ArchivalImage`) so the portfolio renders flawlessly even if the asset server is offline or unreachable.

---

## 🎨 Visual Identity & Color System

| Token | Hex Value | Role & Usage |
|---|---|---|
| **Primary Deep Plum** | `#37192C` | Contrast tabs, dark accents, headings |
| **Vanilla Cream** | `#FFF3E5` | Paper sheets, folder jackets, light tabs |
| **Vintage Manila Ochre** | `#EAD7B5` / `#D4BD99` | Archival folder tone & divider edges |
| **Soft Kraft Tan** | `#CBB493` | Intermediate binder layering & kraft washi tape |
| **Interior Sheet White** | `#FDFBF7` / `#FFFFFF` | Document pages & case study cards |
| **Vintage Gold Accent** | `#D4AF37` | Foil stamps, metallic clips, active indicators |
| **Stamp Red** | `#B33939` | Distressed rubber stamps (*VERIFIED*, *DISPATCHED*) |
| **Plum Tinted Shadow** | `rgba(55, 25, 44, 0.15)` | Custom warm colored drop shadows |

---

## 📁 6-Layer Multi-Tabbed Filing Architecture

1. **`[INDEX // 01] - ABOUT ME`**:
   - Tilted Polaroid photo pinned with metallic brass paperclip and washi tape.
   - Official BINUS University Student ID card (`Class of 2028 - DKV`).
   - Personal statement: *“Dear little me, everything will be alright...”*
   - Bio, design philosophy, competencies, and creative toolkit (Illustrator, Photoshop, InDesign, Figma, Procreate, Riso & Bookbinding).
   - Clickable Instagram chip linked directly to [`@kyuu__rious`](https://www.instagram.com/kyuu__rious).

2. **`[BRANDING // 02] - BRANDING & IDENTITY`**:
   - 4 full case studies presented as loose file sheets:
     - **Kitsune Botanicals (キツネ)**: Kyoto apothecary & ceremonial matcha packaging.
     - **Lumina Soundworks**: Spatial audio lab dynamic wave identity & vinyl art.
     - **Komorebi Bakehouse (木漏れ日)**: Artisanal viennoiserie origami box packaging.
     - **Selasar Nusantara**: Modernized archipelago ikat & heritage textile collective.
   - Interactive **“Inspect Case File”** modal with design challenges, creative solutions, typography specs, and one-click copyable color palette swatches!

3. **`[ILLUSTRATION // 03] - ILLUSTRATION & SCRAPBOOK`**:
   - Organic scrapbook placement with tilted frames, washi tape corners, and pencil notes:
     - *Midnight at Pasar Santa* (3-Color Risograph Print)
     - *Botanical Reverie* (Mixed Media Flora Spirit)
     - *Y2K Memory Card // 2004* (Retro-futuristic cyber sticker sheet)
     - *The Tea Garden Guardian* (Textured Linocut Print)
     - *Echoes in the Rain* (Cinematic commuter train illustration)
     - *Jajanan Pasar Delights* (Die-cut vinyl sticker pack: Kue Cubit, Martabak, Es Cendol)
   - Click any artwork to open the **High-Resolution Lightbox** with artist journal notes.

4. **`[EDITORIAL // 04] - EDITORIAL & PUBLICATION`**:
   - **HYPHEN: Issue 04 — Liminal Spaces** (64-page indie art & architecture zine).
   - Interactive spread viewer carousel with bookmarks:
     - *Spread 01: Cover & French-Fold Dust Jacket*
     - *Spread 02: Typography Essay — "The Geometry of Quiet Rooms"*
     - *Spread 03: Photo Essay & Riso Centerfold*
     - *Spread 04: Colophon & Specimen Index*
   - Additional features for *The Anatomy of Elegance* type specimen booklet and *Solivagant* handbound poetry anthology.

5. **`[SOCIAL // 05] - SOCIAL MEDIA & EVENTS`**:
   - **METAMORPHOSIS**: BINUS DKV B28 Showcase visual identity and social campaign.
   - **Instagram 9-Grid Simulation**: Interactive preview of Mei’s curated visual diary on [`@kyuu__rious`](https://www.instagram.com/kyuu__rious) with likes, comments, and post previews.

6. **`[DISPATCH // 06] - REQUISITION MEMO & CONTACT`**:
   - Styled as an authentic archival memo (Form DKV-B28).
   - Interactive requisition form with animated **"DISPATCHED // ARCHIVE RECORD FILED"** red rubber stamp upon submission.
   - One-click **Copy Email** action (`mei.creative@binus.ac.id`) with toast feedback.
   - Direct Instagram button linking to [`@kyuu__rious`](https://www.instagram.com/kyuu__rious).

---

## ⚡ Interactive Features & Micro-Interactions

- **Spring-Physics Tab Switching**: Folder tabs elevate with smooth cubic-bezier transitions using Framer Motion layout animations.
- **Synthesized Web Audio Engine**: Soft organic paper shuffles, card clicks, and heavy rubber stamp thuds synthesized via the Web Audio API (zero audio files needed, 100% reliable, with an audio ON/OFF toggle).
- **Studio Desk Lamp Mood**: Toggle between natural daytime studio lighting and an atmospheric warm late-night studio glow.
- **Interactive 3D Hover Tilt**: Mouse tracking creates a realistic tactile depth effect on polaroid photos and dossier sheets.
- **Keyboard Shortcuts**: Press **1–6** on your keyboard to instantly switch folder drawers; press **ESC** to dismiss modals.
- **Fully Responsive**: Adapts seamlessly from wide multi-layer desktop desks to mobile touch binders.

---

## 🚀 How to Run Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```
