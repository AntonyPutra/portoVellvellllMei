/**
 * Projects Data & Portfolio Configurations
 * Vallerie Sharon Wibowo — Visual Communication Student (BINUS University @ Semarang)
 */

export const ASSETS_BASE_URL = import.meta.env.VITE_ASSETS_BASE_URL || "/assets-static";

export const PORTFOLIO_DATA = {
  profile: {
    name: "Vallerie Sharon Wibowo",
    headline: "Visual Communication Student",
    university: "BINUS University @ Semarang",
    campus: "Binus Semarang",
    major: "Visual Communication Design (DKV)",
    institution: "BINUS University @ Semarang // School of Design",
    instagram: "kyuu__rious",
    instagramUrl: "https://www.instagram.com/kyuu__rious",
    avatar: `${ASSETS_BASE_URL}/profile/mei-polaroid.webp`,
    email: "vallerie.creative@binus.ac.id",
    tagline: "Curating ideas into tangible visual narratives.",
    personalStatement: "If I don’t try, how would I know the outcome?",
    bio: "Visual Communication Student at BINUS University @ Semarang with a focus on visual storytelling across photography, digital illustration, basic video editing, and social media curation. I approach every creative project with curiosity, meticulous organization, and an experimental mindset.",
    polaroidCaption: "Vallerie Sharon Wibowo",
    polaroidSubcaption: "Visual Communication Student",
    disciplines: [
      "Photography",
      "Illustration / Digital Illustration",
      "Basic Video Editing",
      "Social Media Curation"
    ],
    toolkit: [
      { name: "Procreate", level: "Digital Painting & Illustration", code: "Pr" },
      { name: "Adobe Lightroom", level: "Color Grading & Photo Editing", code: "Lr" },
      { name: "Adobe Illustrator", level: "Vector Graphics & Branding", code: "Ai" },
      { name: "CapCut", level: "Video Editing & Motion", code: "Cc" }
    ]
  },

  tabs: [
    { id: "about", label: "INDEX // ABOUT ME", tabColor: "bg-[#FFF3E5] text-[#37192C]", num: "01" },
    { id: "branding", label: "BRANDING", tabColor: "bg-[#37192C] text-[#FFF3E5]", num: "02" },
    { id: "illustration", label: "ILLUSTRATION", tabColor: "bg-[#FFF3E5] text-[#37192C]", num: "03" },
    { id: "portfolio", label: "PORTFOLIO", tabColor: "bg-[#37192C] text-[#FFF3E5]", num: "04" },
    { id: "contact", label: "CONTACT // MEMO", tabColor: "bg-[#FFF3E5] text-[#37192C]", num: "05" }
  ],

  branding: [
    {
      id: "brand-kitsune",
      title: "Kitsune Botanicals (キツネ)",
      category: "Apothecary & Herbal Tea",
      year: "2024",
      badge: "FILE // BR-01",
      image: `${ASSETS_BASE_URL}/branding/kitsune-mockup.webp`,
      description: "Modern Japanese herbal apothecary brand merging Kyoto botanicals with minimalist Swiss typography and amber glass packaging architecture.",
      tags: ["Brand Identity", "Custom Kanji", "Eco-Packaging", "Gold Foil Seal"],
      deliverables: ["Custom Kanji Logotype", "Amber Dropper Bottles", "Tea Canisters", "Wax Seal Monogram"],
      colors: ["#37192C", "#C99E64", "#4B5842", "#FFF3E5"],
      colorNames: ["Plum Extract", "Kyoto Ochre", "Matcha Moss", "Vanilla Washi"],
      challenge: "Differentiating an artisanal botanical brand in an oversaturated wellness market while paying authentic homage to traditional Japanese herbal philosophy.",
      solution: "Engineered a dual-script brandmark pairing custom brush kanji with Cormorant Garamond numerals. Designed embossed unbleached kraft boxes and amber glass dropper bottles with hot-stamped gold foil seals.",
      typography: "Custom Kanji + Cormorant Garamond + Space Mono"
    },
    {
      id: "brand-lumina",
      title: "Lumina Soundworks",
      category: "Acoustic & Spatial Audio Lab",
      year: "2024",
      badge: "FILE // BR-02",
      image: `${ASSETS_BASE_URL}/branding/lumina-mockup.webp`,
      description: "Experimental spatial sound studio identity translating soundwaves and frequency harmonics into tactile geometric modular systems.",
      tags: ["Dynamic Identity", "Generative Art", "Vinyl Art", "Sound Lab"],
      deliverables: ["Dynamic Waveform Mark", "Vinyl Jacket & Cassette Art", "Frequency Posters", "Brand Manual"],
      colors: ["#1F191D", "#EAD7B5", "#D86B43", "#37192C"],
      colorNames: ["Deep Void", "Manila Card", "Resonant Amber", "Midnight Wine"],
      challenge: "Visualizing invisible sonic frequencies in a static 2D branding format without relying on cliché equalizer bars.",
      solution: "Engineered a parametric logomark based on Lissajous acoustic curves. Debossed concentric sound rings on heavy 350gsm uncoated cardstock with metallic copper foil accents.",
      typography: "Plus Jakarta Sans Bold + DM Mono Acoustic Specs"
    },
    {
      id: "brand-komorebi",
      title: "Komorebi Bakehouse (木漏れ日)",
      category: "French-Japanese Viennoiserie",
      year: "2023",
      badge: "FILE // BR-03",
      image: `${ASSETS_BASE_URL}/branding/komorebi-mockup.webp`,
      description: "Pastry cafe identity named after sunlight filtering through leaves. Self-locking origami pastry boxes with rubber stamp ink seals.",
      tags: ["Packaging Architecture", "Custom Lettering", "Origami Fold", "Patisserie"],
      deliverables: ["Visual Identity", "Origami Box Architecture", "Deckle Edge Menus", "Rubber Stamp Kit"],
      colors: ["#442338", "#D4BD99", "#E88D67", "#FDFBF7"],
      colorNames: ["Mulberry Crust", "Butter Manila", "Apricot Glaze", "Pastry Cream"],
      challenge: "Designing eco-conscious bakery packaging that protects delicate laminated pastries while preserving an intimate artisanal cafe atmosphere.",
      solution: "Engineered self-locking origami fold boxes from FSC-certified unbleached kraft paper, accented with vegetable-based soy ink rubber stamps and cotton baker's twine.",
      typography: "Playfair Display Italic + Courier Prime Batch Metadata"
    },
    {
      id: "brand-selasar",
      title: "Selasar Nusantara",
      category: "Heritage Textile Collective",
      year: "2023",
      badge: "FILE // BR-04",
      image: `${ASSETS_BASE_URL}/branding/selasar-mockup.webp`,
      description: "Contemporary visual archive for artisanal Indonesian woven tenun and batik pedalaman, focusing on sustainable dyeing traditions.",
      tags: ["Heritage Branding", "Archival System", "Handmade Paper", "Textiles"],
      deliverables: ["Archive Classification Tag System", "Woven Label Badges", "Textile Certificate", "Blind Emboss Seal"],
      colors: ["#2C1422", "#9C6A48", "#CBB493", "#F2ECE1"],
      colorNames: ["Tenun Indigo-Wine", "Terracotta Clay", "Soft Kraft", "Raw Cotton"],
      challenge: "Bridging ancestral traditional weaving craftsmanship with a clean, gallery-grade visual language for modern collectors.",
      solution: "Developed an archival index system mimicking museum classification slips, using raw cotton fiber tags stamped with archival plum dye and serial numbering.",
      typography: "Cormorant Garamond + Space Mono Archive Registry"
    }
  ],

  illustration: [
    {
      id: "art-solitude",
      title: "Solitude in the 24-Hour Laundromat",
      medium: "Digital Painting // Procreate + Custom Charcoal Brush",
      year: "2024",
      badge: "PLATE // 01",
      image: `${ASSETS_BASE_URL}/illustration/solitude-laundromat.webp`,
      description: "Neon hues reflecting on spinning washing machine drum glass at 2:00 AM.",
      story: "Drawn during mid-semester studio crunch. The hypnotic cycle of neon teal detergent foam and hum of old coin machines felt like the only quiet pocket in the city.",
      tags: ["Atmospheric", "Procreate", "Color Study", "Nocturne"],
      tapeColor: "plum"
    },
    {
      id: "art-botanical",
      title: "Botanical Specimen: Semarang Ferns",
      medium: "Mixed Media // Ink Line Work & Digital Watercolor",
      year: "2024",
      badge: "PLATE // 02",
      image: `${ASSETS_BASE_URL}/illustration/botanical-ferns.webp`,
      description: "Taxonomic field study of native Central Java ferns collected near Ungaran.",
      story: "Exploration in classical naturalist field illustrations. Each frond is mapped with faux handwritten binomial nomenclature and millimeter dimension callouts.",
      tags: ["Field Study", "Botanical", "Natural History", "Ink"],
      tapeColor: "gold"
    },
    {
      id: "art-snack",
      title: "Nostalgic Jajan Pasar Sticker Pack",
      medium: "Vector Illustration // Adobe Illustrator & Riso Halftone",
      year: "2023",
      badge: "PLATE // 03",
      image: `${ASSETS_BASE_URL}/illustration/jajan-pasar-stickers.webp`,
      description: "Retro mascot characters honoring Kue Putu, Lemper, and Kue Lapis Legit.",
      story: "Commissioned for an indie campus zine fair. Features 90s commercial mascot smiles with screen-printed misregistration halftone textures.",
      tags: ["Merchandise", "Stickers", "Y2K Retro", "Halftone"],
      tapeColor: "kraft"
    },
    {
      id: "art-train",
      title: "Window Seat // Argo Muria Express",
      medium: "Digital Illustration // CapCut Frame Study & Procreate",
      year: "2023",
      badge: "PLATE // 04",
      image: `${ASSETS_BASE_URL}/illustration/window-seat-train.webp`,
      description: "Golden hour silhouettes slicing through teak forests between Tawang and Gambir.",
      story: "Capturing the melancholic transition of traveling between university campus and home. The afternoon sun turned passenger silhouettes into amber silhouettes.",
      tags: ["Cinematic", "Landscape", "Golden Hour", "Transit"],
      tapeColor: "vanilla"
    },
    {
      id: "art-study",
      title: "The Typographer’s Cluttered Desk",
      medium: "Isometric Line Art & Risograph Print",
      year: "2023",
      badge: "PLATE // 05",
      image: `${ASSETS_BASE_URL}/illustration/typographers-desk.webp`,
      description: "Isometric tribute to bone folders, X-Acto knives, coffee rings, and Pantone swatch books.",
      story: "Drawn as an ode to late-night studio sessions where coffee rings merge with paper mockups. Hand-printed on 2-color Soy ink Risograph.",
      tags: ["Isometric", "Risograph", "Studio Life", "Line Art"],
      tapeColor: "plum"
    },
    {
      id: "art-rain",
      title: "Monsoon Afternoon in Kota Lama",
      medium: "Digital Gouache & Film Grain Texture",
      year: "2023",
      badge: "PLATE // 06",
      image: `${ASSETS_BASE_URL}/illustration/monsoon-semarang.webp`,
      description: "Dutch colonial roofs drenched in November tropical rain, lit by amber streetlamps.",
      story: "Rainy sketches sheltered under the arcade of Gereja Blenduk. Focused on capturing the reflective cobblestone puddles and misty humidity.",
      tags: ["Atmospheric", "Semarang", "Rain", "Gouache"],
      tapeColor: "gold"
    }
  ],

  // =========================================================================
  // TAB 04: PHOTOGRAPHY PORTFOLIO (MULTI-ALBUM ARCHIVE)
  // =========================================================================
  portfolio: [
    // 1. PORTRAIT & FASHION
    {
      id: "photo-p1",
      subCategory: "portrait",
      subCategoryLabel: "Portrait & Fashion",
      title: "Gilded Sfumato: The Studio Portrait",
      seriesTitle: "Sfumato & Silhouette Studies",
      roll: "ROLL #24-01A",
      image: `${ASSETS_BASE_URL}/portfolio/portrait/sfumato-portrait.webp`,
      camera: "Sony A7 IV // 35mm f/1.4 GM",
      exif: { iso: "200", shutter: "1/320s", aperture: "f/1.8", focal: "35mm" },
      location: "Studio C, BINUS Semarang",
      year: "2024",
      aspect: "aspect-[3/4]",
      description: "High-contrast editorial portrait study balancing continuous tungsten key light with deep plum velvet backdrops. Focused on sculptural bone structure and textile texture.",
      tags: ["Editorial", "Studio Lighting", "Tungsten Glow", "35mm Prime"]
    },
    {
      id: "photo-p2",
      subCategory: "portrait",
      subCategoryLabel: "Portrait & Fashion",
      title: "Whispers of Linen // Autumn Lookbook",
      seriesTitle: "Earth & Tailored Linen",
      roll: "ROLL #24-01B",
      image: `${ASSETS_BASE_URL}/portfolio/portrait/linen-lookbook.webp`,
      camera: "Fujifilm X-T5 // 56mm f/1.2 R WR",
      exif: { iso: "160", shutter: "1/500s", aperture: "f/1.4", focal: "56mm" },
      location: "Lawang Sewu Arcade, Semarang",
      year: "2024",
      aspect: "aspect-[4/5]",
      description: "Natural daylight lookbook capture highlighting raw linen drape against weathered colonial archways. Hand-graded with muted warm earth tones.",
      tags: ["Natural Light", "Fashion Lookbook", "Fuji Film Simulation", "Colonial Heritage"]
    },
    {
      id: "photo-p3",
      subCategory: "portrait",
      subCategoryLabel: "Portrait & Fashion",
      title: "Chroma Noir: The Avant-Garde Profile",
      seriesTitle: "Prismatic Gaze",
      roll: "ROLL #24-01C",
      image: `${ASSETS_BASE_URL}/portfolio/portrait/chroma-noir.webp`,
      camera: "Sony A7C // 85mm f/1.8",
      exif: { iso: "400", shutter: "1/200s", aperture: "f/2.0", focal: "85mm" },
      location: "Old Factory Loft, Semarang",
      year: "2023",
      aspect: "aspect-[3/4]",
      description: "Monochrome character study overlaid with split-diopter acrylic prisms for subtle optical flares and organic distortion.",
      tags: ["Prism FX", "Experimental", "Monochrome", "85mm Tele"]
    },

    // 2. STREET & SPONTANEOUS
    {
      id: "photo-s1",
      subCategory: "street",
      subCategoryLabel: "Street & Spontaneous",
      title: "Nocturne at Kota Lama Alley",
      seriesTitle: "Old Town Chronicles",
      roll: "ROLL #24-02A",
      image: `${ASSETS_BASE_URL}/portfolio/street/kota-lama-night.webp`,
      camera: "Leica Q2 // Summilux 28mm f/1.7",
      exif: { iso: "1600", shutter: "1/125s", aperture: "f/1.7", focal: "28mm" },
      location: "Kota Lama, Semarang",
      year: "2024",
      aspect: "aspect-[16/10]",
      description: "Spontaneous candid capture of a vintage Vespa rider passing under sodium vapor streetlights after an evening drizzle.",
      tags: ["Candid Street", "Nocturne", "Rain Wet Pavement", "28mm Wide"]
    },
    {
      id: "photo-s2",
      subCategory: "street",
      subCategoryLabel: "Street & Spontaneous",
      title: "Morning Market Rhythms: Pasar Johar",
      seriesTitle: "Daily Ephemera",
      roll: "ROLL #24-02B",
      image: `${ASSETS_BASE_URL}/portfolio/street/pasar-johar-dawn.webp`,
      camera: "Fujifilm X-T5 // 23mm f/2 WR",
      exif: { iso: "800", shutter: "1/250s", aperture: "f/2.8", focal: "23mm" },
      location: "Pasar Johar, Semarang",
      year: "2024",
      aspect: "aspect-[3/4]",
      description: "Shafts of morning dust light slicing through Karsten’s historic concrete mushroom columns as spice merchants arrange their morning produce.",
      tags: ["Documentary", "Heritage Architecture", "Morning Dust", "Human Interest"]
    },
    {
      id: "photo-s3",
      subCategory: "street",
      subCategoryLabel: "Street & Spontaneous",
      title: "The Crossing at Jalan Pemuda",
      seriesTitle: "Transit Solitude",
      roll: "ROLL #24-02C",
      image: `${ASSETS_BASE_URL}/portfolio/street/pemuda-crossing.webp`,
      camera: "Sony A7 IV // 35mm f/1.4 GM",
      exif: { iso: "100", shutter: "1/1000s", aperture: "f/2.2", focal: "35mm" },
      location: "Jalan Pemuda, Semarang",
      year: "2023",
      aspect: "aspect-[4/5]",
      description: "Geometric crosswalk shadows cast by harsh midday tropical sun, freezing a lone pedestrian caught mid-stride with yellow umbrella.",
      tags: ["Geometric Shadow", "High Contrast", "Midday Sun", "Minimal Street"]
    },

    // 3. EVENT & LIFESTYLE
    {
      id: "photo-e1",
      subCategory: "event",
      subCategoryLabel: "Event & Lifestyle",
      title: "Backstage Tension: Metamorphosis Showcase",
      seriesTitle: "Design Exhibition BTS",
      roll: "ROLL #24-03A",
      image: `${ASSETS_BASE_URL}/portfolio/event/backstage-showcase.webp`,
      camera: "Sony A7 IV // 24-70mm f/2.8 GM",
      exif: { iso: "3200", shutter: "1/160s", aperture: "f/2.8", focal: "48mm" },
      location: "Exhibition Hall, BINUS Semarang",
      year: "2024",
      aspect: "aspect-[16/10]",
      description: "Intimate backstage documentary capturing designers making final adhesive adjustments to exhibition panels five minutes before the gallery doors opened.",
      tags: ["Event BTS", "Low Light", "Documentary", "Campus Life"]
    },
    {
      id: "photo-e2",
      subCategory: "event",
      subCategoryLabel: "Event & Lifestyle",
      title: "The Indie Soundstage // Acoustic Echoes",
      seriesTitle: "Live Music Sessions",
      roll: "ROLL #24-03B",
      image: `${ASSETS_BASE_URL}/portfolio/event/acoustic-sessions.webp`,
      camera: "Fujifilm X-T5 // 33mm f/1.4 R LM WR",
      exif: { iso: "2500", shutter: "1/200s", aperture: "f/1.4", focal: "33mm" },
      location: "Kedai Kopi Antik, Semarang",
      year: "2024",
      aspect: "aspect-[3/4]",
      description: "Warm amber stage glow catching acoustic guitar strings and brass microphone grille during an intimate live acoustic session.",
      tags: ["Live Gig", "Atmospheric Amber", "Concert Photography", "Acoustic"]
    },
    {
      id: "photo-e3",
      subCategory: "event",
      subCategoryLabel: "Event & Lifestyle",
      title: "Zine Exchange & Screenprint Collective",
      seriesTitle: "Printmaker Chronicles",
      roll: "ROLL #24-03C",
      image: `${ASSETS_BASE_URL}/portfolio/event/zine-market.webp`,
      camera: "Sony A7C // 35mm f/1.8",
      exif: { iso: "640", shutter: "1/250s", aperture: "f/2.0", focal: "35mm" },
      location: "Semarang Art Market",
      year: "2023",
      aspect: "aspect-[4/5]",
      description: "Inky fingers inspecting fresh silkscreen test sheets laid out on butcher paper during the annual campus print exchange.",
      tags: ["Art Market", "Screenprint", "Hands at Work", "Community"]
    },

    // 4. CONCEPTUAL & STILL LIFE
    {
      id: "photo-c1",
      subCategory: "conceptual",
      subCategoryLabel: "Conceptual",
      title: "Ephemeral Refractions // Glass & Amber",
      seriesTitle: "Light & Liquid Geometry",
      roll: "ROLL #24-04A",
      image: `${ASSETS_BASE_URL}/portfolio/conceptual/glass-refractions.webp`,
      camera: "Sony A7 IV // 90mm f/2.8 Macro G OSS",
      exif: { iso: "100", shutter: "1/80s", aperture: "f/5.6", focal: "90mm" },
      location: "Natural Light Lab, Semarang",
      year: "2024",
      aspect: "aspect-[3/4]",
      description: "Macro study of afternoon caustics projected through antique ribbed glass bottles onto deckle-edge washi paper sheets.",
      tags: ["Macro", "Caustics", "Still Life", "Glass Refraction"]
    },
    {
      id: "photo-c2",
      subCategory: "conceptual",
      subCategoryLabel: "Conceptual",
      title: "The Architecture of Silence",
      seriesTitle: "Shadow Minimal",
      roll: "ROLL #24-04B",
      image: `${ASSETS_BASE_URL}/portfolio/conceptual/architecture-silence.webp`,
      camera: "Leica Q2 // Summilux 28mm f/1.7",
      exif: { iso: "100", shutter: "1/500s", aperture: "f/4.0", focal: "28mm" },
      location: "Grand Mosque Pavilion, Semarang",
      year: "2024",
      aspect: "aspect-[16/10]",
      description: "Monochrome architectural study dissecting the interplay of stark geometric shadow lines across white marble colonnades.",
      tags: ["Architectural", "Monochrome", "Minimalism", "Shadow Play"]
    },
    {
      id: "photo-c3",
      subCategory: "conceptual",
      subCategoryLabel: "Conceptual",
      title: "Botanical Cyanotype // Pressed Flora",
      seriesTitle: "Alternative Processes",
      roll: "ROLL #24-04C",
      image: `${ASSETS_BASE_URL}/portfolio/conceptual/cyanotype-flora.webp`,
      camera: "Sony A7 IV // 50mm f/1.4 GM",
      exif: { iso: "100", shutter: "1/200s", aperture: "f/2.8", focal: "50mm" },
      location: "Campus Darkroom, Semarang",
      year: "2023",
      aspect: "aspect-[4/5]",
      description: "Sun-exposed Prussian blue cyanotype print of wild Semarang mountain ferns, capturing delicate cellular veining under direct midday sunlight.",
      tags: ["Cyanotype", "Alternative Process", "Prussian Blue", "Pressed Flora"]
    }
  ]
};
