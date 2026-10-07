import { site } from '@/data/site';

type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

function currentTheme(): ThemeMode {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function syncToggles(mode: ThemeMode): void {
  // Toggles with a visible label that changes ("Dark Mode"/"Light Mode") must not also expose pressed state.
  document.querySelectorAll<HTMLElement>('[data-theme-toggle][aria-pressed]').forEach((toggle) => {
    toggle.setAttribute('aria-pressed', String(mode === 'dark'));
  });
}

function applyTheme(mode: ThemeMode): void {
  document.documentElement.dataset.theme = mode;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', site.themeColor[mode]);
  syncToggles(mode);
}

syncToggles(currentTheme());

document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const next: ThemeMode = currentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  });
});
