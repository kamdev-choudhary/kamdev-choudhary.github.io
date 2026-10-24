/**
 * Public configuration. Everything here is inlined into the static build, so
 * nothing secret belongs in this file.
 */

/** Canonical origin, no trailing slash. Astro fills `SITE` from `site` in astro.config.mjs. */
export const siteUrl = (
  import.meta.env.SITE ?? "https://kamdev-choudhary.github.io"
).replace(/\/+$/, "");

/**
 * Web3Forms access key. Submissions are relayed to the inbox the key is bound
 * to, so the site needs no backend of its own.
 *
 * This key is public by design — Web3Forms embeds it in client-side markup and
 * it can only deliver to that one inbox. Rotate it at web3forms.com if it
 * starts attracting spam.
 *
 * Optional: with no key the contact form renders disabled and points visitors
 * at the email address instead, rather than offering a send that goes nowhere.
 */
export const contactAccessKey: string = "7b7f85d2-251e-4f5d-bbbe-3239bb3447c7";

/**
 * Google Search Console ownership token.
 *
 * Needed to verify the site so the Security Issues report is readable and a
 * Safe Browsing review can be requested. Public by design — it only proves
 * ownership and grants nothing.
 */
export const googleSiteVerification = "vbC2ch_06wZUSzFYEtBr2V2K26mZIK0VMzpKFBRGr9I";

/** Web3Forms submission endpoint. */
export const CONTACT_ACTION = "https://api.web3forms.com/submit";
