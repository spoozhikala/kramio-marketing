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
            <span className="text-2xl font-semibold tracking-tight">Kramio</span>
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

          {/* Sign In */}
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
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          {/* Left */}
          <div className="md:col-span-8">
            <h1 className="text-5xl font-semibold tracking-tight leading-[1.05]">
              Your Secure AI Workspace for Work and Life.
            </h1>

            <p className="mt-6 text-lg text-neutral-300">
              Whether you’re in your truck, at the job site, in the office, or
              at home, Kramio applies your context and delivers expert-grade
              answers wherever the work happens.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
                href={APP_SIGNIN_URL}
              >
                Start 7-Day Free Trial
              </a>
              <a
                className="rounded-xl border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 hover:bg-neutral-900"
                href="#workspaces"
              >
                Explore Workspaces
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-6 flex flex-col gap-2 text-sm text-neutral-300 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="text-neutral-200">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neutral-200">✓</span>
                <span>Identity never shared with AI providers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neutral-200">✓</span>
                <span>Built for mobile, desktop, and on-the-go work</span>
              </div>
            </div>

            {/* Workspace quick-jump chips */}
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
                  Real Estate Suite
                </a>
                <a
                  href="#workspaces"
                  className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200 hover:bg-neutral-900"
                >
                  Sales Professional
                </a>
                <a
                  href="#workspaces"
                  className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200 hover:bg-neutral-900"
                >
                  Medical Specialized
                </a>
              </div>
            </div>
          </div>

          {/* Right rail */}
          <div className="md:col-span-4">
            <div className="flex gap-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="w-[3px] rounded-full bg-neutral-700" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Compare leading AI models
                </div>
                <div className="mt-2 text-base font-semibold text-neutral-100">
                  Gemini · ChatGPT-4o · Grok
                </div>
                <p className="mt-3 text-sm text-neutral-300">
                  Evaluate multiple answers side-by-side, then continue with the
                  model—or models—that are on the right track.
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

        {/* Differentiator section (moved higher and explicit) */}
        <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Don’t Just Generate. Compare.
          </h2>
          <p className="mt-3 text-neutral-300">
            Most AI tools give you a single answer. Kramio lets you evaluate
            multiple perspectives before you commit.
          </p>
          <p className="mt-3 text-neutral-300">
            Run your questions, notes, or documents through{" "}
            <span className="font-semibold text-neutral-200">
              Gemini, ChatGPT-4o, and Grok
            </span>{" "}
            simultaneously. View responses side-by-side to cross-reference
            insights, identify discrepancies, and choose the most reliable path
            forward.
          </p>
          <p className="mt-3 text-sm text-neutral-300">
            <span className="font-semibold text-neutral-200">
              Your identity is never shared
            </span>{" "}
            with AI providers.
          </p>
        </div>

        {/* Suites Grid */}
        <div id="workspaces" className="mt-14 scroll-mt-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Explore workspaces
            </h2>
            <p className="mt-3 text-neutral-300">
              From planning a home project on the couch to reviewing a lease in
              the field, Kramio keeps your intelligence with you—organized by
              how you live and work.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Personal Intelligence */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-lg font-semibold">Personal Intelligence</h3>
              <p className="mt-2 text-neutral-300">
                One workspace for your life.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Home Improvement
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Cashflow Analysis
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Health &amp; Fitness
                </span>
              </div>
            </div>

            {/* Real Estate Suite */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-lg font-semibold">Real Estate Suite</h3>
              <p className="mt-2 text-neutral-300">
                Clarity for agents, investors, and advisors—on site or on the
                move.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Lease Contract Review
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Property Valuation
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Listing Generator
                </span>
              </div>
            </div>

            {/* Sales Professional */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-lg font-semibold">Sales Professional</h3>
              <p className="mt-2 text-neutral-300">
                Support for consultants, sellers, and deal-makers—wherever
                conversations happen.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Client Research
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Proposal Generation
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Deal Strategy
                </span>
              </div>
            </div>

            {/* Medical Specialized */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-lg font-semibold">Medical Specialized</h3>
              <p className="mt-2 text-neutral-300">
                Secure, evidence-based decision support for clinical workflows.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Clinical Decision Support
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Clinical Research Assistant
                </span>
                <span className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200">
                  Medication &amp; Interaction Analysis
                </span>
              </div>
            </div>
          </div>

          {/* Reinforcing CTA */}
          <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  Ready to upgrade your workflow?
                </h3>
                <p className="mt-2 text-neutral-300">
                  Start your 7-day free trial. No credit card required.
                </p>
              </div>
              <a
                className="inline-flex w-fit items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
                href={APP_SIGNIN_URL}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Context Engineering</h3>
            <p className="mt-2 text-neutral-300">
              Bring your context once—preferences, constraints, notes, or
              documents. Every session starts informed, without re-explaining
              how you think or work.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Privacy-First Orchestration</h3>
            <p className="mt-2 text-neutral-300">
              Kramio manages access to leading AI models while keeping your
              identity private. Personal identifiers are removed before requests
              are processed.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Multi-Model Intelligence</h3>
            <p className="mt-2 text-neutral-300">
              Evaluate multiple AI engines in one workspace, then continue with
              the model—or combination—that’s on the right track.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h3 className="text-lg font-semibold">Generated, on-demand intelligence</h3>
          <p className="mt-2 text-neutral-300">
            The future of software is shifting away from static applications
            toward systems that generate solutions on demand. Instead of waiting
            to get back to a desk, intelligent workflows assemble dynamically—
            based on the problem, the context, and the moment.
          </p>
          <p className="mt-3 text-neutral-300">
            Kramio is built for that future. Your knowledge becomes the input.
            Intelligence is generated when you need it. Continuity replaces
            repetition.
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
