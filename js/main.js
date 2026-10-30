/**
 * Archival Portfolio Main Controller
 * Handles Tab Physics, 3D Hover Micro-interactions, Lightbox Modals,
 * Sound Integration, Editorial Carousels, and Requisition Memo Form.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Initialize UI Elements & Dynamic Content ---
  initVectorGraphics();
  initTabsNavigation();
  initEditorialViewer();
  initArtworkLightbox();
  initBrandingModals();
  initMemoForm();
  initTiltEffects();
  initDeskControls();
  initKeyboardShortcuts();
});

/**
 * Render all vector graphics into their respective containers
 */
function initVectorGraphics() {
  // Render Polaroid Portrait
  const polaroidEl = document.getElementById('polaroid-portrait-slot');
  if (polaroidEl) {
    polaroidEl.innerHTML = VectorAssets.getPolaroidPortrait();
  }

  // Render Branding Mockups
  PORTFOLIO_DATA.branding.forEach(brand => {
    const slot = document.getElementById(`mockup-${brand.id}`);
    if (slot) {
      slot.innerHTML = VectorAssets.getBrandVisual(brand.id);
    }
  });

  // Render Artwork Visuals
  PORTFOLIO_DATA.artworks.forEach(art => {
    const slot = document.getElementById(`art-slot-${art.id}`);
    if (slot) {
      slot.innerHTML = VectorAssets.getArtworkVisual(art.id);
    }
  });

  // Render Initial Editorial Spread
  renderEditorialSpread(0);

  // Render Instagram 9-Grid Tiles & Campaign Visual
  const campaignSlot = document.getElementById('campaign-visual-slot');
  if (campaignSlot) {
    campaignSlot.innerHTML = VectorAssets.getArtworkVisual('art-botanical-reverie');
  }

  const feedGrid = document.getElementById('insta-feed-grid');
  if (feedGrid) {
    feedGrid.innerHTML = PORTFOLIO_DATA.social.feed.map((post, idx) => `
      <div class="feed-tile" data-post-index="${idx}" title="${post.caption}">
        ${VectorAssets.getFeedTile(idx)}
        <div class="feed-tile-overlay">
          <p class="feed-overlay-caption">${post.caption}</p>
          <div class="feed-overlay-stats">♥ ${post.likes} &nbsp; 💬 ${post.comments}</div>
        </div>
      </div>
    `).join('');

    // Attach click handler to feed tiles
    feedGrid.querySelectorAll('.feed-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        const idx = tile.getAttribute('data-post-index');
        const post = PORTFOLIO_DATA.social.feed[idx];
        showToast(`Instagram post: "${post.caption.substring(0, 45)}..."`);
        window.deskSound.playPaperRustle(0.7);
      });
    });
  }
}

/**
 * Multi-layer Folder Tabs System
 */
function initTabsNavigation() {
  const tabs = document.querySelectorAll('.folder-tab');
  const panes = document.querySelectorAll('.folder-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      activateTab(targetId);
      window.deskSound.playTabClick();
    });
  });

  // Auto-scroll active tab into view on mobile
  window.activateTab = function(targetId) {
    tabs.forEach(t => {
      const isTarget = t.getAttribute('data-tab') === targetId;
      t.classList.toggle('active', isTarget);
      t.setAttribute('aria-selected', isTarget ? 'true' : 'false');
      if (isTarget) {
        t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    panes.forEach(pane => {
      const isTarget = pane.id === targetId;
      pane.classList.toggle('active', isTarget);
      pane.setAttribute('aria-hidden', isTarget ? 'false' : 'true');
    });

    // Gentle tactile binder elevation
    const binder = document.querySelector('.folder-binder');
    if (binder) {
      binder.style.transform = 'translateY(-2px)';
      setTimeout(() => {
        binder.style.transform = '';
      }, 180);
    }
  };
}

/**
 * Editorial Spread Viewer Carousel
 */
let currentSpreadIndex = 0;
const hyphenZine = PORTFOLIO_DATA.editorial[0];

function initEditorialViewer() {
  const prevBtn = document.getElementById('btn-spread-prev');
  const nextBtn = document.getElementById('btn-spread-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSpreadIndex > 0) {
        currentSpreadIndex--;
        renderEditorialSpread(currentSpreadIndex);
        window.deskSound.playPaperRustle(0.9);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSpreadIndex < hyphenZine.spreads.length - 1) {
        currentSpreadIndex++;
        renderEditorialSpread(currentSpreadIndex);
        window.deskSound.playPaperRustle(0.9);
      }
    });
  }

  // Bookmark tab quick jumps
  const bookmarkTabs = document.querySelectorAll('.bookmark-tab');
  bookmarkTabs.forEach(bm => {
    bm.addEventListener('click', () => {
      const idx = parseInt(bm.getAttribute('data-spread-idx'), 10);
      if (!isNaN(idx)) {
        currentSpreadIndex = idx;
        renderEditorialSpread(currentSpreadIndex);
        window.deskSound.playPaperRustle(0.9);
      }
    });
  });
}

