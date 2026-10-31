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
    id: "kota-lama-nocturne",
    title: "Kota Lama Nocturne: Sepeda & Cahaya Natrium",
    category: "Street Photography",
    date: "Oktober 2024",
    client: "Personal Street Exploration",
    location: "Kota Lama & Gereja Blenduk, Semarang",
    gear: "Sony A7 IV / 35mm f1.4 GM",
    badge: "Street Photography // 8 Photos",
    description: "Dokumentasi visual jalanan malam hari menyusuri lorong-lorong peninggalan kolonial di Kota Lama Semarang. Menangkap pantulan aspal basah pasca hujan gerimis di bawah temaram lampu natrium dan pengendara motor klasik.",
    coverImage: `${ASSETS_BASE_URL}/portfolio/kota-lama/cover.webp`,
    photos: [
      {
        id: "kl-01",
        url: `${ASSETS_BASE_URL}/portfolio/kota-lama/01.webp`,
        caption: "Lampu natrium kuning membelah kabut malam di lorong Gereja Blenduk.",
        aspect: "aspect-[16/10]",
        exif: "1/125s • f/1.4 • ISO 1600"
      },
      {
        id: "kl-02",
        url: `${ASSETS_BASE_URL}/portfolio/kota-lama/02.webp`,
        caption: "Siluet pengendara Vespa klasik melintasi genangan air di depan Gedung Marba.",
        aspect: "aspect-[3/4]",
        exif: "1/160s • f/1.8 • ISO 2000"
      },
      {
        id: "kl-03",
        url: `${ASSETS_BASE_URL}/portfolio/kota-lama/03.webp`,
        caption: "Pintu kayu jati berkarat dengan gembok tembaga tua berlumut.",
        aspect: "aspect-[4/5]",
        exif: "1/80s • f/2.0 • ISO 800"
      },
      {
        id: "kl-04",
        url: `${ASSETS_BASE_URL}/portfolio/kota-lama/04.webp`,
        caption: "Pantulan neon merah kedai kopi antik di atas genangan aspal berlubang.",
        aspect: "aspect-[1/1]",
        exif: "1/200s • f/1.4 • ISO 1250"
      },
      {
        id: "kl-05",
        url: `${ASSETS_BASE_URL}/portfolio/kota-lama/05.webp`,
        caption: "Kucing jalanan berteduh di bawah teras arkade kolonial saat gerimis.",
        aspect: "aspect-[3/4]",
        exif: "1/100s • f/1.8 • ISO 3200"
      },
      {
        id: "kl-06",
        url: `${ASSETS_BASE_URL}/portfolio/kota-lama/06.webp`,
        caption: "Lengkung jendela kaca patri memantulkan lalu lalang lampu mobil.",
        aspect: "aspect-[16/10]",
        exif: "1/250s • f/2.8 • ISO 640"
      },
      {
        id: "kl-07",
        url: `${ASSETS_BASE_URL}/portfolio/kota-lama/07.webp`,
        caption: "Pengamen biola tua memainkan tembang di sudut jembatan Berok.",
        aspect: "aspect-[4/5]",
        exif: "1/125s • f/1.4 • ISO 2500"
      },
      {
        id: "kl-08",
        url: `${ASSETS_BASE_URL}/portfolio/kota-lama/08.webp`,
        caption: "Sudut jalan hening jelang pukul dua pagi di bawah kanopi besi tempa.",
        aspect: "aspect-[3/4]",
        exif: "1/60s • f/1.4 • ISO 1600"
      }
    ]
  },
  {
    id: "pasar-johar-dawn",
    title: "Denyut Fajar Pasar Johar: Karsten & Rempah",
    category: "Street Documentary",
    date: "Agustus 2024",
    client: "Visual Heritage Study",
    location: "Pasar Johar, Semarang",
    gear: "Fujifilm X-T5 / 23mm f2.0 WR",
    badge: "Street Documentary // 8 Photos",
    description: "Esai foto jalanan mendokumentasikan dinamika pedagang rempah dan sayur saat fajar merekah di dalam mahakarya arsitektur kolom jamur Thomas Karsten. Berkas cahaya pagi yang menembus kisi-kisi ventilasi menciptakan drama siluet natural.",
    coverImage: `${ASSETS_BASE_URL}/portfolio/pasar-johar/cover.webp`,
    photos: [
      {
        id: "pj-01",
        url: `${ASSETS_BASE_URL}/portfolio/pasar-johar/01.webp`,
        caption: "Berkas cahaya matahari fajar menembus kolom jamur beton Pasar Johar.",
        aspect: "aspect-[16/10]",
        exif: "1/500s • f/2.8 • ISO 400"
      },
      {
        id: "pj-02",
        url: `${ASSETS_BASE_URL}/portfolio/pasar-johar/02.webp`,
        caption: "Tangan terampil menimbang cengkeh dan kapulaga di atas timbangan bebek tua.",
        aspect: "aspect-[4/5]",
        exif: "1/250s • f/2.0 • ISO 800"
      },
      {
        id: "pj-03",
        url: `${ASSETS_BASE_URL}/portfolio/pasar-johar/03.webp`,
        caption: "Keranjang bambu anyaman penuh cabai rawit merah menyala berlatar dinding semen.",
        aspect: "aspect-[1/1]",
        exif: "1/320s • f/2.8 • ISO 320"
      },
      {
        id: "pj-04",
        url: `${ASSETS_BASE_URL}/portfolio/pasar-johar/04.webp`,
        caption: "Pedagang jamu gendong meracik kunyit asam di sela riuhnya tawar menawar.",
        aspect: "aspect-[3/4]",
        exif: "1/200s • f/2.0 • ISO 640"
      },
      {
        id: "pj-05",
        url: `${ASSETS_BASE_URL}/portfolio/pasar-johar/05.webp`,
        caption: "Kuli panggul karung bawang melangkah di tangga berundak beton cagar budaya.",
        aspect: "aspect-[3/4]",
        exif: "1/400s • f/3.2 • ISO 400"
      },
      {
        id: "pj-06",
        url: `${ASSETS_BASE_URL}/portfolio/pasar-johar/06.webp`,
        caption: "Asap rokok kretek melayang bersama aroma daun pisang dan ketumbar.",
        aspect: "aspect-[16/10]",
        exif: "1/160s • f/2.0 • ISO 1250"
      },
      {
        id: "pj-07",
        url: `${ASSETS_BASE_URL}/portfolio/pasar-johar/07.webp`,
        caption: "Senyum hangat penjual tempe mendoan menyambut pembeli langganan.",
        aspect: "aspect-[4/5]",
        exif: "1/250s • f/2.0 • ISO 500"
      },
      {
        id: "pj-08",
        url: `${ASSETS_BASE_URL}/portfolio/pasar-johar/08.webp`,
        caption: "Perspektif tinggi memamerkan simetri atap sirip ventilasi Karsten.",
        aspect: "aspect-[16/10]",
        exif: "1/640s • f/4.0 • ISO 200"
      }
    ]
  },
  {
    id: "penyeberang-pemuda",
    title: "Penyeberang Jalan Pemuda: Bayangan & Kecepatan",
    category: "Street & Urban Geometry",
    date: "Mei 2024",
    client: "Independent Urban Essay",
    location: "Simpang Lima & Jl. Pemuda, Semarang",
    gear: "Leica Q2 / Summilux 28mm f1.7",
    badge: "Urban Geometry // 7 Photos",
    description: "Eksplorasi garis-garis zebra cross, bayangan sudut tajam terik matahari tropis tengah hari, dan figur manusia urban yang terisolasi dalam ritme cepat kota metropolitan Jawa Tengah.",
    coverImage: `${ASSETS_BASE_URL}/portfolio/jalan-pemuda/cover.webp`,
    photos: [
      {
        id: "jp-01",
        url: `${ASSETS_BASE_URL}/portfolio/jalan-pemuda/01.webp`,
        caption: "Siluet tunggal pejalan kaki berpayung kuning menyeberang zebra cross bersudut miring.",
        aspect: "aspect-[3/4]",
        exif: "1/1000s • f/4.0 • ISO 100"
      },
      {
        id: "jp-02",
        url: `${ASSETS_BASE_URL}/portfolio/jalan-pemuda/02.webp`,
        caption: "Bayangan tiang lampu lalu lintas memotong laju bus kota secara geometris.",
        aspect: "aspect-[16/10]",
        exif: "1/800s • f/2.8 • ISO 100"
      },
      {
        id: "jp-03",
        url: `${ASSETS_BASE_URL}/portfolio/jalan-pemuda/03.webp`,
        caption: "Refleksi kaca fasad gedung perkantoran memperbanyak bayangan pedestrian.",
        aspect: "aspect-[4/5]",
        exif: "1/1250s • f/3.5 • ISO 100"
      },
      {
        id: "jp-04",
        url: `${ASSETS_BASE_URL}/portfolio/jalan-pemuda/04.webp`,
        caption: "Langkah tergesa siswi sekolah di atas trotoar bermotif grafis paving.",
        aspect: "aspect-[3/4]",
        exif: "1/640s • f/2.0 • ISO 160"
      },
      {
        id: "jp-05",
        url: `${ASSETS_BASE_URL}/portfolio/jalan-pemuda/05.webp`,
        caption: "Pemberhentian lampu merah Simpang Lima dilihat dari perspektif aspal rendah.",
        aspect: "aspect-[16/10]",
        exif: "1/500s • f/2.8 • ISO 100"
      },
      {
        id: "jp-06",
        url: `${ASSETS_BASE_URL}/portfolio/jalan-pemuda/06.webp`,
        caption: "Pekerja kantor melirik arloji di bawah naungan pohon asam tua.",
        aspect: "aspect-[4/5]",
        exif: "1/320s • f/1.7 • ISO 200"
      },
      {
        id: "jp-07",
        url: `${ASSETS_BASE_URL}/portfolio/jalan-pemuda/07.webp`,
        caption: "Garis bayangan pagar besi menciptakan pola bergaris ritmis di aspal panas.",
        aspect: "aspect-[1/1]",
        exif: "1/1600s • f/4.5 • ISO 100"
      }
    ]
  },
  {
    id: "stasiun-tawang-gerimis",
    title: "Stasiun Tawang: Gerimis, Kereta, dan Penantian",
    category: "Street & Transit",
    date: "Januari 2024",
    client: "Commuter Life Chronicles",
    location: "Stasiun Semarang Tawang",
    gear: "Sony A7C / 50mm f1.8",
    badge: "Transit Life // 7 Photos",
    description: "Rekaman atmosfer melankolis ruang tunggu stasiun bersejarah berlantai marmer kolonial dan peron beratap lengkung saat gerimis monsun dan air rob melanda pesisir utara.",
    coverImage: `${ASSETS_BASE_URL}/portfolio/stasiun-tawang/cover.webp`,
    photos: [
      {
        id: "st-01",
        url: `${ASSETS_BASE_URL}/portfolio/stasiun-tawang/01.webp`,
        caption: "Uap lokomotif bercampur rintik hujan di ujung peron jalur tiga.",
        aspect: "aspect-[16/10]",
        exif: "1/200s • f/2.0 • ISO 800"
      },
      {
        id: "st-02",
        url: `${ASSETS_BASE_URL}/portfolio/stasiun-tawang/02.webp`,
        caption: "Lansia duduk di bangku kayu panjang ruang tunggu menatap papan jadwal analog.",
        aspect: "aspect-[3/4]",
        exif: "1/125s • f/1.8 • ISO 1250"
      },
      {
        id: "st-03",
        url: `${ASSETS_BASE_URL}/portfolio/stasiun-tawang/03.webp`,
        caption: "Tetes air hujan di jendela gerbong membiaskan lampu peron stasiun.",
        aspect: "aspect-[4/5]",
        exif: "1/80s • f/1.8 • ISO 1600"
      },
      {
        id: "st-04",
        url: `${ASSETS_BASE_URL}/portfolio/stasiun-tawang/04.webp`,
        caption: "Porter berseragam merah menyusuri rel dengan troli koper berderit.",
        aspect: "aspect-[16/10]",
        exif: "1/320s • f/2.5 • ISO 500"
      },
      {
        id: "st-05",
        url: `${ASSETS_BASE_URL}/portfolio/stasiun-tawang/05.webp`,
        caption: "Lambaian tangan perpisahan dari balik pintu bordes sebelum semboyan 35 berbunyi.",
        aspect: "aspect-[3/4]",
        exif: "1/250s • f/1.8 • ISO 1000"
      },
      {
        id: "st-06",
        url: `${ASSETS_BASE_URL}/portfolio/stasiun-tawang/06.webp`,
        caption: "Pantulan atap lengkung peron di genangan air rembesan rob tepi rel.",
        aspect: "aspect-[1/1]",
        exif: "1/400s • f/3.5 • ISO 400"
      },
      {
        id: "st-07",
        url: `${ASSETS_BASE_URL}/portfolio/stasiun-tawang/07.webp`,
        caption: "Cangkir kopi seng mengepul di kantin stasiun menemani suara gerimis reda.",
        aspect: "aspect-[4/5]",
        exif: "1/100s • f/2.0 • ISO 800"
      }
    ]
  },
  {
    id: "gang-lombok-pecinan",
    title: "Gang Lombok & Pecinan: Aroma Hio dan Warisan",
    category: "Cultural Street",
    date: "November 2023",
    client: "Cultural Heritage Archive",
    location: "Pecinan Gang Lombok & Klenteng Tay Kak Sie, Semarang",
    gear: "Fujifilm X-T5 / 33mm f1.4 R LM WR",
    badge: "Cultural Street // 7 Photos",
    description: "Penelusuran visual lorong sempit pecinan tertua di Semarang. Menghirup kepulan asap dupa merah, lampion gantung kain sutra, dan kehangatan obrolan warga lintas generasi di teras rumah cagar budaya.",
    coverImage: `${ASSETS_BASE_URL}/portfolio/gang-lombok/cover.webp`,
    photos: [
      {
        id: "gl-01",
        url: `${ASSETS_BASE_URL}/portfolio/gang-lombok/01.webp`,
        caption: "Kepulan asap hio dupa meliuk di depan ornamen naga kayu berukir emas.",
        aspect: "aspect-[3/4]",
        exif: "1/250s • f/1.4 • ISO 640"
      },
      {
        id: "gl-02",
        url: `${ASSETS_BASE_URL}/portfolio/gang-lombok/02.webp`,
        caption: "Gerobak lumpia legendaris dengan daun selada segar dan saus kental cokelat.",
        aspect: "aspect-[4/5]",
        exif: "1/320s • f/2.0 • ISO 400"
      },
      {
        id: "gl-03",
        url: `${ASSETS_BASE_URL}/portfolio/gang-lombok/03.webp`,
        caption: "Lampion merah bergoyang lembut ditiup angin tepi kali Semarang.",
        aspect: "aspect-[16/10]",
        exif: "1/500s • f/2.2 • ISO 250"
      },
      {
        id: "gl-04",
        url: `${ASSETS_BASE_URL}/portfolio/gang-lombok/04.webp`,
        caption: "Kakek membaca koran aksara Han di bangku rotan depan pintu kayu lipat.",
        aspect: "aspect-[3/4]",
        exif: "1/160s • f/1.4 • ISO 800"
      },
      {
        id: "gl-05",
        url: `${ASSETS_BASE_URL}/portfolio/gang-lombok/05.webp`,
        caption: "Jemuran kain merah berderet kontras dengan dinding kapur yang terkelupas.",
        aspect: "aspect-[1/1]",
        exif: "1/640s • f/2.8 • ISO 200"
      },
      {
        id: "gl-06",
        url: `${ASSETS_BASE_URL}/portfolio/gang-lombok/06.webp`,
        caption: "Lilin merah raksasa menyala khidmat menerangi lorong altar samping klenteng.",
        aspect: "aspect-[4/5]",
        exif: "1/80s • f/1.4 • ISO 1600"
      },
      {
        id: "gl-07",
        url: `${ASSETS_BASE_URL}/portfolio/gang-lombok/07.webp`,
        caption: "Becak kayuh berhias bendera kecil menanti penumpang di jembatan pecinan.",
        aspect: "aspect-[16/10]",
        exif: "1/400s • f/2.5 • ISO 320"
      }
    ]
  },
  {
    id: "lesehan-pahlawan-malam",
    title: "Lesehan Pahlawan: Suara Pemuda di Tengah Kota",
    category: "Street & Youth Culture",
    date: "September 2023",
    client: "Youth Spontaneous Series",
    location: "Jl. Pahlawan & Taman Indonesia Kaya, Semarang",
    gear: "Sony A7 IV / 24-70mm f2.8 GM",
    badge: "Youth Culture // 6 Photos",
    description: "Dinamika ruang publik perkotaan malam minggu: anak-anak muda berkumpul menggelar tikar, obrolan tawa di warung kopi jahe rempah, dan komunitas skateboard berlatih trik di tepi trotoar lebar.",
    coverImage: `${ASSETS_BASE_URL}/portfolio/lesehan-pahlawan/cover.webp`,
    photos: [
      {
        id: "lp-01",
        url: `${ASSETS_BASE_URL}/portfolio/lesehan-pahlawan/01.webp`,
        caption: "Skateboard melayang di udara dengan latar belakang gedung Gubernuran malam hari.",
        aspect: "aspect-[16/10]",
        exif: "1/640s • f/2.8 • ISO 3200"
      },
      {
        id: "lp-02",
        url: `${ASSETS_BASE_URL}/portfolio/lesehan-pahlawan/02.webp`,
        caption: "Gelas wedang ronde dan jahe rempah mengepul di atas tikar anyam plastik.",
        aspect: "aspect-[1/1]",
        exif: "1/100s • f/2.8 • ISO 2000"
      },
      {
        id: "lp-03",
        url: `${ASSETS_BASE_URL}/portfolio/lesehan-pahlawan/03.webp`,
        caption: "Lingkaran pemuda bernyanyi akustik diiringi petikan gitar tua dan kajon.",
        aspect: "aspect-[4/5]",
        exif: "1/160s • f/2.8 • ISO 2500"
      },
      {
        id: "lp-04",
        url: `${ASSETS_BASE_URL}/portfolio/lesehan-pahlawan/04.webp`,
        caption: "Penjual jagung bakar mengibaskan kipas bambu menebarkan bunga bara api.",
        aspect: "aspect-[3/4]",
        exif: "1/200s • f/2.8 • ISO 1600"
      },
      {
        id: "lp-05",
        url: `${ASSETS_BASE_URL}/portfolio/lesehan-pahlawan/05.webp`,
        caption: "Sorot lampu motor matik membentuk jejak cahaya panjang di aspal asri.",
        aspect: "aspect-[16/10]",
        exif: "1/4s • f/8.0 • ISO 100"
      },
      {
        id: "lp-06",
        url: `${ASSETS_BASE_URL}/portfolio/lesehan-pahlawan/06.webp`,
        caption: "Tawa riang sekelompok mahasiswi menikmati tahu petis hangat menjelang tengah malam.",
        aspect: "aspect-[4/5]",
        exif: "1/125s • f/2.8 • ISO 2000"
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
