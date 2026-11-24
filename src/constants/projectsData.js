/**
 * Projects Data & Portfolio Configurations
 * Vallerie Sharon Wibowo — Visual Communication Student (BINUS University @ Semarang)
 */

export const ASSETS_BASE_URL = import.meta.env.VITE_ASSETS_BASE_URL || "/assets-static";

// =========================================================================
// STREET PHOTOGRAPHY CASE STUDIES & ALBUMS (LEVEL 1 & LEVEL 2 ARCHITECTURE)
// =========================================================================
export const portfolioProjects = [
  {
    id: "holiday-skz",
    title: "Holiday (SKZ Inspired Series)",
    category: "Conceptual Photography",
    date: "November 2024",
    client: "Personal Creative Project",
    location: "Studio & Urban Set",
    gear: "Fujifilm X Series",
    badge: "Conceptual // 6 Photos",
    description: "Proyek fotografi personal terinspirasi estetika visual Holiday Stray Kids, menggabungkan pencahayaan kontras, nuansa nostalgia, dan gestur ekspresif.",
    coverImage: `${ASSETS_BASE_URL}/portfolio/holiday/cover.jpg`,
    photos: [
      {
        id: "hl-01",
        url: `${ASSETS_BASE_URL}/portfolio/holiday/01.jpg`,
        caption: "Komposisi visual bernuansa hangat dengan pencahayaan sinematik.",
        aspect: "aspect-[3/4]"
      },
      {
        id: "hl-02",
        url: `${ASSETS_BASE_URL}/portfolio/holiday/02.jpg`,
        caption: "Eksplorasi gestur dan bayangan berkarakter kuat.",
        aspect: "aspect-[3/4]"
      },
      {
        id: "hl-03",
        url: `${ASSETS_BASE_URL}/portfolio/holiday/03.jpg`,
        caption: "Fokus detail tekstur dan interaksi subjek dengan ruang.",
        aspect: "aspect-[3/4]"
      },
      {
        id: "hl-04",
        url: `${ASSETS_BASE_URL}/portfolio/holiday/04.jpg`,
        caption: "Gradasi warna lembut terinspirasi tone visual retro film.",
        aspect: "aspect-[3/4]"
      },
      {
        id: "hl-05",
        url: `${ASSETS_BASE_URL}/portfolio/holiday/05.jpg`,
        caption: "Refleksi dinamis cahaya dan bayangan natural.",
        aspect: "aspect-[3/4]"
      },
      {
        id: "hl-06",
        url: `${ASSETS_BASE_URL}/portfolio/holiday/06.jpg`,
        caption: "Penutup seri dengan atmosfer hening dan ekspresi intim.",
        aspect: "aspect-[3/4]"
      }
    ]
  },
  {
    id: "hollow-skz",
    title: "Hollow (SKZ Inspired Series)",
    category: "Mood & Portrait Photography",
    date: "November 2024",
    client: "Personal Creative Project",
    location: "Low-Key Studio Session",
    gear: "Fujifilm X Series",
    badge: "Mood Portrait // 4 Photos",
    description: "Eksplorasi visual gelap dengan bayangan tegas dan ekspresi teatrikal bernuansa sinematik yang intens.",
    coverImage: `${ASSETS_BASE_URL}/portfolio/hollow/cover.jpg`,
    photos: [
      {
        id: "hw-01",
        url: `${ASSETS_BASE_URL}/portfolio/hollow/01.jpg`,
        caption: "Nuansa monokromatik dengan siluet tajam dan misterius.",
        aspect: "aspect-[3/4]"
      },
      {
        id: "hw-02",
        url: `${ASSETS_BASE_URL}/portfolio/hollow/02.jpg`,
        caption: "Permainan chiaroscuro menonjolkan ekspresi emosional subjek.",
        aspect: "aspect-[3/4]"
      },
      {
        id: "hw-03",
        url: `${ASSETS_BASE_URL}/portfolio/hollow/03.jpg`,
        caption: "Sorotan cahaya terarah membelah ruang gelap.",
        aspect: "aspect-[3/4]"
      },
      {
        id: "hw-04",
        url: `${ASSETS_BASE_URL}/portfolio/hollow/04.jpg`,
        caption: "Kedalaman tatapan dan tekstur visual yang dramatis.",
        aspect: "aspect-[3/4]"
      }
    ]
  },
  {
    id: "passion-in-church",
    title: "Passion in Church",
    category: "Event & Church Documentary",
    date: "November 2024",
    client: "Community Documentary",
    location: "Semarang Church",
    gear: "Fujifilm X Series",
    badge: "Documentary // 4 Photos",
    description: "Dokumentasi kehangatan ibadah, ekspresi doa yang mendalam, dan dinamika pelayanan musik di dalam gereja.",
    coverImage: `${ASSETS_BASE_URL}/portfolio/passion-in-church/cover.jpg`,
    photos: [
      {
        id: "pic-01",
        url: `${ASSETS_BASE_URL}/portfolio/passion-in-church/01.jpg`,
        caption: "Momen khusyuk saat doa pembuka di bawah cahaya temaram aula.",
        aspect: "aspect-[16/10]"
      },
      {
        id: "pic-02",
        url: `${ASSETS_BASE_URL}/portfolio/passion-in-church/02.jpg`,
        caption: "Dinamika pelayanan musik dan pujian penuh penghayatan.",
        aspect: "aspect-[3/4]"
      },
      {
        id: "pic-03",
        url: `${ASSETS_BASE_URL}/portfolio/passion-in-church/03.jpg`,
        caption: "Sorot panggung dan kehangatan kebersamaan jemaat.",
        aspect: "aspect-[3/4]"
      },
      {
        id: "pic-04",
        url: `${ASSETS_BASE_URL}/portfolio/passion-in-church/04.jpg`,
        caption: "Ekspresi sukacita dan keintiman persekutuan.",
        aspect: "aspect-[16/10]"
      }
    ]
  },
  {
    id: "wonders-of-bali",
    title: "Wonders of Bali (2025)",
    category: "Travel & Landscape",
    date: "2025",
    client: "Personal Travel Journal",
    location: "Bali, Indonesia",
    gear: "Fujifilm X Series",
    badge: "Travel Series // 3 Photos",
    description: "Seri fotografi perjalanan mendokumentasikan keindahan alam, tekstur arsitektur khas pura, dan atmosfer tropis Pulau Dewata.",
    coverImage: `${ASSETS_BASE_URL}/portfolio/wonders-of-bali/cover.jpg`,
    photos: [
      {
        id: "wob-01",
        url: `${ASSETS_BASE_URL}/portfolio/wonders-of-bali/01.jpg`,
        caption: "Pintu gerbang candi bentar dengan latar panorama alam yang megah.",
        aspect: "aspect-[3/4]"
      },
      {
        id: "wob-02",
        url: `${ASSETS_BASE_URL}/portfolio/wonders-of-bali/02.jpg`,
        caption: "Tekstur ukiran batu vulkanik tradisional berlumut hijau.",
        aspect: "aspect-[3/4]"
      },
      {
        id: "wob-03",
        url: `${ASSETS_BASE_URL}/portfolio/wonders-of-bali/03.jpg`,
        caption: "Cahaya keemasan fajar membasahi siluet pura di tepi danau.",
        aspect: "aspect-[16/10]"
      }
    ]
  }
];

