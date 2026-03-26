<script>
  import { createCSClient } from '$lib/cs-client';
import { setAuth } from '$lib/appStore';

  let email = '';
  let password = '';
  let loading = false;
  let message = '';
  let success = false;

  const csClient = createCSClient({ host: import.meta.env.VITE_CS_API_HOST || 'https://localhost' });

  async function submit() {
    message = '';
    success = false;
    loading = true;
    try {
      const res = await csClient.login(email, password);
      if (res.success) {
        setAuth({ token: res.token, user: { email } });
        message = 'Login successful';
        success = true;
        await goto('/');
      } else {
        message = res.msg || 'Login failed';
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
      <h1 class="text-2xl font-bold">Design 1 - Login</h1>
    </div>
    <main class="bg-base-100 grid lg:aspect-2/1 lg:grid-cols-2">
      <figure class="bg-base-300 pointer-events-none object-cover max-lg:hidden">
        <img src="https://picsum.photos/id/283/1200/1200" alt="Login" class="h-full" />
      </figure>
      <form class="flex flex-col justify-center gap-4 px-10 py-10 lg:px-16" on:submit|preventDefault={submit}>
        <div class="form-control">
          <label class="label" for="login-email"><span class="label-text">Email</span></label>
          <input id="login-email" type="email" class="input input-bordered" placeholder="you@example.com" bind:value={email} required />
        </div>
        <div class="form-control">
          <label class="label" for="login-password"><span class="label-text">Password</span></label>
          <input id="login-password" type="password" class="input input-bordered" placeholder="password" bind:value={password} required minlength="6" />
        </div>
        <div class="flex items-center justify-between gap-3">
          <label class="flex cursor-pointer gap-3 text-xs"><input name="remember-me" type="checkbox" class="toggle toggle-xs" />Remember me</label>
          <a class="link-hover link label-text-alt" href="/auth/recovery?design=1">Forgot password?</a>
        </div>
        <button class="btn btn-neutral" type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        <a class="link link-info text-center" href="/auth/register?design=1">Create new account</a>

        {#if message}
          <div class="mt-3 text-sm text-center {success ? 'text-success' : 'text-error'}">{message}</div>
        {/if}
      </form>
    </main>
  </div>
</div>