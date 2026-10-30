/**
 * High-Fidelity Vector Graphics & Visual Renderers
 * Generates custom SVG illustrations for Mei's Archival Portfolio
 * Color palette: #37192C (Deep Plum), #FFF3E5 (Vanilla Cream), #EAD7B5 (Manila), #CBB493 (Kraft)
 */

const VectorAssets = {
  /**
   * Mei's Polaroid Portrait
   */
  getPolaroidPortrait() {
    return `
      <svg viewBox="0 0 420 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="vector-polaroid">
        <defs>
          <linearGradient id="polaroidBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#37192C"/>
            <stop offset="60%" stop-color="#24101D"/>
            <stop offset="100%" stop-color="#140810"/>
          </linearGradient>
          <linearGradient id="warmLamp" x1="0%" y1="0%" x2="70%" y2="70%">
            <stop offset="0%" stop-color="#FFEACC" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#37192C" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF3E5"/>
            <stop offset="100%" stop-color="#F2D8C2"/>
          </linearGradient>
          <linearGradient id="goldHolo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#D4AF37"/>
            <stop offset="50%" stop-color="#FFF3E5"/>
            <stop offset="100%" stop-color="#C5A059"/>
          </linearGradient>
          <radialGradient id="vignette" cx="50%" cy="40%" r="65%">
            <stop offset="60%" stop-color="#000" stop-opacity="0"/>
            <stop offset="100%" stop-color="#150812" stop-opacity="0.7"/>
          </radialGradient>
        </defs>

        <!-- Studio Background -->
        <rect width="420" height="480" fill="url(#polaroidBg)"/>
        <rect width="420" height="480" fill="url(#warmLamp)"/>

        <!-- Ambient Studio Grid on Background -->
        <g stroke="#FFF3E5" stroke-opacity="0.06" stroke-width="1">
          <line x1="0" y1="80" x2="420" y2="80"/>
          <line x1="0" y1="160" x2="420" y2="160"/>
          <line x1="0" y1="240" x2="420" y2="240"/>
          <line x1="0" y1="320" x2="420" y2="320"/>
          <line x1="100" y1="0" x2="100" y2="480"/>
          <line x1="210" y1="0" x2="210" y2="480"/>
          <line x1="320" y1="0" x2="320" y2="480"/>
        </g>

        <!-- Potted Studio Monstera Plant in Background -->
        <path d="M 330 180 Q 360 140 400 170 Q 370 210 330 180 Z" fill="#4E5A44" opacity="0.6"/>
        <path d="M 340 210 Q 390 190 410 240 Q 360 250 340 210 Z" fill="#3D4734" opacity="0.5"/>
        <line x1="335" y1="260" x2="335" y2="190" stroke="#4E5A44" stroke-width="3" opacity="0.6"/>

        <!-- Studio Light Flare / Desk Arc Lamp -->
        <circle cx="90" cy="90" r="70" fill="#EAD7B5" opacity="0.12" filter="blur(20px)"/>
        <path d="M 40 40 Q 120 70 140 160" stroke="#D4AF37" stroke-width="2.5" fill="none" opacity="0.4"/>

        <!-- Mei Character Illustration -->
        <!-- Hair back -->
        <ellipse cx="210" cy="220" rx="95" ry="110" fill="#1C0E17"/>
        <circle cx="210" cy="120" r="48" fill="#1C0E17"/> <!-- Hair top bun -->
        <!-- Bun stick / pencil accessory -->
        <line x1="160" y1="135" x2="260" y2="100" stroke="#D4AF37" stroke-width="4" stroke-linecap="round"/>
        <circle cx="258" cy="101" r="5" fill="#EAD7B5"/>

        <!-- Neck -->
        <path d="M 190 280 L 190 325 L 230 325 L 230 280 Z" fill="url(#skinGrad)"/>

        <!-- Oversized Studio Knitted Sweater (Deep Plum & Plum Ribbing) -->
        <path d="M 140 325 Q 210 350 280 325 L 340 480 L 80 480 Z" fill="#37192C"/>
        <!-- Sweater Collar -->
        <path d="M 160 325 Q 210 355 260 325 Q 210 375 160 325 Z" fill="#4B223D"/>
        <!-- Collar knit lines -->
        <path d="M 175 334 L 180 348 M 195 338 L 198 355 M 210 340 L 210 358 M 225 338 L 222 355 M 245 334 L 240 348" stroke="#EAD7B5" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>

        <!-- Face Base -->
        <path d="M 145 220 Q 145 300 210 300 Q 275 300 275 220 Q 275 150 210 150 Q 145 150 145 220 Z" fill="url(#skinGrad)"/>

        <!-- Ears -->
        <ellipse cx="145" cy="225" rx="8" ry="14" fill="#F0CEB4"/>
        <ellipse cx="275" cy="225" rx="8" ry="14" fill="#F0CEB4"/>
        <!-- Gold tiny hoop earring -->
        <circle cx="143" cy="235" r="4" fill="none" stroke="#D4AF37" stroke-width="1.8"/>

        <!-- Bangs & Hairstyle -->
        <path d="M 143 190 Q 170 205 210 200 Q 255 195 277 185 Q 270 145 210 145 Q 150 145 143 190 Z" fill="#24121D"/>
        <path d="M 142 195 Q 155 250 155 265 Q 165 240 165 200 Z" fill="#24121D"/>
        <path d="M 278 195 Q 265 250 265 265 Q 255 240 255 200 Z" fill="#24121D"/>

        <!-- Cheeks Blush -->
        <ellipse cx="170" cy="245" rx="14" ry="7" fill="#E88D67" opacity="0.38"/>
        <ellipse cx="250" cy="245" rx="14" ry="7" fill="#E88D67" opacity="0.38"/>

        <!-- Chic Rounded Designer Eyeglasses -->
        <rect x="156" y="215" width="42" height="32" rx="12" fill="none" stroke="#D4AF37" stroke-width="2.5"/>
        <rect x="222" y="215" width="42" height="32" rx="12" fill="none" stroke="#D4AF37" stroke-width="2.5"/>
        <line x1="198" y1="228" x2="222" y2="228" stroke="#D4AF37" stroke-width="2.5"/>
        <line x1="156" y1="224" x2="145" y2="220" stroke="#D4AF37" stroke-width="2"/>
        <line x1="264" y1="224" x2="275" y2="220" stroke="#D4AF37" stroke-width="2"/>

        <!-- Eyes behind glasses -->
        <path d="M 168 228 Q 177 222 186 228" stroke="#24121D" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M 234 228 Q 243 222 252 228" stroke="#24121D" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <circle cx="177" cy="231" r="3.5" fill="#37192C"/>
        <circle cx="243" cy="231" r="3.5" fill="#37192C"/>
        <circle cx="178.5" cy="229.5" r="1.2" fill="#FFF"/>
        <circle cx="244.5" cy="229.5" r="1.2" fill="#FFF"/>

        <!-- Eyebrows -->
        <path d="M 165 208 Q 177 203 189 207" stroke="#3A2030" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M 231 207 Q 243 203 255 208" stroke="#3A2030" stroke-width="2" fill="none" stroke-linecap="round"/>

        <!-- Nose -->
        <path d="M 209 236 Q 212 248 207 252 Q 214 252 216 248" stroke="#C99E64" stroke-width="2" fill="none" stroke-linecap="round"/>

        <!-- Smile -->
        <path d="M 198 270 Q 210 278 222 270" stroke="#B34A47" stroke-width="2.5" fill="none" stroke-linecap="round"/>

        <!-- Studio Headphones Resting on Shoulders -->
        <path d="M 125 295 Q 110 360 145 375 Q 170 380 160 330 Z" fill="#D4BD99"/>
        <ellipse cx="140" cy="350" rx="18" ry="24" fill="#37192C" stroke="#D4AF37" stroke-width="2"/>
        <path d="M 295 295 Q 310 360 275 375 Q 250 380 260 330 Z" fill="#D4BD99"/>
        <ellipse cx="280" cy="350" rx="18" ry="24" fill="#37192C" stroke="#D4AF37" stroke-width="2"/>
        <path d="M 130 300 Q 210 320 290 300" stroke="#CBB493" stroke-width="6" fill="none" stroke-linecap="round"/>

        <!-- Mei's Sketchbook Pinned at Front -->
        <g transform="translate(140, 395) rotate(-6)">
          <rect x="0" y="0" width="160" height="110" rx="4" fill="#FFF3E5" stroke="#CBB493" stroke-width="1.5"/>
          <line x1="20" y1="0" x2="20" y2="110" stroke="#CBB493" stroke-dasharray="3 3"/>
          <!-- Little sketch on the page -->
          <path d="M 40 45 Q 60 20 80 45 Q 100 70 80 85 Z" fill="none" stroke="#37192C" stroke-width="2"/>
          <circle cx="60" cy="55" r="4" fill="#D4AF37"/>
          <text x="35" y="100" font-family="'Courier New', monospace" font-size="9" fill="#37192C" opacity="0.7">idea #042 // B28</text>
        </g>

        <!-- Vignette & Film Grain Overlay -->
        <rect width="420" height="480" fill="url(#vignette)"/>

        <!-- Retro Camera Timestamp at bottom right -->
        <text x="385" y="465" font-family="'Space Mono', monospace" font-size="11" font-weight="bold" fill="#E88D67" text-anchor="end" opacity="0.85">’24 10 30</text>
      </svg>
    `;
  },

  /**
   * Branding Visuals
   */
  getBrandVisual(id) {
    if (id === 'brand-kitsune') {
      return `
        <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#2B1423"/>
          <!-- Subtle graph paper grid -->
          <g stroke="#FFF3E5" stroke-opacity="0.05" stroke-width="1">
            <line x1="0" y1="100" x2="600" y2="100"/><line x1="0" y1="200" x2="600" y2="200"/><line x1="0" y1="300" x2="600" y2="300"/>
            <line x1="150" y1="0" x2="150" y2="400"/><line x1="300" y1="0" x2="300" y2="400"/><line x1="450" y1="0" x2="450" y2="400"/>
          </g>

          <!-- Amber Dropper Bottle Mockup -->
          <g transform="translate(120, 80)">
            <!-- Shadow -->
            <ellipse cx="60" cy="270" rx="45" ry="12" fill="#000" opacity="0.4"/>
            <!-- Dropper cap -->
            <rect x="46" y="10" width="28" height="35" rx="5" fill="#1C0E17"/>
            <rect x="52" y="0" width="16" height="14" rx="4" fill="#37192C"/>
            <rect x="42" y="45" width="36" height="14" rx="2" fill="#D4AF37"/>
            <!-- Bottle glass body -->
            <rect x="15" y="58" width="90" height="190" rx="20" fill="#945728"/>
            <rect x="15" y="58" width="90" height="190" rx="20" fill="url(#amberGrad)" opacity="0.8"/>
            <!-- Glass reflection highlight -->
            <path d="M 22 75 L 22 225 Q 22 235 30 235 L 30 75 Z" fill="#FFF" opacity="0.25"/>
            <!-- Washi Paper Label on Bottle -->
            <rect x="25" y="95" width="70" height="120" rx="4" fill="#FFF3E5"/>
            <!-- Label Gold Foil Kanji Seal -->
            <circle cx="60" cy="130" r="16" fill="#37192C"/>
            <text x="60" y="137" font-family="'Cormorant Garamond', serif" font-size="20" fill="#D4AF37" text-anchor="middle" font-weight="bold">狐</text>
            <!-- Label Typography -->
            <text x="60" y="165" font-family="'Playfair Display', serif" font-size="8" fill="#37192C" text-anchor="middle" font-weight="bold" letter-spacing="1.5">KITSUNE</text>
            <text x="60" y="176" font-family="'Space Mono', monospace" font-size="6" fill="#4B5842" text-anchor="middle">BOTANICALS</text>
            <line x1="38" y1="184" x2="82" y2="184" stroke="#D4AF37" stroke-width="1"/>
            <text x="60" y="196" font-family="'Space Mono', monospace" font-size="5" fill="#888" text-anchor="middle">LOT NO. 0429 // 50ML</text>
          </g>

          <!-- Matte Tea Canister Mockup -->
          <g transform="translate(300, 95)">
            <ellipse cx="90" cy="255" rx="65" ry="15" fill="#000" opacity="0.35"/>
            <!-- Canister lid -->
            <rect x="25" y="20" width="130" height="30" rx="6" fill="#D4AF37"/>
            <line x1="25" y1="35" x2="155" y2="35" stroke="#C5A059" stroke-width="1.5"/>
            <!-- Canister body -->
            <rect x="20" y="50" width="140" height="195" rx="8" fill="#37192C" stroke="#D4AF37" stroke-width="1"/>
            <!-- Elegant gold botanical pattern -->
            <circle cx="90" cy="120" r="35" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="4 2"/>
            <path d="M 90 95 Q 105 120 90 145 Q 75 120 90 95 Z" fill="#D4AF37"/>
            <path d="M 70 120 Q 90 105 110 120 Q 90 135 70 120 Z" fill="#D4AF37" opacity="0.7"/>
            <text x="90" y="180" font-family="'Cormorant Garamond', serif" font-size="14" fill="#FFF3E5" text-anchor="middle" letter-spacing="2">KYOTO MATCHA</text>
            <text x="90" y="198" font-family="'Space Mono', monospace" font-size="8" fill="#CBB493" text-anchor="middle">ORGANIC HARVEST // 100G</text>
            <rect x="65" y="210" width="50" height="16" rx="3" fill="#4B5842"/>
            <text x="90" y="221" font-family="'Space Mono', monospace" font-size="7" fill="#FFF3E5" text-anchor="middle">CEREMONIAL</text>
          </g>

          <!-- Archival Specimen Tag at bottom right -->
          <g transform="translate(430, 20)">
            <rect x="0" y="0" width="145" height="42" rx="4" fill="#EAD7B5"/>
            <text x="12" y="18" font-family="'Space Mono', monospace" font-size="8" font-weight="bold" fill="#37192C">SYSTEM: DKV-BR-01</text>
            <text x="12" y="32" font-family="'Space Mono', monospace" font-size="7" fill="#37192C" opacity="0.8">PACKAGING SPEC. 2024</text>
          </g>
        </svg>
      `;
    }

    if (id === 'brand-lumina') {
      return `
        <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#150E14"/>
          <!-- Geometric Acoustic Grid -->
          <g stroke="#EAD7B5" stroke-opacity="0.1" stroke-width="1">
            <circle cx="300" cy="200" r="160" fill="none"/>
            <circle cx="300" cy="200" r="120" fill="none"/>
            <circle cx="300" cy="200" r="80" fill="none"/>
            <circle cx="300" cy="200" r="40" fill="none"/>
            <line x1="140" y1="200" x2="460" y2="200"/>
            <line x1="300" y1="40" x2="300" y2="360"/>
          </g>

          <!-- Vinyl Sleeve Mockup -->
          <g transform="translate(140, 60)">
            <rect x="0" y="0" width="280" height="280" rx="4" fill="#241320" stroke="#37192C" stroke-width="2"/>
            <!-- Debossed acoustic rings -->
            <circle cx="140" cy="140" r="95" fill="none" stroke="#D86B43" stroke-width="2" opacity="0.85"/>
            <circle cx="140" cy="140" r="75" fill="none" stroke="#EAD7B5" stroke-width="1.5" opacity="0.6"/>
            <circle cx="140" cy="140" r="55" fill="none" stroke="#D86B43" stroke-width="1" stroke-dasharray="6 4"/>
            <circle cx="140" cy="140" r="28" fill="#150E14" stroke="#FFF3E5" stroke-width="1.5"/>
            <circle cx="140" cy="140" r="6" fill="#D86B43"/>
            <!-- Waveform curves -->
            <path d="M 60 140 Q 100 80 140 140 Q 180 200 220 140" fill="none" stroke="#FFF3E5" stroke-width="2.5"/>
            <path d="M 60 140 Q 100 200 140 140 Q 180 80 220 140" fill="none" stroke="#D86B43" stroke-width="2" opacity="0.7"/>

            <!-- Typography on Sleeve -->
            <text x="24" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" fill="#FFF3E5" letter-spacing="3">LUMINA</text>
            <text x="24" y="52" font-family="'Space Mono', monospace" font-size="7" fill="#D86B43" letter-spacing="1.5">SPATIAL SOUNDWORKS</text>
            <text x="24" y="258" font-family="'Space Mono', monospace" font-size="8" fill="#EAD7B5" opacity="0.8">FREQ RANGE: 20Hz - 24kHz</text>
            <text x="256" y="258" font-family="'Space Mono', monospace" font-size="8" fill="#EAD7B5" text-anchor="end" opacity="0.8">EDITION 01/50</text>
          </g>

          <!-- Cassette Tape Peeking Behind -->
          <g transform="translate(380, 110) rotate(12)">
            <rect x="0" y="0" width="170" height="110" rx="8" fill="#EAD7B5" stroke="#37192C" stroke-width="2"/>
            <rect x="18" y="20" width="134" height="70" rx="4" fill="#37192C"/>
            <circle cx="55" cy="55" r="16" fill="#EAD7B5"/>
            <circle cx="115" cy="55" r="16" fill="#EAD7B5"/>
            <circle cx="55" cy="55" r="8" fill="#37192C"/>
            <circle cx="115" cy="55" r="8" fill="#37192C"/>
            <rect x="42" y="47" width="86" height="16" rx="2" fill="#D86B43"/>
            <text x="85" y="59" font-family="'Space Mono', monospace" font-size="7" fill="#FFF3E5" text-anchor="middle" font-weight="bold">ACOUSTIC // C-60</text>
          </g>
        </svg>
      `;
    }

    if (id === 'brand-komorebi') {
      return `
        <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#FAF5ED"/>
          <!-- Warm Kraft Paper Texture Elements -->
          <rect x="40" y="40" width="520" height="320" rx="8" fill="#EAD7B5" stroke="#CBB493" stroke-width="2" stroke-dasharray="8 6"/>

          <!-- Origami Folded Box Mockup -->
          <g transform="translate(100, 80)">
            <path d="M 50 150 L 170 80 L 290 150 L 170 220 Z" fill="#FFF3E5" stroke="#D4BD99" stroke-width="2"/>
            <path d="M 50 150 L 170 220 L 170 280 L 50 210 Z" fill="#E8D3B4" stroke="#D4BD99" stroke-width="2"/>
            <path d="M 170 220 L 290 150 L 290 210 L 170 280 Z" fill="#D8BE9A" stroke="#D4BD99" stroke-width="2"/>

            <!-- Box Lid Crest & Stamp -->
            <g transform="translate(170, 150) rotate(-15)">
              <circle cx="0" cy="0" r="32" fill="#442338"/>
              <text x="0" y="6" font-family="'Playfair Display', serif" font-size="20" fill="#FFF3E5" text-anchor="middle" font-style="italic">K</text>
              <text x="0" y="20" font-family="'Space Mono', monospace" font-size="5" fill="#E88D67" text-anchor="middle" letter-spacing="1">木漏れ日</text>
            </g>
          </g>

          <!-- Bakery Menu Card with brass paperclip -->
          <g transform="translate(340, 70) rotate(4)">
            <rect x="0" y="0" width="180" height="250" rx="4" fill="#FFFDF9" stroke="#EAD7B5" stroke-width="1.5" filter="drop-shadow(3px 5px 8px rgba(55,25,44,0.12))"/>
            <!-- Washi tape at top -->
            <rect x="40" y="-12" width="100" height="24" fill="#E88D67" opacity="0.75" transform="rotate(-2)"/>
            <!-- Menu Header -->
            <text x="90" y="38" font-family="'Playfair Display', serif" font-size="14" fill="#442338" text-anchor="middle" font-weight="bold">KOMOREBI</text>
            <text x="90" y="52" font-family="'Cormorant Garamond', serif" font-size="10" fill="#CBB493" text-anchor="middle" font-style="italic">Artisanal Viennoiserie</text>
            <line x1="30" y1="62" x2="150" y2="62" stroke="#442338" stroke-width="0.8"/>
            <!-- Menu items -->
            <text x="24" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="bold" fill="#37192C">Pain au Chocolat</text>
            <text x="156" y="85" font-family="'Space Mono', monospace" font-size="7" fill="#888" text-anchor="end">38k</text>
            <text x="24" y="110" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="bold" fill="#37192C">Matcha Croissant</text>
            <text x="156" y="110" font-family="'Space Mono', monospace" font-size="7" fill="#888" text-anchor="end">42k</text>
            <text x="24" y="135" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="bold" fill="#37192C">Kouign-Amann</text>
            <text x="156" y="135" font-family="'Space Mono', monospace" font-size="7" fill="#888" text-anchor="end">36k</text>
            <text x="24" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="bold" fill="#37192C">Yuzu Brioche Bun</text>
            <text x="156" y="160" font-family="'Space Mono', monospace" font-size="7" fill="#888" text-anchor="end">45k</text>

            <rect x="24" y="185" width="132" height="42" rx="3" fill="#FFF3E5" stroke="#D4BD99"/>
            <text x="90" y="202" font-family="'Space Mono', monospace" font-size="6.5" fill="#442338" text-anchor="middle">BAKED FRESH DAILY</text>
            <text x="90" y="216" font-family="'Space Mono', monospace" font-size="6" fill="#888" text-anchor="middle">ORGANIC FLOUR // CULTURED BUTTER</text>
          </g>
        </svg>
      `;
    }

    // Selasar Nusantara
    return `
      <svg viewBox="0 0 600 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" fill="#24131E"/>
        <!-- Traditional Woven Geometric Grid Lines -->
        <g stroke="#C5A059" stroke-opacity="0.15" stroke-width="1.5">
          <path d="M 0 50 L 600 50 M 0 150 L 600 150 M 0 250 L 600 250 M 0 350 L 600 350"/>
          <path d="M 50 0 L 50 400 M 150 0 L 150 400 M 250 0 L 250 400 M 350 0 L 350 400 M 450 0 L 450 400 M 550 0 L 550 400"/>
        </g>

        <!-- Modernized Ikat Pattern Canvas -->
        <g transform="translate(100, 60)">
          <rect x="0" y="0" width="220" height="280" rx="6" fill="#37192C" stroke="#C5A059" stroke-width="2"/>
          <!-- Geometric woven diamonds -->
          <g fill="#A84A38">
            <polygon points="110,40 140,80 110,120 80,80"/>
            <polygon points="110,140 140,180 110,220 80,180"/>
          </g>
          <g fill="#C5A059">
            <polygon points="110,60 125,80 110,100 95,80"/>
            <polygon points="110,160 125,180 110,200 95,180"/>
          </g>
          <g fill="#FFF3E5" opacity="0.9">
            <circle cx="110" cy="80" r="5"/>
            <circle cx="110" cy="180" r="5"/>
          </g>
          <!-- Typography -->
          <text x="110" y="248" font-family="'Cormorant Garamond', serif" font-size="16" fill="#FFF3E5" text-anchor="middle" font-weight="bold" letter-spacing="3">SELASAR</text>
          <text x="110" y="262" font-family="'Space Mono', monospace" font-size="7" fill="#C5A059" text-anchor="middle" letter-spacing="2">NUSANTARA ARCHIVE</text>
        </g>

        <!-- Exhibition Catalog & Ticket Stub -->
        <g transform="translate(340, 80) rotate(5)">
          <rect x="0" y="0" width="180" height="240" rx="4" fill="#FFF3E5" stroke="#CBB493" stroke-width="1.5" filter="drop-shadow(3px 6px 12px rgba(55,25,44,0.18))"/>
          <rect x="15" y="15" width="150" height="110" fill="#A84A38"/>
          <!-- Abstract weave line illustration -->
          <path d="M 25 35 Q 90 95 155 35 M 25 70 Q 90 130 155 70" stroke="#FFF3E5" stroke-width="2" fill="none"/>
          <text x="90" y="75" font-family="'Playfair Display', serif" font-size="16" fill="#FFF3E5" text-anchor="middle" font-style="italic">Tenun</text>

          <text x="20" y="148" font-family="'Cormorant Garamond', serif" font-size="13" font-weight="bold" fill="#37192C">ARCHIPELAGO WEAVE</text>
          <text x="20" y="164" font-family="'Space Mono', monospace" font-size="7" fill="#666">EXHIBITION 2024</text>
          <line x1="20" y1="175" x2="160" y2="175" stroke="#37192C" stroke-dasharray="4 2"/>
          <text x="20" y="196" font-family="'Space Mono', monospace" font-size="7" fill="#37192C">CURATED BY MEI // B28</text>
          <text x="20" y="210" font-family="'Space Mono', monospace" font-size="6.5" fill="#888">JAKARTA DESIGN CENTER</text>
        </g>
      </svg>
    `;
  },

  /**
   * Artwork Visuals
   */
  getArtworkVisual(id) {
    if (id === 'art-pasar-santa') {
      return `
        <svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#24101E"/>
          <!-- Risograph Halftone Pattern Overlay -->
          <defs>
            <pattern id="risoDots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="#E88D67" opacity="0.35"/>
              <circle cx="9" cy="9" r="1.5" fill="#FFF3E5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="500" height="500" fill="url(#risoDots)"/>

          <!-- Pasar Santa Stall Framework -->
          <rect x="50" y="80" width="400" height="340" rx="4" fill="#37192C" stroke="#EAD7B5" stroke-width="2"/>
          <!-- Neon Sign: PASAR SANTA -->
          <rect x="140" y="45" width="220" height="50" rx="8" fill="#1C0A17" stroke="#E88D67" stroke-width="2.5"/>
          <text x="250" y="76" font-family="'Space Mono', monospace" font-size="16" font-weight="bold" fill="#FFF3E5" text-anchor="middle" letter-spacing="3">PASAR SANTA</text>
          <text x="250" y="90" font-family="'Space Mono', monospace" font-size="8" fill="#E88D67" text-anchor="middle">SUB-LEVEL VINYL & COFFEE</text>

          <!-- Cassette & Vinyl Crates -->
          <g transform="translate(80, 160)">
            <rect x="0" y="0" width="150" height="90" rx="4" fill="#EAD7B5"/>
            <line x1="20" y1="0" x2="20" y2="90" stroke="#CBB493" stroke-width="2"/>
            <line x1="50" y1="0" x2="50" y2="90" stroke="#CBB493" stroke-width="2"/>
            <line x1="80" y1="0" x2="80" y2="90" stroke="#CBB493" stroke-width="2"/>
            <line x1="110" y1="0" x2="110" y2="90" stroke="#CBB493" stroke-width="2"/>
            <!-- Vinyl peeking -->
            <circle cx="80" cy="-10" r="45" fill="#150E14" stroke="#FFF3E5" stroke-width="1.5"/>
            <circle cx="80" cy="-10" r="15" fill="#E88D67"/>
          </g>

          <!-- Night Street Cat Silhouette -->
          <g transform="translate(290, 240)">
            <ellipse cx="60" cy="80" rx="35" ry="25" fill="#EAD7B5"/>
            <circle cx="90" cy="65" r="20" fill="#EAD7B5"/>
            <!-- Cat ears -->
            <polygon points="80,55 88,40 96,55" fill="#EAD7B5"/>
            <polygon points="94,55 102,40 108,55" fill="#EAD7B5"/>
            <!-- Cat eyes glowing -->
            <ellipse cx="88" cy="63" rx="3" ry="4" fill="#37192C"/>
            <ellipse cx="98" cy="63" rx="3" ry="4" fill="#37192C"/>
            <!-- Cat tail curved -->
            <path d="M 25 80 Q 5 60 15 40" stroke="#EAD7B5" stroke-width="6" fill="none" stroke-linecap="round"/>
          </g>

          <!-- Hanging Retro Lantern -->
          <line x1="380" y1="80" x2="380" y2="140" stroke="#D4AF37" stroke-width="2"/>
          <circle cx="380" cy="155" r="18" fill="#E88D67" filter="drop-shadow(0 0 15px #E88D67)"/>
          <circle cx="380" cy="155" r="8" fill="#FFF3E5"/>

          <!-- Risograph Colophon Label -->
          <text x="65" y="400" font-family="'Space Mono', monospace" font-size="8" fill="#EAD7B5">RISO FL-PINK + AQUA + PLUM // 160GSM MUNKEN</text>
          <text x="435" y="400" font-family="'Space Mono', monospace" font-size="8" fill="#EAD7B5" text-anchor="end">MEI B28 © 2024</text>
        </svg>
      `;
    }

    if (id === 'art-botanical-reverie') {
      return `
        <svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#1C181B"/>
          <!-- Soft dreamy foliage -->
          <g fill="#43523B" opacity="0.75">
            <path d="M 50 500 Q 120 300 200 380 Q 150 480 50 500 Z"/>
            <path d="M 450 500 Q 380 280 280 370 Q 340 480 450 500 Z"/>
            <path d="M 80 200 Q 160 120 220 220 Q 140 280 80 200 Z"/>
          </g>

          <!-- Surrealist Floral Spirit Character -->
          <!-- Floating Petals & Spores -->
          <g fill="#D4AF37" opacity="0.8">
            <circle cx="180" cy="120" r="4"/><circle cx="320" cy="140" r="5"/><circle cx="280" cy="80" r="3"/>
            <circle cx="140" cy="280" r="4"/><circle cx="380" cy="260" r="3.5"/>
          </g>

          <!-- Character Head & Crown of Blossoms -->
          <g transform="translate(250, 230)">
            <!-- Golden Moon Halo -->
            <circle cx="0" cy="0" r="110" fill="none" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="6 3"/>
            <circle cx="0" cy="0" r="95" fill="#37192C" opacity="0.9"/>

            <!-- Face -->
            <path d="M -40 -10 Q 0 50 40 -10 Q 40 -60 0 -60 Q -40 -60 -40 -10 Z" fill="#FFF3E5"/>
            <!-- Floral Crown -->
            <path d="M -50 -40 Q 0 -90 50 -40 Q 30 -20 0 -30 Q -30 -20 -50 -40 Z" fill="#B34A47"/>
            <circle cx="-25" cy="-55" r="12" fill="#E88D67"/>
            <circle cx="25" cy="-55" r="12" fill="#D4AF37"/>
            <circle cx="0" cy="-65" r="15" fill="#FFF3E5"/>

            <!-- Serene Closed Eyes -->
            <path d="M -24 -8 Q -16 -3 -8 -8" stroke="#37192C" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M 8 -8 Q 16 -3 24 -8" stroke="#37192C" stroke-width="2" fill="none" stroke-linecap="round"/>
            <ellipse cx="-16" cy="2" rx="6" ry="3" fill="#E88D67" opacity="0.5"/>
            <ellipse cx="16" cy="2" rx="6" ry="3" fill="#E88D67" opacity="0.5"/>
            <path d="M -5 18 Q 0 22 5 18" stroke="#B34A47" stroke-width="1.8" fill="none" stroke-linecap="round"/>

            <!-- Trailing Vines & Blooms -->
            <path d="M -30 20 Q -60 120 -20 180" stroke="#43523B" stroke-width="3" fill="none"/>
            <path d="M 30 20 Q 60 120 20 180" stroke="#43523B" stroke-width="3" fill="none"/>
          </g>

          <text x="250" y="460" font-family="'Cormorant Garamond', serif" font-size="14" font-style="italic" fill="#FFF3E5" text-anchor="middle" letter-spacing="2">Botanical Reverie // Mixed Media Digital</text>
        </svg>
      `;
    }

    if (id === 'art-y2k-memory') {
      return `
        <svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#2E1626"/>
          <!-- Y2K Holographic Cyber Grid -->
          <g stroke="#FFF3E5" stroke-opacity="0.12" stroke-width="1">
            <line x1="0" y1="50" x2="500" y2="50"/><line x1="0" y1="150" x2="500" y2="150"/><line x1="0" y1="250" x2="500" y2="250"/><line x1="0" y1="350" x2="500" y2="350"/><line x1="0" y1="450" x2="500" y2="450"/>
            <line x1="50" y1="0" x2="50" y2="500"/><line x1="150" y1="0" x2="150" y2="500"/><line x1="250" y1="0" x2="250" y2="500"/><line x1="350" y1="0" x2="350" y2="500"/><line x1="450" y1="0" x2="450" y2="500"/>
          </g>

          <!-- Translucent Memory Card 64MB -->
          <g transform="translate(130, 90)">
            <rect x="0" y="0" width="240" height="300" rx="16" fill="#37192C" stroke="#D4AF37" stroke-width="2.5"/>
            <!-- Metallic contact pins -->
            <rect x="30" y="10" width="18" height="25" rx="2" fill="#D4AF37"/>
            <rect x="60" y="10" width="18" height="25" rx="2" fill="#D4AF37"/>
            <rect x="90" y="10" width="18" height="25" rx="2" fill="#D4AF37"/>
            <rect x="120" y="10" width="18" height="25" rx="2" fill="#D4AF37"/>
            <rect x="150" y="10" width="18" height="25" rx="2" fill="#D4AF37"/>
            <rect x="180" y="10" width="18" height="25" rx="2" fill="#D4AF37"/>

            <!-- Y2K Sticker on Card -->
            <rect x="25" y="60" width="190" height="150" rx="8" fill="#FFF3E5"/>
            <!-- Pixel Heart -->
            <path d="M 95 95 L 105 85 L 115 95 L 125 85 L 135 95 L 135 110 L 115 130 L 95 110 Z" fill="#B34A47"/>
            <text x="115" y="155" font-family="'Space Mono', monospace" font-size="14" font-weight="bold" fill="#37192C" text-anchor="middle">MAGIC GATE</text>
            <text x="115" y="172" font-family="'Space Mono', monospace" font-size="10" fill="#D4AF37" text-anchor="middle" font-weight="bold">64 MB</text>
            <text x="115" y="190" font-family="'Space Mono', monospace" font-size="7" fill="#666" text-anchor="middle">MEI // B28 ARCHIVE</text>

            <!-- Holographic Star Sparkles -->
            <polygon points="45,240 50,230 55,240 65,245 55,250 50,260 45,250 35,245" fill="#D4AF37"/>
            <polygon points="195,240 200,230 205,240 215,245 205,250 200,260 195,250 185,245" fill="#E88D67"/>
          </g>

          <!-- CD-ROM Jewel Case peeking -->
          <g transform="translate(60, 320) rotate(-8)">
            <rect x="0" y="0" width="140" height="130" rx="4" fill="#EAD7B5" stroke="#37192C" stroke-width="2"/>
            <circle cx="70" cy="65" r="45" fill="none" stroke="#37192C" stroke-width="2"/>
            <circle cx="70" cy="65" r="14" fill="#37192C"/>
            <text x="70" y="118" font-family="'Space Mono', monospace" font-size="7" fill="#37192C" text-anchor="middle">VER. 2004 // OST</text>
          </g>
        </svg>
      `;
    }

    if (id === 'art-tea-guardian') {
      return `
        <svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#241B20"/>
          <!-- Terraced Tea Plantation Hills -->
          <path d="M 0 320 Q 150 260 300 310 Q 420 350 500 300 L 500 500 L 0 500 Z" fill="#3F4D35"/>
          <path d="M 0 380 Q 180 340 340 380 Q 440 400 500 370 L 500 500 L 0 500 Z" fill="#2E3B26"/>
          <!-- Tea bush contour strokes -->
          <path d="M 20 350 Q 150 300 280 340" stroke="#556947" stroke-width="3" fill="none"/>
          <path d="M 40 410 Q 200 370 380 410" stroke="#556947" stroke-width="3" fill="none"/>

          <!-- Full Moon in background -->
          <circle cx="340" cy="150" r="65" fill="#FFF3E5" opacity="0.9" filter="drop-shadow(0 0 25px rgba(255,243,229,0.3))"/>

          <!-- Mystical Fox Spirit (Kitsune Guardian) -->
          <g transform="translate(160, 160)">
            <!-- Giant Fluffy Tails -->
            <path d="M 90 140 Q 140 70 170 110 Q 190 160 120 180 Z" fill="#E88D67"/>
            <path d="M 120 130 Q 180 50 195 95 Q 200 150 140 170 Z" fill="#FFF3E5"/>
            <path d="M 70 150 Q 110 90 140 130 Q 150 170 90 185 Z" fill="#E88D67"/>

            <!-- Fox Body -->
            <ellipse cx="75" cy="145" rx="45" ry="32" fill="#E88D67"/>
            <ellipse cx="60" cy="140" rx="25" ry="22" fill="#FFF3E5"/>

            <!-- Head -->
            <path d="M 35 110 Q 10 135 25 155 Q 50 155 65 130 Z" fill="#E88D67"/>
            <path d="M 22 135 Q 12 145 22 152 Q 35 150 38 135 Z" fill="#FFF3E5"/>
            <!-- Nose -->
            <circle cx="14" cy="142" r="3" fill="#24101E"/>
            <!-- Sly Fox Eye -->
            <path d="M 30 130 Q 40 126 48 132" stroke="#24101E" stroke-width="2.5" fill="none"/>
            <!-- Ears -->
            <polygon points="45,115 55,80 70,110" fill="#E88D67"/>
            <polygon points="50,110 56,88 65,108" fill="#FFF3E5"/>
            <polygon points="62,120 78,88 88,122" fill="#E88D67"/>

            <!-- Red Shinto Ribbon & Gold Bell Collar -->
            <path d="M 45 145 Q 60 165 75 145" stroke="#B34A47" stroke-width="4" fill="none"/>
            <circle cx="60" cy="162" r="6" fill="#D4AF37"/>
          </g>

          <text x="250" y="475" font-family="'Space Mono', monospace" font-size="8" fill="#FFF3E5" text-anchor="middle" letter-spacing="2">THE TEA GARDEN GUARDIAN // LINOCUT DIGITAL</text>
        </svg>
      `;
    }

    if (id === 'art-echoes-rain') {
      return `
        <svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#181016"/>
          <!-- Commuter Train Window Frame -->
          <rect x="40" y="40" width="420" height="420" rx="20" fill="#281422" stroke="#37192C" stroke-width="4"/>

          <!-- Rainy Blur of City Lights / Bokeh -->
          <circle cx="160" cy="180" r="45" fill="#E88D67" opacity="0.4" filter="blur(15px)"/>
          <circle cx="280" cy="140" r="60" fill="#D4AF37" opacity="0.35" filter="blur(20px)"/>
          <circle cx="360" cy="240" r="50" fill="#43523B" opacity="0.5" filter="blur(18px)"/>
          <circle cx="210" cy="300" r="55" fill="#B34A47" opacity="0.45" filter="blur(16px)"/>

          <!-- Rain Streaks Dripping down the Glass -->
          <g stroke="#FFF3E5" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round">
            <line x1="80" y1="60" x2="75" y2="180"/>
            <line x1="140" y1="100" x2="135" y2="240"/>
            <line x1="190" y1="70" x2="185" y2="190"/>
            <line x1="240" y1="120" x2="235" y2="310"/>
            <line x1="310" y1="80" x2="305" y2="220"/>
            <line x1="370" y1="110" x2="365" y2="280"/>
            <line x1="410" y1="70" x2="405" y2="190"/>
          </g>

          <!-- Water Droplets condensation -->
          <g fill="#FFF3E5" opacity="0.5">
            <circle cx="95" cy="140" r="2.5"/><circle cx="165" cy="220" r="3"/><circle cx="270" cy="190" r="2"/>
            <circle cx="340" cy="160" r="3.5"/><circle cx="390" cy="230" r="2"/>
          </g>

          <!-- Commuter Silhouette with Headphones -->
          <path d="M 80 460 Q 120 320 180 320 Q 240 320 280 460 Z" fill="#130810"/>
          <circle cx="180" cy="280" r="35" fill="#130810"/>
          <path d="M 145 280 Q 180 250 215 280" stroke="#D4AF37" stroke-width="4" fill="none" opacity="0.7"/>

          <!-- Handwritten Window Fog Scribble: "pulang" (going home) -->
          <text x="310" y="380" font-family="'Caveat', cursive, sans-serif" font-size="28" fill="#FFF3E5" opacity="0.65" transform="rotate(-6 310 380)">pulang...</text>
        </svg>
      `;
    }

    // Jajanan Pasar Delights
    return `
      <svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="500" fill="#FFF8F0"/>
        <!-- Kraft paper backing with grid -->
        <rect x="25" y="25" width="450" height="450" rx="12" fill="#EAD7B5" stroke="#CBB493" stroke-width="2"/>
        <g stroke="#CBB493" stroke-opacity="0.3" stroke-width="1">
          <line x1="25" y1="175" x2="475" y2="175"/><line x1="25" y1="325" x2="475" y2="325"/>
          <line x1="175" y1="25" x2="175" y2="475"/><line x1="325" y1="25" x2="325" y2="475"/>
        </g>

        <!-- Header Sticker Banner -->
        <rect x="80" y="45" width="340" height="40" rx="8" fill="#37192C"/>
        <text x="250" y="70" font-family="'Space Mono', monospace" font-size="12" font-weight="bold" fill="#FFF3E5" text-anchor="middle" letter-spacing="2">JAJANAN PASAR // STICKER PACK</text>

        <!-- Sticker 1: Kue Cubit -->
        <g transform="translate(60, 110)">
          <!-- Die-cut white border shadow -->
          <rect x="0" y="0" width="160" height="150" rx="16" fill="#FFF" filter="drop-shadow(2px 4px 6px rgba(55,25,44,0.15))"/>
          <!-- Kue cubit cakes -->
          <circle cx="55" cy="65" r="28" fill="#F4D06F"/>
          <circle cx="105" cy="65" r="28" fill="#F4D06F"/>
          <!-- Chocolate sprinkles (meises) -->
          <rect x="45" y="55" width="6" height="2.5" rx="1" fill="#37192C"/>
          <rect x="58" y="60" width="6" height="2.5" rx="1" fill="#37192C" transform="rotate(30)"/>
          <rect x="98" y="55" width="6" height="2.5" rx="1" fill="#37192C"/>
          <rect x="110" y="62" width="6" height="2.5" rx="1" fill="#37192C" transform="rotate(-40)"/>
          <text x="80" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="bold" fill="#37192C" text-anchor="middle">Kue Cubit</text>
        </g>

        <!-- Sticker 2: Martabak Manis Slice -->
        <g transform="translate(280, 110)">
          <rect x="0" y="0" width="160" height="150" rx="16" fill="#FFF" filter="drop-shadow(2px 4px 6px rgba(55,25,44,0.15))"/>
          <!-- Martabak thick sandwich slice -->
          <path d="M 30 70 L 130 70 L 120 100 L 40 100 Z" fill="#8C4E28"/>
          <!-- Cheese and chocolate filling -->
          <rect x="35" y="80" width="90" height="10" fill="#F4D06F"/>
          <!-- Honeycomb pores -->
          <circle cx="50" cy="76" r="2" fill="#5A3017"/><circle cx="70" cy="76" r="2" fill="#5A3017"/><circle cx="90" cy="76" r="2" fill="#5A3017"/>
          <text x="80" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="bold" fill="#37192C" text-anchor="middle">Martabak Manis</text>
        </g>

        <!-- Sticker 3: Es Cendol Glass -->
        <g transform="translate(60, 290)">
          <rect x="0" y="0" width="160" height="150" rx="16" fill="#FFF" filter="drop-shadow(2px 4px 6px rgba(55,25,44,0.15))"/>
          <!-- Glass -->
          <path d="M 50 30 L 110 30 L 98 100 L 62 100 Z" fill="#FFF3E5" stroke="#CBB493" stroke-width="1.5"/>
          <!-- Palm sugar layer -->
          <path d="M 62 82 L 98 82 L 98 100 L 62 100 Z" fill="#6B3A19"/>
          <!-- Coconut milk layer -->
          <path d="M 56 48 L 104 48 L 100 82 L 60 82 Z" fill="#FDFBF7"/>
          <!-- Green pandan cendol jellies -->
          <ellipse cx="75" cy="72" rx="6" ry="3" fill="#6B9B37"/>
          <ellipse cx="88" cy="65" rx="5" ry="3" fill="#6B9B37"/>
          <!-- Pink straw -->
          <line x1="70" y1="15" x2="90" y2="85" stroke="#E88D67" stroke-width="4" stroke-linecap="round"/>
          <text x="80" y="128" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="bold" fill="#37192C" text-anchor="middle">Es Cendol</text>
        </g>

        <!-- Sticker 4: Pastel Tutup / Lemper -->
        <g transform="translate(280, 290)">
          <rect x="0" y="0" width="160" height="150" rx="16" fill="#FFF" filter="drop-shadow(2px 4px 6px rgba(55,25,44,0.15))"/>
          <!-- Banana leaf wrap (Lemper) -->
          <rect x="40" y="45" width="80" height="50" rx="6" fill="#4B6E32"/>
          <line x1="40" y1="70" x2="120" y2="70" stroke="#355022" stroke-width="2"/>
          <!-- Toothpick pins -->
          <line x1="42" y1="40" x2="42" y2="100" stroke="#D4AF37" stroke-width="2"/>
          <line x1="118" y1="40" x2="118" y2="100" stroke="#D4AF37" stroke-width="2"/>
          <text x="80" y="128" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="bold" fill="#37192C" text-anchor="middle">Lemper Ayam</text>
        </g>
      </svg>
    `;
  },

  /**
   * Editorial Spread Visuals
   */
  getEditorialSpreadVisual(editId, spreadIdx) {
    if (editId === 'edit-hyphen') {
      if (spreadIdx === 0) {
        // Cover & Dust Jacket
        return `
          <svg viewBox="0 0 600 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="420" fill="#24101D"/>
            <!-- Book Center Crease & Smyth Sewn Thread marks -->
            <line x1="300" y1="0" x2="300" y2="420" stroke="#000" stroke-width="3" opacity="0.5"/>

            <!-- Left: Back Cover -->
            <rect x="30" y="30" width="250" height="360" rx="3" fill="#37192C"/>
            <text x="155" y="200" font-family="'Space Mono', monospace" font-size="8" fill="#FFF3E5" text-anchor="middle" letter-spacing="1.5">ISSUE 04 // LIMINAL SPACES</text>
            <text x="155" y="220" font-family="'Space Mono', monospace" font-size="7" fill="#CBB493" text-anchor="middle">BINUS DKV CURATION 2024</text>
            <!-- Barcode -->
            <g transform="translate(95, 310)">
              <rect x="0" y="0" width="120" height="40" fill="#FFF3E5"/>
              <line x1="10" y1="5" x2="10" y2="30" stroke="#000" stroke-width="2"/>
              <line x1="16" y1="5" x2="16" y2="30" stroke="#000" stroke-width="1"/>
              <line x1="22" y1="5" x2="22" y2="30" stroke="#000" stroke-width="3"/>
              <line x1="30" y1="5" x2="30" y2="30" stroke="#000" stroke-width="1.5"/>
              <line x1="38" y1="5" x2="38" y2="30" stroke="#000" stroke-width="2"/>
              <line x1="48" y1="5" x2="48" y2="30" stroke="#000" stroke-width="1"/>
              <line x1="56" y1="5" x2="56" y2="30" stroke="#000" stroke-width="2.5"/>
              <line x1="68" y1="5" x2="68" y2="30" stroke="#000" stroke-width="1.5"/>
              <line x1="78" y1="5" x2="78" y2="30" stroke="#000" stroke-width="2"/>
              <line x1="90" y1="5" x2="90" y2="30" stroke="#000" stroke-width="3"/>
              <line x1="102" y1="5" x2="102" y2="30" stroke="#000" stroke-width="1.5"/>
              <text x="60" y="37" font-family="'Space Mono', monospace" font-size="6" fill="#000" text-anchor="middle">9 780201 37962</text>
            </g>

            <!-- Right: Front Cover with Die-cut Window -->
            <rect x="320" y="30" width="250" height="360" rx="3" fill="#37192C"/>
            <!-- Die-cut circle revealing warm vanilla inner paper -->
            <circle cx="445" cy="180" r="65" fill="#FFF3E5"/>
            <!-- Title Typography -->
            <text x="445" y="110" font-family="'Playfair Display', serif" font-size="28" font-weight="900" fill="#FFF3E5" text-anchor="middle" letter-spacing="4">HYPHEN</text>
            <text x="445" y="130" font-family="'Space Mono', monospace" font-size="8" fill="#D4AF37" text-anchor="middle" letter-spacing="2">VOL. IV</text>

            <!-- Inside the Die-Cut: Architectural Geometry -->
            <path d="M 410 180 L 445 135 L 480 180 L 445 225 Z" fill="none" stroke="#37192C" stroke-width="2"/>
            <circle cx="445" cy="180" r="14" fill="#B34A47"/>

            <text x="445" y="290" font-family="'Cormorant Garamond', serif" font-size="14" font-style="italic" fill="#FFF3E5" text-anchor="middle">The Geometry of Transition</text>
            <text x="445" y="340" font-family="'Space Mono', monospace" font-size="7" fill="#EAD7B5" text-anchor="middle">EDITED & BOUND BY MEI</text>
          </svg>
        `;
      }

      if (spreadIdx === 1) {
        // Typography Essay
        return `
          <svg viewBox="0 0 600 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="420" fill="#FFF3E5"/>
            <!-- Center spine line -->
            <line x1="300" y1="0" x2="300" y2="420" stroke="#EAD7B5" stroke-width="2"/>

            <!-- Left Page: Big Headline & Asymmetric Columns -->
            <text x="60" y="80" font-family="'Playfair Display', serif" font-size="24" font-weight="bold" fill="#37192C">The Quiet</text>
            <text x="60" y="110" font-family="'Playfair Display', serif" font-size="24" font-weight="bold" fill="#37192C" font-style="italic">Psychology of</text>
            <text x="60" y="140" font-family="'Playfair Display', serif" font-size="24" font-weight="bold" fill="#B34A47">Empty Corridors</text>
            <line x1="60" y1="155" x2="260" y2="155" stroke="#37192C" stroke-width="1.5"/>

            <!-- Body Column 1 -->
            <g font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#37192C" opacity="0.85">
              <text x="60" y="180">Architecture communicates in frequencies that precede conscious speech.</text>
              <text x="60" y="195">When we inhabit a corridor at 2:00 AM, the physical space ceases to be a mere</text>
              <text x="60" y="210">conduit between functional destinations. It expands into an autonomous room</text>
              <text x="60" y="225">of suspension, where velocity slows and thought catches up with geography.</text>
              <text x="60" y="250">In modernist Indonesian urbanism, these zones are frequently relegated to</text>
              <text x="60" y="265">utilitarian neutrality: concrete, fluorescent tubes, unadorned plaster.</text>
              <text x="60" y="280">Yet it is precisely in this calculated absence of ornament that the eye</text>
              <text x="60" y="295">begins to seek solace in proportion and shadow.</text>
            </g>

            <text x="60" y="370" font-family="'Space Mono', monospace" font-size="7" fill="#666">024 // HYPHEN ESSAYS</text>

            <!-- Right Page: Photo Plate & Pull Quote -->
            <rect x="330" y="60" width="220" height="190" fill="#37192C"/>
            <!-- Monochrome Architectural Photo placeholder -->
            <path d="M 330 250 L 400 120 L 480 200 L 550 140 L 550 250 Z" fill="#220E1C"/>
            <line x1="440" y1="60" x2="440" y2="250" stroke="#EAD7B5" stroke-width="1" stroke-opacity="0.5"/>
            <text x="350" y="90" font-family="'Space Mono', monospace" font-size="7" fill="#D4AF37">FIG. 04 — TRANSIT HALL</text>

            <!-- Elegant Pull Quote -->
            <text x="330" y="285" font-family="'Cormorant Garamond', serif" font-size="13" font-style="italic" fill="#37192C">“To exist in the in-between is not to be</text>
            <text x="330" y="305" font-family="'Cormorant Garamond', serif" font-size="13" font-style="italic" fill="#37192C">lost; it is to be in motion.”</text>
            <text x="330" y="325" font-family="'Space Mono', monospace" font-size="7" fill="#B34A47">— MEI, ESSAYS ON LIMINALITY</text>

            <text x="530" y="370" font-family="'Space Mono', monospace" font-size="7" fill="#666" text-anchor="end">025</text>
          </svg>
        `;
      }

      if (spreadIdx === 2) {
        // Photo Essay Centerfold
        return `
          <svg viewBox="0 0 600 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="420" fill="#2A1424"/>
            <!-- Center fold line -->
            <line x1="300" y1="0" x2="300" y2="420" stroke="#000" stroke-width="2" opacity="0.4"/>

            <!-- Centerfold Duotone Risograph Poster spreading across both pages -->
            <rect x="50" y="40" width="500" height="310" fill="#37192C" stroke="#D4AF37" stroke-width="1.5"/>
            <!-- Architectural Graphic Silhouettes -->
            <polygon points="120,350 200,120 300,280 400,90 480,350" fill="#1A0A15"/>
            <circle cx="300" cy="140" r="50" fill="#B34A47" opacity="0.8"/>
            <circle cx="300" cy="140" r="30" fill="#E88D67" opacity="0.9"/>
            <line x1="50" y1="260" x2="550" y2="260" stroke="#FFF3E5" stroke-width="1" stroke-dasharray="8 4"/>

            <text x="300" y="230" font-family="'Playfair Display', serif" font-size="28" font-style="italic" fill="#FFF3E5" text-anchor="middle" letter-spacing="4">INHABITING THE VOID</text>

            <!-- Captions -->
            <text x="60" y="380" font-family="'Space Mono', monospace" font-size="7" fill="#EAD7B5">CENTERFOLD INSERT // 2-COLOR RISO PRINT</text>
            <text x="540" y="380" font-family="'Space Mono', monospace" font-size="7" fill="#EAD7B5" text-anchor="end">PAGES 032-033</text>
          </svg>
        `;
      }

      // Colophon
      return `
        <svg viewBox="0 0 600 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="420" fill="#FFFDF9"/>
          <line x1="300" y1="0" x2="300" y2="420" stroke="#EAD7B5" stroke-width="1.5"/>

          <!-- Colophon Grid -->
          <g transform="translate(60, 60)">
            <text x="0" y="20" font-family="'Space Mono', monospace" font-size="12" font-weight="bold" fill="#37192C">COLOPHON & ARCHIVE METRICS</text>
            <line x1="0" y1="35" x2="200" y2="35" stroke="#37192C" stroke-width="1.5"/>

            <g font-family="'Space Mono', monospace" font-size="7.5" fill="#37192C">
              <text x="0" y="65" font-weight="bold">PUBLICATION:</text>
              <text x="100" y="65">HYPHEN ISSUE 04</text>

              <text x="0" y="90" font-weight="bold">DESIGN & BINDING:</text>
              <text x="100" y="90">Mei (Binusian 28)</text>

              <text x="0" y="115" font-weight="bold">INSTITUTION:</text>
              <text x="100" y="115">BINUS University DKV</text>

              <text x="0" y="140" font-weight="bold">PAPER STOCKS:</text>
              <text x="100" y="140">Munken Pure 120gsm</text>
              <text x="100" y="155">Colorplan Plum 270gsm</text>

              <text x="0" y="185" font-weight="bold">TYPOGRAPHY:</text>
              <text x="100" y="185">Playfair Display</text>
              <text x="100" y="200">Cormorant Garamond</text>
              <text x="100" y="215">Space Mono</text>

              <text x="0" y="245" font-weight="bold">PRINT PROCESS:</text>
              <text x="100" y="245">2-Color Risograph + Offset</text>
            </g>
          </g>

          <!-- Right page: Rubber Stamp -->
          <g transform="translate(360, 140) rotate(-12)">
            <rect x="0" y="0" width="160" height="75" rx="6" fill="none" stroke="#B34A47" stroke-width="2.5" stroke-dasharray="6 3"/>
            <text x="80" y="26" font-family="'Space Mono', monospace" font-size="9" font-weight="bold" fill="#B34A47" text-anchor="middle">BINUS DKV PRINT LAB</text>
            <text x="80" y="44" font-family="'Space Mono', monospace" font-size="12" font-weight="bold" fill="#B34A47" text-anchor="middle">OFFICIAL ARCHIVE</text>
            <text x="80" y="62" font-family="'Space Mono', monospace" font-size="8" fill="#B34A47" text-anchor="middle">BATCH B28-0429 // PASSED</text>
          </g>
        </svg>
      `;
    }

    // Default editorial spread visual
    return `
      <svg viewBox="0 0 600 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="420" fill="#FFF3E5"/>
        <line x1="300" y1="0" x2="300" y2="420" stroke="#EAD7B5" stroke-width="1.5"/>
        <text x="150" y="200" font-family="'Cormorant Garamond', serif" font-size="20" fill="#37192C" text-anchor="middle">Specimen Layout A</text>
        <text x="450" y="200" font-family="'Cormorant Garamond', serif" font-size="20" fill="#37192C" text-anchor="middle">Specimen Layout B</text>
      </svg>
    `;
  },

  /**
   * Instagram Feed Visuals (9 Distinct Tiles)
   */
  getFeedTile(idx) {
    const tiles = [
      // 0: Studio BTS
      `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#2E1525"/>
        <circle cx="150" cy="150" r="90" fill="#37192C" stroke="#D4AF37" stroke-width="1.5"/>
        <rect x="90" y="90" width="120" height="120" rx="4" fill="#FFF3E5"/>
        <text x="150" y="145" font-family="'Playfair Display', serif" font-size="16" fill="#37192C" text-anchor="middle" font-weight="bold">Studio Night</text>
        <text x="150" y="165" font-family="'Space Mono', monospace" font-size="7" fill="#B34A47" text-anchor="middle">@kyuu__rious</text>
      </svg>`,

      // 1: Color Study
      `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#FFF3E5"/>
        <rect x="30" y="30" width="110" height="110" rx="6" fill="#37192C"/>
        <rect x="160" y="30" width="110" height="110" rx="6" fill="#C99E64"/>
        <rect x="30" y="160" width="110" height="110" rx="6" fill="#4B5842"/>
        <rect x="160" y="160" width="110" height="110" rx="6" fill="#E88D67"/>
        <text x="150" y="155" font-family="'Space Mono', monospace" font-size="8" font-weight="bold" fill="#37192C" text-anchor="middle">PALETTE 04</text>
      </svg>`,

      // 2: Bookbinding
      `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#24101D"/>
        <rect x="50" y="50" width="200" height="200" rx="4" fill="#EAD7B5" stroke="#37192C" stroke-width="2"/>
        <!-- Smyth sewn stitches -->
        <line x1="80" y1="50" x2="80" y2="250" stroke="#B34A47" stroke-width="3" stroke-dasharray="10 8"/>
        <text x="160" y="155" font-family="'Cormorant Garamond', serif" font-size="16" font-style="italic" fill="#37192C" text-anchor="middle">French Fold</text>
      </svg>`,

      // 3: Risograph
      `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#37192C"/>
        <circle cx="120" cy="140" r="60" fill="#E88D67" opacity="0.8"/>
        <circle cx="180" cy="160" r="60" fill="#4B889B" opacity="0.8"/>
        <text x="150" y="270" font-family="'Space Mono', monospace" font-size="8" fill="#FFF3E5" text-anchor="middle">RISO MISREGISTRATION</text>
      </svg>`,

      // 4: Type Study
      `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#FAF5ED"/>
        <text x="150" y="180" font-family="'Playfair Display', serif" font-size="120" fill="#37192C" text-anchor="middle" font-style="italic">Q</text>
        <text x="150" y="240" font-family="'Space Mono', monospace" font-size="8" fill="#CBB493" text-anchor="middle">SWASH & LIGATURE</text>
      </svg>`,

      // 5: Merchandise
      `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#FFFDF9"/>
        <!-- Holographic sticker -->
        <polygon points="150,50 175,100 230,105 190,145 200,200 150,175 100,200 110,145 70,105 125,100" fill="#D4AF37"/>
        <circle cx="150" cy="135" r="30" fill="#37192C"/>
        <text x="150" y="140" font-family="'Space Mono', monospace" font-size="11" fill="#FFF3E5" text-anchor="middle">B28</text>
      </svg>`,

      // 6: Desk Diary
      `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#291222"/>
        <rect x="40" y="60" width="180" height="180" rx="4" fill="#FFF3E5" transform="rotate(-6 130 150)"/>
        <circle cx="210" cy="200" r="45" fill="none" stroke="#D4AF37" stroke-width="3" opacity="0.6"/> <!-- coffee ring -->
        <text x="120" y="150" font-family="'Caveat', cursive, sans-serif" font-size="20" fill="#37192C" transform="rotate(-6 130 150)">ideas archive</text>
      </svg>`,

      // 7: Event Key Visual
      `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#150812"/>
        <path d="M 50 150 Q 150 50 250 150 Q 150 250 50 150 Z" fill="none" stroke="#FFF3E5" stroke-width="2"/>
        <circle cx="150" cy="150" r="35" fill="#B34A47"/>
        <text x="150" y="270" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="bold" fill="#D4AF37" text-anchor="middle" letter-spacing="2">METAMORPHOSIS</text>
      </svg>`,

      // 8: Archive Note
      `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#EAD7B5"/>
        <rect x="30" y="30" width="240" height="240" rx="6" fill="#FFF3E5" stroke="#CBB493" stroke-width="1.5"/>
        <text x="150" y="125" font-family="'Cormorant Garamond', serif" font-size="18" font-style="italic" fill="#37192C" text-anchor="middle">“Curating ideas into</text>
        <text x="150" y="150" font-family="'Cormorant Garamond', serif" font-size="18" font-style="italic" fill="#37192C" text-anchor="middle">tangible narratives.”</text>
        <text x="150" y="195" font-family="'Space Mono', monospace" font-size="8" fill="#B34A47" text-anchor="middle">— MEI // @KYUU__RIOUS</text>
      </svg>`
    ];

    return tiles[idx % tiles.length];
  }
};

if (typeof window !== 'undefined') {
  window.VectorAssets = VectorAssets;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = VectorAssets;
}
