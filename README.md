# Folio — Design Agency Landing Page

A pixel-close implementation of the provided Figma design, built with **React 19**, **Tailwind CSS 3**, and **Vite**.

## Pages

- `/` — Home / landing page (hero, story, services, achievements, partnerships, hiring CTA, jobs, contact CTA)
- `/bento` — "Bento" product detail page (hero, overview, stats, visual identity, CTA, recent works)

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/            reusable UI primitives (Navbar, Footer, Button, ProjectCard, Eyebrow, Logo)
  components/illustrations/  small SVG illustration components reused across sections
  sections/home/         section components used only on the Home page
  sections/bento/        section components used only on the Bento product page
  pages/                 route-level page components that compose sections
  App.jsx                router setup
  index.css              Tailwind directives + base styles
```

## Notes

- Fully responsive: single-column mobile layouts that expand into the multi-column
  desktop grids shown in the design, with a slide-out mobile nav menu.
- Colour palette, type scale and radii are centralised in `tailwind.config.js`.
- Illustrations are original lightweight SVG components (not raster exports) so they
  stay crisp at any size and are easy to re-theme via colour props.