function renderEditorialSpread(idx) {
  const spread = hyphenZine.spreads[idx];
  const slot = document.getElementById('editorial-spread-slot');
  const labelEl = document.getElementById('spread-label-text');
  const captionEl = document.getElementById('spread-caption-text');
  const prevBtn = document.getElementById('btn-spread-prev');
  const nextBtn = document.getElementById('btn-spread-next');

  if (slot) {
    slot.innerHTML = VectorAssets.getEditorialSpreadVisual('edit-hyphen', idx);
  }
  if (labelEl) {
    labelEl.textContent = spread.label;
  }
  if (captionEl) {
    captionEl.textContent = `${spread.caption} — “${spread.quote}”`;
  }

  if (prevBtn) prevBtn.disabled = (idx === 0);
  if (nextBtn) nextBtn.disabled = (idx === hyphenZine.spreads.length - 1);

  // Update active bookmark tab styling
  document.querySelectorAll('.bookmark-tab').forEach((bm, i) => {
    bm.classList.toggle('active-bookmark', i === idx);
  });
}

/**
 * Branding Case Study Dossier Modal
 */
function initBrandingModals() {
  const modalOverlay = document.getElementById('case-study-modal');
  const modalContent = document.getElementById('modal-sheet-content');
  const closeBtn = document.getElementById('modal-close-button');

  document.querySelectorAll('.btn-inspect-dossier').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const brandId = btn.getAttribute('data-brand-id');
      const brand = PORTFOLIO_DATA.branding.find(b => b.id === brandId);
      if (brand) {
        openBrandModal(brand);
      }
    });
  });

  function openBrandModal(brand) {
    if (!modalOverlay || !modalContent) return;

    modalContent.innerHTML = `
      <div class="modal-dossier-header">
        <div class="archival-tag" style="display:inline-flex; margin-bottom:12px;">${brand.badge}</div>
        <h2 style="font-family:var(--font-serif-display); font-size:2rem; color:var(--color-plum);">${brand.title}</h2>
        <p style="font-family:var(--font-serif-editorial); font-size:1.15rem; font-style:italic; color:var(--color-stamp-red); margin-bottom:18px;">
          ${brand.category} // ${brand.year}
        </p>
      </div>

      <div style="width:100%; aspect-ratio:16/9; background:#24131E; border-radius:8px; overflow:hidden; margin-bottom:24px; box-shadow:var(--shadow-plum-md);">
        ${VectorAssets.getBrandVisual(brand.id)}
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-bottom:24px;">
        <div style="background:var(--color-vanilla); padding:18px; border-radius:8px; border:1px solid var(--color-manila);">
          <h4 style="font-family:var(--font-mono); font-size:0.75rem; text-transform:uppercase; color:var(--color-plum); margin-bottom:8px;">The Design Challenge</h4>
          <p style="font-size:0.88rem; color:var(--color-text-main); line-height:1.6;">${brand.caseDetails.challenge}</p>
        </div>
        <div style="background:var(--color-vanilla); padding:18px; border-radius:8px; border:1px solid var(--color-manila);">
          <h4 style="font-family:var(--font-mono); font-size:0.75rem; text-transform:uppercase; color:var(--color-plum); margin-bottom:8px;">Creative Solution</h4>
          <p style="font-size:0.88rem; color:var(--color-text-main); line-height:1.6;">${brand.caseDetails.solution}</p>
        </div>
      </div>

      <div style="margin-bottom:24px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <h4 style="font-family:var(--font-mono); font-size:0.75rem; text-transform:uppercase; color:var(--color-plum);">Color System Palette</h4>
          <span style="font-family:var(--font-mono); font-size:0.68rem; color:var(--color-text-muted);">CLICK SWATCH TO COPY HEX</span>
        </div>
        <div style="display:flex; gap:12px; flex-wrap:wrap;">
          ${brand.colors.map((c, i) => `
            <button type="button" class="modal-swatch-chip" data-hex="${c}" style="display:flex; align-items:center; gap:8px; background:var(--color-pure-white); padding:6px 12px; border-radius:6px; border:1px solid var(--color-manila); cursor:pointer; outline:none; transition:transform 0.2s ease;">
              <span style="width:18px; height:18px; border-radius:50%; background:${c}; display:inline-block; border:1px solid rgba(0,0,0,0.1);"></span>
              <span style="font-family:var(--font-mono); font-size:0.72rem; font-weight:bold; color:var(--color-plum);">${brand.colorNames[i]}</span>
              <span style="font-family:var(--font-mono); font-size:0.68rem; color:#888;">${c}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <div style="border-top:1px dashed var(--color-manila); padding-top:18px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--color-text-muted);">
          <strong>Typography:</strong> ${brand.caseDetails.typography}
        </div>
        <div class="rubber-stamp stamp-gold" style="font-size:0.75rem; transform:rotate(-4deg);">ARCHIVE VERIFIED // B28</div>
      </div>
    `;

    // Add click listeners to copy color hex
    modalContent.querySelectorAll('.modal-swatch-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const hex = chip.getAttribute('data-hex');
        navigator.clipboard.writeText(hex).then(() => {
          showToast(`Color copied: ${hex}`);
          window.deskSound.playClipSound();
        });
      });
    });

    modalOverlay.classList.add('open');
    window.deskSound.playPaperRustle(0.8);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove('open');
    window.deskSound.playClipSound();
  }
}

/**
 * Artwork Lightbox Viewer
 */
function initArtworkLightbox() {
  const modalOverlay = document.getElementById('case-study-modal');
  const modalContent = document.getElementById('modal-sheet-content');

  // Polaroid Click-to-Zoom Inspection
  const polaroidFrame = document.querySelector('.polaroid-frame');
  if (polaroidFrame) {
    polaroidFrame.addEventListener('click', () => {
      modalContent.innerHTML = `
        <div class="archival-tag" style="display:inline-flex; margin-bottom:12px;">STUDENT IDENTIFICATION // DOSSIER 01</div>
        <h2 style="font-family:var(--font-serif-display); font-size:2rem; color:var(--color-plum); margin-bottom:6px;">Mei — Studio Portrait</h2>
        <p style="font-family:var(--font-serif-editorial); font-size:1.1rem; font-style:italic; color:var(--color-stamp-red); margin-bottom:20px;">
          BINUS University (B28) • Visual Communication Design (DKV)
        </p>

        <div style="width:100%; aspect-ratio:1/1.14; max-height:480px; background:#1C1019; border-radius:6px; overflow:hidden; margin-bottom:24px; box-shadow:var(--shadow-plum-md);">
          ${VectorAssets.getPolaroidPortrait()}
        </div>

        <div style="background:var(--color-vanilla); padding:20px; border-radius:8px; border:1px solid var(--color-manila); margin-bottom:20px;">
          <h4 style="font-family:var(--font-mono); font-size:0.75rem; text-transform:uppercase; color:var(--color-plum); margin-bottom:8px;">Archival Note</h4>
          <p style="font-size:0.92rem; color:var(--color-text-main); line-height:1.65;">
            “Late night studio sessions at BINUS Anggrek campus. Pencils, headphones, sketchbook notes, and endless tea cups. Curating ideas into tangible visual narratives.”
          </p>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <a href="https://www.instagram.com/kyuu__rious" target="_blank" rel="noopener noreferrer" class="desk-btn btn-instagram" style="text-decoration:none;">
            Follow Mei @kyuu__rious ↗
          </a>
          <div class="rubber-stamp stamp-gold" style="font-size:0.75rem;">VERIFIED B28 CREATIVE</div>
        </div>
      `;
      modalOverlay.classList.add('open');
      window.deskSound.playPaperRustle(0.85);
    });
  }

  document.querySelectorAll('.art-card').forEach(card => {
    card.addEventListener('click', () => {
      const artId = card.getAttribute('data-art-id');
      const art = PORTFOLIO_DATA.artworks.find(a => a.id === artId);
      if (art) {
        modalContent.innerHTML = `
          <div class="archival-tag" style="display:inline-flex; margin-bottom:12px;">SPECIMEN // ${art.tag}</div>
          <h2 style="font-family:var(--font-serif-display); font-size:2rem; color:var(--color-plum); margin-bottom:6px;">${art.title}</h2>
          <p style="font-family:var(--font-serif-editorial); font-size:1.1rem; font-style:italic; color:var(--color-stamp-red); margin-bottom:20px;">
            ${art.medium} — ${art.year} (${art.size})
          </p>

          <div style="width:100%; aspect-ratio:1/1; max-height:460px; background:#1C1019; border-radius:6px; overflow:hidden; margin-bottom:24px; box-shadow:var(--shadow-plum-md);">
            ${VectorAssets.getArtworkVisual(art.id)}
          </div>

          <div style="background:var(--color-vanilla); padding:20px; border-radius:8px; border:1px solid var(--color-manila); margin-bottom:20px;">
            <h4 style="font-family:var(--font-mono); font-size:0.75rem; text-transform:uppercase; color:var(--color-plum); margin-bottom:8px;">Artist’s Journal & Process Note</h4>
            <p style="font-size:0.92rem; color:var(--color-text-main); line-height:1.65;">${art.story}</p>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--color-text-muted);">CATALOG ID: ART-${art.id.toUpperCase()}</span>
            <div class="rubber-stamp stamp-plum" style="font-size:0.75rem;">ORIGINAL CREATIVE</div>
          </div>
        `;
        modalOverlay.classList.add('open');
        window.deskSound.playPaperRustle(0.85);
      }
    });
  });
}

/**
 * Archival Requisition Memo Form (Contact Form)
 */
function initMemoForm() {
  const form = document.getElementById('archival-memo-form');
  const stampOverlay = document.getElementById('dispatched-stamp');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Trigger heavy rubber stamp thud & typewriter paper rustle
      window.deskSound.playStampThud();

      if (stampOverlay) {
        stampOverlay.classList.add('stamp-active');
      }

      showToast("✓ Archival Memo Filed! Dispatch recorded successfully.");

      // Reset form after delay
      setTimeout(() => {
        form.reset();
      }, 1500);

      setTimeout(() => {
        if (stampOverlay) stampOverlay.classList.remove('stamp-active');
      }, 4500);
    });
  }

  // Copy Email Action
  const copyBtn = document.getElementById('btn-copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.profile.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied to clipboard: ${email}`);
        window.deskSound.playClipSound();
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }
}

