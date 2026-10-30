/**
 * Portfolio Data & Vector Visual Assets for Mei (BINUS B28 DKV)
 * Styled in Deep Plum (#37192C), Warm Vanilla (#FFF3E5), Manila Ochre (#EAD7B5), and Kraft Tan (#CBB493)
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Mei",
    institution: "BINUS University",
    batch: "Binusian 2028 (B28)",
    major: "Visual Communication Design (DKV / Desain Komunikasi Visual)",
    instagram: {
      handle: "@kyuu__rious",
      url: "https://www.instagram.com/kyuu__rious"
    },
    email: "mei.creative@binus.ac.id",
    tagline: "Curating ideas into tangible visual narratives.",
    personalStatement: "Dear little me, everything will be alright. We are making art, crafting stories, and archiving every beautiful fragment along the way.",
    bio: "Visual designer and DKV student at BINUS University with an obsession for tactile nostalgia, modern editorial layouts, and playful brand storytelling. I treat design like an intentional archive—blending physical craft (risograph, bookbinding, paper textures) with sharp digital brand systems.",
    toolkit: [
      { name: "Adobe Illustrator", level: "Expert", icon: "Ai" },
      { name: "Adobe Photoshop", level: "Advanced", icon: "Ps" },
      { name: "Adobe InDesign", level: "Advanced", icon: "Id" },
      { name: "Figma", level: "Advanced", icon: "Fg" },
      { name: "Procreate", level: "Advanced", icon: "Pr" },
      { name: "After Effects", level: "Intermediate", icon: "Ae" },
      { name: "Risograph & Bookbinding", level: "Craft", icon: "Rb" }
    ],
    disciplines: [
      "Visual Brand Identity",
      "Editorial & Publication Design",
      "Digital & Risograph Illustration",
      "Typography Systems",
      "Social Media Curation",
      "Art Direction & Packaging"
    ]
  },

  branding: [
    {
      id: "brand-kitsune",
      title: "Kitsune Botanicals (キツネ)",
      category: "Apothecary & Herbal Tea",
      year: "2024",
      badge: "FILE // BR-01",
      tag: "Brand Identity & Packaging",
      summary: "Modern Japanese herbal apothecary brand merging Kyoto botanicals with minimalist Swiss typography and amber glass packaging.",
      deliverables: ["Brand Identity", "Custom Kanji Logotype", "Eco-Packaging & Tea Canisters", "Wax Seal Monogram"],
      colors: ["#37192C", "#C99E64", "#4B5842", "#FFF3E5"],
      colorNames: ["Plum Extract", "Kyoto Ochre", "Matcha Moss", "Vanilla Washi"],
      description: "Kitsune Botanicals draws inspiration from traditional Kyoto herbal medicine and contemporary holistic wellness. The identity balances an asymmetrical Fox-Spirit kanji monogram with refined modern typography, evoking ritual, warmth, and purity.",
      caseDetails: {
        client: "Kitsune Botanicals Co. (Fictional Concept / DKV Studio Project)",
        challenge: "Differentiating an artisanal botanical brand in an oversaturated wellness market while paying authentic homage to traditional Japanese herbal philosophy.",
        solution: "Created a dual-script brandmark pairing custom brush kanji with Cormorant Garamond numerals and Space Mono apothecary batch numbers. Designed embossed recycled kraft boxes and amber glass dropper bottles with hot-stamped gold foil seals.",
        typography: "Custom Fox Kanji + Cormorant Garamond Display + Space Mono Data"
      }
    },
    {
      id: "brand-lumina",
      title: "Lumina Soundworks",
      category: "Acoustic & Spatial Audio Lab",
      year: "2024",
      badge: "FILE // BR-02",
      tag: "Dynamic Identity & Generative Art",
      summary: "Experimental spatial sound studio identity translating soundwaves and frequency harmonics into tactile geometric modular systems.",
      deliverables: ["Dynamic Logo System", "Vinyl Jacket & Cassette Art", "Sound Frequency Posters", "Interactive Brand Guide"],
      colors: ["#1F191D", "#EAD7B5", "#D86B43", "#37192C"],
      colorNames: ["Deep Void", "Manila Card", "Resonant Amber", "Midnight Wine"],
      description: "Lumina specializes in high-fidelity spatial audio and sonic experiences for visual media. The identity explores the kinetic nature of acoustic wave interference, creating an elastic visual identity that pulses with music.",
      caseDetails: {
        client: "Lumina Audio Lab (DKV Studio Final Project)",
        challenge: "Visualizing invisible sonic frequencies in a static two-dimensional branding format without falling into cliché equalizer bars.",
        solution: "Engineered a parametric logomark based on Lissajous acoustic resonance curves. Printed on heavy 350gsm uncoated stock with debossed concentric sound rings and metallic copper foil accents.",
        typography: "Plus Jakarta Sans Bold + DM Mono Acoustic Specs"
      }
    },
    {
      id: "brand-komorebi",
      title: "Komorebi Bakehouse (木漏れ日)",
      category: "Artisanal Patisserie",
      year: "2023",
      badge: "FILE // BR-03",
      tag: "Identity & Packaging Architecture",
      summary: "French-Japanese viennoiserie bakery identity named after 'sunlight filtering through leaves'. Warm rustic textures meet Parisian elegance.",
      deliverables: ["Visual Identity", "Custom Lettering", "Folded Pastry Box Architecture", "Stamp Kit & Menus"],
      colors: ["#442338", "#D4BD99", "#E88D67", "#FDFBF7"],
      colorNames: ["Mulberry Crust", "Butter Manila", "Apricot Glaze", "Pastry Cream"],
      description: "Komorebi Bakehouse celebrates the slow art of sourdough viennoiserie. The branding utilizes custom hand-drawn botanical crests, deckle-edge menu sheets, and custom die-cut origami pastry boxes requiring zero adhesive.",
      caseDetails: {
        client: "Komorebi Artisanal Bakery (Independent Studio Project)",
        challenge: "Designing eco-conscious bakery packaging that protects delicate laminated pastries while preserving an intimate, artisanal cafe atmosphere.",
        solution: "Engineered self-locking origami fold boxes from FSC-certified unbleached kraft paper, accented with vegetable-based soy ink rubber stamps and cotton baker's twine.",
        typography: "Playfair Display Italic + Courier Prime Batch Metadata"
      }
    },
    {
      id: "brand-selasar",
      title: "Selasar Nusantara",
      category: "Heritage Textile Collective",
      year: "2023",
      badge: "FILE // BR-04",
      tag: "Cultural Rebrand & Exhibition",
      summary: "Modernization of Indonesian ikat and traditional woven motifs into an accessible, youth-forward contemporary design language.",
      deliverables: ["Cultural Rebrand", "Woven Pattern Generator", "Exhibition Catalog", "Tote & Merch System"],
      colors: ["#37192C", "#C5A059", "#A84A38", "#FFF3E5"],
      colorNames: ["Heritage Plum", "Songket Gold", "Terracotta Clay", "Raw Cotton"],
      description: "Selasar Nusantara bridges indigenous Indonesian weaving masters with modern fashion design. By deconstructing the mathematical grids of Toraja and Sumba textiles, we developed an adaptable modular identity system.",
      caseDetails: {
        client: "Selasar Nusantara Foundation (Cultural Preservation Grant)",
        challenge: "Preserving the sacred symbolism of archipelago textile traditions without commodifying or flattening their deep cultural heritage.",
        solution: "Collaborated with regional artisan cooperatives to document oral histories. Designed a bi-scriptural bilingual catalog with risograph inserts and exposed hand-sewn thread bindings.",
        typography: "Cormorant Garamond + Plus Jakarta Sans"
      }
    }
  ],

  artworks: [
    {
      id: "art-pasar-santa",
      title: "Midnight at Pasar Santa",
      medium: "Risograph 3-Color Print (Fluorescent Pink, Aqua Blue, Plum)",
      year: "2024",
      tapeColor: "gold",
      tag: "Risograph Print",
      size: "A3 / 297 × 420 mm",
      caption: "Nostalgic Jakarta nighttime market scene, vintage vinyl booths, neon signs, and quiet street cats.",
      story: "Drawn after late-night digging through vintage cassette stalls in South Jakarta. Printed on 160gsm Munken Lynx paper with intentional slight misregistration to embrace the tactile warmth of the risograph machine."
    },
    {
      id: "art-botanical-reverie",
      title: "Botanical Reverie",
      medium: "Digital Mixed Media (Procreate, Gouache Textures & Colored Pencil)",
      year: "2024",
      tapeColor: "plum",
      tag: "Character & Flora",
      size: "Digital Canvas / 4000 × 5000 px",
      caption: "Surrealist floral character study inspired by tropical ferns, moss gardens, and solitary reflection.",
      story: "An exploration of emotional sanctuary through overgrown flora. The delicate line work mirrors traditional botanical etchings while the expressive plum and peach tones bring modern warmth."
    },
    {
      id: "art-y2k-memory",
      title: "Y2K Memory Card // 2004",
      medium: "Mixed-Media Collage & Vector Scrapbook",
      year: "2023",
      tapeColor: "kraft",
      tag: "Scrapbook & Y2K Art",
      size: "A4 Sticker & Print Sheet",
      caption: "Retro-futuristic cyber nostalgic stickers, transparent tech casings, and early 2000s handheld games.",
      story: "A love letter to early millennium tech aesthetics: translucent Game Boy plastics, minidiscs, and pixelated desktop pets. Part of a limited zine insert for DKV showcase."
    },
    {
      id: "art-tea-guardian",
      title: "The Tea Garden Guardian",
      medium: "Digital Linocut & Textured Print",
      year: "2024",
      tapeColor: "gold",
      tag: "Folklore & Mascot",
      size: "300 × 300 mm Art Print",
      caption: "Folklore-inspired mystical fox spirit resting among terraced tea leaves under a waxing moon.",
      story: "Created as promotional art for an independent tea collective. Features hand-carved woodcut texture brushes, earthy matcha tones, and gold foil accents."
    },
    {
      id: "art-echoes-rain",
      title: "Echoes in the Rain",
      medium: "Cinematic Digital Illustration & Film Grain",
      year: "2023",
      tapeColor: "plum",
      tag: "Narrative Illustration",
      size: "Digital Screen / 3840 × 2160 px",
      caption: "Atmospheric rainy commute through the elevated train platform in Jakarta.",
      story: "Capturing the melancholic serenity of waiting on the transit platform as rain drenches the metropolis. Layers of watercolor washes, wet pavement reflections, and subtle chromatic aberration."
    },
    {
      id: "art-jajanan-pasar",
      title: "Jajanan Pasar Delights",
      medium: "Die-Cut Holographic Sticker Sheet & Vector Illustration",
      year: "2024",
      tapeColor: "kraft",
      tag: "Sticker Pack & Merch",
      size: "150 × 210 mm Die-Cut Sheet",
      caption: "Collectible sticker pack paying homage to Indonesian street treats: Kue Cubit, Martabak, and Es Cendol.",
      story: "Designed for BINUS B28 Design Fair. Printed on waterproof holographic vinyl with custom die-cut borders, sold out within the first two hours of the exhibition."
    }
  ],

  editorial: [
    {
      id: "edit-hyphen",
      title: "HYPHEN: Issue 04 — Liminal Spaces",
      type: "Indie Art & Architecture Zine",
      year: "2024",
      specs: "64 Pages // A5 Format // French Fold Dust Jacket // Exposed Smyth-Sewn Spine",
      abstract: "HYPHEN is an independent publication exploring the quiet psychology of transition zones: stairwells, train vestibules, late-night convenience stores, and the space between who we were and who we are becoming.",
      role: "Editor-in-Chief, Lead Typographer, & Production Specialist",
      spreads: [
        {
          label: "Spread 01: Cover & Dust Jacket",
          caption: "Die-cut plum cardstock revealing the off-white interior riso title page.",
          quote: "To exist in the in-between is not to be lost; it is to be in motion."
        },
        {
          label: "Spread 02: Typography Essay — 'The Geometry of Quiet Rooms'",
          caption: "Double-page spread showcasing high-contrast editorial serifs and dynamic asymmetrical columns.",
          quote: "Architecture remembers the silence long after the footsteps fade."
        },
        {
          label: "Spread 03: Photo Essay & Risograph Centerfold",
          caption: "Grainy monochrome photography overlaid with translucent amber botanical film.",
          quote: "Light behaves differently when no one is asking it to perform."
        },
        {
          label: "Spread 04: Colophon & Specimen Index",
          caption: "Archival grid layout detailing typography licensing, paper weights, and production colophon.",
          quote: "Printed at BINUS DKV Print Lab on Munken Pure 120gsm."
        }
      ]
    },
    {
      id: "edit-typography",
      title: "The Anatomy of Elegance: A Typography Specimen",
      type: "Editorial Type Specimen Booklet",
      year: "2023",
      specs: "32 Pages // 190 × 260 mm // Blind Deboss Softcover // Uncoated Cotton Paper",
      abstract: "An exhaustive typographic study deconstructing the structural harmony of Renaissance serifs, modern editorial contrast, and optical kerning nuances.",
      role: "Concept, Layout Design, & Type Specimen Curation",
      spreads: [
        {
          label: "Spread 01: The Serif Hierarchy",
          caption: "Comparative glyph analysis showing ligature construction and bracket transitions.",
          quote: "Letters are miniature cathedrals erected on a baseline."
        },
        {
          label: "Spread 02: Optical Spacing Studies",
          caption: "Micro-typography specimens demonstrating rhythmic line-height at varying reading distances.",
          quote: "Elegance is the quiet discipline of white space."
        }
      ]
    },
    {
      id: "edit-solivagant",
      title: "Solivagant: Poems from the Commute",
      type: "Hardcover Poetry Anthology",
      year: "2023",
      specs: "80 Pages // 120 × 180 mm Pocket Edition // Bookcloth Hardcover with Gold Foil Stamping",
      abstract: "A pocket-sized anthology of Indonesian and English free-verse poems written during long train rides between Tangerang and Jakarta.",
      role: "Bookbinder, Cover Designer, & Interior Typesetter",
      spreads: [
        {
          label: "Spread 01: Cloth Cover & Gold Stamping",
          caption: "Deep plum bookcloth embossed with minimal gold foil transit coordinates.",
          quote: "Wandering alone through unfamiliar landscapes."
        },
        {
          label: "Spread 02: Interior Verse Layout",
          caption: "Generous margins and delicate drop-caps honoring the cadence of spoken poetry.",
          quote: "The train tracks hum the same song in every dialect."
        }
      ]
    }
  ],

  social: {
    campaign: {
      title: "METAMORPHOSIS // BINUS DKV B28 Annual Showcase",
      role: "Visual Identity Lead & Social Media Strategist",
      year: "2024",
      deliverables: ["Visual Key Asset", "9-Grid Countdown Campaign", "Motion Storyboard", "Visitor Enamel Badges"],
      metrics: "Reached over 28,000+ creative accounts; 1,400+ attendees registered through Instagram bio link.",
      concept: "Visualizing the metamorphic journey of design students from raw sketches to polished artifacts. Utilizing tactile liquid-chrome forms suspended inside vintage filing envelopes."
    },
    feed: [
      {
        id: "feed-1",
        caption: "Late studio nights at BINUS Anggrek campus ✨ Developing new riso test sheets for the upcoming zine issue. @kyuu__rious",
        likes: "428",
        comments: "32",
        type: "Studio BTS",
        date: "2 DAYS AGO"
      },
      {
        id: "feed-2",
        caption: "Color swatches for Kitsune Botanicals. Deep plum and matcha tones make the heart happy 🍵 #brandidentity #dkv #binus28",
        likes: "612",
        comments: "45",
        type: "Color Study",
        date: "5 DAYS AGO"
      },
      {
        id: "feed-3",
        caption: "Macro details of handbound French folds. Nothing matches the smell of fresh ink on uncoated 160gsm paper 📖",
        likes: "895",
        comments: "68",
        type: "Bookbinding",
        date: "1 WEEK AGO"
      },
      {
        id: "feed-4",
        caption: "'Midnight at Pasar Santa' 3-color risograph print test. Which colorway should I bring to the art market? 🐱✨",
        likes: "740",
        comments: "54",
        type: "Risograph",
        date: "2 WEEKS AGO"
      },
      {
        id: "feed-5",
        caption: "Typography dissection: Ligatures & optical kerning explorations for the editorial specimen series 🖋️",
        likes: "530",
        comments: "29",
        type: "Type Study",
        date: "2 WEEKS AGO"
      },
      {
        id: "feed-6",
        caption: "Holographic die-cut sticker test! Snack series: Kue cubit setengah matang will always have my heart 🥞",
        likes: "1,120",
        comments: "94",
        type: "Merchandise",
        date: "3 WEEKS AGO"
      },
      {
        id: "feed-7",
        caption: "Desk diary: A clean desk lasts approximately 4 minutes once the sketching session begins ✂️📎",
        likes: "488",
        comments: "37",
        type: "Desk Diary",
        date: "1 MONTH AGO"
      },
      {
        id: "feed-8",
        caption: "Key visual exploratory poster for BINUS DKV B28 Showcase 'METAMORPHOSIS' 🦋",
        likes: "1,340",
        comments: "118",
        type: "Event Key Visual",
        date: "1 MONTH AGO"
      },
      {
        id: "feed-9",
        caption: "Curating ideas into tangible visual narratives. Thank you for following along on this journey @kyuu__rious ✨",
        likes: "975",
        comments: "82",
        type: "Archive Note",
        date: "1 MONTH AGO"
      }
    ],
    workshop: {
      title: "'Ink & Pixel' Campus Design Workshop",
      description: "A 2-day interactive workshop series teaching first-year students how to translate analog print techniques into digital Figma and Illustrator design systems."
    }
  }
};

if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
