/**
 * Public configuration. Everything here is inlined into the static build, so
 * nothing secret belongs in this file.
 */

/** Canonical origin, no trailing slash. Astro fills `SITE` from `site` in astro.config.mjs. */
export const siteUrl = (import.meta.env.SITE ?? "https://kamdev-bharatai.github.io")
  .replace(/\/+$/, "");

/**
 * Google Apps Script web-app URL that receives contact submissions, appends
 * them to a Google Sheet and emails a copy.
 *
 * It is a public endpoint, not a credential — it can only append rows and send
 * mail to the owner. When unset, the contact form falls back to a `mailto:`
 * link, so the site still works without any build-time configuration.
 */
export const contactEndpoint: string =
  import.meta.env.PUBLIC_CONTACT_ENDPOINT ?? "";
