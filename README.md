# NUDE

A minimalist fashion brand and e-commerce site built with Next.js 14, TypeScript, and Tailwind CSS. Ultra-clean design, blush palette, and intentional whitespace.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Runtime | Node.js 18+ |

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, featured products, editorial preview |
| `/shop` | Full product catalog |
| `/blog` | Editorial listing |
| `/blog/[slug]` | Individual editorial post |

## Components

| Component | Description |
|---|---|
| `Header` | Minimal navigation with cart icon |
| `Footer` | Brand footer |
| `ProductCard` | Product display card |
| `PostCard` | Editorial post preview card |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
nude-nextjs/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── shop/
│   │   └── page.tsx            # Shop / product catalog
│   └── blog/
│       ├── page.tsx            # Blog listing
│       └── [slug]/
│           └── page.tsx        # Post detail
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── PostCard.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Design System

- **Background:** Pure white (`#FFFFFF`) and warm cream (`#FAF8F5`)
- **Text:** Deep charcoal (`#1C1C1C`)
- **Accent:** Dusty rose / blush (`#C4A99A`) and warm sand (`#D4C5B5`)
- **Typography:** Cormorant Garamond (brand/headings), DM Sans (body/nav)

---

## Extending with a Backend

To add real e-commerce functionality, connect one of the following:

- **Shopify Storefront API** — Headless product/cart/checkout
- **Stripe + custom cart** — Direct payment integration
- **Medusa.js** — Open-source commerce backend

---

## Deployment

### Vercel (recommended)

```bash
git push origin main
```

Import on [vercel.com](https://vercel.com). No environment variables required for the base build.

---

## Author

Designed and developed by **St. Clair Design Co.**

---

## License

Private — all rights reserved.
