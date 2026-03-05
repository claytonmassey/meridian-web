# Meridian — AI Automation Company Website

A modern Next.js marketing site for an AI automation company. Built for [Vercel](https://vercel.com) deployment.

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 19**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Replacing images

Image placeholders are used throughout the site. Replace them by:

1. Adding your assets to `public/` (e.g. `public/hero.jpg`, `public/team.jpg`).
2. Swapping the `<ImagePlaceholder>` components for Next.js `<Image>`:

   ```tsx
   import Image from "next/image";

   <Image
     src="/hero.jpg"
     alt="Description"
     width={800}
     height={450}
     className="w-full rounded-xl object-cover"
   />
   ```

   Or use the same `ImagePlaceholder` with a custom `children` prop and your own `<Image>` inside.

Placeholders appear in:

- **Hero** — main hero visual
- **Solutions** — one per solution (workflow, AI agents, integrations)
- **About** — team/office photo

## Deploy on Vercel

[Deploy with Vercel](https://vercel.com/new) — connect the repo and deploy. No extra config required for Next.js.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — run ESLint
