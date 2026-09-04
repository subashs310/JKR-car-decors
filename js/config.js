/* ============================================================
   BUSINESS CONFIGURATION
   Edit this file to update contact info across the ENTIRE site.
   Every page pulls from this single source — no hardcoding.
============================================================ */

const business = {
  shopName: "JKR CAR DECORS & ACCESSORIES",
  shortName: "JKR CAR",
  tagline: "Car Accessories & Decoration",
  phone: "090037 30071",
  phoneRaw: "+919003730071",        // used for tel: links
  whatsapp: "919003730071",          // used for wa.me links (no + or spaces)
  email: "info@redlineautostyle.com",
  address: "No: 1463, Kanji Main Road, near Idukku Pillayar Koil, Vengikkal, Tiruvannamalai, Annamalai R.F., Tamil Nadu 606604",
  openingHours: "Mon – Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 6:00 PM",
  googleMapsEmbed: "https://www.google.com/maps?q=No%3A+1463%2C+Kanji+Main+Road%2C+near+Idukku+Pillayar+Koil%2C+Vengikkal%2C+Tiruvannamalai%2C+Tamil+Nadu+606604&output=embed",
  googleMapsUrl: "https://maps.google.com/?q=No%3A+1463%2C+Kanji+Main+Road%2C+Vengikkal%2C+Tiruvannamalai%2C+Tamil+Nadu+606604",
  instagram: "https://www.instagram.com/jkrcardecors/",
  facebook: "https://www.instagram.com/jkrcardecors/",
  established: 2010
};

/* Builds a wa.me link with a pre-filled message */
function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${business.whatsapp}?text=${encoded}`;
}

/* Builds a tel: link */
function buildTelLink() {
  return `tel:${business.phoneRaw}`;
}
