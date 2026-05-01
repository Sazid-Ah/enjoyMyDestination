Got it — let me port the entire design to a drop-in **Next.js (App Router)** version. I'll put it in `/app/nextjs-export/` so you can copy it straight into your Next.js project.
Action: file_editor create /app/nextjs-export/README.md --file-text "# Andaman Trails — Next.js Drop-In

A complete, production-ready Next.js (App Router) port of the Andaman Trails premium landing page.

## 1. Install into a fresh Next.js app

```bash
npx create-next-app@latest andaman-trails --app --tailwind --js --eslint --src-dir --import-alias \"@/*\"
cd andaman-trails
yarn add framer-motion lucide-react
```

## 2. Copy files

Copy everything from this folder **into your project root**, preserving paths:

```
src/
  app/
    layout.jsx
    page.jsx
    globals.css
    api/
      inquiry/
        route.js
  components/
    site/
      Navbar.jsx
      Hero.jsx
      TrustBar.jsx
      WhyChooseUs.jsx
      Tours.jsx
      About.jsx
      Destinations.jsx
      Testimonials.jsx
      InquiryForm.jsx
      Footer.jsx
      WhatsAppFloat.jsx
  lib/
    data.js
tailwind.config.js
next.config.js
```

(If your project was created **without** `--src-dir`, remove the leading `src/` from each path.)

## 3. Overwrite `tailwind.config.js` and `src/app/globals.css` with the versions included here.

## 4. Run

```bash
yarn dev
```

Open http://localhost:3000 — you'll see the full editorial Andaman Trails page.

## What's wired

- Hero auto-slider (6.5s) with ken-burns, prev/next arrows, keyboard-less indicators
- 12 curated tour cards
- Testimonials carousel
- **Inquiry form** that POSTs to `src/app/api/inquiry/route.js` (currently logs + 200 OK — wire your DB there)
- WhatsApp floating pill (update the number in `WhatsAppFloat.jsx`)
- Sticky glass navbar with scroll-state transition and mobile menu

## Where to edit content

- Tour list, hero slides, destinations, testimonials: `src/lib/data.js`
- WhatsApp number: `src/components/site/WhatsAppFloat.jsx`
- Contact details (address, phone, email): `src/components/site/InquiryForm.jsx` + `Footer.jsx`

## Images

Uses remote Unsplash/Pexels URLs via plain `<img>` tags — **no next.config.js image domain setup needed**. If you'd like to switch to `next/image` for optimization, I've included `next.config.js` with the required `remotePatterns` ready.
"
Observation: Create successful: /app/nextjs-export/README.md