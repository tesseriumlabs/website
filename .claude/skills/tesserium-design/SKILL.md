---
name: tesserium-design
description: Tesserium Labs visual identity and design rules. Use before creating or changing any page, component, layout, style, copy or image on this website, so new work matches the established look and avoids the generic AI-generated aesthetic.
paths:
  - "src/**/*.astro"
  - "src/**/*.css"
  - "src/**/*.md"
  - "src/**/*.mdx"
  - "public/**"
---

# Tesserium design system

Ultra minimal and elegant, black and white. The identity comes from the name: *tessera* (a mosaic
tile). There is no logo anywhere: the wordmark is plain text, and the hero mosaic is the only image.

## Tokens (source of truth: `src/styles/global.css`)

Single dark theme. No light mode, no colour accents.

| Token | Value | Use |
|---|---|---|
| `paper` | `#000000` | Page background. Pure black. |
| `ink` | `#ffffff` | Text, active links, lit tiles. Pure white. |
| `slate` | `#8c8c8c` | Secondary text, metadata, inactive links. |
| `line` | `#1f1f1f` | Hairlines and dividers. |
| `surface` | `#111111` | Inline code. |
| `--tile` / `--tile-rest` | `#141414` / `#333333` | Mosaic tiles: idle / resting path. |

Use the Tailwind names (`bg-paper`, `text-slate`, `border-line`...). Never hard-code colours in
components, and never add a hue. Greys only.

## Type

- **DM Sans Variable** (`font-sans`) for everything, including article bodies. Self-hosted via
  Fontsource. Do not add other families.
- Default weight is light (300). Headings are light with tight negative tracking (`-0.03em` to
  `-0.035em`); use 400 for post titles in lists and `h2`/`h3` in articles; 500 at most for `strong`.
- Lines stay under ~64ch for reading text, ~40ch for intro paragraphs.

## Layout

- Max width `max-w-6xl`, gutters `px-4 sm:px-8`, generous vertical space. Left-aligned, except the home hero.
- Header: wordmark text left, nav right. No logo, no icons.
- Home hero: full-width section with the mosaic as background; headline, one-sentence intro and
  the blog link (only when posts exist) centred on top. The hero is the one centred block; the rest
  of the site is left-aligned.
- Actions are text links with a 1px underline border (`border-b`), not filled buttons.
- Lists are rows separated by hairlines (`divide-line`), date in a fixed left column. Not cards.
- No border radius anywhere: square edges match the tiles.

## The one bold element

The mosaic (`src/components/Mosaic.astro`, echoed in the OG image) is the memorable thing. It is a
full-bleed canvas grid of small square cells (18px, 2px gap) filling the whole hero behind the text,
with a sparse, faint resting pattern and top/bottom edges fading into black. Cells light up white
under the cursor (or a dragging finger), direct neighbours glow, and everything fades back slowly.
Hero text uses `mix-blend-difference` so it inverts over lit cells and stays readable.
No other decorative motion on the site.

## Banned: the generic "AI look"

Do not introduce any of these, even "just for one section":
- Any colour accent (blue, neon, acid green, terracotta...). The site is black and white only.
- Tinted near-blacks (`#0B0B0B`, `#111` as background) instead of pure `#000`.
- Serif fonts, or any font other than DM Sans.
- Logos, icons or illustrations besides the mosaic.
- Identical rounded cards with soft grey shadows; gradient washes or glows as decoration.
- ALL-CAPS tracked eyebrow labels above headings; `01 / 02 / 03` numbering for non-sequences.
- Accenting one word of a headline in a different colour/italic.
- `A · B · C` metadata strings, `→` appended to links/buttons, monospace for small labels.
- Scroll-triggered fade-up on every section, hover lift on every element.

## Copy

Plain, specific, sentence case, active voice. Buttons say what happens ("Read the blog",
"Get in touch"). No hype words. Empty and error states tell the reader what to do next.

## Quality floor

Responsive to 320px, visible `:focus-visible` ring, skip link, AA contrast,
semantic headings (one `h1` per page). Check the result in the preview before finishing.
