/* ============================================================
   MAIN.JS
   Shared behaviour for every page: navbar, business-info
   injection, product rendering, modal, gallery, lightbox,
   testimonials, stats counters, contact form.
   Every function checks for its target element first, so this
   single file is safe to include on every page.
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  applyBusinessInfo();
  initFloatingButtons();
  renderFeaturedProducts();
  renderTestimonials();
  renderGalleryPreview();
  initProductModal();
  initStatsCounter();
  initContactForm();
  initGalleryPage();
  initLightbox();
  initRevealOnScroll();
  setActiveNavLink();
});

/* ============================================================
   NAVBAR
============================================================ */
function initNavbar() {
  const hamburger = document.querySelector("[data-hamburger]");
  const navLinks = document.querySelector("[data-nav-links]");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}

function setActiveNavLink() {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav-links] a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
  });
}

/* ============================================================
   BUSINESS INFO INJECTION
   Any element with data-business="phone|whatsapp|email|address|
   hours|mapsUrl|shopName" gets its text/href filled from config.js
============================================================ */
function applyBusinessInfo() {
  document.querySelectorAll("[data-business]").forEach(el => {
    const key = el.getAttribute("data-business");
    const map = {
      phone: business.phone,
      email: business.email,
      address: business.address,
      hours: business.openingHours,
      shopName: business.shopName,
      mapsUrl: business.googleMapsUrl,
      instagram: business.instagram,
      facebook: business.facebook,
    };
    if (map[key] !== undefined) el.textContent = map[key];
  });

  document.querySelectorAll("[data-tel-link]").forEach(el => {
    el.setAttribute("href", buildTelLink());
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach(el => {
    const customMsg = el.getAttribute("data-whatsapp-link") || "Hi, I would like to know more about your products and services.";
    el.setAttribute("href", buildWhatsAppLink(customMsg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  document.querySelectorAll("[data-instagram-link]").forEach(el => el.setAttribute("href", business.instagram));
  document.querySelectorAll("[data-facebook-link]").forEach(el => el.setAttribute("href", business.facebook));
  document.querySelectorAll("[data-maps-iframe]").forEach(el => el.setAttribute("src", business.googleMapsEmbed));
  document.querySelectorAll("[data-maps-link]").forEach(el => el.setAttribute("href", business.googleMapsUrl));
}

function initFloatingButtons() {
  const wa = document.querySelector(".float-whatsapp");
  const call = document.querySelector(".float-call");
  if (wa) wa.href = buildWhatsAppLink("Hi, I found your shop online and I'm interested in your car accessories & services.");
  if (call) call.href = buildTelLink();
}

/* ============================================================
   FEATURED PRODUCTS (home page)
============================================================ */
function renderFeaturedProducts() {
  const grid = document.getElementById("featured-products-grid");
  if (!grid || typeof products === "undefined") return;
  const featured = products.filter(p => p.featured).slice(0, 6);
  grid.innerHTML = featured.map(productCardHTML).join("");
}

function productCardHTML(p) {
  return `
    <article class="product-card reveal" data-product-id="${p.id}">
      <div class="thumb">
        <span class="cat-tag">${p.category}</span>
        ${p.subcategory ? `<span class="subcat-tag">${p.subcategory}</span>` : ""}
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        
        <div class="card-actions">
          <button class="btn btn-outline btn-sm" data-view-product="${p.id}">View Details</button>
          <a class="btn btn-whatsapp btn-sm" href="${buildWhatsAppLink(`Hi, I am interested in the ${p.name}. Please share more details and the current price.`)}" target="_blank" rel="noopener">Enquire</a>
        </div>
      </div>
    </article>`;
}

/* ============================================================
   PRODUCT MODAL (home + products page)
============================================================ */
function initProductModal() {
  const overlay = document.getElementById("product-modal");
  if (!overlay || typeof products === "undefined") return;

  const box = overlay.querySelector(".modal-box");

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-view-product]");
    if (trigger) {
      const id = Number(trigger.getAttribute("data-view-product"));
      const product = products.find(p => p.id === id);
      if (product) openProductModal(product);
    }
    if (e.target === overlay || e.target.closest("[data-modal-close]")) {
      closeProductModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProductModal();
  });

    function openProductModal(p) {
    box.innerHTML = `
      <button class="modal-close" data-modal-close aria-label="Close">&times;</button>
      <img src="${p.image}" alt="${p.name}">
      <div class="modal-info">
        <span class="cat-tag">${p.category}</span>
        ${p.subcategory ? `<span class="subcat-tag">${p.subcategory}</span>` : ""}
        <h2>${p.name}</h2>
        <p>${p.description}</p>
        <a class="btn btn-whatsapp btn-block" href="${buildWhatsAppLink(`Hi, I am interested in the ${p.name}. Please share more details and the current price.`)}" target="_blank" rel="noopener">Enquire on WhatsApp</a>
      </div>`;
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeProductModal() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/* ============================================================
   TESTIMONIALS (content data + render)
============================================================ */
const testimonials = [
  { name: "Arjun Mehta", car: "Hyundai Creta", rating: 5, review: "Excellent service and good quality accessories. The interior decoration was done perfectly." },
  { name: "Priya Ramachandran", car: "Maruti Baleno", rating: 5, review: "Got my seat covers and LED lights installed here. Neat work and the staff explained every option clearly." },
  { name: "Karthik Subramaniam", car: "Tata Nexon", rating: 4, review: "Good range of products at fair prices. Installation was quick and the shop is well organised." },
  { name: "Divya Shankar", car: "Honda City", rating: 5, review: "Very professional team. My car's interior looks brand new after the detailing and decoration work." },
];

function renderTestimonials() {
  const grid = document.getElementById("testimonials-grid");
  if (!grid) return;
  grid.innerHTML = testimonials.map(t => `
    <div class="review-card reveal">
      <div class="stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
      <p class="quote">"${t.review}"</p>
      <div class="who">
        <span class="name">${t.name}</span>
        <span class="car">${t.car}</span>
      </div>
    </div>`).join("");
}

/* ============================================================
   GALLERY (content data + preview + full page + lightbox)
============================================================ */
const galleryImages = [
  { id: 1, category: "Interior", caption: "Custom leather interior refresh", img: "https://placehold.co/700x700/17181c/e8322a?text=Interior+01" },
  { id: 2, category: "Exterior", caption: "Body styling & wheel upgrade", img: "https://placehold.co/700x700/17181c/e8322a?text=Exterior+01" },
  { id: 3, category: "Accessories", caption: "Seat cover installation", img: "https://placehold.co/700x700/17181c/e8322a?text=Seat+Covers" },
  { id: 4, category: "Lighting", caption: "Ambient LED interior lighting", img: "https://placehold.co/700x700/17181c/e8322a?text=LED+Lighting" },
  { id: 5, category: "Interior", caption: "Dashboard detailing", img: "https://placehold.co/700x700/17181c/e8322a?text=Dashboard" },
  { id: 6, category: "Accessories", caption: "Accessory fitting bay", img: "https://placehold.co/700x700/17181c/e8322a?text=Accessories" },
  { id: 7, category: "Installation", caption: "Android stereo installation", img: "https://placehold.co/700x700/17181c/e8322a?text=Installation+01" },
  { id: 8, category: "Exterior", caption: "Door visor & moulding fit", img: "https://placehold.co/700x700/17181c/e8322a?text=Exterior+02" },
  { id: 9, category: "Lighting", caption: "Headlight upgrade bay", img: "https://placehold.co/700x700/17181c/e8322a?text=LED+Headlight" },
  { id: 10, category: "Interior", caption: "Full interior decoration", img: "https://placehold.co/700x700/17181c/e8322a?text=Interior+02" },
  { id: 11, category: "Installation", caption: "Reverse camera fitting", img: "https://placehold.co/700x700/17181c/e8322a?text=Installation+02" },
  { id: 12, category: "Accessories", caption: "Floor mat & sunshade set", img: "https://placehold.co/700x700/17181c/e8322a?text=Accessories+02" },
];

function renderGalleryPreview() {
  const grid = document.getElementById("gallery-preview-grid");
  if (!grid) return;
  const preview = galleryImages.slice(0, 6);
  grid.innerHTML = preview.map(g => `
    <div class="gallery-item reveal" data-lightbox-id="${g.id}">
      <img src="${g.img}" alt="${g.caption}" loading="lazy">
    </div>`).join("");
}

let galleryFilterState = "All";

function initGalleryPage() {
  const grid = document.getElementById("gallery-full-grid");
  if (!grid) return;

  renderGalleryGrid(grid, galleryFilterState);

  document.querySelectorAll("[data-gallery-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-gallery-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      galleryFilterState = btn.getAttribute("data-gallery-filter");
      renderGalleryGrid(grid, galleryFilterState);
    });
  });
}

function renderGalleryGrid(grid, filter) {
  const items = filter === "All" ? galleryImages : galleryImages.filter(g => g.category === filter);
  grid.innerHTML = items.map(g => `
    <div class="gallery-item reveal" data-lightbox-id="${g.id}">
      <img src="${g.img}" alt="${g.caption}" loading="lazy">
    </div>`).join("");
}

/* ============================================================
   LIGHTBOX (works for both preview + full gallery grids)
============================================================ */
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const img = lightbox.querySelector("img");
  let currentIndex = 0;
  let activeSet = galleryImages;

  document.addEventListener("click", (e) => {
    const item = e.target.closest("[data-lightbox-id]");
    if (item) {
      activeSet = document.getElementById("gallery-full-grid") ? galleryImages.filter(g => galleryFilterState === "All" || g.category === galleryFilterState) : galleryImages.slice(0, 6);
      const id = Number(item.getAttribute("data-lightbox-id"));
      currentIndex = activeSet.findIndex(g => g.id === id);
      openLightbox();
    }
    if (e.target === lightbox || e.target.closest("[data-lightbox-close]")) closeLightbox();
    if (e.target.closest("[data-lightbox-prev]")) step(-1);
    if (e.target.closest("[data-lightbox-next]")) step(1);
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  function openLightbox() {
    updateImage();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
  function step(dir) {
    currentIndex = (currentIndex + dir + activeSet.length) % activeSet.length;
    updateImage();
  }
  function updateImage() {
    const item = activeSet[currentIndex];
    if (item) {
      img.src = item.img;
      img.alt = item.caption;
    }
  }
}

/* ============================================================
   STATS COUNTER (about page)
============================================================ */
function initStatsCounter() {
  const stats = document.querySelectorAll("[data-count-to]");
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  stats.forEach(el => observer.observe(el));

  function animateCount(el) {
    const target = parseInt(el.getAttribute("data-count-to"), 10);
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
}

/* ============================================================
   REVEAL-ON-SCROLL
============================================================ */
function initRevealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  const watch = () => {
    document.querySelectorAll(".reveal").forEach(el => {
      if (el.dataset.revealBound) return;
      el.dataset.revealBound = "true";
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
  };
  watch();
  // Re-scan after dynamic content (products/testimonials/gallery) renders
  setTimeout(watch, 150);
}

/* ============================================================
   CONTACT FORM
============================================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = {
      name: form.querySelector("#cf-name"),
      phone: form.querySelector("#cf-phone"),
      carModel: form.querySelector("#cf-car"),
      subject: form.querySelector("#cf-subject"),
      message: form.querySelector("#cf-message"),
    };

    let valid = true;

    valid = validateField(fields.name, v => v.trim().length >= 2, "Please enter your name.") && valid;
    valid = validateField(fields.phone, v => /^[0-9+\-\s]{7,15}$/.test(v.trim()), "Please enter a valid phone number.") && valid;
    valid = validateField(fields.carModel, v => v.trim().length >= 2, "Please enter your car model.") && valid;
    valid = validateField(fields.subject, v => v.trim().length > 0, "Please select a product or service.") && valid;
    valid = validateField(fields.message, v => v.trim().length >= 5, "Please add a short message.") && valid;

    if (!valid) return;

    const message =
`Hi, I would like to enquire about your service.

Name: ${fields.name.value.trim()}
Phone: ${fields.phone.value.trim()}
Car Model: ${fields.carModel.value.trim()}
Product/Service: ${fields.subject.value.trim()}
Message: ${fields.message.value.trim()}`;

    const successBox = document.getElementById("cf-success");
    if (successBox) successBox.classList.add("active");

    window.open(buildWhatsAppLink(message), "_blank");
    form.reset();
  });

  function validateField(input, isValid, errorMsg) {
    const row = input.closest(".form-row");
    const errorEl = row.querySelector(".form-error");
    if (!isValid(input.value)) {
      row.classList.add("invalid");
      if (errorEl) errorEl.textContent = errorMsg;
      return false;
    }
    row.classList.remove("invalid");
    return true;
  }
}
