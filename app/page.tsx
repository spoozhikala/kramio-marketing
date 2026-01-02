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
      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* Two-column hero: main message + right rail */}
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          {/* Left: headline + core value */}
          <div className="md:col-span-8">
            <h1 className="text-5xl font-semibold tracking-tight leading-[1.05]">
              AI that works the way you think.
            </h1>

            <p className="mt-6 text-lg text-neutral-300">
              Kramio is a secure, context-aware AI workspace that applies your
              knowledge, needs, and expertise—so intelligence is shaped around how
              you think and work, delivering precise, task-ready answers.
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
                Sign In (Beta)
              </a>
              <a
                className="rounded-xl border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 hover:bg-neutral-900"
                href="/faq"
              >
                Read the FAQ
              </a>
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
              </div>
            </div>
          </div>
        </div>

        {/* Workspaces (moved before capabilities) */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Personal Workspace</h3>
            <p className="mt-2 text-neutral-300">
              Intelligence tailored for everyday decisions and personal
              workflows.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-neutral-300">
              <li>
                <span className="font-semibold text-neutral-200">My Home</span>{" "}
                — diagnostics, maintenance, and planning
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  My Health &amp; Fitness
                </span>{" "}
                — wellness insights and preventive guidance
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  My Monthly Cashflow
                </span>{" "}
                — clarity on income, expenses, and trends
              </li>
              <li>
                <span className="font-semibold text-neutral-200">Scratchpad</span>{" "}
                — a general-purpose executive assistant
              </li>
            </ul>
            <p className="mt-4 text-neutral-300">
              Designed to remember your context and evolve with you over time.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Professional Workspace</h3>
            <p className="mt-2 text-neutral-300">
              Role-based intelligence built for depth, rigor, and continuity.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-neutral-300">
              <li>
                <span className="font-semibold text-neutral-200">
                  Patient Diagnosis
                </span>
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Disease Research
                </span>
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Medicine Analysis
                </span>
              </li>
              <li>
                <span className="font-semibold text-neutral-200">
                  Professional Scratchpad
                </span>
              </li>
            </ul>
            <p className="mt-4 text-neutral-300">
              More professional roles and tiles are actively in development.
            </p>
            <p className="mt-2 text-neutral-300">
              <span className="font-semibold text-neutral-200">
                Sales and Real Estate workflows
              </span>{" "}
              are coming next.
            </p>
          </div>
        </div>

        {/* Capabilities (moved after workspaces) */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Context Engineering</h3>
            <p className="mt-2 text-neutral-300">
              Your context—documents, images, and files—is securely organized
              and reused across sessions, so you never have to re-explain
              yourself.
            </p>
            <p className="mt-3 text-neutral-300">
              Kramio automatically sends the right context at the right time.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Multi-Model Evaluation</h3>
            <p className="mt-2 text-neutral-300">
              Run the same task across multiple AI models, compare their
              reasoning side-by-side, and continue with the model—or models—
              that are on the right track.
            </p>
            <p className="mt-3 text-neutral-300">
              You stay in control of how intelligence progresses.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Governed Security (BYOK)</h3>
            <p className="mt-2 text-neutral-300">
              Bring your own API keys and retain full control with an
              encryption-first design built for sensitive and professional
              workloads.
            </p>
            <p className="mt-3 text-neutral-300">
              Your keys. Your data. Your governance.
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
