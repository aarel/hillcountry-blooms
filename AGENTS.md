# Repository Guidelines

## Project Structure & Module Organization
- Follow the scaffolded directories: `home/`, `collections/`, `products/`, `about/`, `blog/`, `checkout/`, `theme/`, and `automation/` as outlined in `scaffold.txt`.
- House Liquid templates within each page directory under `sections/`, place shared components in `theme/snippets/`, and keep assets in `theme/assets/`.
- Reuse snippets for hero banners, card grids, and story sections to maintain consistency across pages.

## Build, Test, and Development Commands
- `shopify theme serve` — start a live preview tied to your development store; auto-refreshes when templates or assets change.
- `shopify theme pull` / `shopify theme push` — synchronize remote theme updates before starting work and publish after review.
- `shopify theme check` — lint Liquid, JSON, and accessibility rules; run with `--init` during first setup to capture configuration in `theme/.config/shopify.yml`.
- `npm install` — install the Vite/Sass toolchain for compiling `frontend/` assets into `theme/assets/`.
- `npm run dev` — watch SCSS/JS and emit `theme.js` / `theme.css` during local development; run alongside `shopify theme serve`.
- `npm run build` — produce optimized assets before pushing or deploying the theme.

## Coding Style & Naming Conventions
- Use Liquid, JSON, and SCSS with two-space indentation; keep HTML attributes lower-case and Liquid tags left-aligned.
- Name files and handles in kebab-case (`story-section.liquid`, `hill-country-bouquets.json`) to mirror Shopify expectations.
- Store imagery in `theme/assets/` with descriptive, hyphenated filenames (`hero-flower-table.jpg`) and annotate complex logic with succinct `{% comment %}` blocks.

## Testing Guidelines
- Run `shopify theme check` before opening a PR to flag schema, translation, and performance issues early.
- Manually validate the critical flows: home hero rotator, collection filters, product add-to-cart, checkout ZIP validator, and automation hooks.
- Capture responsive screenshots or short walkthrough videos for UX updates, and note any unsupported breakpoints in the PR.

## Commit & Pull Request Guidelines
- Write imperative, sentence-case commit messages under 72 characters (`Add local-delivery ZIP validator`).
- Keep one feature or fix per branch, squash local fixups, and link Shopify tickets or GitHub issues in the PR description.
- PRs should summarize motivation, highlight major changes, attach `shopify theme check` output, and include screenshots for visual tweaks.

## Content & Asset Management
- Prefer original Hill Country photography; avoid stock unless marketing signs off, and include alt text describing location and bouquet story.
- Preserve scaffolded copy (taglines, story prompts) unless the content team requests adjustments, and note any marketing approvals in the PR.

## Running Locally
1. Install the Shopify CLI (`shopify`) and log into the Hill Country Blooms development store.
2. Install dependencies for any theme extensions (e.g., `nvm use` / `npm install` if applicable).
3. Start the live preview: `./scripts/theme-serve.sh` (wraps `shopify theme serve`).
4. Run linting before PRs: `./scripts/theme-check.sh`.
5. Commit with squashable, imperative messages and attach screenshots or videos for UX changes.
