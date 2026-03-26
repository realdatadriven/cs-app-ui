import { writable } from 'svelte/store';

export const auth = writable({ loggedIn: false, token: null, user: null });

export function setAuth({ token, user }) {
  auth.set({ loggedIn: !!token, token, user });
}

export function clearAuth() {
  auth.set({ loggedIn: false, token: null, user: null });
}
