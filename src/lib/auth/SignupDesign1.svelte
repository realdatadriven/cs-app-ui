<script>
  import { createCSClient } from '$lib/cs-client';
import { setAuth } from '$lib/appStore';

  let name = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let loading = false;
  let message = '';

  const csClient = createCSClient({ host: import.meta.env.VITE_CS_API_HOST || 'https://localhost' });

  async function submit() {
    message = '';
    if (password !== confirmPassword) {
      message = 'Passwords do not match';
      return;
    }
    loading = true;
    try {
      const res = await csClient.create({ data: { name, email, password } });
      if (res.success) {
        setAuth({ token: res.token, user: { name, email } });
        message = 'Account created';
        await goto('/');
      } else {
        message = res.msg || 'Signup failed';
      }
    } catch (err) {
      message = err.message || 'Unexpected error';
    } finally {
      loading = false;
    }
  }
</script>

<div class="p-4 min-h-screen bg-base-200 flex items-center justify-center">
  <div class="m-4 min-h-[50vh] w-full max-w-sm lg:max-w-4xl">
    <div class="flex items-center justify-center gap-2 p-8">
      <h1 class="text-2xl font-bold">Design 1 - Signup</h1>
    </div>
    <main class="bg-base-100 grid lg:aspect-2/1 lg:grid-cols-2">
      <figure class="bg-base-300 pointer-events-none object-cover max-lg:hidden">
        <img src="https://picsum.photos/id/1005/1200/1200" alt="Signup" class="h-full" />
      </figure>
      <form class="flex flex-col justify-center gap-4 px-10 py-10 lg:px-16" on:submit|preventDefault={submit}>
        <div class="form-control"><label class="label" for="signup-name"><span class="label-text">Full Name</span></label><input id="signup-name" type="text" placeholder="João Silva" class="input input-bordered" bind:value={name} required /></div>
        <div class="form-control"><label class="label" for="signup-email"><span class="label-text">Email</span></label><input id="signup-email" type="email" placeholder="you@example.com" class="input input-bordered" bind:value={email} required /></div>
        <div class="form-control"><label class="label" for="signup-password"><span class="label-text">Password</span></label><input id="signup-password" type="password" placeholder="••••••••" class="input input-bordered" bind:value={password} required minlength="6" /></div>
        <div class="form-control"><label class="label" for="signup-confirm"><span class="label-text">Confirm Password</span></label><input id="signup-confirm" type="password" placeholder="••••••••" class="input input-bordered" bind:value={confirmPassword} required minlength="6" /></div>
        <button class="btn btn-neutral" type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create Account'}</button>
        <a class="link link-info text-center" href="/auth/login?design=1">Already have an account? Sign in</a>
        {#if message}<div class="mt-3 text-sm text-center text-error">{message}</div>{/if}
      </form>
    </main>
  </div>
</div>