/**
 * 3D Tilt Micro-interactions on Hover
 */
function initTiltEffects() {
  const tiltElements = document.querySelectorAll('.polaroid-frame, .brand-card');

  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      el.style.transform = `perspective(700px) rotateX(${-deltaY * 5}deg) rotateY(${deltaX * 5}deg) translateY(-4px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}

/**
 * Desk Atmosphere & Sound Controls
 */
function initDeskControls() {
  // Sound Engine Toggle Button
  const soundBtn = document.getElementById('desk-btn-sound');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const isEnabled = window.deskSound.toggle();
      soundBtn.querySelector('.btn-label').textContent = isEnabled ? 'Sound: ON' : 'Sound: OFF';
      soundBtn.style.opacity = isEnabled ? '1' : '0.6';
      if (isEnabled) window.deskSound.playTabClick();
    });
  }

  // Studio Desk Lamp Toggle (Daylight / Warm Late-Night Studio Glow)
  const lampBtn = document.getElementById('desk-btn-lamp');
  if (lampBtn) {
    lampBtn.addEventListener('click', () => {
      document.body.classList.toggle('lamp-night');
      const isNight = document.body.classList.contains('lamp-night');
      lampBtn.querySelector('.btn-label').textContent = isNight ? 'Lamp: Studio Glow' : 'Lamp: Daylight';
      window.deskSound.playClipSound();
      showToast(isNight ? '💡 Studio night desk lamp illuminated' : '☀️ Natural daylight desk restored');
    });
  }
}

/**
 * Keyboard Navigation (1-6 for Tabs, ESC for Modals)
 */
function initKeyboardShortcuts() {
  const tabIds = ['tab-about', 'tab-branding', 'tab-artwork', 'tab-editorial', 'tab-social', 'tab-contact'];

  document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape') {
      const modal = document.getElementById('case-study-modal');
      if (modal && modal.classList.contains('open')) {
        modal.classList.remove('open');
        window.deskSound.playClipSound();
      }
    }

    // Number keys 1-6 (when not typing in an input or textarea)
    if (['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) {
      return;
    }

    const keyNum = parseInt(e.key, 10);
    if (!isNaN(keyNum) && keyNum >= 1 && keyNum <= 6) {
      const targetTab = tabIds[keyNum - 1];
      if (targetTab && window.activateTab) {
        window.activateTab(targetTab);
        window.deskSound.playTabClick();
      }
    }
  });
}

/**
 * Visual Toast Alert Feedback
 */
function showToast(message) {
  let toast = document.getElementById('desk-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'desk-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
