<script>
  import { createCSClient } from '$lib/cs-client';
  let email = '';
  let loading = false;
  let message = '';

  const csClient = createCSClient({ host: import.meta.env.VITE_CS_API_HOST || 'https://localhost' });

  async function submit() {
    message = '';
    loading = true;
    try {
      const res = await csClient.alterPass({ email });
      message = res.success ? 'Recovery link has been sent.' : res.msg || 'Recovery failed';
    } catch (err) {
      message = err.message || 'Unexpected error';
    } finally {
      loading = false;
    }
  }
</script>

<div class="p-4 min-h-screen bg-base-200 flex items-center justify-center">
  <div class="m-4 min-h-[40vh] w-full max-w-md">
    <h1 class="text-2xl font-bold text-center mb-6">Design 1 - Recovery</h1>
    <form class="space-y-4" on:submit|preventDefault={submit}>
      <div class="form-control">
        <label class="label" for="recovery-email"><span class="label-text">Email</span></label>
        <input id="recovery-email" type="email" class="input input-bordered" placeholder="you@example.com" bind:value={email} required />
      </div>
      <button class="btn btn-neutral w-full" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send recovery email'}</button>
      <a class="link link-info text-center block" href="/auth/login?design=1">Back to login</a>
      {#if message}<div class="mt-3 text-sm text-center text-info">{message}</div>{/if}
    </form>
  </div>
</div>