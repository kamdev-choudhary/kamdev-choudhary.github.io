interface ImportMetaEnv {
  /** Google Apps Script web-app URL for the contact form. Optional. */
  readonly PUBLIC_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
