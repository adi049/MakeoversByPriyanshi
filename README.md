# Makeovers By Priyanshi — Website

A premium, multi-page luxury makeup artist website. Pure HTML5 + CSS3 + vanilla JavaScript — no build step, no dependencies. Host the folder anywhere (Netlify, Vercel, GitHub Pages, any static host).

## 📄 Pages
`index.html` · `about.html` · `services.html` (with prices) · `bridal.html` · `gallery.html` · `videos.html` · `reviews.html` · `faq.html` · `booking.html` · `contact.html`

The shared header, footer, sticky mobile CTA bar and lightbox are injected on every page by `js/main.js` — edit them once, they update everywhere. "Enquire Now" buttons link to `booking.html?service=...` which pre-selects the service in the form.

## ✏️ The ONE file you edit: `js/config.js`

Everything dynamic lives there:

| What | Where in config.js |
|---|---|
| WhatsApp number | `SITE.whatsappNumber` (digits only, e.g. `"919876543210"`) |
| Phone / Email / Instagram / Location / Hours | `SITE.phoneNumber`, `SITE.email`, `SITE.instagram`, `SITE.location`, `SITE.businessHours` |
| Google Map | `SITE.mapEmbedUrl` (Google Maps → Share → Embed a map → copy the `src` URL) |
| Services & prices | `PRICED_SERVICES` (exact prices) + `ARTISTRY` (hair/mehendi/skin) |
| Bridal look cards | `BRIDAL_LOOKS` |
| Gallery photos + categories | `GALLERY` |
| Reels / videos | `REELS` (local MP4s **or** Instagram reel URLs) |
| Instagram grid thumbnails | `INSTA_GRID` |
| Testimonials | `TESTIMONIALS` |
| FAQ | `FAQS` |

## 📁 Replacing media

Drop your real files into the matching folders (WebP/JPG recommended, ~1100px wide portrait):

```
assets/logo/logo.jpg                 ← official logo (already in place — do not rename)
assets/images/hero/hero-01.webp      ← hero background (landscape, ~1920px)
assets/images/about/priyanshi-portrait.webp
assets/images/bridal/bridal-01.webp …
assets/images/makeup/makeup-01.webp …
assets/images/hair/hair-01.webp …
assets/images/mehendi/mehendi-01.webp …
assets/images/skin/skin-01.webp …
assets/images/gallery/gallery-01.webp …
assets/videos/reels/reel-01.mp4 (+ reel-01-poster.webp)  ← vertical 9:16
```

Keep the same filenames → zero code changes. New filenames → update the path in `js/config.js`.

> Current photos/videos are **temporary AI-generated / branded placeholders** — replace them with real Makeovers By Priyanshi work before going live.

### Instagram reels instead of MP4s
In `REELS`, use:
```js
{ type: "instagram", url: "https://www.instagram.com/reel/XXXX/", title: "My Reel" }
```

## 📨 Connecting the booking form

The form is frontend-ready. On submit it collects all fields into a `data` object (see the marked block in `js/main.js`). Wire it to WhatsApp (already auto-opens when a number is configured), email, Supabase, Firebase, Google Sheets or any API from that single spot.

## 🔎 Before going live
- Replace `https://www.example.com/` canonical + OG URLs in `index.html` with your real domain.
- Fill every `[ADD ...]` placeholder in `js/config.js`.
- Replace placeholder testimonials with real client reviews.
"# MakeoversByPriyanshi" 
