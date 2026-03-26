<script>
  import { createCSClient } from '$lib/cs-client';
  import { setAuth } from '$lib/authStore';
  import { goto } from '$app/navigation';
  let name='', email='', password='', confirmPassword='', message='', loading=false;
  const csClient = createCSClient({ host: import.meta.env.VITE_CS_API_HOST || 'https://localhost' });
  async function submit(){if(password!==confirmPassword){message='Passwords mismatch';return;} loading=true;message=''; try{const res=await csClient.create({data:{name,email,password}}); if(res.success){setAuth({token:res.token,user:{name,email}}); await goto('/');} else message=res.msg||'Signup failed';}catch(e){message=e.message||'Error';}finally{loading=false;}}
</script>

<div class="min-h-screen flex items-center justify-center" style="background: linear-gradient(135deg, #0f172a 0%, #020617 100%);">
  <div class="w-full max-w-lg p-8 rounded-3xl bg-base-200/95 border border-white/10 shadow-2xl">
    <h1 class="text-3xl font-extrabold text-center mb-4">Design 3 Signup</h1>
    <form class="space-y-4" on:submit|preventDefault={submit}>
      <input class="input w-full" type="text" placeholder="Full Name" bind:value={name} required />
      <input class="input w-full" type="email" placeholder="Email" bind:value={email} required />
      <input class="input w-full" type="password" placeholder="Password" bind:value={password} required />
      <input class="input w-full" type="password" placeholder="Confirm Password" bind:value={confirmPassword} required />
      <button class="btn btn-secondary w-full" disabled={loading}>{loading ? 'Creating...' : 'Create Account'}</button>
    </form>
    <div class="mt-4 text-center text-sm text-red-500">{message}</div>
    <div class="mt-4 text-center"><a class="link link-info" href="/auth/login?design=3">Already have an account?</a></div>
  </div>
</div>