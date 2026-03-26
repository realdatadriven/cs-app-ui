<script>
  import { onMount } from 'svelte';
  let scrolled = false;

  function handleScroll() {
    scrolled = window.scrollY > 100;
  }

  onMount(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const openDialog = (id) => document.getElementById(id)?.showModal();
  const closeDialog = (id) => document.getElementById(id)?.close();
</script>

<svelte:head>
  <title>Nebula Analytics - Unlock Tomorrow's Insights</title>
</svelte:head>

<div class="bg-black text-white antialiased min-h-screen">
  <div id="navbar" class={`navbar glass-strong fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl bg-base-300/80' : ''}`}>
    <div class="container mx-auto px-6">
      <div class="flex-1">
        <a href="/" class="text-2xl md:text-3xl font-extrabold text-nebula-cyan text-glow-cyan">NEBULA ANALYTICS</a>
      </div>
      <div class="flex-none hidden lg:flex items-center gap-3">
        <ul class="menu menu-horizontal px-1 text-lg">
          <li><a href="/"class="hover:text-nebula-cyan">Home</a></li>
          <li><a href="#features" class="hover:text-nebula-cyan">Features</a></li>
          <li><a href="#plans" class="hover:text-nebula-cyan">Plans</a></li>
          <li><a href="#faq" class="hover:text-nebula-cyan">FAQ</a></li>
        </ul>
        <div class="divider divider-horizontal mx-2"></div>
        <button class="btn btn-outline btn-sm border-nebula-teal text-nebula-teal hover:bg-nebula-teal/20" onclick={() => openDialog('login-modal')}>
          Login
        </button>
        <button class="btn btn-nebula btn-sm" onclick={() => openDialog('register-modal')}>
          Register
        </button>
      </div>
      <div class="flex-none lg:hidden">
        <button class="btn btn-square btn-ghost" aria-label="Open mobile menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </div>
  </div>

  <div class="mt-20"></div>

  <dialog id="login-modal" class="modal">
    <div class="modal-box">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onclick={() => closeDialog('login-modal')}>✕</button>
      <h3 class="text-3xl font-bold text-nebula-cyan text-center mb-8">Welcome Back</h3>
      <form class="space-y-6" onsubmit={(event) => { event.preventDefault(); closeDialog('login-modal'); }}>
        <div>
          <label for="login-email" class="label"><span class="label-text text-gray-300">Email</span></label>
          <input id="login-email" type="email" placeholder="you@nebula.com" class="input-field" required />
        </div>
        <div>
          <label for="login-password" class="label"><span class="label-text text-gray-300">Password</span></label>
          <input id="login-password" type="password" placeholder="••••••••" class="input-field" required />
        </div>
        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="checkbox checkbox-xs checkbox-info" />
            <span class="text-gray-400">Remember me</span>
          </label>
          <a href="/forgot-password" class="text-nebula-cyan hover:underline">Forgot password?</a>
        </div>
        <button type="submit" class="btn btn-nebula w-full text-lg font-bold">Sign In</button>
      </form>
      <div class="text-center mt-6 text-gray-400">
        Don't have an account?
        <button class="text-nebula-cyan hover:underline font-medium" onclick={() => { closeDialog('login-modal'); openDialog('register-modal'); }}>
          Register
        </button>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop"><button>close</button></form>
  </dialog>

  <dialog id="register-modal" class="modal">
    <div class="modal-box">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onclick={() => closeDialog('register-modal')}>✕</button>
      <h3 class="text-3xl font-bold text-nebula-cyan text-center mb-8">Create Account</h3>
      <form class="space-y-6" onsubmit={(event) => { event.preventDefault(); closeDialog('register-modal'); }}>
        <div>
          <label for="register-name" class="label"><span class="label-text text-gray-300">Full Name</span></label>
          <input id="register-name" type="text" placeholder="João Silva" class="input-field" />
        </div>
        <div>
          <label for="register-email" class="label"><span class="label-text text-gray-300">Email</span></label>
          <input id="register-email" type="email" placeholder="you@nebula.com" class="input-field" required />
        </div>
        <div>
          <label for="register-password" class="label"><span class="label-text text-gray-300">Password</span></label>
          <input id="register-password" type="password" placeholder="••••••••" class="input-field" required />
        </div>
        <div>
          <label for="register-confirm" class="label"><span class="label-text text-gray-300">Confirm Password</span></label>
          <input id="register-confirm" type="password" placeholder="••••••••" class="input-field" required />
        </div>
        <button type="submit" class="btn btn-nebula w-full text-lg font-bold">Create Account</button>
      </form>
      <div class="text-center mt-6 text-gray-400">
        Already have an account?
        <button class="text-nebula-cyan hover:underline font-medium" onclick={() => { closeDialog('register-modal'); openDialog('login-modal'); }}>
          Sign in
        </button>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop"><button>close</button></form>
  </dialog>

  <div class="hero min-h-[80vh] relative pt-20" style="background-image: url('https://images.pexels.com/photos/395132/pexels-photo-395132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'); background-size: cover; background-position: center;">
    <div class="hero-overlay bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>
    <div class="hero-content text-center z-10 px-6 py-32">
      <div class="max-w-5xl">
        <h1 class="mb-8 text-5xl md:text-7xl lg:text-8xl font-extrabold text-nebula-cyan text-glow-cyan leading-tight">Unlock Tomorrow's<br/>Insights Today</h1>
        <p class="mb-12 text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto">AI-powered analytics platform delivering real-time insights, secure data integration, and automated intelligence.</p>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <button class="btn btn-nebula btn-lg px-12">Get Started</button>
          <button class="btn btn-outline btn-lg border-nebula-cyan text-nebula-cyan hover:bg-nebula-cyan/20">Watch Demo</button>
        </div>
      </div>
    </div>
  </div>

  <section class="py-12 bg-black">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center text-nebula-cyan text-glow-cyan mb-10">See Nebula Analytics in Action</h2>
      <div class="carousel w-full rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/30">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="w-full object-cover h-[500px]" alt="Dashboard overview" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide4" class="carousel-arrow">❮</a>
            <a href="#slide2" class="carousel-arrow">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="w-full object-cover h-[500px]" alt="Real-time analytics" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide1" class="carousel-arrow">❮</a>
            <a href="#slide3" class="carousel-arrow">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="w-full object-cover h-[500px]" alt="Data integration" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide2" class="carousel-arrow">❮</a>
            <a href="#slide4" class="carousel-arrow">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="w-full object-cover h-[500px]" alt="Predictive insights" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide3" class="carousel-arrow">❮</a>
            <a href="#slide1" class="carousel-arrow">❯</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-gradient-to-b from-black to-nebula-indigo/30">
    <div class="container mx-auto px-6">
      <h2 class="text-5xl md:text-6xl font-bold text-center text-nebula-cyan text-glow-cyan mb-16">Powerful Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="glass-strong p-10 rounded-3xl border border-nebula-cyan/20 hover:border-nebula-cyan/50 transition-all group text-center">
          <div class="text-nebula-cyan text-6xl mb-6 group-hover:scale-110 transition-transform">⚙️</div>
          <h3 class="text-3xl font-bold mb-6 group-hover:text-nebula-cyan">AI-Powered Automation</h3>
          <p class="text-lg text-gray-300">Intelligent workflows that learn and adapt automatically.</p>
        </div>
        <div class="glass-strong p-10 rounded-3xl border border-nebula-cyan/20 hover:border-nebula-cyan/50 transition-all group text-center">
          <div class="text-nebula-cyan text-6xl mb-6 group-hover:scale-110 transition-transform">📊</div>
          <h3 class="text-3xl font-bold mb-6 group-hover:text-nebula-cyan">Real-Time Reporting</h3>
          <p class="text-lg text-gray-300">Live dashboards with sub-second updates.</p>
        </div>
        <div class="glass-strong p-10 rounded-3xl border border-nebula-cyan/20 hover:border-nebula-cyan/50 transition-all group text-center">
          <div class="text-nebula-cyan text-6xl mb-6 group-hover:scale-110 transition-transform">🛡️</div>
          <h3 class="text-3xl font-bold mb-6 group-hover:text-nebula-cyan">Secure Data Integration</h3>
          <p class="text-lg text-gray-300">Zero-trust security + 100+ connectors.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-gradient-to-b from-nebula-indigo/20 to-black">
    <div class="container mx-auto px-6">
      <h2 class="text-5xl md:text-6xl font-bold text-center text-nebula-cyan text-glow-cyan mb-16">Choose Your Plan</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto items-stretch">
        <div class="glass-strong rounded-3xl p-8 flex flex-col border border-nebula-cyan/20 hover:border-nebula-cyan/50 transition-all">
          <h3 class="text-4xl font-bold text-white mb-4">Basic</h3>
          <div class="text-5xl font-extrabold text-nebula-teal mb-8">$59<span class="text-2xl font-normal">/mo</span></div>
          <ul class="space-y-4 text-lg">
            <li class="flex items-center"><span class="mr-3 text-success">✓</span>Core AI analytics</li>
            <li class="flex items-center"><span class="mr-3 text-success">✓</span>Daily reporting</li>
            <li class="flex items-center"><span class="mr-3 text-success">✓</span>5 data sources</li>
            <li class="flex items-center"><span class="mr-3 text-success">✓</span>Real-time processing</li>
          </ul>
          <button class="btn btn-outline border-nebula-teal text-nebula-teal hover:bg-nebula-teal/20 btn-lg mt-8 w-full">Get Started</button>
        </div>
        <div class="glass-strong rounded-3xl p-10 flex flex-col border-2 border-nebula-cyan shadow-2xl shadow-cyan-500/30 scale-105 md:scale-110 relative z-10">
          <div class="badge badge-lg bg-base-300/90 border border-nebula-cyan/60 text-nebula-cyan font-semibold absolute -top-3 right-6 px-5 py-3 shadow-md">Most Popular</div>
          <h3 class="text-5xl font-extrabold text-white mb-5">Pro</h3>
          <div class="text-6xl font-extrabold text-nebula-cyan mb-8">$89<span class="text-3xl font-normal">/mo</span></div>
          <ul class="space-y-4 text-xl">
            <li class="flex items-center"><span class="mr-4 text-success">✓</span>Everything in Basic</li>
            <li class="flex items-center"><span class="mr-4 text-success">✓</span>Real-time dashboards</li>
            <li class="flex items-center"><span class="mr-4 text-success">✓</span>Unlimited data sources</li>
            <li class="flex items-center"><span class="mr-4 text-success">✓</span>Predictive analytics</li>
          </ul>
          <button class="btn btn-nebula btn-lg mt-10 w-full text-xl font-bold">Choose Pro</button>
        </div>
        <div class="glass-strong rounded-3xl p-8 flex flex-col border border-nebula-cyan/20 hover:border-nebula-cyan/50 transition-all">
          <h3 class="text-4xl font-bold text-white mb-4">Enterprise</h3>
          <div class="text-5xl font-extrabold text-nebula-teal mb-8">Custom</div>
          <ul class="space-y-4 text-lg">
            <li class="flex items-center"><span class="mr-3 text-success">✓</span>Everything in Pro</li>
            <li class="flex items-center"><span class="mr-3 text-success">✓</span>Dedicated infrastructure</li>
            <li class="flex items-center"><span class="mr-3 text-success">✓</span>Custom integrations</li>
            <li class="flex items-center"><span class="mr-3 text-success">✓</span>24/7 support & SLA</li>
          </ul>
          <button class="btn btn-outline border-nebula-cyan text-nebula-cyan hover:bg-nebula-cyan/20 btn-lg mt-8 w-full">Contact Sales</button>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-black">
    <div class="container mx-auto px-6 max-w-4xl">
      <h2 class="text-5xl md:text-6xl font-bold text-center text-nebula-cyan text-glow-cyan mb-16">Frequently Asked Questions</h2>
      <div class="join join-vertical w-full gap-4">
        <div class="collapse collapse-arrow join-item border border-nebula-cyan/30 glass-strong rounded-2xl">
          <input type="radio" name="faq" checked />
          <div class="collapse-title text-xl font-medium">How secure is my data?</div>
          <div class="collapse-content"><p>AES-256 encryption at rest, TLS 1.3 in transit, zero-trust architecture, SOC 2 Type II compliance.</p></div>
        </div>
        <div class="collapse collapse-arrow join-item border border-nebula-cyan/30 glass-strong rounded-2xl">
          <input type="radio" name="faq" />
          <div class="collapse-title text-xl font-medium">What data sources are supported?</div>
          <div class="collapse-content"><p>100+ connectors: Snowflake, BigQuery, PostgreSQL, Salesforce, Stripe, Google Analytics, AWS S3, Kafka and many more.</p></div>
        </div>
        <div class="collapse collapse-arrow join-item border border-nebula-cyan/30 glass-strong rounded-2xl">
          <input type="radio" name="faq" />
          <div class="collapse-title text-xl font-medium">Is there a free trial?</div>
          <div class="collapse-content"><p>Yes — 14 days full access on all plans (no credit card required for Basic/Pro).</p></div>
        </div>
        <div class="collapse collapse-arrow join-item border border-nebula-cyan/30 glass-strong rounded-2xl">
          <input type="radio" name="faq" />
          <div class="collapse-title text-xl font-medium">Can I cancel anytime?</div>
          <div class="collapse-content"><p>Yes, cancel from your dashboard anytime. Monthly plans have no lock-in.</p></div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer footer-horizontal bg-base-300/40 glass-strong text-base-content p-10">
    <nav><h6 class="footer-title text-nebula-cyan">Services</h6><a href="/"class="link link-hover hover:text-nebula-teal">AI Analytics</a><a href="/"class="link link-hover hover:text-nebula-teal">Real-time Dashboards</a><a href="/"class="link link-hover hover:text-nebula-teal">Data Integration</a><a href="/"class="link link-hover hover:text-nebula-teal">Predictive Insights</a></nav>
    <nav><h6 class="footer-title text-nebula-cyan">Company</h6><a href="/"class="link link-hover hover:text-nebula-teal">About Nebula</a><a href="/"class="link link-hover hover:text-nebula-teal">Contact Us</a><a href="/"class="link link-hover hover:text-nebula-teal">Careers</a><a href="/"class="link link-hover hover:text-nebula-teal">Blog</a></nav>
    <nav><h6 class="footer-title text-nebula-cyan">Legal</h6><a href="/"class="link link-hover hover:text-nebula-teal">Terms of Service</a><a href="/"class="link link-hover hover:text-nebula-teal">Privacy Policy</a><a href="/"class="link link-hover hover:text-nebula-teal">Cookie Policy</a><a href="/"class="link link-hover hover:text-nebula-teal">Security</a></nav>
    <nav><h6 class="footer-title text-nebula-cyan">Social</h6><div class="grid grid-flow-col gap-6"><a href="/" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" class="fill-current hover:fill-nebula-cyan transition-colors"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a><a href="/" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" class="fill-current hover:fill-nebula-cyan transition-colors"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a><a href="/" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" class="fill-current hover:fill-nebula-cyan transition-colors"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"></path></svg></a></div></nav>
  </footer>
</div>

<style>
  :global(:root) {
    color-scheme: dark;
  }

  :global(.glass-strong) {
    background: rgba(30, 58, 138, 0.22);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(0, 245, 255, 0.20);
    box-shadow: 0 8px 32px rgba(0, 212, 255, 0.15);
  }

  :global(.text-glow-cyan) {
    text-shadow: 0 0 10px rgba(0, 245, 255, 0.7), 0 0 20px rgba(0, 212, 255, 0.4);
  }

  :global(.btn-nebula) {
    background: linear-gradient(90deg, #22d3ee 0%, #14b8a6 100%);
    border: none;
    color: white;
    box-shadow: 0 12px 30px rgba(0, 245, 255, 0.3);
    transition: transform .2s ease, box-shadow .2s ease;
  }

  :global(.btn-nebula:hover) {
    transform: translateY(-1px);
    box-shadow: 0 16px 35px rgba(0, 245, 255, 0.35);
  }

  :global(.input-field) {
    width: 100%;
    border-radius: 0.75rem;
    border: 1px solid rgba(0, 245, 255, 0.4);
    background-color: rgba(0,0,0,0.5);
    color: white;
    height: 3rem;
    padding: 0.5rem 0.75rem;
  }

  :global(.input-field:focus) {
    outline: 2px solid rgba(0,245,255,0.45);
    outline-offset: 0;
  }

  :global(.modal-box) {
    background: rgba(30, 58, 138, 0.22);
    border: 1px solid rgba(0, 245, 255, 0.20);
    box-shadow: 0 8px 32px rgba(0, 212, 255, 0.15);
    max-width: 600px;
    width: 90%;
  }

  :global(.carousel img) {
    object-fit: cover;
    height: 500px;
  }

  :global(.carousel-arrow) {
    @media (prefers-reduced-motion: reduce) { transition: none; }
    color: #00f5ff;
    border: 1px solid rgba(0,245,255,0.5);
  }
</style>
