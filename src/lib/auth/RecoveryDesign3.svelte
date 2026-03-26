<script>
  import { createCSClient } from '$lib/cs-client';
  let email='', loading=false, message=''; const csClient=createCSClient({host:import.meta.env.VITE_CS_API_HOST||'https://localhost'});
  async function submit(){loading=true; message=''; try{const res=await csClient.alterPass({email}); message=res.success?'Recovery email sent.':res.msg||'Failed';}catch(e){message=e.message||'Error';}finally{loading=false;}}
</script>
<div class="min-h-screen flex items-center justify-center" style="background-color:#111827;">
  <div class="w-full max-w-md p-8 bg-base-100/95 border border-white/10 rounded-3xl shadow-xl">
    <h1 class="text-2xl font-bold text-center mb-4">Design 3 Recovery</h1>
    <form class="space-y-4" on:submit|preventDefault={submit}>
      <input class="input w-full" type="email" placeholder="Email" bind:value={email} required />
      <button class="btn btn-secondary w-full" disabled={loading}>{loading?'Sending...':'Send Recovery'}</button>
    </form>
    <p class="text-center text-sm mt-4 text-info">{message}</p>
    <p class="text-center mt-3"><a href="/auth/login?design=3" class="link link-info">Back to Login</a></p>
  </div>
</div>