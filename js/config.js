/* ============================================================
   MAKEOVERS BY PRIYANSHI — CENTRAL SITE CONFIGURATION
   ------------------------------------------------------------
   ⭐ EDIT THIS ONE FILE to update contact details & all media.
   Drop new files in /assets/... and update the paths below —
   no other file needs to change.
   ============================================================ */

const SITE = {
  brandName: "Makeovers By Priyanshi",

  /* ---------- CONTACT (replace the placeholders) ---------- */
  // WhatsApp number in international format, digits only. e.g. "919876543210"
  whatsappNumber: "ADD_NUMBER_HERE",
  whatsappMessage:
    "Hi Priyanshi, I would like to enquire about your makeup services.",

  phoneNumber: "[ADD PHONE]",
  email: "[ADD EMAIL]",
  instagram: "[ADD INSTAGRAM]", // handle only, e.g. "makeoversbypriyanshi" (no @)
  location: "[ADD LOCATION]",
  businessHours: "[ADD HOURS]",

  // Google Maps embed URL (Google Maps → Share → Embed a map → copy src URL).
  // Leave "" to show an elegant placeholder instead of a wrong location.
  mapEmbedUrl: "",
};

/* ============================================================
   SERVICES & PRICES  (exact — shown on services.html)
   ============================================================ */
const INCLUDED_WITH_MAKEUP = ["Eye Lens", "Premium Lashes"];

const PRICED_SERVICES = [
  {
    name: "Bridal Makeup",
    price: "₹12,000",
    desc: "A beautifully crafted bridal look designed around your features, outfit and occasion.",
    includes: INCLUDED_WITH_MAKEUP,
    image: "assets/images/bridal/bridal-01.webp",
    alt: "Bridal makeup look by Makeovers By Priyanshi",
  },
  {
    name: "HD Bridal Makeup",
    price: "₹15,000",
    desc: "High-definition bridal artistry with a flawless, camera-ready finish that lasts through every ritual.",
    includes: INCLUDED_WITH_MAKEUP,
    image: "assets/images/bridal/bridal-03.webp",
    alt: "HD bridal makeup look by Makeovers By Priyanshi",
  },
  {
    name: "Airbrush Makeup",
    price: "₹18,000",
    desc: "A feather-light, long-wearing airbrush finish for a seamless, luminous complexion.",
    includes: INCLUDED_WITH_MAKEUP,
    image: "assets/images/bridal/bridal-02.webp",
    alt: "Airbrush makeup look by Makeovers By Priyanshi",
  },
  {
    name: "Signature Glam Makeup",
    price: "₹18,000",
    desc: "Priyanshi's signature glam — sculpted, radiant and unmistakably elegant.",
    includes: INCLUDED_WITH_MAKEUP,
    image: "assets/images/makeup/makeup-02.webp",
    alt: "Signature glam makeup look by Makeovers By Priyanshi",
  },
  {
    name: "Party Makeup",
    price: "₹25,000",
    desc: "Effortlessly glamorous looks for cocktails, celebrations and every special evening.",
    includes: INCLUDED_WITH_MAKEUP,
    image: "assets/images/makeup/makeup-01.webp",
    alt: "Party makeup look by Makeovers By Priyanshi",
  },
  {
    name: "HD Party Makeup",
    price: "₹3,000",
    desc: "A polished high-definition party look that photographs beautifully.",
    includes: INCLUDED_WITH_MAKEUP,
    image: "assets/images/skin/skin-01.webp",
    alt: "HD party makeup look by Makeovers By Priyanshi",
  },
];

/* Booking form dropdown — exactly these services */
const SERVICE_OPTIONS = PRICED_SERVICES.map((s) => s.name);

const EVENT_TYPES = ["Wedding", "Engagement", "Reception", "Haldi", "Mehendi", "Party / Cocktail", "Festive Occasion", "Other"];

