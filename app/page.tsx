const APP_SIGNIN_URL = "https://kramio-frontend-670239159166.us-central1.run.app/";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Top Nav */}
      <header className="border-b border-neutral-900/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          {/* Logo + Wordmark */}
          <a href="/" className="flex items-center gap-4">
            <img
              src="/kramio-logo.png"
              alt="Kramio logo"
              className="h-16 w-auto"
            />
            <span className="text-2xl font-semibold tracking-tight">
              Kramio
            </span>
          </a>

          {/* Navigation */}
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

          {/* Sign In (returning users) */}
          <a
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
            href={APP_SIGNIN_URL}
          >
            Sign In
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Two-column hero: main message + right rail */}
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          {/* Left: headline + core value */}
          <div className="md:col-span-8">
            <h1 className="text-5xl font-semibold tracking-tight leading-[1.05]">
              AI that works the way you think.
            </h1>

            <p className="mt-6 text-lg text-neutral-300">
              Kramio is a secure, context-aware AI workspace that applies your
              knowledge, needs, and expertise—so intelligence is shaped around
              how you think and work, delivering precise, task-ready answers.
            </p>

            <p className="mt-4 text-neutral-200">
              <span className="font-semibold">One workspace for life.</span>{" "}
              <span className="font-semibold">
                One workspace for your profession
              </span>
              —both powered by intelligence that adapts to you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
                href={APP_SIGNIN_URL}
              >
                Start free trial
              </a>
              <a
                className="rounded-xl border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 hover:bg-neutral-900"
                href="/faq"
              >
                Read the FAQ
              </a>
            </div>

            {/* Trial reassurance strip */}
            <div className="mt-6 flex flex-col gap-2 text-sm text-neutral-300 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="text-neutral-200">✓</span>
                <span>3-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neutral-200">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neutral-200">✓</span>
                <span>No API keys needed</span>
              </div>
            </div>

            {/* Workspace quick-jump chips (visibility above the fold) */}
            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Explore workspaces
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href="#workspaces"
                  className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200 hover:bg-neutral-900"
                >
                  Personal Intelligence
                </a>
                <a
                  href="#workspaces"
                  className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200 hover:bg-neutral-900"
                >
                  Medical Specialized
                </a>
                <a
                  href="#workspaces"
                  className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200 hover:bg-neutral-900"
                >
                  Real Estate Suite
                </a>
                <a
                  href="#workspaces"
                  className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200 hover:bg-neutral-900"
                >
                  Sales Professional
                </a>
              </div>
            </div>
          </div>

          {/* Right: proof rail */}
          <div className="md:col-span-4">
            <div className="flex gap-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              {/* Vertical bar */}
              <div className="w-[3px] rounded-full bg-neutral-700" />

              {/* Text */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Works with leading AI models
                </div>
                <div className="mt-2 text-base font-semibold text-neutral-100">
                  Gemini · ChatGPT · Grok
                </div>
                <p className="mt-3 text-sm text-neutral-300">
                  Compare answers across models, then continue with the model—or
                  models—that are on the right track.
                </p>
                <p className="mt-3 text-sm text-neutral-300">
                  <span className="font-semibold text-neutral-200">
                    Your identity is never shared
                  </span>{" "}
                  with AI providers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Suites Grid */}
        <div id="workspaces" className="mt-14 scroll-mt-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Choose your workspace
            </h2>
            <p className="mt-3 text-neutral-300">
              Personal intelligence for life. Professional suites for your role.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Personal Intelligence */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-lg font-semibold">Personal Intelligence</h3>
              <p className="mt-2 text-neutral-300">
                Everyday decisions, organized context, faster answers.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Health &amp; Fitness
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Cashflow Analysis
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Home Improvement
                </span>
              </div>
              <p className="mt-4 text-sm text-neutral-400">
                More tiles are actively in development.
              </p>
            </div>

            {/* Medical Specialized */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-lg font-semibold">Medical Specialized</h3>
              <p className="mt-2 text-neutral-300">
                Evidence-first support for clinical workflows.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Patient Diagnosis
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Disease Research
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Medication Analysis
                </span>
              </div>
              <p className="mt-4 text-sm text-neutral-400">
                More tiles are actively in development.
              </p>
            </div>

            {/* Real Estate Suite */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-lg font-semibold">Real Estate Suite</h3>
              <p className="mt-2 text-neutral-300">
                Valuation, contracts, and listings—one guided workflow.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Property Valuation
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Lease Contract Review
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Listing Generator
                </span>
              </div>
              <p className="mt-4 text-sm text-neutral-400">
                More tiles are actively in development.
              </p>
            </div>

            {/* Sales Professional */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-lg font-semibold">Sales Professional</h3>
              <p className="mt-2 text-neutral-300">
                Research, proposals, and deal strategy in one place.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Client Research
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Proposal Generation
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Deal Closure
                </span>
              </div>
              <p className="mt-4 text-sm text-neutral-400">
                More tiles are actively in development.
              </p>
            </div>
          </div>

          {/* Reinforcing CTA after suites */}
          <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  Ready to try Kramio for your workflow?
                </h3>
                <p className="mt-2 text-neutral-300">
                  Start your 3-day free trial. No credit card required.
                </p>
              </div>
              <a
                className="inline-flex w-fit items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
                href={APP_SIGNIN_URL}
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Context Engineering</h3>
            <p className="mt-2 text-neutral-300">
              Your documents, images, and files are structured and reused
              automatically—so every session starts informed, without
              re-explaining or re-uploading.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Multi-Model Evaluation</h3>
            <p className="mt-2 text-neutral-300">
              Compare answers across multiple AI models side-by-side, then
              continue with the model—or models—that are on the right track.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Privacy-First Orchestration</h3>
            <p className="mt-2 text-neutral-300">
              Kramio provides managed access to leading AI models while keeping
              your identity private. Personal identifiers are removed before
              requests are sent to models.
            </p>
          </div>
        </div>

        {/* Short philosophy block (Jensen concept, non-quoted) */}
        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h3 className="text-lg font-semibold">
            A future of on-demand, generated software
          </h3>
          <p className="mt-2 text-neutral-300">
            Industry leaders increasingly point to a future where software is
            generated on demand—assembled by intelligent systems to solve a
            specific problem—rather than built once and distributed as static
            applications.
          </p>
          <p className="mt-3 text-neutral-300">
            Kramio is built for that future: where your knowledge becomes the
            input, intelligence is generated when you need it, and workflows
            evolve dynamically instead of staying fixed.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900/60">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-400">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Kramio</div>
            <div>
              Domains <span className="text-neutral-200">kramio.com</span> and{" "}
              <span className="text-neutral-200">kramio.ai</span> are owned by
              Kramio (GoDaddy).
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