export const PORTFOLIO_DATA = {
  profile: {
    name: "Vallerie Sharon Wibowo",
    headline: "Visual Communication Student",
    university: "BINUS University @ Semarang",
    campus: "Binus Semarang",
    major: "Visual Communication Design (DKV)",
    institution: "BINUS University @ Semarang // School of Design",
    instagram: "curious__alien",
    instagramUrl: "https://www.instagram.com/curious__alien",
    avatar: `${ASSETS_BASE_URL}/profile/mei-polaroid.webp`,
    email: "valleriesharon02@gmail.com",
    whatsapp: "+62 822 2513 3107",
    whatsappUrl: "https://wa.me/6282225133107",
    tagline: "",
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
    { id: "about", label: "01 Intro", tabColor: "bg-[#FFF3E5] text-[#37192C]", num: "01" },
    { id: "profile", label: "02 Profile", tabColor: "bg-[#37192C] text-[#FFF3E5]", num: "02" },
    { id: "illustration", label: "03 Illustration", tabColor: "bg-[#FFF3E5] text-[#37192C]", num: "03" },
    { id: "portfolio", label: "04 Portfolio", tabColor: "bg-[#37192C] text-[#FFF3E5]", num: "04" },
    { id: "contact", label: "05 Contact", tabColor: "bg-[#FFF3E5] text-[#37192C]", num: "05" }
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

  // Portfolio nested project collections
  portfolio: portfolioProjects
};
