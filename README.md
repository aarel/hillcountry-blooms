# Hill Country Blooms Theme

A bespoke Shopify storefront celebrating Central Texas florals, Hill Country Blooms combines handcrafted storytelling with purpose-built commerce flows. It follows the scaffold outlined in `scaffold.txt`, delivering a home experience, curated collection pages, a rich product narrative, and lightweight automations that highlight local delivery, subscriptions, and community stories.

## Architecture & layout

- **Scaffolded directories** mirror the brand roadmap: `home/`, `collections/`, `products/`, `about/`, `blog/`, `checkout/`, `theme/`, and `automation/`. Liquid templates live inside each page directory’s `sections/`, shared components are under `theme/snippets/`, and assets sit in `theme/assets/`.
- **Theme sections** reuse snippets to keep the brand consistent: `theme/sections/hero-section.liquid` renders the rotator hero via `theme/snippets/hero-banner.liquid`, while `theme/sections/quick-highlights.liquid` and `theme/sections/featured-collections.liquid` both leverage `theme/snippets/card-grid.liquid` for reusable card layouts.
- **Collection storytelling** is handled by `theme/sections/collection-main.liquid` (products, tags, pagination, filters, and nav pills) and `theme/sections/collection-story.liquid` (metafield-driven narratives), wired together by `theme/templates/collection*.json` presets.
- **Blog & about pages** follow the same sectional strategy: `theme/templates/blog.json` stitches `blog-hero` and `blog-articles`, while `theme/templates/about.json` assembles the `about-story`, `about-partners`, and `about-photo` sections described in the scaffold.
- **Frontend assets** come from the `frontend/` toolchain. `frontend/main.scss` and `frontend/main.js` compile via Vite (see `vite.config.js`) into `theme/assets/theme.css` and `theme/assets/theme.js`, which are injected site-wide through `theme/layout/theme.liquid`.
- **Checkout guard** is implemented in `theme/assets/checkout.js`, which validates ZIP codes on the checkout form and surfaces inline warnings when visitors enter values outside the supported Hill Country delivery range.

## Features & capabilities

- **Hero & quick highlights** – The home hero (`theme/sections/hero-section.liquid`) couples slider blocks with CTA controls, while the highlights section nests icon-based cards so marketing can shout out local roots, freshness, and story-driven craftsmanship.
- **Featured collections** – `theme/sections/featured-collections.liquid` lets merchandisers showcase multiple collection handles with optional overrides for imagery and link copy, keeping the homepage aligned with current promotions.
- **Collection experience** – `theme/sections/collection-main.liquid` renders product cards (`theme/snippets/product-card.liquid`), pagination (`theme/snippets/pagination.liquid`), and placeholders for filters/sorting, enabling easy upgrades to Search & Discovery snippets later.
- **Product storytelling** – `theme/snippets/product-story-card.liquid` draws from `product.metafields.custom.*` values to publish narrative cards (and QR artwork) that pair with the `story-section` layout defined in the scaffolded product templates.
- **Blog workflow** – `theme/sections/blog-preview.liquid` shows the latest articles with meta, excerpts, and CTA, while `theme/sections/blog-articles.liquid` offers pagination, share links, and configurable author/shop CTAs.
- **Automation playbook** – `automation/README.md` lists the current flows: custom-arrangement and contact forms, Shopify Email campaigns, delivery reminder Flows, chat widget notes, QR story cards, and analytics guardrails. These can be extended with Flow triggers and metafield-sync steps as the business grows.

## Local development & build process

1. **Install tooling:** run `npm install` to pull in Vite and Sass.
2. **Watch frontend assets:** `npm run dev` keeps `frontend/main.scss` and `frontend/main.js` compiled into `theme/assets/theme.css`/`theme/assets/theme.js` as you iterate.
3. **Preview the theme:** start the Shopify live preview with `./scripts/theme-serve.sh` (proxy for `shopify theme serve`).
4. **Lint & validate:** `npm run lint` runs `shopify theme check` (the script lives in `scripts/theme-check.sh` and ensures Liquid/JSON/accessibility rules are met). Run before opening PRs.
5. **Sync remote:** use `shopify theme pull`/`shopify theme push` before and after work to keep the dev store and repo aligned.

> **Tip:** `theme/assets/theme.css`/`.js` are generated artifacts. Edit `frontend/main.scss` or `frontend/main.js` and rerun `npm run dev`/`npm run build` to refresh the compiled files that Shopify consumes.

## Contribution practices

- Follow the repository guidelines in `AGENTS.md`: two-space indentation for Liquid/JSON/SCSS, kebab-case filenames/handles, lowercase HTML attributes, and snippet reuse for hero, card grids, and story sections.
- Preserve scaffolded copy unless marketing explicitly asks for updates, and annotate any approvals directly in the PR.
- Keep each branch focused on one feature/fix; use imperative, <72-character commit messages like `Add local-delivery ZIP validator`.
- Squash fixups locally, summarize motivation + major changes in the PR, and attach `shopify theme check` output plus screenshots/videos for visual tweaks.

## Testing & validation

- Automated linting runs via `shopify theme check`. The helper script `./scripts/theme-check.sh` enforces CLI presence.
- Perform manual checks on the high-impact flows listed in the guidelines: home hero rotator, collection filters, product add-to-cart, checkout ZIP validation, and automation triggers (forms/email/chat).
- Capture responsive screenshots or short walkthroughs for UX updates and flag unsupported breakpoints in your PR description.

## Future ideas & roadmap

1. **Search & Discovery filters** – replace the placeholder in `theme/snippets/faceted-filters.liquid` with Shopify Filters once the store is connected to SDS, enriching the collection experience with real facets.
2. **Story card automation** – pair `theme/snippets/product-story-card.liquid` with dynamic QR generation (per `automation/README`) and Flow-triggered emails that share those stories post-purchase.
3. **Checkout experience** – expand `theme/assets/checkout.js` to toggle the “Add Story Card” upsell or surface delivery eta info, keeping local-delivery promises transparent.
4. **Blog commerce hooks** – build inline “Shop This Look” blocks in `theme/sections/blog-articles.liquid` by mapping articles to collections/metafields for cross-selling.
5. **Asset management** – layer more Hill Country photography into `theme/assets/` with descriptive, hyphenated filenames and keep complex logic annotated with `{% comment %}` tags.

Refer to `AGENTS.md` and `automation/README.md` for ongoing process details and the full automation playbook.
