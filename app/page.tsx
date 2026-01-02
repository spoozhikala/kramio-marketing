const APP_SIGNIN_URL = "https://kramio-frontend-670239159166.us-central1.run.app/";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Top Nav */}
      <header className="border-b border-neutral-900/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-lg font-semibold tracking-tight">Kramio</div>

          <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
            <a className="hover:text-white" href="/">Home</a>
            <a className="hover:text-white" href="/about">About</a>
            <a className="hover:text-white" href="/faq">FAQ</a>
          </nav>

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
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight leading-[1.05]">
            AI that works the way you think.
          </h1>

          <p className="mt-6 text-lg text-neutral-300">
            Kramio is a secure, context-aware AI workspace that applies your knowledge, needs, and expertise—so
            intelligence is shaped around how you think and work, delivering precise, task-ready answers.
          </p>

          <p className="mt-4 text-neutral-200">
            <span className="font-semibold">One workspace for life.</span>{" "}
            <span className="font-semibold">One workspace for your profession</span>—both powered by intelligence that
            adapts to you.
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

        {/* Value Pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Context Engineering</h3>
            <p className="mt-2 text-neutral-300">
              Your context is organized and reused securely, so you don’t have to re-explain yourself every session.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Multi-Model Evaluation</h3>
            <p className="mt-2 text-neutral-300">
              Compare multiple AI engines side-by-side, then continue with the reasoning that’s on the right track.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Governed Security (BYOK)</h3>
            <p className="mt-2 text-neutral-300">
              Bring your own API keys and keep control with an encryption-first approach designed for sensitive work.
            </p>
          </div>
        </div>

        {/* Personal vs Professional */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Personal Workspace</h3>
            <p className="mt-2 text-neutral-300">
              My Home, My Health &amp; Fitness, My Monthly Cashflow, and a general-purpose Scratchpad.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Professional Workspace</h3>
            <p className="mt-2 text-neutral-300">
              Role-based Tiles such as Patient Diagnosis, Disease Research, Medicine Analysis, and Professional
              Scratchpad.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900/60">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-400">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Kramio</div>
            <div>
              Domains <span className="text-neutral-200">kramio.com</span> and{" "}
              <span className="text-neutral-200">kramio.ai</span> are owned by Kramio (GoDaddy).
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
