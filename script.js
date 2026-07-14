(function () {
  "use strict";

 
  const SERVICES = [
    { icon: "🏠", name: "Interior Design", desc: "Complete space planning and finishing for homes and offices." },
    { icon: "🧱", name: "Glass Partition", desc: "Sleek partitions that divide space without blocking light." },
    { icon: "🔷", name: "Tempered Glass", desc: "Heat-strengthened glass built for safety and durability." },
    { icon: "🪟", name: "UPVC Windows", desc: "Energy-efficient, weatherproof window systems." },
    { icon: "🚪", name: "UPVC Doors", desc: "Low-maintenance doors with a premium finish." },
    { icon: "🔩", name: "Aluminium Work", desc: "Precision-fabricated aluminium frames and structures." },
    { icon: "🧩", name: "PVC Panel", desc: "Moisture-resistant wall panelling for any interior." },
    { icon: "☁️", name: "PVC Ceiling", desc: "Lightweight, elegant false ceiling installations." },
    { icon: "🚪", name: "PVC Door", desc: "Durable, waterproof doors for bath and utility spaces." },
    { icon: "💡", name: "LED Mirror", desc: "Backlit mirrors that bring a boutique-hotel feel home." },
    { icon: "🛁", name: "Bathroom Glass", desc: "Custom glass fittings styled for wet areas." },
    { icon: "🏢", name: "Office Glass", desc: "Cabin partitions and frontage glazing for workplaces." },
    { icon: "🧱", name: "ACP Work", desc: "Aluminium composite panel cladding for facades." },
    { icon: "🔷", name: "Toughened Glass", desc: "High-strength glass for railings, doors and tabletops." },
    { icon: "🚿", name: "Shower Partition", desc: "Frameless and semi-framed shower enclosures." },
    { icon: "🍽️", name: "Kitchen Glass", desc: "Splashbacks and shutters finished to match your decor." },
    { icon: "🪜", name: "Glass Railing", desc: "Minimal, modern railings for stairs and balconies." },
    { icon: "🪞", name: "Mirror Installation", desc: "Precision-cut mirrors fitted to any wall or ceiling." },
    { icon: "🏬", name: "Commercial Glass", desc: "Storefronts and large-format glazing for businesses." },
    { icon: "🏡", name: "Residential Glass", desc: "Windows, doors and decor glass for every home." }
  ];

  const GALLERY = [
    { cat: "glass home", seed: "gallery-glass-1", label: "Frameless Glass Living Room", tall: true },
    { cat: "upvc home", seed: "gallery-upvc-1", label: "UPVC Sliding Window" },
    { cat: "interior home", seed: "gallery-interior-1", label: "Modern Living Interior", tall: true },
    { cat: "glass office", seed: "gallery-glass-2", label: "Office Glass Cabin" },
    { cat: "pvc interior", seed: "gallery-pvc-1", label: "PVC False Ceiling" },
    { cat: "glass home", seed: "gallery-glass-3", label: "Glass Staircase Railing", tall: true },
    { cat: "upvc office", seed: "gallery-upvc-2", label: "UPVC Office Windows" },
    { cat: "interior office", seed: "gallery-interior-2", label: "Reception Interior" },
    { cat: "glass home", seed: "gallery-glass-4", label: "Shower Glass Partition" },
    { cat: "pvc home", seed: "gallery-pvc-2", label: "PVC Wall Panelling", tall: true },
    { cat: "glass office", seed: "gallery-glass-5", label: "Storefront Glazing" },
    { cat: "interior home", seed: "gallery-interior-3", label: "Kitchen Glass Shutters" }
  ];

  const PROJECTS = [
    { icon: "🏠", type: "Residential", title: "Private Villa — Indira Nagar", desc: "Full home glass, UPVC windows and interior fit-out." },
    { icon: "🏬", type: "Commercial", title: "Retail Showroom Frontage", desc: "Large-format toughened glass storefront and ACP cladding." },
    { icon: "🛍️", type: "Showroom", title: "Electronics Showroom Interior", desc: "LED mirrors, glass shelving and reception glazing." },
    { icon: "🏥", type: "Hospital", title: "District Hospital Wing", desc: "Safety-glass partitions and PVC panelling across wards." },
    { icon: "🏢", type: "Office", title: "Corporate Office Cabins", desc: "Modular glass cabins and workstation partitions." },
    { icon: "🏨", type: "Hotel", title: "Boutique Hotel Renovation", desc: "Bathroom glass, LED mirrors and balcony railings." },
    { icon: "🏫", type: "School", title: "Public School Campus", desc: "UPVC windows and doors across classroom blocks." }
  ];

  /* ---------- 2. RENDER HELPERS ---------- */
  function renderServices() {
    const grid = document.getElementById("servicesGrid");
    if (!grid) return;
    grid.innerHTML = SERVICES.map((s, i) => `
      <div class="service-card glass" data-aos="fade-up" data-aos-delay="${(i % 4) * 60}">
        <div class="service-icon">${s.icon}</div>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
      </div>
    `).join("");
  }

  function renderGallery() {
    const grid = document.getElementById("masonryGrid");
    if (!grid) return;
    grid.innerHTML = GALLERY.map((g, i) => {
      const h = g.tall ? 560 : 400;
      return `
      <figure class="masonry-item" data-cat="${g.cat}" data-index="${i}" tabindex="0">
        <img src="https://picsum.photos/seed/${g.seed}/500/${h}" alt="${g.label}" loading="lazy" width="500" height="${h}">
        <figcaption class="masonry-overlay"><span>${g.label}</span></figcaption>
      </figure>`;
    }).join("");
  }

  function renderTimeline() {
    const wrap = document.getElementById("timeline");
    if (!wrap) return;
    wrap.innerHTML = PROJECTS.map((p, i) => `
      <div class="timeline-item" data-aos="fade-up" data-aos-delay="${i * 60}">
        <div class="timeline-dot">${p.icon}</div>
        <div class="timeline-card glass">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <span class="timeline-tag">${p.type}</span>
        </div>
      </div>
    `).join("");
  }

  renderServices();
  renderGallery();
  renderTimeline();

  /* ---------- 3. LOADING SCREEN ---------- */
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => loader && loader.classList.add("hidden"), 500);
  });
  // Fallback in case load event is delayed
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");
  }, 2500);

  /* ---------- 4. NAVBAR ---------- */
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
    toggleScrollTop();
    highlightActiveLink();
  }, { passive: true });

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navLinkMap = new Map(
    Array.from(navLinks.querySelectorAll(".nav-link")).map(a => [a.getAttribute("href").slice(1), a])
  );
  function highlightActiveLink() {
    let current = sections[0] && sections[0].id;
    const scrollPos = window.scrollY + 140;
    for (const sec of sections) {
      if (sec.offsetTop <= scrollPos) current = sec.id;
    }
    navLinkMap.forEach((a, id) => a.classList.toggle("active-link", id === current));
  }

  /* ---------- 5. CURSOR GLOW + PARALLAX ---------- */
  const cursorGlow = document.getElementById("cursorGlow");
  const heroVisual = document.querySelector(".hero-visual");
  let mouseX = 0, mouseY = 0;

  window.addEventListener("pointermove", (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    if (cursorGlow) {
      cursorGlow.style.left = mouseX + "px";
      cursorGlow.style.top = mouseY + "px";
      cursorGlow.classList.add("active");
    }
    if (heroVisual) {
      const rect = heroVisual.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (mouseX - cx) / rect.width;
      const dy = (mouseY - cy) / rect.height;
      heroVisual.style.transform = `rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg)`;
    }
  }, { passive: true });

  window.addEventListener("pointerleave", () => cursorGlow && cursorGlow.classList.remove("active"));

  // Parallax on floating circles via scroll
  const circles = document.querySelectorAll(".floating-circle");
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    circles.forEach((c, i) => {
      c.style.translate = `0 ${y * (0.03 + i * 0.015)}px`;
    });
  }, { passive: true });

  /* ---------- 6. PARTICLES CANVAS ---------- */
  const canvas = document.getElementById("particles");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    let w, h;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    function initParticles() {
      const count = Math.min(70, Math.floor((w * h) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        o: Math.random() * 0.5 + 0.15
      }));
    }
    function tick() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${p.o})`;
        ctx.fill();
      });
      requestAnimationFrame(tick);
    }
    resize();
    initParticles();
    requestAnimationFrame(tick);
    window.addEventListener("resize", () => { resize(); initParticles(); });
  }

  /* ---------- 7. TYPING EFFECT ---------- */
  const typingEl = document.getElementById("typingText");
  if (typingEl) {
    const phrases = [
      "30+ Years of Trusted Experience in Glass, UPVC, Aluminium & Interior Design",
      "Transform Your Space with Premium Glass & Interior Solutions",
      "5.0★ Rated Craftsmanship, Trusted Across Banda"
    ];
    let pIndex = 0, cIndex = 0, deleting = false;
    typingEl.innerHTML = `<span id="typingSpan"></span><span class="cursor-blink"></span>`;
    const span = document.getElementById("typingSpan");

    function typeLoop() {
      const current = phrases[pIndex];
      if (!deleting) {
        cIndex++;
        span.textContent = current.slice(0, cIndex);
        if (cIndex === current.length) { deleting = true; setTimeout(typeLoop, 1800); return; }
      } else {
        cIndex--;
        span.textContent = current.slice(0, cIndex);
        if (cIndex === 0) { deleting = false; pIndex = (pIndex + 1) % phrases.length; }
      }
      setTimeout(typeLoop, deleting ? 22 : 38);
    }
    typeLoop();
  }

  /* ---------- 8. ANIMATED COUNTERS ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimal || "0", 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1800;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(frame);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(frame);
  }

  /* ---------- 9. INTERSECTION OBSERVER REVEAL (AOS-style) ---------- */
  const revealItems = document.querySelectorAll("[data-aos]");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.dataset.aosDelay || "0", 10);
      setTimeout(() => el.classList.add("aos-in"), delay);
      revealObserver.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  revealItems.forEach(el => revealObserver.observe(el));

  /* ---------- 10. GALLERY FILTER + LIGHTBOX ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const masonryItems = () => Array.from(document.querySelectorAll(".masonry-item"));

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      masonryItems().forEach(item => {
        const cats = item.dataset.cat.split(" ");
        const show = filter === "all" || cats.includes(filter);
        item.classList.toggle("hide", !show);
      });
    });
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  let currentLightboxIndex = 0;

  function getVisibleItems() {
    return masonryItems().filter(i => !i.classList.contains("hide"));
  }

  function openLightbox(index) {
    const visible = getVisibleItems();
    if (!visible.length) return;
    currentLightboxIndex = index;
    const item = visible[index];
    const img = item.querySelector("img");
    lightboxImg.src = img.src.replace(/\/\d+\/\d+$/, "/1000/1000");
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }
  function stepLightbox(dir) {
    const visible = getVisibleItems();
    if (!visible.length) return;
    currentLightboxIndex = (currentLightboxIndex + dir + visible.length) % visible.length;
    openLightbox(currentLightboxIndex);
  }

  document.getElementById("masonryGrid").addEventListener("click", (e) => {
    const item = e.target.closest(".masonry-item");
    if (!item) return;
    const visible = getVisibleItems();
    openLightbox(visible.indexOf(item));
  });
  document.getElementById("masonryGrid").addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const item = e.target.closest(".masonry-item");
    if (!item) return;
    e.preventDefault();
    const visible = getVisibleItems();
    openLightbox(visible.indexOf(item));
  });

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => stepLightbox(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });

  /* ---------- 11. ACCORDION (FAQ) ---------- */
  document.querySelectorAll(".accordion-item").forEach(item => {
    const head = item.querySelector(".accordion-head");
    const body = item.querySelector(".accordion-body");
    head.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".accordion-item.open").forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".accordion-body").style.maxHeight = null;
        }
      });
      item.classList.toggle("open", !isOpen);
      body.style.maxHeight = !isOpen ? body.scrollHeight + "px" : null;
    });
  });

  /* ---------- 12. BUTTON RIPPLE ---------- */
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
      ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  /* ---------- 13. SCROLL TO TOP ---------- */
  const scrollTopBtn = document.getElementById("scrollTop");
  function toggleScrollTop() {
    scrollTopBtn.classList.toggle("visible", window.scrollY > 500);
  }
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- 14. MISC ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
