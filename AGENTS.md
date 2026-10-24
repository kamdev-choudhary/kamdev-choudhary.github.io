## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

---

## This project

A static personal portfolio. The build output is plain HTML, CSS and a small
amount of hand-written JavaScript; it is published to GitHub Pages, so there is
no server at runtime.

### Constraints that are deliberate

- **No UI framework.** There is no React, Vue or Svelte integration, and none
  should be added. Every component is `.astro`; interactive behaviour lives in
  `<script>` blocks. The home page ships roughly 12kB of gzipped JavaScript and
  that is the point — check the payload before adding a dependency.
- **No backend.** The contact form posts to a Google Apps Script web app, which
  files each enquiry in a Google Sheet and emails a copy. See
  `scripts/contact-apps-script.gs`. The request deliberately sends
  `Content-Type: text/plain` so it stays a CORS "simple request" — Apps Script
  cannot answer a preflight. Changing that header breaks the form.
- **One icon dependency.** `lucide-static` SVGs are inlined at build time
  through `src/components/Icon.astro`. Lucide ships no brand marks, so GitHub
  and LinkedIn are vendored in `src/components/icons/`. Do not add further icon
  packages.

### Layout

```
src/data/        content only — edit these to change what the site says
src/components/  .astro components; sections/ holds one file per page section
src/layouts/     document shell: head, metadata, theme script, reveal observer
src/pages/       index, resume, robots.txt
src/styles/      global.css — design tokens and the whole stylesheet
scripts/         the Apps Script source (not part of the site build)
```

`src/data/stats.ts` derives its figures from the other data files at build
time; never hand-edit the numbers it produces.

### Design

Dark-first, indigo accent. The visual idea is a dispatch board: route lines,
stop markers and aligned tabular data, drawn from the transport and scheduling
systems the work is about. Mono (`.figure`) is reserved for data — dates,
grades, metrics — and the sans face carries everything else.

Motion is deliberately limited to one orchestrated page-load sequence in the
hero plus scroll reveals; `prefers-reduced-motion` is honoured throughout.

### Checks

```
npm run check    # astro check — must stay at 0 errors
npm run build
```