/* ---------- OTHER ARTISTRY (no prices — enquire) ---------- */
const ARTISTRY = [
  {
    group: "Hair Styling",
    image: "assets/images/hair/hair-01.webp",
    alt: "Bridal hair styling by Makeovers By Priyanshi",
    items: ["Bridal Hair Styling", "Bun Styling", "Open Hair Styling"],
    desc: "From romantic waves to sculpted bridal buns — hair styled to hold beautifully all day.",
  },
  {
    group: "Mehendi",
    image: "assets/images/mehendi/mehendi-01.webp",
    alt: "Bridal mehendi design by Makeovers By Priyanshi",
    items: ["Bridal Mehendi", "Traditional Mehendi", "Contemporary Mehendi"],
    desc: "Intricate traditional artistry and modern minimal designs, applied with rich, deep-staining henna.",
  },
  {
    group: "Skin & Beauty",
    image: "assets/images/skin/skin-01.webp",
    alt: "Skin preparation and glow services by Makeovers By Priyanshi",
    items: ["Skin Preparation", "Pre-Bridal Beauty", "Glow Preparation"],
    desc: "Curated pre-event rituals that prep, polish and illuminate your skin for the perfect base.",
  },
];

/* ---------- MEHENDI GALLERY (order is intentional — do not shuffle) ---------- */
const MEHENDI_GALLERY = [
  { src: "assets/images/mehendi/mehendi-01.webp", alt: "Detailed full-hand bridal mehendi with peacock and swan motifs" },
  { src: "assets/images/mehendi/mehendi-02.webp", alt: "Intricate full-hand mehendi with floral jaali patterns" },
  { src: "assets/images/mehendi/mehendi-03.webp", alt: "Bride and groom portrait mehendi on forearms" },
  { src: "assets/images/mehendi/mehendi-04.webp", alt: "Wedding story mehendi with bridal scenes across both palms" },
  { src: "assets/images/mehendi/mehendi-05.webp", alt: "Traditional bridal mehendi with detailed portraits and peacocks" },
  { src: "assets/images/mehendi/mehendi-06.webp", alt: "Floral mehendi with custom initials on both palms" },
];

/* ---------- BRIDAL LOOKS (bridal.html + home preview) ---------- */
const BRIDAL_LOOKS = [
  { title: "Bridal",     image: "assets/images/bridal/bridal-01.webp",       alt: "Classic bridal look" },
  { title: "Engagement", image: "assets/images/bridal/bridal-02.webp",       alt: "Soft glam engagement look" },
  { title: "Reception",  image: "assets/images/bridal/bridal-03.webp",       alt: "Elegant reception look" },
  { title: "Haldi",      image: "assets/images/bridal/bridal-04-haldi.webp", alt: "Fresh dewy haldi look" },
  { title: "Mehendi",    image: "assets/images/mehendi/mehendi-01.webp",     alt: "Bridal mehendi design" },
  { title: "Party",      image: "assets/images/makeup/makeup-01.webp",       alt: "Glamorous party look" },
];

/* ---------- GALLERY ----------
   category: bridal | makeup | hair | mehendi | party        */
const GALLERY = [
  { src: "assets/images/bridal/bridal-01.webp",       category: "bridal",  alt: "HD bridal makeup with traditional jewellery" },
  { src: "assets/images/makeup/makeup-01.webp",       category: "party",   alt: "Bronze smokey party makeup look" },
  { src: "assets/images/hair/hair-01.webp",           category: "hair",    alt: "Bridal bun with fresh jasmine flowers" },
  { src: "assets/images/bridal/bridal-02.webp",       category: "makeup",  alt: "Soft glam engagement makeup" },
  { src: "assets/images/mehendi/mehendi-01.webp",     category: "mehendi", alt: "Detailed full-hand bridal mehendi with peacock motifs" },
  { src: "assets/images/bridal/bridal-03.webp",       category: "bridal",  alt: "Elegant reception bridal look" },
  { src: "assets/images/mehendi/mehendi-03.webp",     category: "mehendi", alt: "Bride and groom portrait mehendi on forearms" },
  { src: "assets/images/skin/skin-01.webp",           category: "makeup",  alt: "Glow preparation and luminous base" },
  { src: "assets/images/hair/hair-02.webp",           category: "hair",    alt: "Soft open waves hair styling" },
  { src: "assets/images/makeup/makeup-02.webp",       category: "party",   alt: "Festive occasion makeup look" },
  { src: "assets/images/bridal/bridal-04-haldi.webp", category: "bridal",  alt: "Fresh dewy haldi ceremony look" },
  { src: "assets/images/mehendi/mehendi-02.webp",     category: "mehendi", alt: "Intricate full-hand mehendi with floral jaali patterns" },
  { src: "assets/images/mehendi/mehendi-06.webp",     category: "mehendi", alt: "Floral mehendi with custom initials" },
  { src: "assets/images/gallery/gallery-01.webp",     category: "makeup",  alt: "Luxury makeup artist tools flat lay" },
];

