/**
 * Projects Data & Portfolio Configurations
 * Consumes image assets from static server with fallback architecture
 */

export const ASSETS_BASE_URL = import.meta.env.VITE_ASSETS_BASE_URL || "http://100.73.16.92:8095";

export const PORTFOLIO_DATA = {
  profile: {
    name: "Mei",
    university: "BINUS B28",
    batch: "Binusian 2028 (B28)",
    major: "Desain Komunikasi Visual",
    institution: "BINUS University School of Design",
    instagram: "kyuu__rious",
    instagramUrl: "https://www.instagram.com/kyuu__rious",
    avatar: `${ASSETS_BASE_URL}/profile/mei-polaroid.webp`,
    email: "mei.creative@binus.ac.id",
    tagline: "Curating ideas into tangible visual narratives.",
    personalStatement: "Dear little me, everything will be alright. We are making art, crafting stories, and archiving every beautiful fragment along the way.",
    bio: "Visual communication designer and DKV student at BINUS University with an obsession for tactile nostalgia, modern editorial layouts, and playful brand storytelling. I treat design like an intentional archive—blending physical craft (risograph, bookbinding, paper textures) with sharp digital brand systems.",
    disciplines: [
      "Visual Brand Identity",
      "Editorial & Bookbinding",
      "Digital & Riso Illustration",
      "Packaging Architecture",
      "Typography Systems",
      "Social Media Curation"
    ],
    toolkit: [
      { name: "Adobe Illustrator", level: "Vector & Identity", code: "Ai" },
      { name: "Adobe Photoshop", level: "Textures & Mockups", code: "Ps" },
      { name: "Adobe InDesign", level: "Editorial & Layout", code: "Id" },
      { name: "Figma", level: "UI Systems & Vector", code: "Fg" },
      { name: "Procreate", level: "Digital Painting", code: "Pr" },
      { name: "Risograph & Binding", level: "Analog Printmaking", code: "Rb" }
    ]
  },

  tabs: [
    { id: "about", label: "INDEX // ABOUT ME", tabColor: "bg-[#FFF3E5] text-[#37192C]", num: "01" },
    { id: "branding", label: "BRANDING", tabColor: "bg-[#37192C] text-[#FFF3E5]", num: "02" },
    { id: "illustration", label: "ILLUSTRATION", tabColor: "bg-[#FFF3E5] text-[#37192C]", num: "03" },
    { id: "editorial", label: "EDITORIAL", tabColor: "bg-[#37192C] text-[#FFF3E5]", num: "04" },
    { id: "social", label: "SOCIAL MEDIA", tabColor: "bg-[#FFF3E5] text-[#37192C]", num: "05" },
    { id: "contact", label: "CONTACT // MEMO", tabColor: "bg-[#37192C] text-[#FFF3E5]", num: "06" }
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
      description: "Modernization of Indonesian ikat and traditional archipelago woven motifs into an accessible, contemporary visual design language.",
      tags: ["Cultural Rebrand", "Heritage Woven", "Exhibition Catalog", "Archipelago"],
      deliverables: ["Cultural Rebrand", "Woven Pattern Generator", "Exhibition Catalog", "Tote & Merch System"],
      colors: ["#37192C", "#C5A059", "#A84A38", "#FFF3E5"],
      colorNames: ["Heritage Plum", "Songket Gold", "Terracotta Clay", "Raw Cotton"],
      challenge: "Preserving the sacred symbolism of archipelago textile traditions without commodifying or flattening their deep cultural heritage.",
      solution: "Collaborated with regional artisan cooperatives to document oral histories. Designed a bilingual catalog with risograph inserts and exposed hand-sewn thread bindings.",
      typography: "Cormorant Garamond + Plus Jakarta Sans"
    }
  ],

  illustration: [
    {
      id: "art-pasar-santa",
      title: "Midnight at Pasar Santa",
      medium: "Risograph 3-Color Print (Fluorescent Pink, Aqua, Plum)",
      year: "2024",
      badge: "RISO // 01",
      image: `${ASSETS_BASE_URL}/illustration/pasar-santa.webp`,
      description: "Nostalgic Jakarta nighttime market scene, vintage vinyl booths, neon signs, and quiet street cats.",
      tags: ["Risograph", "Jakarta Culture", "3-Color Print", "Vinyl Market"],
      tapeColor: "plum",
      size: "A3 / 297 × 420 mm",
      story: "Drawn after late-night digging through vintage cassette stalls in South Jakarta. Printed on 160gsm Munken Lynx paper with intentional slight misregistration to embrace tactile warmth."
    },
    {
      id: "art-botanical-reverie",
      title: "Botanical Reverie",
      medium: "Mixed Media (Procreate & Gouache Textures)",
      year: "2024",
      badge: "FLORA // 02",
      image: `${ASSETS_BASE_URL}/illustration/botanical-reverie.webp`,
      description: "Surrealist floral character study inspired by tropical ferns, moss gardens, and solitary reflection.",
      tags: ["Surrealism", "Flora", "Character Design", "Gouache"],
      tapeColor: "vanilla",
      size: "4000 × 5000 px Digital Canvas",
      story: "An exploration of emotional sanctuary through overgrown flora. Delicate linework mirrors botanical etchings while expressive plum and peach tones bring modern warmth."
    },
    {
      id: "art-y2k-memory",
      title: "Y2K Memory Card // 2004",
      medium: "Vector Collage & Holographic Foil Art",
      year: "2023",
      badge: "CYBER // 03",
      image: `${ASSETS_BASE_URL}/illustration/y2k-memory.webp`,
      description: "Retro-futuristic cyber nostalgic stickers, transparent tech casings, and early 2000s handheld games.",
      tags: ["Y2K Nostalgia", "Sticker Sheet", "Holographic", "Vector Scrapbook"],
      tapeColor: "plum",
      size: "A4 Sticker Sheet",
      story: "A love letter to early millennium tech aesthetics: translucent Game Boy plastics, minidiscs, and pixelated desktop pets. Part of a limited zine insert for DKV showcase."
    },
    {
      id: "art-tea-guardian",
      title: "The Tea Garden Guardian",
      medium: "Digital Linocut & Textured Print",
      year: "2024",
      badge: "MYTH // 04",
      image: `${ASSETS_BASE_URL}/illustration/tea-guardian.webp`,
      description: "Folklore-inspired mystical fox spirit resting among terraced tea leaves under a waxing moon.",
      tags: ["Folklore", "Linocut", "Kitsune", "Tea Terraces"],
      tapeColor: "vanilla",
      size: "300 × 300 mm Art Print",
      story: "Created as promotional art for an independent tea collective. Features hand-carved woodcut texture brushes, earthy matcha tones, and gold foil accents."
    },
    {
      id: "art-echoes-rain",
      title: "Echoes in the Rain",
      medium: "Cinematic Digital Illustration & Film Grain",
      year: "2023",
      badge: "TRANSIT // 05",
      image: `${ASSETS_BASE_URL}/illustration/echoes-rain.webp`,
      description: "Atmospheric rainy commute through the elevated train platform in Jakarta.",
      tags: ["Cinematic", "Urban Jakarta", "Bokeh", "Atmospheric"],
      tapeColor: "plum",
      size: "3840 × 2160 px (4K)",
      story: "Capturing the melancholic serenity of waiting on the transit platform as rain drenches the metropolis. Layers of watercolor washes, wet pavement reflections, and subtle chromatic aberration."
    },
    {
      id: "art-jajanan-pasar",
      title: "Jajanan Pasar Delights",
      medium: "Die-Cut Holographic Sticker Sheet",
      year: "2024",
      badge: "MERCH // 06",
      image: `${ASSETS_BASE_URL}/illustration/jajanan-pasar.webp`,
      description: "Collectible sticker pack paying homage to Indonesian street treats: Kue Cubit, Martabak, and Es Cendol.",
      tags: ["Die-Cut", "Indonesian Food", "Vinyl Stickers", "B28 Showcase"],
      tapeColor: "vanilla",
      size: "150 × 210 mm Die-Cut Sheet",
      story: "Designed for BINUS B28 Design Fair. Printed on waterproof holographic vinyl with custom die-cut borders, sold out within the first two hours of the exhibition."
    }
  ],

  editorial: [
    {
      id: "edit-hyphen",
      title: "HYPHEN: Issue 04 — Liminal Spaces",
      category: "Indie Art & Architecture Zine",
      year: "2024",
      badge: "PUB // 01",
      image: `${ASSETS_BASE_URL}/editorial/hyphen-cover.webp`,
      description: "64-page indie art & architecture publication exploring transition zones: stairwells, train vestibules, and late-night convenience stores.",
      tags: ["Zine", "Editorial", "Smyth-Sewn", "French Fold", "Risograph"],
      specs: "A5 Format // 64 Pages // Munken Pure 120gsm // Exposed Smyth-Sewn Spine",
      role: "Editor-in-Chief, Lead Typographer, & Bookbinder",
      spreads: [
        {
          label: "Spread 01: Cover & Dust Jacket",
          image: `${ASSETS_BASE_URL}/editorial/hyphen-spread-1.webp`,
          caption: "Die-cut plum cardstock revealing the off-white interior riso title page.",
          quote: "To exist in the in-between is not to be lost; it is to be in motion."
        },
        {
          label: "Spread 02: Typography Essay — 'The Geometry of Quiet Rooms'",
          image: `${ASSETS_BASE_URL}/editorial/hyphen-spread-2.webp`,
          caption: "Double-page spread showcasing high-contrast editorial serifs and dynamic asymmetrical columns.",
          quote: "Architecture remembers the silence long after the footsteps fade."
        },
        {
          label: "Spread 03: Photo Essay & Risograph Centerfold",
          image: `${ASSETS_BASE_URL}/editorial/hyphen-spread-3.webp`,
          caption: "Grainy monochrome photography overlaid with translucent amber botanical film.",
          quote: "Light behaves differently when no one is asking it to perform."
        },
        {
          label: "Spread 04: Colophon & Specimen Index",
          image: `${ASSETS_BASE_URL}/editorial/hyphen-spread-4.webp`,
          caption: "Archival grid layout detailing typography licensing, paper weights, and production colophon.",
          quote: "Printed at BINUS DKV Print Lab on Munken Pure 120gsm."
        }
      ]
    },
    {
      id: "edit-typography",
      title: "The Anatomy of Elegance",
      category: "Type Specimen Booklet",
      year: "2023",
      badge: "PUB // 02",
      image: `${ASSETS_BASE_URL}/editorial/typography-specimen.webp`,
      description: "Exhaustive typographic study deconstructing the structural harmony of Renaissance serifs and optical kerning nuances.",
      tags: ["Typography", "Type Specimen", "Blind Deboss", "Kerning"],
      specs: "190 × 260 mm // 32 Pages // Blind Deboss Softcover // Uncoated Cotton Paper",
      role: "Concept, Layout Design, & Type Specimen Curation",
      spreads: [
        {
          label: "Spread 01: The Serif Hierarchy",
          image: `${ASSETS_BASE_URL}/editorial/anatomy-spread-1.webp`,
          caption: "Comparative glyph analysis showing ligature construction and bracket transitions.",
          quote: "Letters are miniature cathedrals erected on a baseline."
        }
      ]
    },
    {
      id: "edit-solivagant",
      title: "Solivagant: Poems from the Commute",
      category: "Hardcover Poetry Anthology",
      year: "2023",
      badge: "PUB // 03",
      image: `${ASSETS_BASE_URL}/editorial/solivagant-cover.webp`,
      description: "Pocket-sized anthology of Indonesian and English free-verse poems written during long commuter train rides.",
      tags: ["Poetry", "Bookbinding", "Gold Foil Stamping", "Bookcloth"],
      specs: "120 × 180 mm Pocket Edition // 80 Pages // Plum Bookcloth Hardcover with Gold Foil",
      role: "Bookbinder, Cover Designer, & Typesetter",
      spreads: [
        {
          label: "Spread 01: Cloth Cover & Gold Stamping",
          image: `${ASSETS_BASE_URL}/editorial/solivagant-spread-1.webp`,
          caption: "Deep plum bookcloth embossed with minimal gold foil transit coordinates.",
          quote: "Wandering alone through unfamiliar landscapes."
        }
      ]
    }
  ],

  social: {
    campaign: {
      title: "METAMORPHOSIS // BINUS DKV B28 Annual Showcase",
      role: "Visual Identity Lead & Social Media Strategist",
      year: "2024",
      badge: "EXHIBITION // 2024",
      image: `${ASSETS_BASE_URL}/social/metamorphosis-poster.webp`,
      deliverables: ["Visual Key Asset", "9-Grid Countdown Campaign", "Motion Storyboard", "Visitor Badges"],
      metrics: "Reached over 28,000+ creative accounts; 1,400+ attendees registered through Instagram bio link.",
      concept: "Visualizing the metamorphic journey of design students from raw sketches to polished artifacts using liquid-chrome forms suspended inside vintage filing envelopes."
    },
    feed: [
      {
        id: "feed-1",
        caption: "Late studio nights at BINUS Anggrek campus ✨ Developing new riso test sheets for the upcoming zine issue. @kyuu__rious",
        likes: "428",
        comments: "32",
        type: "Studio BTS",
        image: `${ASSETS_BASE_URL}/social/feed-1.webp`
      },
      {
        id: "feed-2",
        caption: "Color swatches for Kitsune Botanicals. Deep plum and matcha tones make the heart happy 🍵 #brandidentity #dkv #binus28",
        likes: "612",
        comments: "45",
        type: "Color Study",
        image: `${ASSETS_BASE_URL}/social/feed-2.webp`
      },
      {
        id: "feed-3",
        caption: "Macro details of handbound French folds. Nothing matches the smell of fresh ink on uncoated 160gsm paper 📖",
        likes: "895",
        comments: "68",
        type: "Bookbinding",
        image: `${ASSETS_BASE_URL}/social/feed-3.webp`
      },
      {
        id: "feed-4",
        caption: "'Midnight at Pasar Santa' 3-color risograph print test. Which colorway should I bring to the art market? 🐱✨",
        likes: "740",
        comments: "54",
        type: "Risograph",
        image: `${ASSETS_BASE_URL}/social/feed-4.webp`
      },
      {
        id: "feed-5",
        caption: "Typography dissection: Ligatures & optical kerning explorations for the editorial specimen series 🖋️",
        likes: "530",
        comments: "29",
        type: "Type Study",
        image: `${ASSETS_BASE_URL}/social/feed-5.webp`
      },
      {
        id: "feed-6",
        caption: "Holographic die-cut sticker test! Snack series: Kue cubit setengah matang will always have my heart 🥞",
        likes: "1,120",
        comments: "94",
        type: "Merchandise",
        image: `${ASSETS_BASE_URL}/social/feed-6.webp`
      },
      {
        id: "feed-7",
        caption: "Desk diary: A clean desk lasts approximately 4 minutes once the sketching session begins ✂️📎",
        likes: "488",
        comments: "37",
        type: "Desk Diary",
        image: `${ASSETS_BASE_URL}/social/feed-7.webp`
      },
      {
        id: "feed-8",
        caption: "Key visual exploratory poster for BINUS DKV B28 Showcase 'METAMORPHOSIS' 🦋",
        likes: "1,340",
        comments: "118",
        type: "Event Key Visual",
        image: `${ASSETS_BASE_URL}/social/feed-8.webp`
      },
      {
        id: "feed-9",
        caption: "Curating ideas into tangible visual narratives. Thank you for following along on this journey @kyuu__rious ✨",
        likes: "975",
        comments: "82",
        type: "Archive Note",
        image: `${ASSETS_BASE_URL}/social/feed-9.webp`
      }
    ]
  }
};

