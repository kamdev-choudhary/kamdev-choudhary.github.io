/**
 * Theme state, kept deliberately small.
 *
 * The class on <html> is the single source of truth — the inline script in
 * Layout.astro applies it before first paint, so nothing here needs to run
 * for the page to render in the right theme.
 */

export type Theme = "light" | "dark";

/** Must match the key read by the inline script in Layout.astro. */
export const THEME_STORAGE_KEY = "theme";

export function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function setTheme(theme: Theme): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* private mode or blocked storage — the choice just will not persist */
  }
}

export function toggleTheme(): Theme {
  const next: Theme = getTheme() === "dark" ? "light" : "dark";
  setTheme(next);
  return next;
}

/** Keeps other open tabs in step when the choice changes. */
export function syncAcrossTabs(): void {
  window.addEventListener("storage", (event) => {
    if (event.key !== THEME_STORAGE_KEY) return;
    if (event.newValue === "light" || event.newValue === "dark") {
      document.documentElement.classList.toggle("dark", event.newValue === "dark");
    }
  });
}
