# AGENTS.md

## Project Goal

This is an Astro 5 + Tailwind CSS v4 static site that ports the wtr-lab.com novel detail page into a
proper component-based architecture. The **reference/** folder contains the original site source that
must be matched visually and structurally. Every component, layout, color, spacing, and interaction
should match the reference. The single-page original is at `reference/wtr-single-page/wtr-lab-static-cleaned.html`;
the component-based version is at `reference/wtr-lab-site/`.

## Build & Dev Commands

```bash
bun install          # install dependencies (bun.lock is primary)
bun run dev          # start dev server (astro dev)
bun run build        # production build to dist/
bun run preview      # preview production build
```

No test, lint, or formatting tools are configured.

## Project Structure

```
src/
  content/
    config.ts              # Zod schema for novel collection
    novel/                 # Markdown files with frontmatter (one per novel)
  data/                    # JSON data files loaded via import.meta.glob
    chapters/              # Chapter lists per novel slug
    reviews/               # Review data per novel slug
    recommendations/       # Recommendation data per novel slug
    patrons/               # Patron data per novel slug
    other-novels/          # Author's other novels per novel slug
  layouts/
    PostLayout.astro       # Root layout (full HTML doc, wires all components)
  pages/
    index.astro            # Library listing page
    novel/[...slug].astro  # Dynamic novel detail page
  components/
    Nav.astro              # Sticky top navbar
    NovelHeader.astro      # Cover image + metadata + action buttons
    TabAbout.astro         # Synopsis, details, rankings, genres, patrons
    TabToc.astro           # Chapter listing
    TabReviews.astro       # Rating breakdown + review cards
    TabRecommendations.astro # Similar novel cards
    Footer.astro           # Site footer
    SvgSprite.astro        # Inline SVG icon sprite (116 icons)
    SvgDefs.astro          # SVG gradient definitions
  styles/
    global.css             # Tailwind v4 @theme tokens
public/
  assets/js/
    body-01.js             # Dark mode init (IIFE, reads localStorage)
    body-02.js             # Vanilla tab switching logic
```

## Reference Site Architecture (reference/)

The original site uses a fetch-based include system (`<template data-include>` + `include.js`) to
compose pages from HTML chunks. The Astro project replaces this with proper components.

Key reference files:
- `reference/wtr-lab-site/index.html` — page shell with CSS links and `<template>` includes
- `reference/wtr-lab-site/components/` — nav.html, main.html, footer.html, svg-sprite.html, svg-defs.html
- `reference/wtr-lab-site/assets/css/` — style-01 through style-05, body-style-06, body-style-07
- `reference/wtr-lab-site/assets/js/` — body-01.js, body-02.js, include.js
- `reference/wtr-single-page/wtr-lab-static-cleaned.html` — full single-page HTML (all CSS inlined)

**style-01.css and style-03.css are identical** (Tailwind v4 compiled output). style-02.css contains
font-face declarations (JetBrains Mono, Nunito Sans). style-04.css is dynamic chapter dark theme.
style-05.css is ProseMirror editor styles. body-style-06.css is bprogress loading bar.

## Code Style & Naming

### Files
- Components: PascalCase `.astro` — `NovelHeader.astro`, `TabReviews.astro`
- Pages: lowercase, directory-nested — `index.astro`, `novel/[...slug].astro`
- Content: kebab-case markdown — `steady-cultivation.md`
- Data files: kebab-case JSON per novel per category — `chapters/steady-cultivation.json`

### Variables
- Interfaces: PascalCase — `DataFile`, `OtherNovel`, `Patron`, `Chapter`
- Local variables: camelCase — `coverImage`, `firstGenre`, `chaptersList`
- Props: camelCase matching data fields — `siteTitle`, `chineseTitle`, `totalChapters`
- JSON keys: camelCase — `averageRating`, `totalVotes`, `dateAdded`

### Component Pattern
Every `.astro` file follows: fenced frontmatter (imports, exported Props interface, destructured
props, computed values) then HTML template with Tailwind utilities. No client-side hydration —
all `client:*` directives are absent.

### TypeScript
- Extends `astro/tsconfigs/strict`
- Path alias `@/*` → `src/*` available but relative imports used throughout
- Types co-located with consumers, no shared `types/` directory
- All data fields optional with runtime guards — never assume data exists

## Key Patterns

### Data Loading
JSON data loaded at build time via `import.meta.glob('../../data/**/*.json', { eager: true })`.
A generic `getData<T>(slug, category)` function looks up files by slug and category, returning
`T | undefined`. No exceptions thrown on missing data.

### Tab System
Uses `role="tablist"` / `role="tab"` / `role="tabpanel"` with `data-active`, `aria-selected`,
`hidden`, and `inert` attributes. Logic in `public/assets/js/body-02.js` — vanilla DOM, no framework.
Tabs default to hidden/inert except the first.

### SVG Icons
Inline sprite in `SvgSprite.astro` defines `<symbol>` elements. Referenced via:
`<svg class="icon inline-flex shrink-0 size-6"><use href="#icon-name"></use></svg>`

### Dark Mode
Hard-coded `class="dark"` + `data-color-scheme="dark"` on `<html>`. `body-01.js` reads
`localStorage.getItem("theme")` and sets both attributes. The global.css `@theme` block
defines dark-mode colors directly (no light/dark toggle in current implementation).

### Error Handling
Pattern: optional everything. All data fields are `?`. Templates use `{field && ...}` or ternaries.
Missing data returns graceful empty states ("No chapters available yet.").

## Visual Fidelity Checklist (reference → Astro)

When modifying components, compare against the reference:
- **Colors**: Use the exact CSS custom properties from `reference/wtr-lab-site/assets/css/style-02.css`
  and the `@theme` block in `global.css`. The reference defines light AND dark mode variables.
- **Fonts**: JetBrains Mono (mono) and Nunito Sans (sans) via Google Fonts. Current Astro loads
  Inter + JetBrains Mono — should match reference.
- **Tab styling**: `bg-border` container, `data-active:bg-background` active state, grid layout
  `grid-cols-2 sm:grid-cols-4`, `gap-1 p-1`.
- **Card structure**: `fix-size` (max-width 760px centered), `fix-edge` (edge-to-edge on mobile),
  `shadow rounded-md ring-1 ring-foreground/20`.
- **Detail grid**: `grid-cols-[108px_1fr]` with `max-[400px]:grid-cols-1`, alternating row bg
  `even:bg-black/[0.016] dark:even:bg-white/[0.022]`.
- **Review bars**: Two-segment bars (solid + 35% opacity), colors from `--review-rate-1` through
  `--review-rate-5`.
- **Similar novels**: `overflow-x-auto` horizontal scroll, `w-44 min-w-44` fixed-width cards.
- **Nav**: Sticky, `bg-navbar`, `z-40`, responsive hamburger + search + nav links.
- **Footer**: `bg-card`, centered links, separator, copyright line.

## Data Schema (content/config.ts)

The novel collection uses Zod with fields: `title` (required), `chineseTitle`, `cover`, `author`,
`status`, `views`, `chapters`, `rating`, `readers`, `totalChars`, `tags`, `genres`, `details`
(author/status/dateAdded/origin/language/year/requested), `rankings` (weekly/allTime), `dataFiles`
(chapters/recommendations/patrons — slugs linking to JSON files in src/data/).
