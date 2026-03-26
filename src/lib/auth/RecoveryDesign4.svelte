<script>
  import { createCSClient } from '$lib/cs-client';
  let email = '';
  let loading = false;
  let message = '';
  const csClient = createCSClient({ host: import.meta.env.VITE_CS_API_HOST || 'https://localhost' });

  async function submit() {
    loading = true;
    message = '';
    try {
      const res = await csClient.alterPass({ email });
      message = res.success ? 'Recovery instructions sent.' : res.msg || 'Failed to send recovery instructions';
    } catch (err) {
      message = err.message || 'Error';
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 flex items-center justify-center">
  <div class="p-10 bg-white/5 backdrop-blur rounded-3xl shadow-2xl w-full max-w-md border border-white/10">
    <h1 class="text-center text-3xl font-bold text-white mb-4">Design 4 Recovery</h1>
    <form class="space-y-4" on:submit|preventDefault={submit}>
      <input class="input w-full" type="email" placeholder="you@example.com" bind:value={email} required />
      <button class="btn btn-info w-full" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Recovery Email'}</button>
    </form>
    <div class="text-center mt-3 text-info">{message}</div>
    <p class="text-center mt-4"><a class="link link-info" href="/auth/login?design=4">Back to login</a></p>
  </div>
</div>