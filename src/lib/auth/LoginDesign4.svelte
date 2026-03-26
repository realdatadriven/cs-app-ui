<script>
  import { createCSClient } from '$lib/cs-client';
import { setAuth } from '$lib/appStore';
  import { goto } from '$app/navigation';
  let email='', password='', loading=false, message='';
  const csClient=createCSClient({ host: import.meta.env.VITE_CS_API_HOST || 'https://localhost' });
  async function submit(){loading=true;message=''; try{const res=await csClient.login(email,password); if(res.success){setAuth({token:res.token,user:{email}});await goto('/');} else message=res.msg||'Login failed';}catch(e){message=e.message||'Error';}finally{loading=false;}}
</script>
<div class="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 flex items-center justify-center">
  <div class="p-10 bg-white/5 backdrop-blur rounded-3xl shadow-2xl w-full max-w-md border border-white/10">
    <h1 class="text-center text-3xl font-bold text-white mb-4">Design 4 Login</h1>
    <form class="space-y-4" on:submit|preventDefault={submit}>
      <input class="input w-full" type="email" placeholder="Email" bind:value={email} required />
      <input class="input w-full" type="password" placeholder="Password" bind:value={password} required minlength="6" />
      <button class="btn btn-info w-full" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
    </form>
    <div class="text-center mt-3 text-red-400">{message}</div>
    <p class="text-center mt-4"><a class="link link-info" href="/auth/recovery?design=4">Forgot Password?</a> · <a class="link link-info" href="/auth/register?design=4">Register</a></p>
  </div>
</div>