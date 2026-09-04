/* ============================================================
   PRODUCT CATALOG
   Pure data — no UI logic here. Rendering happens in main.js
   and the products-page script.
   Replace "image" paths with real photos any time; placeholder
   images are used so the site works out of the box.
============================================================ */

const products = [
  { id: 1, name: "Premium Leather Seat Cover", category: "Interior Accessories", subcategory: "Seat Covers", image: "https://placehold.co/600x450/17181c/e8322a?text=Seat+Cover", description: "Premium PU-leather seat cover set with reinforced stitching and a professional in-shop fitting included.", featured: true },
  { id: 2, name: "7D Car Floor Mat", category: "Interior Accessories", subcategory: "Floor Mats", image: "https://placehold.co/600x450/17181c/e8322a?text=7D+Floor+Mat", description: "Waterproof, leak-proof 7D floor mats custom-cut to your car's exact floor profile.", featured: true },
  { id: 3, name: "LED Headlight Kit", category: "Car Lights", subcategory: "Exterior Lights", image: "https://placehold.co/600x450/17181c/e8322a?text=LED+Headlight", description: "Bright 6000K LED headlight conversion kit with plug-and-play installation.", featured: true },
  { id: 4, name: "LED Interior Ambient Light", category: "Car Lights", subcategory: "Interior Lights", image: "https://placehold.co/600x450/17181c/e8322a?text=Ambient+Light", description: "Multi-colour ambient interior lighting strip with app and remote control.", featured: false },
  { id: 5, name: "Steering Wheel Cover", category: "Interior Accessories", subcategory: "Steering Accessories", image: "https://placehold.co/600x450/17181c/e8322a?text=Steering+Cover", description: "Perforated leather steering cover for a sportier grip and premium interior feel.", featured: false },
  { id: 6, name: "Universal Mobile Phone Holder", category: "Car Electronics", subcategory: "Mobile Accessories", image: "https://placehold.co/600x450/17181c/e8322a?text=Mobile+Holder", description: "360° rotating dashboard/vent mobile holder with one-touch lock.", featured: true },
  { id: 7, name: "Signature Gel Car Perfume", category: "Car Decoration", subcategory: "Car Perfumes", image: "https://placehold.co/600x450/17181c/e8322a?text=Car+Perfume", description: "Long-lasting gel car perfume with a refined, non-overpowering fragrance.", featured: false },
  { id: 8, name: "Anti-Slip Dashboard Mat", category: "Interior Accessories", subcategory: "Dashboard Accessories", image: "https://placehold.co/600x450/17181c/e8322a?text=Dashboard+Mat", description: "Anti-slip dashboard mat that protects against sun damage and dust.", featured: false },
  { id: 9, name: "Door Visor Set", category: "Exterior Accessories", subcategory: "Door Accessories", image: "https://placehold.co/600x450/17181c/e8322a?text=Door+Visor", description: "Smoke-tinted door visors that let you keep windows cracked in the rain.", featured: false },
  { id: 10, name: "HD Reverse Camera", category: "Car Electronics", subcategory: "Security", image: "https://placehold.co/600x450/17181c/e8322a?text=Reverse+Camera", description: "Night-vision reverse camera with guided parking lines, professionally fitted.", featured: true },
  { id: 11, name: "Parking Sensor Kit (4-Sensor)", category: "Car Electronics", subcategory: "Security", image: "https://placehold.co/600x450/17181c/e8322a?text=Parking+Sensor", description: "4-sensor rear parking system with audible buzzer and distance display.", featured: false },
  { id: 12, name: "Android Car Stereo (9-inch)", category: "Car Electronics", subcategory: "Infotainment", image: "https://placehold.co/600x450/17181c/e8322a?text=Android+Stereo", description: "9-inch Android touchscreen stereo with GPS, Carplay/Android Auto and reverse camera input.", featured: true },
  { id: 13, name: "Portable Car Vacuum", category: "Car Care", subcategory: "Cleaning", image: "https://placehold.co/600x450/17181c/e8322a?text=Vacuum+Cleaner", description: "Portable 12V vacuum cleaner with strong suction for seats and carpets.", featured: false },
  { id: 14, name: "Microfiber Cleaning Kit", category: "Car Care", subcategory: "Cleaning", image: "https://placehold.co/600x450/17181c/e8322a?text=Cleaning+Kit", description: "5-piece microfiber towel and interior cleaning kit for a streak-free shine.", featured: false },
  { id: 15, name: "Foldable Sunshade Set", category: "Car Care", subcategory: "Exterior Care", image: "https://placehold.co/600x450/17181c/e8322a?text=Sunshade", description: "Foldable UV-protection sunshades sized for front and rear windshields.", featured: false },
  { id: 16, name: "Memory Foam Neck Rest Pair", category: "Interior Accessories", subcategory: "Car Cushions", image: "https://placehold.co/600x450/17181c/e8322a?text=Neck+Rest", description: "Memory-foam neck rest pair for reduced fatigue on long drives.", featured: false },
  { id: 17, name: "Fast Car Charger (Dual USB-C)", category: "Car Electronics", subcategory: "Car Chargers", image: "https://placehold.co/600x450/17181c/e8322a?text=Car+Charger", description: "65W dual-port fast charger compatible with all major phone brands.", featured: false },
  { id: 18, name: "USB Multi-Adapter", category: "Car Electronics", subcategory: "Mobile Accessories", image: "https://placehold.co/600x450/17181c/e8322a?text=USB+Adapter", description: "4-port USB hub adapter that fits neatly into any 12V socket.", featured: false },
  { id: 19, name: "Vent Clip Air Freshener Pack", category: "Car Decoration", subcategory: "Car Perfumes", image: "https://placehold.co/600x450/17181c/e8322a?text=Air+Freshener", description: "Pack of 3 vent-clip air fresheners in assorted premium scents.", featured: false },
  { id: 20, name: "Interior RGB LED Strip", category: "Car Lights", subcategory: "Decorative Lights", image: "https://placehold.co/600x450/17181c/e8322a?text=LED+Strip", description: "Flexible RGB LED strip lighting for footwells and interior trim.", featured: false },
  { id: 21, name: "Alloy Wheel Cover Set", category: "Exterior Accessories", subcategory: "Body Styling", image: "https://placehold.co/600x450/17181c/e8322a?text=Wheel+Cover", description: "Sporty alloy-look wheel covers for an instant exterior style upgrade.", featured: false },
  { id: 22, name: "Body Side Moulding Kit", category: "Exterior Accessories", subcategory: "Body Styling", image: "https://placehold.co/600x450/17181c/e8322a?text=Body+Moulding", description: "Chrome-finish body side mouldings professionally fitted to protect and style.", featured: false },
  { id: 23, name: "Custom Embroidered Seat Cover", category: "Custom Car Accessories", subcategory: "Custom Seat Covers", image: "https://placehold.co/600x450/17181c/e8322a?text=Custom+Seat", description: "Custom-fit seat covers with personalised embroidery options.", featured: false },
  { id: 24, name: "Trunk Organizer – Heavy Duty", category: "Car Utility & Emergency", subcategory: "Trunk Organizers", image: "https://placehold.co/600x450/17181c/e8322a?text=Trunk+Organizer", description: "Modular trunk organizer with adjustable dividers and anti-slip base.", featured: false },
  { id: 25, name: "Emergency Roadside Kit", category: "Car Utility & Emergency", subcategory: "Emergency Kits", image: "https://placehold.co/600x450/17181c/e8322a?text=Emergency+Kit", description: "Compact emergency kit with first-aid, tools and reflective triangle.", featured: false },
  { id: 26, name: "Magnetic Window Flag", category: "Flags", subcategory: "Window Flags", image: "https://placehold.co/600x450/17181c/e8322a?text=Window+Flag", description: "Easy-fit magnetic window flag for quick display.", featured: false },
  { id: 27, name: "State Flag – Premium Satin", category: "Flags", subcategory: "State Flags", image: "https://placehold.co/600x450/17181c/e8322a?text=State+Flag", description: "High-quality satin finish state flags with reinforced stitching.", featured: false },
  { id: 28, name: "Seat Belt Cover – Plush", category: "Car Decoration", subcategory: "Seat Belt Covers", image: "https://placehold.co/600x450/17181c/e8322a?text=Seat+Belt+Cover", description: "Comfortable plush seat belt covers to reduce chafing and add style.", featured: false },
  { id: 29, name: "Tyre Inflator – Portable", category: "Car Utility & Emergency", subcategory: "Tyre Inflators", image: "https://placehold.co/600x450/17181c/e8322a?text=Tyre+Inflator", description: "Compact 12V tyre inflator with pressure gauge and LED light.", featured: false },
  { id: 30, name: "Custom Name Plate – Chrome Frame", category: "Custom Car Accessories", subcategory: "Custom Name Plates", image: "https://placehold.co/600x450/17181c/e8322a?text=Name+Plate", description: "Customisable chrome name plate with laser engraving option.", featured: false },
  { id: 31, name: "Decorative Hanging Accessory – Boho", category: "Car Decoration", subcategory: "Hanging Accessories", image: "https://placehold.co/600x450/17181c/e8322a?text=Hanging+Accessory", description: "Handmade decorative hanging accessory for rear-view mirror.", featured: false },
  { id: 32, name: "Custom Car Decal – Large", category: "Custom Car Accessories", subcategory: "Custom Car Decals", image: "https://placehold.co/600x450/17181c/e8322a?text=Car+Decal", description: "High-quality vinyl custom decals for exterior styling.", featured: false }
];

