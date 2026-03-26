import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// Theme detection + persistence
const SYSTEM_DARK_QUERY = '(prefers-color-scheme: dark)';

function getInitialTheme() {
  if (!browser) return 'light';

  const saved = localStorage.getItem('cs-ui-theme');
  if (saved === 'dark' || saved === 'light') {
    return saved;
  }

  const prefersDark = window.matchMedia(SYSTEM_DARK_QUERY).matches;
  return prefersDark ? 'dark' : 'light';
}

export const theme = writable('light');

export function initializeTheme() {
  if (!browser) return;

  const initial = getInitialTheme();
  theme.set(initial);
  document.documentElement.setAttribute('data-theme', initial);

  const media = window.matchMedia(SYSTEM_DARK_QUERY);
  const handleSystemTheme = (event) => {
    const current = localStorage.getItem('cs-ui-theme');
    if (current !== 'light' && current !== 'dark') {
      const next = event.matches ? 'dark' : 'light';
      theme.set(next);
      document.documentElement.setAttribute('data-theme', next);
    }
  };

  if (media.addEventListener) {
    media.addEventListener('change', handleSystemTheme);
  } else {
    media.addListener(handleSystemTheme);
  }

  return () => {
    if (media.removeEventListener) {
      media.removeEventListener('change', handleSystemTheme);
    } else {
      media.removeListener(handleSystemTheme);
    }
  };
}

export function setTheme(nextTheme) {
  if (nextTheme !== 'dark' && nextTheme !== 'light') {
    return;
  }

  theme.set(nextTheme);
  if (browser) {
    localStorage.setItem('cs-ui-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  }
}

export function toggleTheme() {
  theme.update((value) => {
    const next = value === 'dark' ? 'light' : 'dark';
    if (browser) {
      localStorage.setItem('cs-ui-theme', next);
      document.documentElement.setAttribute('data-theme', next);
    }
    return next;
  });
}

// Auth state inside global store
export const auth = writable({ loggedIn: false, token: null, user: null });

export function setAuth({ token, user }) {
  auth.set({ loggedIn: !!token, token, user });
}

export function clearAuth() {
  auth.set({ loggedIn: false, token: null, user: null });
}
