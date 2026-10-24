# Portfolio

Personal site for **Kamdev Choudhary** — full-stack developer, Noida.

Static Astro build, published to GitHub Pages. No server, no UI-framework
runtime: the home page ships around 12kB of gzipped JavaScript, all of it
hand-written (command palette, theme toggle, scroll reveals, contact form).

## Running it

```bash
npm install
npm run dev        # http://localhost:4321
npm run check      # type-check; keep this at 0 errors
npm run build      # static output in dist/
npm run preview    # serve the build
```

Node 22 or newer.

## Contact form

GitHub Pages has no backend, so the form submits to
[Web3Forms](https://web3forms.com), which relays each enquiry to the inbox its
access key is bound to.

The key lives in [`src/lib/site.ts`](src/lib/site.ts) and is committed
deliberately: Web3Forms keys are public by design — they sit in client-side
markup and can only deliver to that one inbox. Rotate it at web3forms.com if it
starts attracting spam. To override it per environment, set
`PUBLIC_WEB3FORMS_KEY` (see `.env.example`).

Two details worth keeping:

- The `<form>` has a real `action`, so it still submits with JavaScript
  disabled. The script intercepts it only to submit via `fetch` and show
  inline status.
- A hidden `botcheck` field is Web3Forms' own honeypot; anything that fills it
  is discarded.

The key is **optional**. With none set, the form renders inside a disabled
`<fieldset>` with a direct email link in its place — the site never shows a
send button that quietly goes nowhere.

## Deploying

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

One-time setup:

1. **Settings → Pages → Source: GitHub Actions.**
2. The site is configured as a **user site**, so the repository must be named
   `kamdev-choudhary.github.io`. If you keep a different repository name, set
   `base` and `site` in `astro.config.mjs` to match the project-page URL.

## Editing content

Everything the site says lives in [`src/data/`](src/data/) — one module per
area, re-exported through `profile.ts`:

| File | Holds |
| --- | --- |
| `identity.ts` | name, title, tagline, about copy, contact details |
| `experience.ts` | employment history, newest first |
| `projects.ts` | selected work and screenshots |
| `skills.ts` | capability groups |
| `education.ts` | degrees and certificates |
| `community.ts` | volunteering and hobbies |
| `navigation.ts` | section order and nav labels |
| `stats.ts` | figures **derived** from the above — never hand-edited |

Project screenshots are imported from `src/assets/projects/` so Astro can
generate a responsive `srcset`.

## Stack

Astro · Tailwind CSS v4 · Starwind UI (headless dialog and drawer) ·
lucide-static · jsPDF for the downloadable resume.
