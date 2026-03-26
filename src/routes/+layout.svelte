<script>
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import { onMount } from 'svelte';
  import { theme, initializeTheme, toggleTheme } from '$lib/appStore';

  let { children } = $props();

  onMount(() => {
    initializeTheme();
    const unsubscribe = theme.subscribe((value) => {
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', value);
      }
    });
    return unsubscribe;
  });
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="theme-control fixed top-4 right-4 z-50">
  <button class="btn btn-sm btn-outline" onclick={toggleTheme} aria-label="Toggle theme">
    Toggle Theme
  </button>
</div>
{@render children()}
