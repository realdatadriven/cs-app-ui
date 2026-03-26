<script>
  import { page } from '$app/stores';
  const designs = [1,2,3,4];
  const modes = ['login','register','recovery'];
  $: currentDesign = parseInt($page.url.searchParams.get('design') || '1');
</script>

<div class="min-h-screen bg-base-200 p-8">
  <div class="mx-auto max-w-3xl rounded-2xl bg-base-100 p-8 shadow-lg">
    <h1 class="text-3xl font-bold">Auth Demo (PWA + Central Set API)</h1>
    <p class="mt-2">Choose a form type and design for login/register/recovery.</p>

    <div class="mt-6">
      <h2 class="text-xl font-semibold">Design</h2>
      <div class="mt-2 flex flex-wrap gap-2">
        {#each designs as design}
          <a class="btn btn-sm {currentDesign===design ? 'btn-primary' : 'btn-outline'}" href={`/auth/login?design=${design}`}>Design {design}</a>
        {/each}
      </div>
    </div>

    <div class="mt-6">
      <h2 class="text-xl font-semibold">Mode</h2>
      <div class="mt-2 flex flex-wrap gap-2">
        {#each modes as mode}
          <a class="btn btn-sm btn-secondary" href={`/auth/${mode}?design=${currentDesign}`}>{mode}</a>
        {/each}
      </div>
    </div>

    <div class="mt-6 rounded-xl border border-base-300 p-4">
      <p>Open <strong>/auth/login?design=N</strong>, <strong>/auth/register?design=N</strong> or <strong>/auth/recovery?design=N</strong>.</p>
    </div>
  </div>
</div>