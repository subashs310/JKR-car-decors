# JKR Car Decors & Accessories — Car Accessories & Decoration Website

A complete, responsive, static website for a car accessories and decoration shop.
Built with plain **HTML5, CSS3 and vanilla JavaScript** — no frameworks, no build step, no backend.

## 1. Run it locally

There is nothing to install. Just open `index.html` in any browser.

For the best experience (so relative paths and lazy-loaded images behave exactly like on a real host), serve it with a simple local server instead of double-clicking the file:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000

# or, with Node installed
npx serve .
```

## 2. Project structure

```
car-accessories-website/
├── index.html          Home page
├── products.html        Full product catalog (search / filter / sort)
├── services.html        12 detailed services
├── gallery.html          Filterable gallery + lightbox
├── about.html            Story, mission, animated stats
├── contact.html          Contact info, validated form, map
├── css/
│   └── style.css         All styling (design tokens at the top)
├── js/
│   ├── config.js          ← EDIT THIS FIRST: shop name, phone, WhatsApp, address, hours, map, socials
│   ├── products.js         Product catalog data (22 sample products)
│   └── main.js              All interactive behaviour (nav, modal, filters, lightbox, form, etc.)
├── images/                 Empty folders ready for your own photos
└── README.md
```

## 3. First things to customize

### a) Business details — `js/config.js`
This one file drives every phone number, WhatsApp link, email, address and social link on
**every page**. Update it once:

```js
const business = {
  shopName: "YOUR SHOP NAME",
  phone: "090037 30071",
  phoneRaw: "+919003730071",
  whatsapp: "919003730071",   // digits only, country code, no + or spaces
  email: "you@example.com",
  address: "No: 1463, Kanji Main Road, near Idukku Pillayar Koil, Vengikkal, Tiruvannamalai, Annamalai R.F., Tamil Nadu 606604",
  openingHours: "Mon – Sat: 9:00 AM – 8:00 PM",
  googleMapsEmbed: "PASTE_YOUR_GOOGLE_MAPS_EMBED_URL",
  googleMapsUrl: "PASTE_YOUR_GOOGLE_MAPS_SHARE_URL",
  instagram: "https://instagram.com/yourshop",
  facebook: "https://facebook.com/yourshop",
};
```

**To get your real Google Maps embed URL:** open Google Maps → search your shop →
Share → Embed a map → copy the `src="..."` URL into `googleMapsEmbed`.

### b) Products — `js/products.js`
Each product is one object. Add, remove or edit freely — the catalog page, home page
"Featured Products" section and product modal all read from this single array.

```js
{
  id: 23,
  name: "Product Name",
  category: "Seat Covers",       // must match one of your category names
  price: 1999,                    // number, used for sorting
  priceLabel: "₹1,999",           // what's actually displayed
  image: "images/products/your-photo.jpg",
  description: "Short one-sentence description.",
  featured: false                 // true = shows on the home page
}
```

### c) Photos — `images/` folders
The site ships with placeholder images (from placehold.co) so it works immediately with
zero setup. Replace them with your own photos:

1. Drop real photos into `images/hero/`, `images/products/`, `images/services/`, `images/gallery/`.
2. In `js/products.js`, change each product's `image` path to your local file, e.g.
   `image: "images/products/leather-seat-cover.jpg"`.
3. In `js/main.js`, do the same inside the `galleryImages` array (`img` field).
4. In `css/style.css`, search for `placehold.co` to find the hero and page-header
   background images and swap those URLs too.

Recommended sizes: product/gallery photos ~1200×900px, hero photo ~1920×1080px, all
compressed (JPEG, ~150–300KB) for fast loading.

### d) Testimonials — `js/main.js`
Search for `const testimonials` near the top third of the file and replace the sample
names/reviews with real (anonymized, if preferred) customer feedback.

## 4. How the WhatsApp integration works

Every "Enquire" / "WhatsApp Us" button builds a `wa.me` link on the fly using
`buildWhatsAppLink(message)` from `config.js`, pre-filling a message such as:

> Hi, I am interested in the Premium Leather Seat Cover. Please share more details and price.

The contact form does the same: after validation, it composes a structured message from
the form fields and opens WhatsApp with it pre-filled. No backend or database is required.

## 5. Deployment

This is a 100% static site — deploy it anywhere that serves static files:

- **GitHub Pages:** push this folder to a repo, then Settings → Pages → deploy from the
  `main` branch (root).
- **Netlify:** drag-and-drop the whole folder onto [app.netlify.com/drop](https://app.netlify.com/drop),
  or connect the repo for auto-deploys.
- **Vercel / Cloudflare Pages / any static host:** works the same way — no build command needed.

## 6. What's already handled

- Fully responsive from 320px mobile up to 1440px+ desktop, no horizontal scroll
- Sticky navbar with animated mobile hamburger menu
- Dynamic product rendering, search, category filter and price sort
- Product detail modal
- Filterable gallery with keyboard-accessible lightbox (Esc, ←, →)
- Animated stat counters (About page)
- Client-side contact form validation (no backend)
- Floating WhatsApp + call buttons
- Semantic HTML, alt text on all images, visible focus states
- SEO meta tags (title, description, keywords) on every page
- Lazy-loaded images on product/gallery grids

## 7. About the placeholder images / video

No real photos or video of the shop were available when this project was generated, so
placeholder graphics are used throughout (clearly labelled, e.g. "Seat Cover", "Interior 01")
so every layout is fully visible and functional out of the box. Swap them for your own
photography using the steps in section 3(c) above — a phone camera is enough to start;
just shoot in good light, keep the car interior tidy in-frame, and use a similar aspect
ratio to what's already in place (4:3 for products, 1:1 for gallery, 16:9 for hero).
