# Next-Aisle

Next-Aisle is an online store built with Next.js where users can browse products, view product details and reviews, manage a shopping cart, and check out.

## Overview

Next-Aisle is a course assignment for Noroff's JavaScript Frameworks course. It's an e-commerce front end that consumes the [Noroff Online Shop API](https://docs.noroff.dev/docs/v2/basic/online-shop) to display a product catalogue with search, individual product pages with ratings and reviews, a persistent shopping cart, and a checkout flow with form validation.

## Tech Stack

- [Next.js](https://nextjs.org) — React framework (App Router)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) — UI components
- [Zustand](https://zustand-demo.pmnd.rs) — state management (shopping cart)
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) — forms & validation
- [Lucide](https://lucide.dev) — icons
- [Noroff Online Shop API](https://docs.noroff.dev/docs/v2/basic/online-shop) — product data

## Getting Started

### Prerequisites

- Node.js 20.9.0 or later
- npm

### Installation

```bash
git clone https://github.com/AlexanderLislelid/jsf-ca.git
cd jsf-ca
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

| Script          | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Starts the development server    |
| `npm run build` | Builds the app for production    |
| `npm run start` | Runs the built app in production |
| `npm run lint`  | Lints the codebase               |

## Project Structure

```
app/
├── about/                  # About page
├── cart/                   # Cart page
│   └── checkout/           # Checkout page with form
│       └── success/        # Order confirmation page
├── contact/                # Contact page with form
├── product/
│   └── [id]/               # Product detail page
├── globals.css             # Global styles (Tailwind)
├── layout.tsx              # Root layout (Navbar/Footer)
├── loading.tsx             # Loading UI
├── not-found.tsx           # Custom 404 page
└── page.tsx                # Home page (product listing/search)

components/
├── buttons/                # AddToCartButton
├── cards/                  # ProductCard
├── forms/                  # CheckoutForm, ContactForm
├── layout/                 # Navbar, Footer
├── ui/                     # shadcn/ui components
├── CartItemQty.tsx         # Quantity controls for cart items
├── Logo.tsx
├── ProductSearch.tsx
└── Search.tsx

stores/
└── cartStore.ts            # Zustand shopping cart store

lib/
├── utils.ts
└── validation/             # Zod schemas for forms

types/
├── cartItem.ts
└── product.ts
```

## Features

- [x] Product listing with search
- [x] Product detail page with ratings and reviews
- [x] Shopping cart with persisted state (Zustand)
- [x] Checkout flow with form validation (React Hook Form + Zod)
- [x] Contact form
- [x] About page
- [x] Custom 404 page

## Deployment

This app can be deployed on [Vercel](https://vercel.com/new) or any platform that supports Next.js.

## License

This project was created as a course assignment for Noroff and is not licensed for reuse.

## Author

Alexander Lislelid