/* ---------- REELS / VIDEOS ----------
   type: "video" → local MP4 (drop in /assets/videos/reels/)
   type: "instagram" → { type:"instagram", url:"https://www.instagram.com/reel/XXXX/", title:"..." } */
const REELS = [
  { type: "video", src: "assets/videos/reels/reel-01.mp4", poster: "assets/videos/reels/reel-01-poster.webp", title: "Bridal Transformation" },
  { type: "video", src: "assets/videos/reels/reel-02.mp4", poster: "assets/videos/reels/reel-02-poster.webp", title: "Getting Ready" },
  { type: "video", src: "assets/videos/reels/reel-03.mp4", poster: "assets/videos/reels/reel-03-poster.webp", title: "The Final Reveal" },
  { type: "video", src: "assets/videos/reels/reel-04.mp4", poster: "assets/videos/reels/reel-04-poster.webp", title: "Bridal Beauty" },
  { type: "video", src: "assets/videos/reels/reel-05.mp4", poster: "assets/videos/reels/reel-05-poster.webp", title: "Makeover Moments" },
  { type: "video", src: "assets/videos/reels/reel-06.mp4", poster: "assets/videos/reels/reel-06-poster.webp", title: "Signature Look" },
];

/* ---------- INSTAGRAM GRID (home) ---------- */
const INSTA_GRID = [
  { src: "assets/images/bridal/bridal-01.webp",   alt: "Bridal look — Instagram post" },
  { src: "assets/images/hair/hair-01.webp",       alt: "Bridal hair — Instagram post" },
  { src: "assets/images/makeup/makeup-02.webp",   alt: "Festive glam — Instagram post" },
  { src: "assets/images/mehendi/mehendi-02.webp", alt: "Mehendi art — Instagram post" },
  { src: "assets/images/bridal/bridal-02.webp",   alt: "Engagement look — Instagram post" },
  { src: "assets/images/gallery/gallery-01.webp", alt: "Studio moments — Instagram post" },
];

/* ---------- TESTIMONIALS (editable placeholders — replace with real reviews) ---------- */
const TESTIMONIALS = [
  { stars: 5, text: "Add client testimonial here.", name: "Client Name" },
  { stars: 5, text: "Add client testimonial here.", name: "Client Name" },
  { stars: 5, text: "Add client testimonial here.", name: "Client Name" },
];

/* ---------- FAQ (editable) ---------- */
const FAQS = [
  { q: "How can I book an appointment?", a: "Send an enquiry through the booking page or WhatsApp with your event date and requirements. We'll get back to you with availability and next steps." },
  { q: "How far in advance should I book bridal makeup?", a: "Wedding dates — especially in peak season — fill up quickly. We recommend enquiring as early as possible once your date is confirmed so we can reserve it for you." },
  { q: "Is a makeup trial available?", a: "[Add trial policy here — placeholder answer. A trial can be discussed while confirming your booking.]" },
  { q: "Which services are available?", a: "Bridal Makeup, HD Bridal Makeup, Airbrush Makeup, Signature Glam Makeup, Party Makeup and HD Party Makeup — along with hair styling, mehendi and skin preparation. See the Services page for details." },
  { q: "What is included with makeup services?", a: "Every makeup service includes an eye lens and premium lashes." },
  { q: "How can I contact Priyanshi?", a: "Through the enquiry form, WhatsApp, or the details on the Contact page. We respond as soon as possible." },
];
