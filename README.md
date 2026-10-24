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

GitHub Pages has no backend, so the form posts to a **Google Apps Script web
app** which appends each enquiry to a Google Sheet and emails a copy. Setup
instructions are in the header of [`scripts/contact-apps-script.gs`](scripts/contact-apps-script.gs).

Once deployed, expose the script's `/exec` URL to the build:

| Where | How |
| --- | --- |
| Local | `PUBLIC_CONTACT_ENDPOINT` in `.env` (see `.env.example`) |
| CI | Repository **variable** `PUBLIC_CONTACT_ENDPOINT` |

It is a repository *variable*, not a secret — the URL is inlined into the
public bundle regardless, and the endpoint can only append rows and email the
owner.

If the variable is unset the form still validates, then falls back to opening
the visitor's mail client. The site is never broken by a missing endpoint.

## Deploying

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

One-time setup:

1. **Settings → Pages → Source: GitHub Actions.**
2. The site is configured as a **user site**, so the repository must be named
   `kamdev-bharatai.github.io`. If you keep a different repository name, set
   `base` and `site` in `astro.config.mjs` to match the project-page URL.
3. Add the `PUBLIC_CONTACT_ENDPOINT` variable described above.

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
