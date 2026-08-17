# Trần Quốc Long — Interactive CV

A complete redesign of the original static Curriculum-Vitae site using React, TypeScript, Three.js and scroll-driven motion.

## Stack

- React + TypeScript + Vite
- Three.js via React Three Fiber / Drei
- Framer Motion
- Lenis smooth scrolling
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Deployment

The source lives on `master`. To publish the site, build the project and push
the contents of `dist/` to the `gh-pages` branch. GitHub Pages serves that
branch directly.

## Editing résumé content

All personal/profile/resume content is centralized in:

`src/data/resume.ts`

The visual components do not contain career history, so dates, company names, roles, links and skills can be updated in one place.

## Design notes

- Cinematic dark technical aesthetic rather than a traditional résumé template.
- Three.js scene is ambient and intentionally non-blocking.
- Scroll effects use transform/opacity where possible.
- Mobile collapses to a single-column narrative.
- `prefers-reduced-motion` disables the WebGL ambience and minimizes animation.
