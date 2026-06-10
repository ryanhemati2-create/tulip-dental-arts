# Tulip Dental Arts

A production-ready marketing website for **Tulip Dental Arts** — Port Coquitlam's
premier dental laboratory.

> _“It’s Not the Service We Give — It’s the Smile We Get.”_

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and
**Framer Motion**. Fully responsive and ready to deploy on **Vercel**.

---

## ✨ Features

- 6 fully designed pages: Home, About, Services, For Dentists, Gallery, Contact
- Deep magenta / plum brand system with animated brand gradients and tulip motifs
- Sticky, blur-on-scroll navigation with a full-screen mobile menu
- Framer Motion animations: route transitions, staggered hero reveals, scroll
  reveals, and hover lifts
- Filterable gallery with a lightweight, dependency-free lightbox
- Contact form with React state + a `mailto:` fallback (ready for a real backend)
- Real logo rendered with `next/image` everywhere via the `Logo` component —
  dark variant on dark backgrounds, light variant on light backgrounds — including
  hero decorations, banners, gallery watermarks, and the favicon
- Accessible, SEO-friendly metadata and `prefers-reduced-motion` support

---

## 🎨 Brand reference

| Token | Hex | Usage |
| --- | --- | --- |
| `tulip.dark` | `#1A0026` | Dark background / dark text |
| `tulip.primary` | `#8B0057` | Dominant deep magenta |
| `tulip.mid` | `#C2185B` | Mid magenta |
| `tulip.accent` | `#E91E8C` | Bright fuchsia accent / CTAs |
| `tulip.light` | `#FDF0F5` | Light blush section backgrounds |

**Fonts:** Playfair Display (display), Montserrat (headings/labels), Lato (body) —
loaded via `next/font/google`, no extra config needed.

**Contact:** 120 – 1465 Salisbury Ave., Port Coquitlam, BC V3B 6J3 ·
(604) 944-9800 · tulipmilling@gmail.com · Tero Digital ID: 14852

---

## 🚀 Getting started

Requires **Node.js 18.17+**.

```bash
# 1. Install dependencies
npm install

# 2. Run the local dev server
npm run dev
# → open http://localhost:3000

# 3. Production build (run before deploying)
npm run build
npm run start
```

> If you're starting from scratch instead of this folder, the equivalent scaffold is:
> `npx create-next-app@latest tulip-dental-arts --typescript --tailwind --app`
> then `npm install framer-motion @heroicons/react clsx`.

---

## 📁 Project structure

```
tulip-dental-arts/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, Nav + Footer
│   ├── template.tsx        # Route-level fade-in page transition
│   ├── globals.css         # Tailwind layers + brand animations
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── for-dentists/page.tsx
│   ├── gallery/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Nav.tsx             ├── GradientHero.tsx     ├── ContactCard.tsx
│   ├── Footer.tsx          ├── SectionHeading.tsx   ├── ContactForm.tsx
│   ├── Logo.tsx            ├── ServiceCard.tsx      ├── GalleryCard.tsx
│   ├── Reveal.tsx          ├── StatBar.tsx          ├── GalleryGrid.tsx
│   ├── Petals.tsx          ├── CTABanner.tsx        └── ScannerCompatibility.tsx
├── public/
│   └── images/             # Real logos live here + drop gallery photos
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## ✅ Before you go live — replace the placeholders

Search the codebase for these markers and swap in the real assets/content:

- ✅ Logo — done. Real logos render via `components/Logo.tsx`
  (`logo-removebg-preview.png` on dark backgrounds, `logo2-removebg-preview.png`
  on light backgrounds)
- `REPLACE: insert real lab photos` → add photos to `/public/images/gallery/` and
  wire them into `components/GalleryGrid.tsx`
- `REPLACE: link Download Rx Form button to actual PDF` → point the Rx buttons at
  your PDF (For Dentists + Contact pages)
- `INTEGRATE: connect contact form to email backend` → wire `ContactForm.tsx` to
  Resend, Formspree, or EmailJS (currently uses a `mailto:` fallback)
- `ADD: actual turnaround time information`
- `ADD: social media URLs for Facebook, Instagram, LinkedIn` → update `Footer.tsx`

### Wiring the contact form to Resend (example)

Create `app/api/contact/route.ts`, then in `ContactForm.tsx` replace the
`mailto:` block with a `fetch("/api/contact", { method: "POST", … })` call.

---

## ☁️ Deploy to Vercel

1. **Push to GitHub** — create a new repository and push this project.
   ```bash
   git init
   git add .
   git commit -m "Initial Tulip Dental Arts website"
   git branch -M main
   git remote add origin https://github.com/<you>/tulip-dental-arts.git
   git push -u origin main
   ```
2. **Import to Vercel** — go to [vercel.com](https://vercel.com) → **Add New… →
   Project** → import your repo. Vercel auto-detects Next.js; no config needed.
   The free Hobby tier is sufficient.
3. **Deploy** — every push to `main` auto-deploys. Preview deployments are created
   for pull requests.
4. **Add your custom domain** — Project → **Settings → Domains** → add
   `tulipdentalarts.com` (or your domain) and follow the DNS instructions.
5. **Replace placeholder content** — logo, gallery photos, Rx PDF, form backend,
   social links, and turnaround times (see the checklist above).

---

## 📝 License

© 2025 Tulip Dental Arts. All Rights Reserved.
