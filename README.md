# 📂 Mei's Archival File Folder Portfolio // BINUS B28 DKV

An interactive, highly aesthetic, skeuomorphic **"Archival File Folder & Scrapbook"** portfolio website crafted for **Mei**, a Visual Communication Design (DKV / Desain Komunikasi Visual) student at **BINUS University (Binusian 28 / B28)**.

> **“Curating ideas into tangible visual narratives.”**  
> *Instagram:* [@kyuu__rious](https://www.instagram.com/kyuu__rious)

---

## 🎨 Visual Identity & Color System

The design system follows a curated archival aesthetic combining vintage office stationery, Japanese/Swiss editorial grids, and nostalgic Y2K scrapbook elements:

| Token | Hex Value | Role & Usage |
|---|---|---|
| **Primary Deep Plum** | `#37192C` | Contrast tabs, dark accents, typography headers |
| **Vanilla Cream** | `#FFF3E5` | Document sheets, paper backgrounds, light folder covers |
| **Vintage Manila Ochre** | `#EAD7B5` / `#D4BD99` | Classic archival file jacket tone & dividers |
| **Soft Kraft Tan** | `#CBB493` | Intermediate binder layering & kraft tape |
| **Interior Sheet White** | `#FDFBF7` / `#FFFFFF` | Crisp paper contents & editorial cards |
| **Vintage Gold Accent** | `#D4AF37` | Foil stamps, metallic paperclips, status badges |
| **Stamp Red** | `#B33939` | Distressed rubber stamps (*VERIFIED*, *DISPATCHED*) |
| **Plum Tinted Shadow** | `rgba(55, 25, 44, 0.18)` | Custom warm drop shadows instead of cold harsh black |

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

3. **`[ARTWORK // 03] - ILLUSTRATION & SCRAPBOOK`**:
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

- **Spring-Physics Tab Switching**: Folder tabs elevate with smooth cubic-bezier transitions without page reloads or jitter.
- **Synthesized Web Audio Engine**: Soft organic paper shuffles, card clicks, and heavy rubber stamp thuds synthesized via the Web Audio API (zero audio files needed, 100% reliable, with an audio ON/OFF toggle).
- **Studio Desk Lamp Mood**: Toggle between natural daytime studio lighting and an atmospheric warm late-night studio glow.
- **Interactive 3D Hover Tilt**: Mouse tracking creates a realistic tactile depth effect on polaroid photos and dossier sheets.
- **Keyboard Shortcuts**: Press **1–6** on your keyboard to instantly switch folder drawers; press **ESC** to dismiss modals.
- **Fully Responsive**: Adapts seamlessly from wide multi-layer desktop desks to mobile touch binders.
- **Zero Bloat & 100% Vector**: Built with pure semantic HTML5, modern CSS3, and vanilla JavaScript with embedded SVG vector artwork.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any modern browser:

```bash
open index.html
```

Or run with a local static web server:

```bash
# Python 3
python3 -m http.server 8000

# Or with Node
npx serve .
```

Then visit `http://localhost:8000` in your browser.
