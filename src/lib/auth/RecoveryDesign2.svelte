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
      message = res.success ? 'Recovery email sent.' : res.msg || 'Failed to send recovery email';
    } catch (err) {
      message = err.message || 'Error';
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center" style="background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80'); background-size: cover;"> 
  <div class="p-8 rounded-2xl w-full max-w-md bg-base-100/90 border shadow-xl backdrop-blur">
    <h2 class="text-center text-3xl font-bold mb-2">Design 2 - Recovery</h2>
    <p class="text-center text-sm text-gray-500 mb-6">Enter your email to reset your password</p>
    <form class="space-y-4" on:submit|preventDefault={submit}>
      <input id="recovery-email" type="email" placeholder="you@example.com" class="input w-full" bind:value={email} required />
      <button type="submit" class="btn btn-primary w-full" disabled={loading}>{loading ? 'Sending...' : 'Send Recovery Email'}</button>
    </form>
    <div class="text-center mt-4 text-info">{message}</div>
    <div class="text-center mt-4">
      <a class="link link-info" href="/auth/login?design=2">Back to login</a>
    </div>
  </div>
</div>