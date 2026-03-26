<script>
  import { createCSClient } from '$lib/cs-client';
  import { setAuth } from '$lib/authStore';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let loading = false;
  let message = '';

  const csClient = createCSClient({ host: import.meta.env.VITE_CS_API_HOST || 'https://localhost' });

  async function submit() {
    loading = true;
    message = '';
    try {
      const res = await csClient.login(email, password);
      if (res.success) {
        setAuth({ token: res.token, user: { email } });
        await goto('/');
      } else {
        message = res.msg || 'Login failed';
      }
    } catch (error) {
      message = error.message || 'Error';
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center" style="background: linear-gradient(135deg, #1f2937, #111827);">
  <div class="p-8 rounded-2xl w-full max-w-md bg-base-100 border border-gray-700 shadow-xl">
    <h2 class="text-center text-3xl font-bold mb-2 text-white">Design 2 - Login</h2>
    <p class="text-center text-sm text-gray-300 mb-6">Sign in to continue with Central Set</p>
    <form class="space-y-4" on:submit|preventDefault={submit}>
      <input type="email" placeholder="Email" class="input w-full" bind:value={email} required />
      <input type="password" placeholder="Password" class="input w-full" bind:value={password} required minlength="6" />
      <button type="submit" class="btn btn-primary w-full" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
    </form>
    <div class="text-center mt-4 text-red-400">{message}</div>
    <div class="text-center mt-4">
      <a class="link link-info" href="/auth/recovery?design=2">Forgot password?</a> ·
      <a class="link link-info" href="/auth/register?design=2">Register</a>
    </div>
  </div>
</div>