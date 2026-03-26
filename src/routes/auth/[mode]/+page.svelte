<script>
  import { page } from '$app/stores';

  import LoginDesign1 from '$lib/auth/LoginDesign1.svelte';
  import SignupDesign1 from '$lib/auth/SignupDesign1.svelte';
  import RecoveryDesign1 from '$lib/auth/RecoveryDesign1.svelte';
  import LoginDesign2 from '$lib/auth/LoginDesign2.svelte';
  import SignupDesign2 from '$lib/auth/SignupDesign2.svelte';
  import RecoveryDesign2 from '$lib/auth/RecoveryDesign2.svelte';
  import LoginDesign3 from '$lib/auth/LoginDesign3.svelte';
  import SignupDesign3 from '$lib/auth/SignupDesign3.svelte';
  import RecoveryDesign3 from '$lib/auth/RecoveryDesign3.svelte';
  import LoginDesign4 from '$lib/auth/LoginDesign4.svelte';
  import SignupDesign4 from '$lib/auth/SignupDesign4.svelte';
  import RecoveryDesign4 from '$lib/auth/RecoveryDesign4.svelte';

  const components = {
    login: {
      1: LoginDesign1,
      2: LoginDesign2,
      3: LoginDesign3,
      4: LoginDesign4,
    },
    register: {
      1: SignupDesign1,
      2: SignupDesign2,
      3: SignupDesign3,
      4: SignupDesign4,
    },
    recovery: {
      1: RecoveryDesign1,
      2: RecoveryDesign2,
      3: RecoveryDesign3,
      4: RecoveryDesign4,
    },
  };

  let design = 1;
  let mode = 'login';
  let Component = LoginDesign1;

  $effect(() => {
    design = Number(page.url.searchParams.get('design') || 1);
    const pathMode = page.url.pathname.split('/').pop();
    mode = pathMode === 'register' ? 'register' : pathMode === 'recovery' ? 'recovery' : 'login';
    Component = components[mode]?.[design] || components[mode]?.[1] || LoginDesign1;
  });
</script>

<svelte:component this={Component} />