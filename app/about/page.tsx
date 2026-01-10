const APP_SIGNIN_URL = "https://kramio-frontend-670239159166.us-central1.run.app/";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Top Nav (same as Home) */}
      <header className="border-b border-neutral-900/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-4">
            <img
              src="/kramio-logo.png"
              alt="Kramio logo"
              className="h-16 w-auto"
            />
            <span className="text-2xl font-semibold tracking-tight">Kramio</span>
          </a>

          <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
            <a className="hover:text-white" href="/">
              Home
            </a>
            <a className="hover:text-white" href="/about">
              About
            </a>
            <a className="hover:text-white" href="/faq">
              FAQ
            </a>
          </nav>

          <a
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
            href={APP_SIGNIN_URL}
          >
            Sign In
          </a>
        </div>
      </header>

      {/* Page content */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">About Kramio</h1>

        <p className="mt-6 text-lg text-neutral-300">
          Kramio is built by professionals who have designed and rolled out
          innovative technology solutions across consumer products, SMB
          platforms, and enterprise systems—often in environments with strict
          privacy, security, and regulatory requirements.
        </p>

        <p className="mt-4 text-neutral-300">
          The team behind Kramio has deep experience implementing
          security-by-design architectures, data governance frameworks, and
          privacy-aligned workflows across geographies and regulated domains.
          Kramio exists because modern AI is powerful, but most tools are not
          structured, governed, or safe enough for serious work.
        </p>

        <p className="mt-4 text-neutral-300">
          Our goal is to make AI useful, controllable, and trustworthy for
          prosumers and professionals alike—so your knowledge and context are
          preserved across sessions, without repeatedly rebuilding the setup.
        </p>

        {/* Investor support */}
        <p className="mt-4 text-neutral-300">
          <span className="font-semibold text-neutral-200">
            Kramio is supported by experienced angel investors from the Silicon
            Valley technology ecosystem
          </span>
          , who bring decades of experience building, scaling, and operating
          technology platforms.
        </p>

        {/* Expanded philosophy section */}
        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h2 className="text-xl font-semibold">
            The shift toward generated, on-demand software
          </h2>

          <p className="mt-3 text-neutral-300">
            A major shift is underway: software is moving from static,
            pre-written applications toward systems that generate solutions on
            demand. Instead of installing an app designed years ago, users
            increasingly expect intelligent software to assemble workflows in
            real time—based on the problem, the context, and the desired outcome.
          </p>

          <p className="mt-3 text-neutral-300">
            Technology leaders have described this direction as a future where
            AI-driven systems dynamically assemble solutions through coordinated
            models and services. In this world, software becomes more personal,
            situational, and adaptive—generated when needed and reshaped as the
            task evolves.
          </p>

          <p className="mt-3 text-neutral-300">
            Kramio is built for that future. Work is organized into
            context-aware tiles, privacy is enforced by default, and multiple
            models can be evaluated in parallel—so high-quality outputs are
            generated on demand, with continuity and control.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h2 className="text-xl font-semibold">Domains</h2>
          <p className="mt-2 text-neutral-300">
            kramio.com and kramio.ai are owned by Kramio and are registered via
            GoDaddy.
          </p>
        </div>
      </div>
    </main>
  );
}
