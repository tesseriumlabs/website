---
name: seo
description: SEO requirements for the Tesserium Labs website. Use whenever adding or changing a page, route, blog post, content schema, image, URL, title or site-wide metadata, and before committing site changes, to keep meta tags, structured data, sitemap and feeds correct and up to date.
paths:
  - "src/**"
  - "astro.config.mjs"
  - "public/**"
---

# SEO checklist

Good SEO is a hard requirement for this site. All head metadata is centralised in
`src/components/Seo.astro` and rendered by `src/layouts/BaseLayout.astro`. Pages pass props to
`BaseLayout`; they never write their own `<title>` or `<meta>` tags.

## Every new page

- Uses `BaseLayout` with a unique `title` (≤ 60 chars, without the site name, which is appended)
  and a unique `description` (110-160 chars, written for humans).
- Has exactly one `<h1>`, and headings in order.
- Utility pages (404, thank-you, previews) pass `noindex` and are excluded in the sitemap
  `filter` in `astro.config.mjs`.
- Internal links use trailing slashes (`trailingSlash: 'always'`) to match canonical URLs.
- Images have meaningful `alt` text (empty `alt=""` only for decoration) and use `astro:assets`
  `<Image>` for local images so they are sized and optimised.

## Every blog post (`src/content/blog/*.md|mdx`)

- Frontmatter: `title`, `description`, `pubDate` required; set `updatedDate` when content
  meaningfully changes; add `tags`; if there is a `cover`, add `coverAlt`.
- The post page emits `BlogPosting` JSON-LD, `article:*` Open Graph tags and uses the cover as the
  share image, falling back to `/og/default.png`.
- Drafts (`draft: true`) are excluded from production pages, the RSS feed and therefore the sitemap.

## Site-wide (keep in sync)

- `site` in `astro.config.mjs` must be the production origin (`https://www.tesseriumlabs.com`).
- `src/consts.ts` holds the site title, description, locale, default OG image and social profiles
  (used for `Organization` JSON-LD `sameAs`). Update it when any of these change.
- Generated routes that must keep working: `/sitemap-index.xml`, `/robots.txt`, `/rss.xml`,
  `/og/default.png`.
- If the brand or tagline changes, update the OG image generator `src/pages/og/default.png.ts`.

## Verify before finishing

Run `npm run build`, then check the built HTML of a changed page in `dist/` for: correct
`<title>`, description, canonical, `og:image` (absolute URL), and valid JSON-LD. Keep pages fast:
no client-side JS unless needed, no render-blocking third-party scripts or fonts.
