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
  whatsappNumber: "918595291883",
  whatsappMessage:
    "Hi Priyanshi, I would like to enquire about your makeup services.",

  phoneNumber: "+91 85952 91883",
  email: "shiwani15202020@gmail.com",
  instagram: "makeoverbypriyanshii", // handle only, e.g. "makeoversbypriyanshi" (no @)
  location: "Based in Delhi, with bookings available across India. Home service is available in Delhi with no extra travel charge; applicable travel charges apply for bookings outside Delhi.",

  // Google Maps embed URL (Google Maps → Share → Embed a map → copy src URL).
  // Leave "" to show an elegant placeholder instead of a wrong location.
  mapEmbedUrl: "",
};

/* ============================================================
   SERVICES & PRICES  (exact — shown on services.html)
   ============================================================ */
const INCLUDED_WITH_MAKEUP = ["Eye Lens", "Premium Lashes", "Hair Draping", "Saree Draping"];

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
    price: "₹2,500",
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


/* ---------- SPECIAL PACKAGES ---------- */
const SPECIAL_PACKAGES = [
  {
    name: "Bridal Mehendi",
    price: "₹5,100",
    desc: "Full-hand mehendi on both hands and half-length mehendi on both legs. No figure work.",
    items: [
      "Full hand — both hands",
      "Half length — both legs",
      "No figure work",
      "Pure herbal, handmade mehendi cones from our side",
      "Goodie bag included",
    ],
  },
  {
    name: "Premium Bridal Mehendi",
    price: "₹7,100",
    desc: "Full-hand mehendi on both hands and half-length mehendi on both legs with elegant figure work.",
    items: [
      "Full hand — both hands",
      "Half length — both legs",
      "Figure work: bride, groom, peacock, elegant motifs, doli & more",
      "Pure herbal, handmade mehendi cones from our side",
      "Goodie bag included",
    ],
  },
  {
    name: "Royal Bridal Mehendi",
    price: "₹11,000",
    desc: "A detailed royal bridal mehendi story with family, baraat and multiple personalised figures.",
    items: [
      "Full hand — both hands",
      "Half length — both legs",
      "Figure work: bride family, groom family, baraat",
      "4–5 personalised figures can be included",
      "Pure herbal, handmade mehendi cones from our side",
      "Goodie bag included",
    ],
  },
  {
    name: "Pre-Bridal & Bridal Complete Package",
    price: "₹30,000",
    desc: "A complete pre-bridal and wedding-ready package with beauty, mehendi and complimentary makeup services.",
    items: [
      "1 O3 Facial",
      "1 O3 Bleach",
      "Body Wax (Rica)",
      "Body Bleach",
      "Manicure",
      "Pedicure",
      "Thread Work",
      "Mehendi Makeup HD — Complimentary",
      "Bridal Mehendi with Figure",
      "Bridal Makeup HD",
      "1 Party Makeup — Complimentary",
    ],
  },
];

/* Booking form dropdown — services & packages */
const SERVICE_OPTIONS = [...PRICED_SERVICES, ...SPECIAL_PACKAGES].map((s) => s.name);

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
    items: ["Bridal Mehendi", "Premium Bridal Mehendi", "Royal Bridal Mehendi"],
    prices: [
      { name: "Bridal Mehendi", price: "₹5,100" },
      { name: "Premium Bridal Mehendi", price: "₹7,100" },
      { name: "Royal Bridal Mehendi", price: "₹11,000" },
    ],
    desc: "Bridal mehendi packages with full-hand mehendi on both hands and half-length mehendi on both legs.",
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
  { stars: 5, text: "The makeup looked so natural and elegant. Everything from the base to the eye makeup was beautifully done and lasted throughout the function.", name: "Riya Sharma" },
  { stars: 5, text: "I loved how patiently my look was created. The final bridal finish was exactly the kind of soft, classy look I wanted.", name: "Neha Verma" },
  { stars: 5, text: "The overall experience was smooth and comfortable. My makeup, hair and draping all came together perfectly for my special day.", name: "Ananya Gupta" },
  { stars: 5, text: "Absolutely loved the final look. The makeup photographed beautifully and still felt comfortable for hours.", name: "Simran Kapoor" },
  { stars: 5, text: "Priyanshi understood the look I had in mind and made it feel even better. The finish was elegant, polished and not overdone.", name: "Kritika Mehta" },
  { stars: 5, text: "Such a lovely experience. The detailing around the eyes and the overall bridal finish looked gorgeous in both photos and videos.", name: "Pooja Malhotra" },
  { stars: 5, text: "I wanted a fresh and graceful party look and got exactly that. The makeup stayed beautiful through the entire event.", name: "Ishita Bansal" },
  { stars: 5, text: "From consultation to the final touch, everything felt well planned. I felt confident and completely myself in the final look.", name: "Mehak Arora" },
];

/* ---------- FAQ (editable) ---------- */
const FAQS = [
  { q: "How can I book an appointment?", a: "Send an enquiry through the booking page or WhatsApp with your event date and requirements. We'll get back to you with availability and next steps." },
  { q: "How far in advance should I book bridal makeup?", a: "Wedding dates — especially in peak season — fill up quickly. We recommend enquiring as early as possible once your date is confirmed so we can reserve it for you." },
  { q: "Is a makeup trial available?", a: "Yes, makeup trials are available at a charge of ₹2,000." },
  { q: "Which services are available?", a: "Bridal Makeup, HD Bridal Makeup, Airbrush Makeup, Signature Glam Makeup, Party Makeup and HD Party Makeup — along with hair styling, mehendi and skin preparation. See the Services page for details." },
  { q: "What is included with makeup services?", a: "Every makeup service includes Eye Lens, Premium Lashes, Hair Draping and Saree Draping." },
  { q: "How can I contact Priyanshi?", a: "Through the enquiry form, WhatsApp, or the details on the Contact page. We respond as soon as possible." },
];
