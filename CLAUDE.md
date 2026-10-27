# Tesserium Labs website

@AGENTS.md

Astro 7 static site (Tailwind CSS v4, MDX) deployed to GitHub Pages at
https://www.tesseriumlabs.com by `.github/workflows/pages.yml` on every push to `main`.

- Commands: `npm run dev` (preview at http://localhost:4321), `npm run build`, `npx astro check`.
- Blog posts: `src/content/blog/*.md|mdx`, schema in `src/content.config.ts`. Keep frontmatter flat so a
  Git-based CMS (Sveltia CMS / Decap, planned, not yet installed) can edit it; it will live at
  `public/admin/` with media under `src/assets/`.
- Design: follow the `tesserium-design` skill (`.claude/skills/tesserium-design/SKILL.md`) for any visual
  or copy change. Avoid the generic AI-generated look listed there.
- SEO is a hard requirement: follow the `seo` skill (`.claude/skills/seo/SKILL.md`) for any page,
  content or metadata change.
- Custom domain is set in `public/CNAME` and the repo's Pages settings; keep them in sync.
