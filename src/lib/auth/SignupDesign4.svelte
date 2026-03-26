<script>
  import { createCSClient } from '$lib/cs-client';
import { setAuth } from '$lib/appStore';
  import { goto } from '$app/navigation';
  let name='', email='', password='', confirmPassword='', message='', loading=false;
  const csClient=createCSClient({ host: import.meta.env.VITE_CS_API_HOST || 'https://localhost' });
  async function submit(){if(password!==confirmPassword){message='Passwords mismatch';return;} loading=true;message=''; try{const res=await csClient.create({data:{name,email,password}}); if(res.success){setAuth({token:res.token,user:{name,email}});await goto('/');} else message=res.msg||'Signup failed';}catch(e){message=e.message||'Error';} finally{loading=false;}}
</script>
<div class="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 flex items-center justify-center">
  <div class="p-10 bg-white/5 backdrop-blur rounded-3xl shadow-2xl w-full max-w-md border border-white/10">
    <h1 class="text-center text-3xl font-bold text-white mb-4">Design 4 Signup</h1>
    <form class="space-y-4" on:submit|preventDefault={submit}>
      <input class="input w-full" type="text" placeholder="Full Name" bind:value={name} required />
      <input class="input w-full" type="email" placeholder="Email" bind:value={email} required />
      <input class="input w-full" type="password" placeholder="Password" bind:value={password} required />
      <input class="input w-full" type="password" placeholder="Confirm Password" bind:value={confirmPassword} required />
      <button class="btn btn-info w-full" disabled={loading}>{loading? 'Registering...' : 'Register'}</button>
    </form>
    <div class="text-center mt-3 text-red-400">{message}</div>
    <p class="text-center mt-4"><a class="link link-info" href="/auth/login?design=4">Already have an account?</a></p>
  </div>
</div>