/* Main categories and subcategory mapping for the filter UI */
const CATEGORY_MAP = {
  "Interior Accessories": ["Seat Covers","Floor Mats","Steering Accessories","Dashboard Accessories","Gear & Handbrake","Car Cushions","Interior Utility"],
  "Exterior Accessories": ["Body Styling","Door Accessories","Window Accessories","Exterior Protection"],
  "Car Lights": ["Interior Lights","Exterior Lights","Decorative Lights"],
  "Flags": ["Indian Flags","State Flags","Regional Flags","Cultural Flags","Political Flags","Window Flags","Magnetic Flags"],
  "Car Protection": ["Car Body Covers","Interior Protection","Exterior Protection"],
  "Car Electronics": ["Car Chargers","Mobile Accessories","Security","Audio","Infotainment"],
  "Car Care": ["Cleaning","Exterior Care","Interior Care"],
  "Custom Car Accessories": ["Custom Seat Covers","Custom Floor Mats","Custom Steering Covers","Custom Name Plates","Custom Number Plate Frames","Custom Key Covers","Custom Embroidery","Custom Logo Accessories","Custom Car Decals"],
  "Car Utility & Emergency": ["Trunk Organizers","Storage Boxes","Emergency Kits","Tyre Inflators","Jump Starters","Tool Kits","Car Air Compressors","Safety Kits"],
  "Car Decoration": ["Car Perfumes","Keychains","Hanging Accessories","Decorative Items","Seat Belt Covers","Decorative Mirrors","Festival Car Decoration"]
};

/* Returns the fixed list of main categories in order */
function getCategories() {
  return Object.keys(CATEGORY_MAP);
}

function getSubcategories(cat) {
  return CATEGORY_MAP[cat] || [];
}
