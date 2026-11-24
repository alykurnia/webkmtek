/**
 * KMTek – Main Application JavaScript (Multi-Page Architecture)
 * Handles:
 * 1. Active Navigation Indicator across standalone pages
 * 2. Sticky Navigation Header & Scrolled State
 * 3. Desktop Dropdown Menus & Mobile Accordions
 * 4. In-Page Tab Switching & Category Filtering (with Hash support: #maker, #education, etc.)
 * 5. Real-Time Search Filtering on Cards
 * 6. Interactive Modals (Partner Store, Product Detail, Registration/Consultation, Article Reader)
 * 7. Live Webinar Countdown Timer (on bootcamp.html)
 * 8. Scroll Animations, Stats Counter (on index.html), Back to Top, and Footer Year
 */

(function () {
  'use strict';

  /* ---------------------------------------------------------------
     1. DOM REFERENCES
  --------------------------------------------------------------- */
  const navHeader        = document.getElementById('nav-header');
  const footerYear       = document.getElementById('footer-year');
  const hamburger        = document.querySelector('.nav-header__hamburger');
  const mobileNav        = document.getElementById('mobile-nav');
  const mobileNavClose   = document.querySelector('.mobile-nav__close');
  const backToTop        = document.getElementById('back-to-top');

  // Modals
  const modalOverlay     = document.getElementById('modal-overlay');
  const modalTitle       = document.getElementById('modal-title');
  const modalSubtitle    = document.getElementById('modal-subtitle');
  const modalBodyContent = document.getElementById('modal-body-content');
  const modalCloseBtn    = document.querySelector('.modal-close');

  /* ---------------------------------------------------------------
     2. FOOTER YEAR
  --------------------------------------------------------------- */
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------------
     3. STICKY NAVIGATION
  --------------------------------------------------------------- */
  function handleNavScroll() {
    if (!navHeader) return;
    if (window.scrollY > 15) {
      navHeader.classList.add('is-scrolled');
    } else {
      navHeader.classList.remove('is-scrolled');
    }
  }

  if (navHeader) {
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
  }

  /* ---------------------------------------------------------------
     4. ACTIVE NAVIGATION LINK (BASED ON CURRENT FILE)
  --------------------------------------------------------------- */
  function updateActiveNav() {
    const rawPath = window.location.pathname.toLowerCase();
    const navItems = document.querySelectorAll('.nav-header__item');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    let activeCategory = 'index';
    if (rawPath.includes('hardware')) {
      activeCategory = 'hardware';
    } else if (rawPath.includes('services')) {
      activeCategory = 'services';
    } else if (rawPath.includes('bootcamp')) {
      activeCategory = 'bootcamp';
    } else if (rawPath.includes('kmpedia')) {
      activeCategory = 'kmpedia';
    }

    // Top Header links
    navItems.forEach((item) => {
      const link = item.querySelector('.nav-header__link');
      if (link) {
        const href = (link.getAttribute('href') || '').toLowerCase();
        if (
          (activeCategory === 'index' && (href.endsWith('index.html') && !href.includes('/')) || href === '#' || href === '#beranda') ||
          (activeCategory !== 'index' && href.includes(activeCategory))
        ) {
          link.classList.add('is-active');
        } else {
          link.classList.remove('is-active');
        }
      }
    });

    // Dropdown sub-links
    const currentSegment = rawPath.split('/').filter(Boolean).pop() || 'index.html';
    document.querySelectorAll('.maker-dropdown-item, .nav-dropdown__link, .mobile-nav__sub-link').forEach((subLink) => {
      const subHref = (subLink.getAttribute('href') || '').toLowerCase();
      if (subHref.endsWith(currentSegment) || (currentSegment === 'index.html' && subHref.includes('index.html'))) {
        subLink.classList.add('is-active');
        subLink.style.fontWeight = '700';
      } else {
        subLink.classList.remove('is-active');
        subLink.style.fontWeight = '';
      }
    });

    // Mobile nav top links
    mobileLinks.forEach((link) => {
      const href = (link.getAttribute('href') || '').toLowerCase();
      if (
        (activeCategory === 'index' && (href === 'index.html' || href === '#' || href === '#beranda')) ||
        (activeCategory !== 'index' && href.includes(activeCategory))
      ) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  }

  updateActiveNav();

  /* ---------------------------------------------------------------
     5. HAMBURGER MENU & MOBILE ACCORDIONS
  --------------------------------------------------------------- */
  function closeMobileNav() {
    if (!hamburger || !mobileNav) return;
    hamburger.classList.remove('is-open');
    mobileNav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('is-open');
      mobileNav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', isOpen);
      mobileNav.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    if (mobileNavClose) {
      mobileNavClose.addEventListener('click', closeMobileNav);
    }

    // Mobile nav accordion triggers
    const mobileToggles = mobileNav.querySelectorAll('.mobile-nav__toggle');
    mobileToggles.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const subMenu = btn.closest('.mobile-nav__item').querySelector('.mobile-nav__sub');
        if (subMenu) {
          const isOpen = subMenu.classList.toggle('is-open');
          btn.classList.toggle('is-open', isOpen);
        }
      });
    });

    // Close on mobile nav link click
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileNav);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        closeMobileNav();
        hamburger.focus();
      }
    });
  }

  /* ---------------------------------------------------------------
     6. TAB PILL SWITCHING & CATEGORY FILTERING (WITH HASH SYNC)
  --------------------------------------------------------------- */
  function filterViewCards(category) {
    const filterableItems = document.querySelectorAll('[data-category]');
    const categorySections = document.querySelectorAll('.shop-category-section');

    if (category === 'all') {
      filterableItems.forEach((item) => {
        item.style.display = '';
      });
      categorySections.forEach((sec) => {
        sec.style.display = '';
      });
    } else {
      filterableItems.forEach((item) => {
        const itemCat = item.getAttribute('data-category');
        if (itemCat === category) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });

      categorySections.forEach((sec) => {
        const secCat = sec.getAttribute('data-section-category');
        if (secCat && secCat !== category) {
          sec.style.display = 'none';
        } else {
          sec.style.display = '';
        }
      });
    }

    // Update empty state if on KMPedia
    const emptyEl = document.querySelector('.kmpedia-empty-state');
    if (emptyEl) {
      const anyVisible = Array.from(document.querySelectorAll('.kmpedia-card')).some(c => c.style.display !== 'none');
      emptyEl.style.display = anyVisible ? 'none' : 'block';
    }
  }

  const tabButtons = document.querySelectorAll('.view-tab');
  tabButtons.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabButtons.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      const category = tab.getAttribute('data-tab');
      filterViewCards(category);

      // Optionally update URL hash without scrolling
      if (category && category !== 'all') {
        history.replaceState(null, '', '#' + category);
      } else {
        history.replaceState(null, '', window.location.pathname);
      }
    });
  });

  // Handle URL hash on page load or hashchange (e.g. hardware.html#maker)
  function handleHashTab() {
    const hash = window.location.hash.replace(/^#/, '').toLowerCase().trim();
    if (!hash) return;

    const matchingTab = document.querySelector(`.view-tab[data-tab="${hash}"]`);
    if (matchingTab) {
      tabButtons.forEach((t) => t.classList.remove('is-active'));
      matchingTab.classList.add('is-active');
      filterViewCards(hash);
    }
  }

  handleHashTab();
  window.addEventListener('hashchange', handleHashTab);

  /* ---------------------------------------------------------------
     7. REAL-TIME SEARCH FILTERING
  --------------------------------------------------------------- */
  const searchInput = document.querySelector('.view-search__input');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.hardware-card, .service-card, .course-card, .kmpedia-card');
      let visibleCount = 0;

      cards.forEach((card) => {
        const title = (card.querySelector('h3, .hardware-card__title, .service-card__title, .course-card__title, .kmpedia-card__title') || {}).textContent || '';
        const desc  = (card.querySelector('p, .hardware-card__desc, .service-card__desc, .course-card__desc, .kmpedia-card__snippet') || {}).textContent || '';
        const specs = (card.querySelector('.hardware-card__specs, .service-card__features, .course-card__specs-row') || {}).textContent || '';

        const fullText = (title + ' ' + desc + ' ' + specs).toLowerCase();

        if (!query || fullText.includes(query)) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      const emptyEl = document.querySelector('.kmpedia-empty-state');
      if (emptyEl) {
        emptyEl.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  }

  /* ---------------------------------------------------------------
     8. INTERACTIVE MODALS SYSTEM
  --------------------------------------------------------------- */
  function openModal(title, subtitle, htmlContent) {
    if (!modalOverlay) return;
    if (modalTitle) modalTitle.textContent = title;
    if (modalSubtitle) modalSubtitle.textContent = subtitle;
    if (modalBodyContent) modalBodyContent.innerHTML = htmlContent;

    modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  // A. Partner Store Buy Modal
  document.addEventListener('click', (e) => {
    const buyBtn = e.target.closest('.js-open-store-modal');
    if (buyBtn) {
      e.preventDefault();
      const productName = buyBtn.getAttribute('data-product-name') || 'Produk KMTek';
      const productPrice = buyBtn.getAttribute('data-product-price') || '';

      const content = `
        <div class="shop-modal-info" style="margin-bottom: 1.5rem; background: #f8fafc; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
          <div style="font-size: 0.8rem; color: #64748b; text-transform: uppercase; font-weight: 600;">Produk yang Dipilih</div>
          <div style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-top: 2px;">${productName}</div>
          ${productPrice ? `<div style="font-size: 1.05rem; font-weight: 800; color: #F52929; margin-top: 4px;">${productPrice}</div>` : ''}
        </div>
        <p style="font-size: 0.9rem; color: #555; margin-bottom: 1.25rem; line-height: 1.5;">
          Untuk memberikan pengalaman berbelanja yang aman, cepat, dan bergaransi resmi, silakan pilih toko marketplace mitra kami di bawah ini:
        </p>
        <div class="store-partner-grid">
          <a href="https://www.tokopedia.com" target="_blank" rel="noopener" class="store-partner-card">
            <div class="store-partner-card__brand">
              <div class="store-partner-card__icon store-partner-card__icon--tokopedia">TP</div>
              <div>
                <div class="store-partner-card__name">Tokopedia Official Store</div>
                <div class="store-partner-card__desc">Gratis Ongkir · Cicilan 0% · Promo Cashback</div>
              </div>
            </div>
            <span class="store-partner-card__btn">Beli di Tokopedia &rarr;</span>
          </a>
          <a href="https://shopee.co.id" target="_blank" rel="noopener" class="store-partner-card">
            <div class="store-partner-card__brand">
              <div class="store-partner-card__icon store-partner-card__icon--shopee">SH</div>
              <div>
                <div class="store-partner-card__name">Shopee Official Store</div>
                <div class="store-partner-card__desc">Voucher Diskon · Garansi Pengiriman Cepat</div>
              </div>
            </div>
            <span class="store-partner-card__btn">Beli di Shopee &rarr;</span>
          </a>
          <a href="https://wa.me/6281234567890?text=Halo%20KMTek,%20saya%20tertarik%20membeli%20${encodeURIComponent(productName)}" target="_blank" rel="noopener" class="store-partner-card">
            <div class="store-partner-card__brand">
              <div class="store-partner-card__icon store-partner-card__icon--wa">WA</div>
              <div>
                <div class="store-partner-card__name">Distributor &amp; WhatsApp Resmi</div>
                <div class="store-partner-card__desc">Pemesanan Skala Institusi, Sekolah &amp; Industri (Faktur Pajak)</div>
              </div>
            </div>
            <span class="store-partner-card__btn">Hubungi Admin &rarr;</span>
          </a>
        </div>
      `;

      openModal(
        'Pilih Toko Mitra Pembelian',
        'Pembelian resmi perangkat KMTek diarahkan langsung ke toko mitra terpercaya kami.',
        content
      );
    }
  });

  // B. Product Specification Detail Modal
  document.addEventListener('click', (e) => {
    const detailBtn = e.target.closest('.js-open-detail-modal');
    if (detailBtn) {
      e.preventDefault();
      const name = detailBtn.getAttribute('data-product-name') || 'Spesifikasi Produk';
      const specsRaw = detailBtn.getAttribute('data-product-specs') || '';
      const desc = detailBtn.getAttribute('data-product-desc') || '';
      const specsList = specsRaw.split('|').filter(Boolean);

      const content = `
        <div style="margin-bottom: 1.5rem;">
          <p style="font-size: 0.95rem; color: #475569; line-height: 1.6; margin-bottom: 1.25rem;">${desc}</p>
          <h4 style="font-size: 1rem; font-weight: 700; color: #0f172a; margin-bottom: 0.75rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.5rem;">
            Rincian Spesifikasi Teknis:
          </h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
            ${specsList.map(s => `<li style="font-size: 0.88rem; color: #334155; display: flex; align-items: center; gap: 0.5rem;"><span style="color:#F52929; font-weight:bold;">✓</span> ${s.trim()}</li>`).join('')}
          </ul>
        </div>
        <div style="background: #f1f5f9; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; font-size: 0.85rem; color: #475569;">
          <strong>Kelengkapan Paket:</strong> Unit modul / board, panduan ringkas, pinout reference card, dan garansi resmi KMTek 1 tahun.
        </div>
        <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
          <button class="btn btn--primary js-open-store-modal" data-product-name="${name}">Beli via Mitra</button>
        </div>
      `;

      openModal(name, 'Informasi teknis dan panduan perangkat resmi KMTek.', content);
    }
  });

  // C. Services Consultation & Registration Modal
  document.addEventListener('click', (e) => {
    const serviceBtn = e.target.closest('.js-open-service-modal');
    if (serviceBtn) {
      e.preventDefault();
      const serviceName = serviceBtn.getAttribute('data-service-name') || 'Layanan KMTek';

      const content = `
        <form class="modal-form" onsubmit="event.preventDefault(); const p = this.service.value; const n = this.name.value; const i = this.institution.value; const c = this.contact.value; const note = this.notes ? this.notes.value : ''; const msg = 'Halo KMtek, saya ingin mendaftar/konsultasi program:\\n• Program: ' + p + '\\n• Nama: ' + n + '\\n• Institusi/Instansi: ' + i + '\\n• Kontak: ' + c + (note ? ('\\n• Catatan: ' + note) : ''); window.open('https://wa.me/6281234567890?text=' + encodeURIComponent(msg), '_blank'); closeModal();">
          <div class="form-group">
            <label class="form-label">Program Layanan / Kemitraan</label>
            <input type="text" name="service" class="form-input" value="${serviceName}" readonly style="background:#f1f5f9; font-weight:600;" />
          </div>
          <div class="form-group">
            <label class="form-label">Nama Lengkap *</label>
            <input type="text" name="name" required class="form-input" placeholder="Masukkan nama lengkap Anda" />
          </div>
          <div class="form-group">
            <label class="form-label">Institusi / Sekolah / Perusahaan *</label>
            <input type="text" name="institution" required class="form-input" placeholder="Nama SMK / Kampus / Perusahaan" />
          </div>
          <div class="form-group">
            <label class="form-label">Nomor WhatsApp &amp; Email *</label>
            <input type="text" name="contact" required class="form-input" placeholder="08xxxxxxxxxx / nama@domain.com" />
          </div>
          <div class="form-group">
            <label class="form-label">Catatan Tambahan / Kebutuhan Khusus</label>
            <textarea name="notes" class="form-textarea" placeholder="Ceritakan kebutuhan pelatihan, magang guru, atau kolaborasi Anda..."></textarea>
          </div>
          <button type="submit" class="btn btn--primary" style="margin-top: 0.5rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
            <span>💬</span>
            <span>Kirim via WhatsApp Resmi</span>
          </button>
        </form>
      `;

      openModal('Konsultasi & Pendaftaran Layanan', `Daftarkan minat Anda untuk program ${serviceName}.`, content);
    }
  });

  // D. KMPedia Article Reader Modal
  document.addEventListener('click', (e) => {
    const articleBtn = e.target.closest('.js-open-article-modal');
    if (articleBtn) {
      e.preventDefault();
      const title = articleBtn.getAttribute('data-article-title') || 'Artikel KMPedia';
      const category = articleBtn.getAttribute('data-article-category') || 'Dokumentasi';
      const contentEl = articleBtn.querySelector('.kmpedia-full-content');
      const bodyHtml = contentEl ? contentEl.innerHTML : '<p>Konten artikel sedang disiapkan.</p>';

      openModal(
        title,
        `Kategori: ${category} · KMPedia Open Documentation Hub`,
        `<div class="article-reader-content" style="font-size: 0.95rem; line-height: 1.7; color: #334155;">${bodyHtml}</div>`
      );
    }
  });

  // E. KMPedia Gallery Photo Viewer Modal
  document.addEventListener('click', (e) => {
    const galleryCard = e.target.closest('.js-open-gallery-modal');
    if (galleryCard) {
      e.preventDefault();
      const title = galleryCard.getAttribute('data-gallery-title') || 'Dokumentasi Kegiatan';
      const desc = galleryCard.getAttribute('data-gallery-desc') || '';
      const imgSrc = galleryCard.getAttribute('data-gallery-img') || '';
      const tag = galleryCard.getAttribute('data-gallery-tag') || 'Teaching Factory';

      const content = `
        <div style="margin-bottom: 1.25rem; border-radius: 10px; overflow: hidden; background: #000000; text-align: center;">
          <img src="${imgSrc}" alt="${title}" style="max-width: 100%; max-height: 65vh; object-fit: contain; display: block; margin: 0 auto;" />
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <span style="display: inline-block; background: #fee2e2; color: #dc2626; font-size: 0.8rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 999px;">${tag}</span>
          <span style="font-size: 0.82rem; color: #64748b; font-weight: 600;">SMK Negeri 2 Yogyakarta &times; KMtek</span>
        </div>
        <p style="font-size: 0.95rem; color: #334155; line-height: 1.6; margin-bottom: 1.25rem;">${desc}</p>
        <div style="display: flex; justify-content: flex-end; gap: 0.75rem;">
          <a href="https://wa.me/6281234567890?text=Halo%20KMtek,%20saya%20tertarik%20mengadakan%20program%20seperti%20${encodeURIComponent(title)}" target="_blank" rel="noopener" class="btn btn--primary" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
            Konsultasikan Program Ini &rarr;
          </a>
        </div>
      `;

      openModal(title, 'Dokumentasi Lapangan & Aktivitas Edukasi KMtek', content);
    }
  });

  /* ---------------------------------------------------------------
     9. LIVE WEBINAR COUNTDOWN TIMER (FOR BOOTCAMP.HTML)
  --------------------------------------------------------------- */
  const countdownEl = document.getElementById('webinar-countdown');
  if (countdownEl) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);
    targetDate.setHours(19, 30, 0, 0);

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        countdownEl.innerHTML = '<span style="color:#F52929; font-weight:bold;">SEDANG BERLANGSUNG LIVE</span>';
        return;
      }

      const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownEl.innerHTML = `
        <span style="background:rgba(255,255,255,0.1); padding:0.2rem 0.5rem; border-radius:4px; font-weight:700;">${days}h</span> :
        <span style="background:rgba(255,255,255,0.1); padding:0.2rem 0.5rem; border-radius:4px; font-weight:700;">${hours}j</span> :
        <span style="background:rgba(255,255,255,0.1); padding:0.2rem 0.5rem; border-radius:4px; font-weight:700;">${minutes}m</span> :
        <span style="background:rgba(255,255,255,0.1); padding:0.2rem 0.5rem; border-radius:4px; font-weight:700;">${seconds}d</span>
      `;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ---------------------------------------------------------------
     10. BACK TO TOP BUTTON
  --------------------------------------------------------------- */
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('is-visible', window.scrollY > 400);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------------------------------------------------------------
     11. SCROLL-IN ANIMATIONS & OBSERVERS
  --------------------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    const animEls = document.querySelectorAll('[data-animate]');
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

    animEls.forEach((el) => animObserver.observe(el));
  }

  /* ---------------------------------------------------------------
     12. STATS COUNTER ANIMATION (FOR INDEX.HTML)
  --------------------------------------------------------------- */
  const statNumbers = document.querySelectorAll('.stats__number');

  function parseStatValue(text) {
    const match = text.match(/^([\d,]+)(\S*)$/);
    if (!match) return null;
    return {
      num: parseInt(match[1].replace(/,/g, ''), 10),
      suffix: match[2] || '',
    };
  }

  function animateCounter(el, start, end, suffix, duration) {
    const startTime = performance.now();
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * eased);
      const formatted = current >= 1000 ? current.toLocaleString() : current.toString();
      el.textContent = formatted + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = (end >= 1000 ? end.toLocaleString() : end) + suffix;
      }
    }
    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window && statNumbers.length) {
    const statsSection = document.querySelector('.stats');
    let countersStarted = false;

    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !countersStarted) {
        countersStarted = true;
        statNumbers.forEach((el) => {
          const parsed = parseStatValue(el.textContent.trim());
          if (parsed) {
            animateCounter(el, 0, parsed.num, parsed.suffix, 1800);
          }
        });
        statsObserver.unobserve(entries[0].target);
      }
    }, { threshold: 0.3 });

    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  }

})();
