/* ============================================================
   MAKEOVERS BY PRIYANSHI — main.js
   Shared layout (header / footer / sticky CTA / lightbox)
   + per-page renderers driven by js/config.js.
   Renderers only run when their target element exists.
   ============================================================ */
(function () {
  "use strict";

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Contact link helpers ---------------- */
  const waConfigured = SITE.whatsappNumber && !/ADD_NUMBER/i.test(SITE.whatsappNumber);
  const waHref = waConfigured
    ? `https://wa.me/${SITE.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(SITE.whatsappMessage)}`
    : null;
  const phoneConfigured = SITE.phoneNumber && !/ADD/i.test(SITE.phoneNumber);
  const telHref = phoneConfigured ? `tel:${SITE.phoneNumber.replace(/\s/g, "")}` : null;
  const instaConfigured = SITE.instagram && !/ADD_INSTAGRAM/i.test(SITE.instagram);
  const instaUrl = instaConfigured ? `https://www.instagram.com/${SITE.instagram.replace(/^@/, "")}/` : null;

  const bindPlaceholder = (el, msg) =>
    el && el.addEventListener("click", (e) => { e.preventDefault(); alert(msg); });
  const bindWa = (el) => {
    if (!el) return;
    if (waHref) el.href = waHref;
    else bindPlaceholder(el, "WhatsApp number is not configured yet.\nAdd it in js/config.js → SITE.whatsappNumber");
  };
  const bindInsta = (el) => {
    if (!el) return;
    if (instaUrl) el.href = instaUrl;
    else bindPlaceholder(el, "Instagram handle is not configured yet.\nAdd it in js/config.js → SITE.instagram");
  };

  /* ============================================================
     SHARED LAYOUT — header, footer, sticky CTA, floats, lightbox
     ============================================================ */
  const PAGES = [
    ["index.html", "Home"],
    ["about.html", "About"],
    ["services.html", "Services"],
    ["bridal.html", "Bridal"],
    ["gallery.html", "Gallery"],
    ["videos.html", "Videos"],
    ["reviews.html", "Reviews"],
    ["faq.html", "FAQ"],
    ["contact.html", "Contact"],
  ];
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const headerHost = $("#siteHeader");
  if (headerHost) {
    headerHost.outerHTML = `
    <header class="header" id="header">
      <div class="header__inner container">
        <a href="index.html" class="header__brand" aria-label="Makeovers By Priyanshi — Home">
          <img src="assets/logo/logo.jpg" alt="Makeovers By Priyanshi logo" class="header__logo" />
        </a>
        <nav class="nav" id="nav" aria-label="Primary navigation">
          <img src="assets/logo/logo.jpg" alt="Makeovers By Priyanshi logo" class="nav__mobile-logo" />
          ${PAGES.map(([href, label]) =>
            `<a href="${href}" class="nav__link${href === current ? " is-active" : ""}"${href === current ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
          <a href="booking.html" class="btn btn--solid nav__cta">Book Now</a>
        </nav>
        <a href="booking.html" class="btn btn--solid header__cta">Book Now</a>
        <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="nav">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <div class="nav-overlay" id="navOverlay" aria-hidden="true"></div>`;
  }

  const footerHost = $("#siteFooter");
  if (footerHost) {
    footerHost.outerHTML = `
    <footer class="footer">
      <div class="container footer__grid">
        <div class="footer__brand">
          <div class="footer__logo-card">
            <img src="assets/logo/logo.jpg" alt="Makeovers By Priyanshi logo" loading="lazy" />
          </div>
          <p>Luxury makeup, hair &amp; bridal styling crafted for your most beautiful moments.</p>
        </div>
        <nav class="footer__col" aria-label="Quick links">
          <h4>Quick Links</h4>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="bridal.html">Bridal</a>
          <a href="gallery.html">Gallery</a>
          <a href="videos.html">Videos</a>
          <a href="faq.html">FAQ</a>
        </nav>
        <nav class="footer__col" aria-label="Services">
          <h4>Services</h4>
          ${PRICED_SERVICES.slice(0, 5).map((s) => `<a href="services.html">${s.name}</a>`).join("")}
          <a href="services.html">All Services &amp; Prices</a>
        </nav>
        <div class="footer__col">
          <h4>Connect</h4>
          <a href="#" data-bind="insta" target="_blank" rel="noopener">Instagram</a>
          <a href="#" data-bind="wa" target="_blank" rel="noopener">WhatsApp</a>
          <a href="contact.html">Contact</a>
          <a href="booking.html">Book Appointment</a>
        </div>
      </div>
      <div class="footer__bottom"><p>© 2026 Makeovers By Priyanshi. All Rights Reserved.</p><p class="footer__credit">Website crafted by <strong>Managed By Luna</strong> · <a href="https://wa.me/918076690131" target="_blank" rel="noopener">Call / WhatsApp: 8076690131</a></p></div>
    </footer>

    <!-- Right-side floating action buttons -->
    <div class="fab" role="navigation" aria-label="Quick actions">
      <a href="#" class="fab__btn" data-bind="wa" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">
        <span class="fab__label">WhatsApp</span>
        <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true"><path d="M12 2a9.9 9.9 0 0 0-8.5 15.1L2 22l5.1-1.5A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .9.9-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.6.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5a1.8 1.8 0 0 0 .3-.4.5.5 0 0 0 0-.4c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.1 5 5 0 0 0 1.1 2.7 11.4 11.4 0 0 0 4.4 3.9 14.5 14.5 0 0 0 1.5.5 3.5 3.5 0 0 0 1.6.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z"/></svg>
      </a>
      <a href="${telHref || "contact.html"}" class="fab__btn" ${telHref ? "" : 'data-tel-placeholder="1"'} aria-label="Call" title="Call">
        <span class="fab__label">Call</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>
      </a>
      <a href="#" class="fab__btn" data-bind="insta" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">
        <span class="fab__label">Instagram</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href="booking.html" class="fab__btn fab__btn--book" aria-label="Book Now" title="Book Now">
        <span class="fab__label">Book Now</span>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="17" rx="3"/><path d="M8 2.5v4M16 2.5v4M3 9.5h18"/><path d="M9 14.5l2 2 4-4"/></svg>
      </a>
    </div>

    <!-- Video modal -->
    <div class="video-modal" id="videoModal" role="dialog" aria-modal="true" aria-label="Video player" hidden>
      <button class="video-modal__close" id="vmClose" aria-label="Close video">×</button>
      <div class="video-modal__body">
        <div class="video-modal__frame" id="vmFrame"></div>
        <p class="video-modal__title" id="vmTitle"></p>
      </div>
    </div>

    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" hidden>
      <button class="lightbox__close" id="lbClose" aria-label="Close preview">×</button>
      <button class="lightbox__nav lightbox__nav--prev" id="lbPrev" aria-label="Previous image">‹</button>
      <figure class="lightbox__figure">
        <img alt="" id="lbImg" />
        <figcaption id="lbCaption"></figcaption>
      </figure>
      <button class="lightbox__nav lightbox__nav--next" id="lbNext" aria-label="Next image">›</button>
    </div>`;
  }

  $$("[data-bind='wa']").forEach(bindWa);
  $$("[data-bind='insta']").forEach(bindInsta);
  $$("[data-tel-placeholder]").forEach((el) =>
    bindPlaceholder(el, "Phone number is not configured yet.\nAdd it in js/config.js → SITE.phoneNumber"));
  bindInsta($("#instaCta"));
  if (instaConfigured && $("#instaCtaText"))
    $("#instaCtaText").textContent = `Follow @${SITE.instagram.replace(/^@/, "").toUpperCase()}`;

  /* ---------------- Cinematic intro + hero video (home only) ---------------- */
  const loader = $("#loader");
  const introVideo = $("#introVideo");
  const heroVideo = $("#heroVideo");
  const introSound = $("#introSound");
  const heroSound = $("#heroSound");

  if (loader && introVideo && heroVideo) {
    let soundUnlocked = false;
    let transitioned = false;

    const setSoundUI = (on) => {
      [introSound, heroSound].forEach((btn) => {
        if (!btn) return;
        btn.classList.toggle("is-on", on);
        btn.setAttribute("aria-label", on ? "Turn sound off" : "Turn sound on");
        const label = btn.querySelector("span:last-child");
        if (label) label.textContent = on ? "Sound On" : "Tap for Sound";
      });
    };

    const unlockSound = async () => {
      soundUnlocked = true;
      introVideo.muted = false;
      heroVideo.muted = false;
      introVideo.volume = 1;
      heroVideo.volume = 1;
      setSoundUI(true);
      try { await introVideo.play(); } catch (_) {}
      try { await heroVideo.play(); } catch (_) {}
    };

    const toggleSound = async () => {
      if (!soundUnlocked) {
        await unlockSound();
        return;
      }
      const next = introVideo.muted || heroVideo.muted;
      introVideo.muted = !next;
      heroVideo.muted = !next;
      setSoundUI(!next);
    };

    introSound?.addEventListener("click", toggleSound);
    heroSound?.addEventListener("click", toggleSound);

    const transitionToHero = () => {
      if (transitioned) return;
      transitioned = true;

      // Carry the exact playback position into the Home hero so the opening song
      // feels continuous rather than restarting when the intro disappears.
      try {
        if (Number.isFinite(introVideo.currentTime)) {
          heroVideo.currentTime = introVideo.currentTime;
        }
      } catch (_) {}
      heroVideo.muted = !soundUnlocked;
      introVideo.pause();
      heroVideo.play().catch(() => {});
      loader.classList.add("is-done");
      document.body.classList.add("intro-complete");
    };

    // Keep the opening intentionally short and cinematic, then hand off to the
    // same looping video in the hero. This avoids a long 30+ second loading wait.
    setTimeout(transitionToHero, 5200);

    setSoundUI(false);
  }

  /* ---------------- Header behaviour ---------------- */
  const header = $("#header");
  if (header) {
    const onScrollHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
    onScrollHeader();
    window.addEventListener("scroll", onScrollHeader, { passive: true });

    const burger = $("#burger");
    const nav = $("#nav");
    const overlay = $("#navOverlay");
    const setMenu = (open) => {
      burger.classList.toggle("is-open", open);
      nav.classList.toggle("is-open", open);
      overlay.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    };
    burger.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
    overlay.addEventListener("click", () => setMenu(false));
    $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  }

  /* ============================================================
     RENDERERS (each runs only if its element exists on the page)
     ============================================================ */
  const limitOf = (el, arr) => {
    const n = parseInt(el.dataset.limit || "0", 10);
    return n > 0 ? arr.slice(0, n) : arr;
  };
  const bookingLink = (service) => `booking.html?service=${encodeURIComponent(service)}`;

  /* ----- Priced service / pricing cards ----- */
  const pricingGrid = $("#pricingGrid");
  if (pricingGrid) {
    pricingGrid.innerHTML = limitOf(pricingGrid, PRICED_SERVICES).map((s) => `
      <article class="price-card fade-up">
        <h3 class="price-card__name">${s.name}</h3>
        <p class="price-card__price">${s.price}</p>
        <p class="price-card__desc">${s.desc}</p>
        <div class="price-card__divider" aria-hidden="true"><span></span><i>✦</i><span></span></div>
        <p class="price-card__inc-label">Included</p>
        <ul class="price-card__inc">
          ${s.includes.map((i) => `<li><i>✓</i> ${i}</li>`).join("")}
        </ul>
        <a href="${bookingLink(s.name)}" class="btn btn--solid price-card__btn">Enquire Now</a>
      </article>`).join("");
  }

  /* ----- Other artistry (hair / mehendi / skin — no prices) ----- */
  const artistryGrid = $("#artistryGrid");
  if (artistryGrid) {
    artistryGrid.innerHTML = ARTISTRY.map((s) => `
      <article class="service-card fade-up">
        <div class="service-card__media">
          <img src="${s.image}" alt="${s.alt}" loading="lazy" />
          <h3 class="service-card__tag">${s.group}</h3>
        </div>
        <div class="service-card__body">
          <p class="service-card__desc">${s.desc}</p>
          <ul class="service-card__list">${s.items.map((i) => `<li>${i}</li>`).join("")}</ul>
          <a href="booking.html" class="btn btn--outline">Enquire Now</a>
        </div>
      </article>`).join("");
  }

  /* ----- Mehendi gallery (editorial masonry — exact configured order) ----- */
  const mehendiGrid = $("#mehendiGrid");
  if (mehendiGrid) {
    mehendiGrid.innerHTML = MEHENDI_GALLERY.map((m, i) => `
      <figure class="g-item fade-up" data-lb-group="mehendi" data-lb-index="${i}">
        <img src="${m.src}" alt="${m.alt}" loading="lazy" />
        <div class="g-item__veil"><span>${m.alt}</span></div>
        <span class="g-item__view" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8M11 8v6M8 11h6"/></svg>
        </span>
      </figure>`).join("");
  }

  /* ----- Bridal looks ----- */
  const bridalGrid = $("#bridalGrid");
  if (bridalGrid) {
    bridalGrid.innerHTML = limitOf(bridalGrid, BRIDAL_LOOKS).map((b, i) => `
      <figure class="bridal-card fade-up" data-lb-group="bridal" data-lb-index="${i}">
        <img src="${b.image}" alt="${b.alt}" loading="lazy" />
        <figcaption class="bridal-card__label">${b.title}</figcaption>
      </figure>`).join("");
  }

  /* ----- Gallery masonry + filters ----- */
  const galleryGrid = $("#galleryGrid");
  if (galleryGrid) {
    galleryGrid.innerHTML = limitOf(galleryGrid, GALLERY).map((g, i) => `
      <figure class="g-item fade-up" data-category="${g.category}" data-lb-group="gallery" data-lb-index="${i}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy" />
        <div class="g-item__veil"><span>${g.alt}</span></div>
        <span class="g-item__view" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8M11 8v6M8 11h6"/></svg>
        </span>
      </figure>`).join("");

    const filters = $("#galleryFilters");
    if (filters) {
      filters.addEventListener("click", (e) => {
        const chip = e.target.closest(".chip");
        if (!chip) return;
        $$(".chip", filters).forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        const f = chip.dataset.filter;
        $$(".g-item", galleryGrid).forEach((item) =>
          item.classList.toggle("is-hidden", f !== "all" && item.dataset.category !== f));
      });
    }
  }

  /* ----- Featured gallery strip (home) ----- */
  const featuredGallery = $("#featuredGallery");
  if (featuredGallery) {
    featuredGallery.innerHTML = GALLERY.slice(0, 6).map((g) => `
      <a class="insta__item fade-up" href="gallery.html" aria-label="Open gallery — ${g.alt}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy" />
      </a>`).join("");
  }

  /* ----- Lightbox ----- */
  const lb = $("#lightbox");
  if (lb) {
    const lbImg = $("#lbImg"), lbCaption = $("#lbCaption");
    let lbItems = [], lbIdx = 0;
    const lbGroups = {
      gallery: GALLERY.map((g) => ({ src: g.src, alt: g.alt })),
      bridal: BRIDAL_LOOKS.map((b) => ({ src: b.image, alt: `${b.title} — ${b.alt}` })),
      mehendi: MEHENDI_GALLERY.map((m) => ({ src: m.src, alt: m.alt })),
    };
    const updateLb = () => {
      const item = lbItems[lbIdx];
      if (!item) return;
      lbImg.src = item.src; lbImg.alt = item.alt; lbCaption.textContent = item.alt;
    };
    const closeLb = () => { lb.hidden = true; document.body.style.overflow = ""; };
    document.addEventListener("click", (e) => {
      const fig = e.target.closest("[data-lb-group]");
      if (!fig) return;
      lbItems = lbGroups[fig.dataset.lbGroup] || [];
      lbIdx = Number(fig.dataset.lbIndex);
      updateLb();
      lb.hidden = false;
      document.body.style.overflow = "hidden";
      $("#lbClose").focus();
    });
    $("#lbClose").addEventListener("click", closeLb);
    $("#lbPrev").addEventListener("click", () => { lbIdx = (lbIdx - 1 + lbItems.length) % lbItems.length; updateLb(); });
    $("#lbNext").addEventListener("click", () => { lbIdx = (lbIdx + 1) % lbItems.length; updateLb(); });
    lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", (e) => {
      if (lb.hidden) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") $("#lbPrev").click();
      if (e.key === "ArrowRight") $("#lbNext").click();
    });
    // swipe support in lightbox
    let lbTouchX = null;
    lb.addEventListener("touchstart", (e) => { lbTouchX = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", (e) => {
      if (lbTouchX === null) return;
      const dx = e.changedTouches[0].clientX - lbTouchX;
      if (Math.abs(dx) > 46) (dx < 0 ? $("#lbNext") : $("#lbPrev")).click();
      lbTouchX = null;
    }, { passive: true });
  }

  /* ----- Reels: poster thumbnail → premium modal video player ----- */
  const reelsGrid = $("#reelsGrid");
  if (reelsGrid) {
    reelsGrid.innerHTML = limitOf(reelsGrid, REELS).map((r, i) => `
      <button type="button" class="reel-card fade-up" data-reel-index="${i}" aria-label="Play video: ${r.title}">
        ${r.type === "instagram"
          ? `<span class="reel-card__thumb reel-card__thumb--ig" aria-hidden="true"><i>✦</i></span>`
          : `<img class="reel-card__thumb" src="${r.poster || ""}" alt="${r.title} — video thumbnail" loading="lazy" />`}
        <span class="reel-card__play" aria-hidden="true"><span>▶</span></span>
        <span class="reel-card__title">${r.title}</span>
      </button>`).join("");
  }

  /* ----- Video modal (shared) ----- */
  const videoModal = $("#videoModal");
  if (videoModal) {
    const vmFrame = $("#vmFrame"), vmTitle = $("#vmTitle");

    const openVideoModal = (reel) => {
      vmTitle.textContent = reel.title || "";
      if (reel.type === "instagram") {
        vmFrame.innerHTML = `<iframe src="${reel.url.replace(/\/?$/, "/")}embed" title="${reel.title}" allowfullscreen loading="lazy"></iframe>`;
      } else {
        // User-initiated playback with controls (autoplay-with-sound never happens on load)
        vmFrame.innerHTML = `<video src="${reel.src}" ${reel.poster ? `poster="${reel.poster}"` : ""} controls playsinline preload="metadata" aria-label="${reel.title}"></video>`;
        const v = $("video", vmFrame);
        v.play().catch(() => {}); // controls remain if the browser blocks it
      }
      videoModal.hidden = false;
      document.body.style.overflow = "hidden";
      $("#vmClose").focus();
    };

    const closeVideoModal = () => {
      const v = $("video", vmFrame);
      if (v) { v.pause(); v.removeAttribute("src"); v.load(); }
      vmFrame.innerHTML = ""; // also stops any iframe embed
      videoModal.hidden = true;
      document.body.style.overflow = "";
    };

    document.addEventListener("click", (e) => {
      const card = e.target.closest("[data-reel-index]");
      if (!card) return;
      const reel = REELS[Number(card.dataset.reelIndex)];
      if (reel) openVideoModal(reel);
    });
    $("#vmClose").addEventListener("click", closeVideoModal);
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal || e.target.classList.contains("video-modal__body")) closeVideoModal();
    });
    document.addEventListener("keydown", (e) => {
      if (!videoModal.hidden && e.key === "Escape") closeVideoModal();
    });
  }

  /* ----- Instagram grid ----- */
  const instaGrid = $("#instaGrid");
  if (instaGrid) {
    instaGrid.innerHTML = INSTA_GRID.map((p) => `
      <a class="insta__item fade-up" href="${instaUrl || "contact.html"}" ${instaUrl ? 'target="_blank" rel="noopener"' : ""} aria-label="${p.alt}">
        <img src="${p.src}" alt="${p.alt}" loading="lazy" />
      </a>`).join("");
  }

  /* ----- Testimonials slider ----- */
  const tTrack = $("#tTrack");
  if (tTrack) {
    tTrack.innerHTML = TESTIMONIALS.map((t) => `
      <div class="t-slide">
        <div class="t-card">
          <div class="t-card__stars" aria-label="${t.stars} star rating">${"★".repeat(t.stars)}</div>
          <p class="t-card__text">"${t.text}"</p>
          <p class="t-card__name">— ${t.name}</p>
        </div>
      </div>`).join("");

    const tDots = $("#tDots");
    tDots.innerHTML = TESTIMONIALS.map((_, i) => `<button aria-label="Go to testimonial ${i + 1}"></button>`).join("");
    let tIdx = 0, tTimer = null;
    const tCount = TESTIMONIALS.length;
    const tGo = (i) => {
      tIdx = (i + tCount) % tCount;
      tTrack.style.transform = `translateX(-${tIdx * 100}%)`;
      $$("button", tDots).forEach((d, j) => d.classList.toggle("is-active", j === tIdx));
    };
    const tAuto = () => {
      if (prefersReducedMotion) return;
      clearInterval(tTimer);
      tTimer = setInterval(() => tGo(tIdx + 1), 5200);
    };
    $("#tPrev").addEventListener("click", () => { tGo(tIdx - 1); tAuto(); });
    $("#tNext").addEventListener("click", () => { tGo(tIdx + 1); tAuto(); });
    $$("button", tDots).forEach((d, i) => d.addEventListener("click", () => { tGo(i); tAuto(); }));
    let touchX = null;
    const viewport = $("#tViewport");
    viewport.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    viewport.addEventListener("touchend", (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 46) { tGo(tIdx + (dx < 0 ? 1 : -1)); tAuto(); }
      touchX = null;
    }, { passive: true });
    tGo(0); tAuto();
  }

  /* ----- FAQ accordion ----- */
  const faqList = $("#faqList");
  if (faqList) {
    faqList.innerHTML = FAQS.map((f, i) => `
      <div class="faq__item fade-up">
        <button class="faq__q" aria-expanded="false" aria-controls="faqA${i}">
          ${f.q}<span class="faq__icon" aria-hidden="true">+</span>
        </button>
        <div class="faq__a" id="faqA${i}"><p>${f.a}</p></div>
      </div>`).join("");
    $$(".faq__item", faqList).forEach((item) => {
      const btn = $(".faq__q", item), ans = $(".faq__a", item);
      btn.addEventListener("click", () => {
        const open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
        ans.style.maxHeight = open ? ans.scrollHeight + "px" : "0px";
      });
    });
  }

  /* ----- Contact cards + map ----- */
  const contactGrid = $("#contactGrid");
  if (contactGrid) {
    const items = [
      { icon: "✆", label: "Phone", value: SITE.phoneNumber, href: telHref },
      { icon: "✉", label: "WhatsApp", value: waConfigured ? `+${SITE.whatsappNumber}` : "[ADD WHATSAPP]", href: waHref },
      { icon: "✦", label: "Instagram", value: instaConfigured ? `@${SITE.instagram.replace(/^@/, "")}` : "[ADD INSTAGRAM]", href: instaUrl },
      { icon: "＠", label: "Email", value: SITE.email, href: /ADD/.test(SITE.email) ? null : `mailto:${SITE.email}` },
      { icon: "⚲", label: "Location", value: SITE.location, href: null },
      { icon: "◷", label: "Business Hours", value: SITE.businessHours, href: null },
    ];
    contactGrid.innerHTML = items.map((c) => `
      <div class="contact-card fade-up">
        <i aria-hidden="true">${c.icon}</i>
        <h4>${c.label}</h4>
        ${c.href ? `<a href="${c.href}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${c.value}</a>` : `<p>${c.value}</p>`}
      </div>`).join("");
  }
  const mapWrap = $("#mapWrap");
  if (mapWrap && SITE.mapEmbedUrl) {
    mapWrap.innerHTML = `<iframe src="${SITE.mapEmbedUrl}" title="Makeovers By Priyanshi studio location" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
  }

  /* ----- Booking form (+ preselect service from ?service=) ----- */
  const form = $("#bookingForm");
  if (form) {
    $("#fType").innerHTML = EVENT_TYPES.map((t) => `<option value="${t}">${t}</option>`).join("");
    const svcSel = $("#fService");
    svcSel.innerHTML = SERVICE_OPTIONS.map((s) => `<option value="${s}">${s}</option>`).join("");

    // Pre-select service when arriving from an "Enquire Now" button
    const requested = new URLSearchParams(location.search).get("service");
    if (requested) {
      const match = SERVICE_OPTIONS.find((s) => s.toLowerCase() === requested.toLowerCase());
      if (match) {
        svcSel.value = match;
        const note = $("#bookingPreselect");
        if (note) {
          note.hidden = false;
          $("span", note).textContent = match;
        }
      }
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      ["fName", "fPhone", "fDate"].forEach((id) => {
        const el = $("#" + id);
        const ok = el.value.trim() !== "";
        el.classList.toggle("is-invalid", !ok);
        if (!ok) valid = false;
      });
      if (!valid) return;

      /* --------------------------------------------------------
         ENQUIRY DATA — ready to connect to WhatsApp, email,
         Supabase/Firebase, Google Sheets or any backend API.
         -------------------------------------------------------- */
      const data = Object.fromEntries(new FormData(form).entries());
      console.log("Booking enquiry (connect to your backend here):", data);

      if (waHref) {
        const msg = `Hi Priyanshi, I would like to check availability.%0A%0AName: ${encodeURIComponent(data.name)}%0APhone: ${encodeURIComponent(data.phone)}%0AEvent Date: ${encodeURIComponent(data.eventDate)}%0AEvent Type: ${encodeURIComponent(data.eventType)}%0AService: ${encodeURIComponent(data.service)}%0ALocation: ${encodeURIComponent(data.location || "-")}`;
        window.open(`https://wa.me/${SITE.whatsappNumber.replace(/\D/g, "")}?text=${msg}`, "_blank", "noopener");
      }
      $("#formSuccess").hidden = false;
      form.querySelectorAll("input, select, textarea, button").forEach((el) => (el.disabled = true));
    });
    form.addEventListener("input", (e) => e.target.classList.remove("is-invalid"));
  }

  /* ----- Scroll reveal with per-group stagger ----- */
  if (prefersReducedMotion) {
    $$(".fade-up").forEach((el) => el.classList.add("is-visible"));
  } else {
    const isMobile = window.matchMedia("(max-width: 860px)").matches;
    const step = isMobile ? 60 : 90;         // gentler stagger on mobile
    const cap = isMobile ? 300 : 540;
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        el.classList.add("is-visible");
        fadeObserver.unobserve(el);
        // clear the stagger delay after the reveal so hover transitions stay instant
        const d = parseFloat(el.style.transitionDelay || "0");
        setTimeout(() => { el.style.transitionDelay = "0ms"; }, d + 950);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -36px 0px" });

    // stagger siblings within the same parent (cards, gallery items, form fields…)
    const counts = new Map();
    $$(".fade-up").forEach((el) => {
      const parent = el.parentElement;
      const idx = counts.get(parent) || 0;
      counts.set(parent, idx + 1);
      el.style.transitionDelay = Math.min(idx * step, cap) + "ms";
      fadeObserver.observe(el);
    });
  }

  /* ----- Scroll progress indicator ----- */
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.appendChild(progress);
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
  };
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress, { passive: true });

  /* ----- Hero video — subtle desktop parallax without cropping the face ----- */
  if (heroVideo && !prefersReducedMotion && window.matchMedia("(min-width: 861px)").matches) {
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y < window.innerHeight) heroVideo.style.transform = `translateY(${y * 0.045}px) scale(1.015)`;
    }, { passive: true });
  }
})();
