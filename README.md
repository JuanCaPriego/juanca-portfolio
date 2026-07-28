# Juan Priego — Portfolio

Personal portfolio built with React + Vite: an intro/landing page, a projects
grid, a markdown-powered blog for hobbies (climbing, running, etc.), and a CV
page. Deploys for free to GitHub Pages via GitHub Actions.

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/juanca-portfolio/` (the `/juanca-portfolio/`
path prefix matches production — see "Deploying" below).

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Adding a hobbies blog post

Add a new `.md` file to [`src/content/hobbies/`](src/content/hobbies/). The
filename (without `.md`) becomes the post's URL slug. Frontmatter fields:

```md
---
title: Post Title
date: 2024-01-20
excerpt: One-line summary shown on the Hobbies list page.
tags: climbing, alpinism
cover: My Image.jpg
---

Post body in markdown goes here.
```

- `date` should be `YYYY-MM-DD` so posts sort correctly.
- `tags` is a comma-separated list.
- `cover` is optional — it must match a filename already in
  [`src/assets/images/`](src/assets/images/).

No rebuild step needed beyond the normal dev/build — posts are picked up
automatically by [`src/lib/posts.js`](src/lib/posts.js).

## Adding/editing projects

Edit the array in [`src/data/projects.js`](src/data/projects.js). Each entry
is a plain object (title, year, description, tags, repo/demo links).

## Editing your CV

Edit [`src/data/cv.js`](src/data/cv.js) (summary, contact, experience,
education, skills). To enable the "Download PDF" button on the CV page, add
your resume as `public/resume.pdf`.

## Deploying to GitHub Pages

This repo is set up to deploy automatically via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) every time you
push to `main`.

One-time setup after pushing this repo to GitHub as `juanca-portfolio`:

1. On GitHub: **Settings → Pages → Source → GitHub Actions**.
2. Push to `main`. The workflow builds the site and deploys it.
3. Your site will be live at `https://<your-username>.github.io/juanca-portfolio/`.

If you ever rename the repo, update `base` in
[`vite.config.js`](vite.config.js) and the redirect path in
[`public/404.html`](public/404.html) to match.

### Why `public/404.html` exists

GitHub Pages has no server-side routing, so a hard refresh or a shared link to
a deep route (e.g. `/hobbies/some-post`) would normally 404. `404.html` plus a
small script in `index.html` redirect these back through the app so React
Router can restore the intended page. This is the standard
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) technique.

## Notes

- The photos in `src/assets/images/` are currently full-resolution originals
  (several are 5–15+ MB each). They work, but compressing/resizing them
  (e.g. to ~1600px wide, ~85% JPEG quality) will make the site load
  noticeably faster — worth doing before you rely on this for a job search.
