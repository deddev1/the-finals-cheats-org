# Rust Cheats — Marketing Site

Static Astro 7 site for [rustcheats.co](https://rustcheats.co). Primary SEO keyword: **rust cheats** (secondary: rust hacks, rust aimbot, rust ESP).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Workers deployment with `src/worker.ts`

## Quick start

**On your own PC (real localhost):**

```bash
npm install
npm run localhost
# open http://localhost:5173
```

Or use the helper script:

```bash
./scripts/start-localhost.sh
```

**Dev mode with hot reload:**

```bash
npm install
npm run generate:i18n   # after editing scripts/i18n-data/*
node scripts/generate-blog-posts.mjs
npm run dev           # http://localhost:4321
```

Build and validate sitemaps:

```bash
npm run build:validate
```

## Deploy (Cloudflare Workers)

1. Create a Cloudflare Workers project named **rustcheats**
2. Connect this repo
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add custom domain **rustcheats.co** (apex) and redirect **www** → apex
6. Enable SSL **Always Use HTTPS**

CLI deploy:

```bash
npm run deploy
```

## Environment

- Node.js >= 22.12.0
- Checkout URL: Zadeyo Rust product (`brand.checkoutUrl` in `src/data/brand.ts`)

## License

Private — for rustcheats.co deployment only.
