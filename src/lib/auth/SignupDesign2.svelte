<script>
  import { createCSClient } from '$lib/cs-client';
  import { setAuth } from '$lib/authStore';
  import { goto } from '$app/navigation';

  let fullname = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let loading = false;
  let message = '';
  const csClient = createCSClient({ host: import.meta.env.VITE_CS_API_HOST || 'https://localhost' });

  async function submit() {
    if (password !== confirmPassword) {
      message = 'Passwords must match';
      return;
    }
    loading = true;
    try {
      const res = await csClient.create({ data: { name: fullname, email, password } });
      if (res.success) {
        setAuth({ token: res.token, user: { email, fullname } });
        await goto('/');
      } else {
        message = res.msg || 'Signup failed';
      }
    } catch (err) {
      message = err.message || 'Error';
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center" style="background: linear-gradient(135deg, #111827, #1f2937);">
  <div class="p-8 rounded-2xl w-full max-w-md bg-base-100 border border-gray-700 shadow-xl">
    <h2 class="text-center text-3xl font-bold mb-2">Design 2 - Signup</h2>
    <p class="text-center text-sm text-gray-500 mb-6">Create your Central Set account</p>
    <form class="space-y-4" on:submit|preventDefault={submit}>
      <input type="text" placeholder="Full name" class="input w-full" bind:value={fullname} required />
      <input type="email" placeholder="Email" class="input w-full" bind:value={email} required />
      <input type="password" placeholder="Password" class="input w-full" bind:value={password} required />
      <input type="password" placeholder="Confirm password" class="input w-full" bind:value={confirmPassword} required />
      <button type="submit" class="btn btn-primary w-full" disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</button>
    </form>
    <div class="text-center mt-4 text-red-400">{message}</div>
    <div class="text-center mt-4">
      <a class="link link-info" href="/auth/login?design=2">Already have account?</a>
    </div>
  </div>
</div>