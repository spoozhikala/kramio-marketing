"use client";

import { useEffect, useRef, useState } from "react";

const APP_SIGNIN_URL =
  "https://kramio-frontend-670239159166.us-central1.run.app/";

function TopNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
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

        {/* Desktop Nav */}
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

        {/* Right side actions */}
        <div className="flex items-center gap-3" ref={menuRef}>
          {/* Mobile Menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/40 px-3 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-900 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            Menu
          </button>

          {/* Desktop Sign In */}
          <a
            className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-neutral-200 md:inline-flex"
            href={APP_SIGNIN_URL}
          >
            Sign In
          </a>

          {/* Mobile dropdown */}
          {open && (
            <div className="absolute right-6 top-[76px] z-50 w-56 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-lg md:hidden">
              <a
                className="block px-4 py-3 text-sm text-neutral-100 hover:bg-neutral-900"
                href="/"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
              <a
                className="block px-4 py-3 text-sm text-neutral-100 hover:bg-neutral-900"
                href="/about"
                onClick={() => setOpen(false)}
              >
                About
              </a>
              <a
                className="block px-4 py-3 text-sm text-neutral-100 hover:bg-neutral-900"
                href="/faq"
                onClick={() => setOpen(false)}
              >
                FAQ
              </a>
              <div className="h-px bg-neutral-800" />
              <a
                className="block px-4 py-3 text-sm font-semibold text-neutral-100 hover:bg-neutral-900"
                href={APP_SIGNIN_URL}
                onClick={() => setOpen(false)}
              >
                Start Free Trial / Sign In
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <TopNav />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          {/* Left */}
          <div className="md:col-span-8">
            <h1 className="text-5xl font-semibold tracking-tight leading-[1.05]">
              Stop Chatting. Start Executing.
            </h1>

            <p className="mt-6 text-lg text-neutral-300">
              Kramio is your Command Deck for real decisions in{" "}
              <span className="font-semibold text-neutral-200">life</span> and{" "}
              <span className="font-semibold text-neutral-200">work</span>.
              Run expert-grade Workflows that turn what you already have—questions,
              notes, documents, photos, screenshots—into results in seconds.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
                href={APP_SIGNIN_URL}
              >
                Launch Command Deck
              </a>
              <a
                className="rounded-xl border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 hover:bg-neutral-900"
                href="#workflows"
              >
                View Available Workflows
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-6 flex flex-col gap-2 text-sm text-neutral-300 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-2">
                <span className="text-neutral-200">✓</span>
                <span>7-day free trial (no credit card)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neutral-200">✓</span>
                <span>Identity never shared with AI providers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-neutral-200">✓</span>
                <span>Built for mobile, desktop, and on-the-go</span>
              </div>
            </div>

            {/* Two-lane quick-jump chips */}
            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Explore by outcome
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Life Intelligence (Health · Home · Cashflow)",
                  "Real Estate Suite",
                  "Sales Suite",
                  "Healthcare Workflows",
                ].map((label) => (
                  <a
                    key={label}
                    href="#workflows"
                    className="rounded-full border border-neutral-700 bg-neutral-950/40 px-3 py-1 text-sm text-neutral-200 hover:bg-neutral-900"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right rail: product “secret weapon” */}
          <div className="md:col-span-4">
            <div className="flex gap-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="w-[3px] rounded-full bg-neutral-700" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  The Command Deck
                </div>
                <div className="mt-2 text-base font-semibold text-neutral-100">
                  Click a Workflow. Get a Result.
                </div>
                <p className="mt-3 text-sm text-neutral-300">
                  No prompt engineering. Choose a workflow like{" "}
                  <span className="font-semibold text-neutral-200">
                    “Review Lease,” “Explain Lab Results,” “Cashflow Audit,”
                  </span>{" "}
                  or <span className="font-semibold text-neutral-200">“Listing Generator.”</span>
                </p>
                <p className="mt-3 text-sm text-neutral-300">
                  Bring anything:{" "}
                  <span className="font-semibold text-neutral-200">
                    text, notes, documents, photos, screenshots
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflows / Suites */}
        <div id="workflows" className="mt-14 scroll-mt-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Your Intelligence Suite. Organized by Role.
            </h2>
            <p className="mt-3 text-neutral-300">
              Kramio is built for people who make real decisions—at home, on the
              move, and in the field. Start with Life Intelligence, then add a
              Professional Suite when you need it.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Life Intelligence */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-lg font-semibold">Life Intelligence</h3>
              <p className="mt-2 text-neutral-300">
                For health, home, and money—when clarity matters.
              </p>

              <div className="mt-4 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                Top workflows
              </div>
              <div className="mt-3 space-y-2 text-neutral-200">
                <div>⚡ Explain Lab Results (photo, PDF, or pasted text)</div>
                <div>⚡ Medication & Interaction Check</div>
                <div>⚡ Cashflow Audit (spot leaks and plan ahead)</div>
                <div>⚡ Renovation Estimator (scope, options, budget)</div>
              </div>
            </div>

            {/* Real Estate */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-lg font-semibold">Real Estate Suite</h3>
              <p className="mt-2 text-neutral-300">
                For agents and investors—client-ready outputs in minutes.
              </p>

              <div className="mt-4 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                Top workflows
              </div>
              <div className="mt-3 space-y-2 text-neutral-200">
                <div>⚡ Listing Generator (photos + notes → marketing copy)</div>
                <div>⚡ Lease Review (spot liabilities fast)</div>
                <div>⚡ Valuation (data-backed pricing logic)</div>
              </div>
            </div>

            {/* Sales */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-lg font-semibold">Sales Suite</h3>
              <p className="mt-2 text-neutral-300">
                For deal-makers—move faster from research to close.
              </p>

              <div className="mt-4 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                Top workflows
              </div>
              <div className="mt-3 space-y-2 text-neutral-200">
                <div>⚡ Client Research (account + context → brief)</div>
                <div>⚡ Proposal Rewriter (ROI-focused messaging)</div>
                <div>⚡ Deal Strategy (objections → next steps)</div>
              </div>
            </div>

            {/* Healthcare (softened) */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <h3 className="text-lg font-semibold">Healthcare Workflows</h3>
              <p className="mt-2 text-neutral-300">
                For clinical support and research—organized, evidence-aware summaries.
              </p>

              <div className="mt-4 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                Top workflows
              </div>
              <div className="mt-3 space-y-2 text-neutral-200">
                <div>⚡ Clinical Research Assistant (papers → summary + takeaways)</div>
                <div>⚡ Medication & Interaction Analysis</div>
                <div>⚡ Clinical Decision Support (assistive, not diagnostic)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why (replace “Context Engineering”) */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">No Prompt Engineering Required</h3>
            <p className="mt-2 text-neutral-300">
              Workflows come pre-loaded with expert instructions. You don’t need
              to “teach” the AI your role. Bring your input and click execute.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Privacy-First Orchestration</h3>
            <p className="mt-2 text-neutral-300">
              Kramio manages model access while protecting you. Personal identifiers
              are stripped before requests are sent to AI providers.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <h3 className="text-lg font-semibold">Built for the Job Site</h3>
            <p className="mt-2 text-neutral-300">
              Whether you’re in a truck, at a showing, in a hallway, or on the couch,
              Kramio is designed for mobile-first execution.
            </p>
          </div>
        </div>

        {/* Verification (compare models) moved down */}
        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            The Only AI That Checks Its Work.
          </h2>
          <p className="mt-3 text-neutral-300">
            One model isn’t enough when accuracy matters. Run the same workflow through{" "}
            <span className="font-semibold text-neutral-200">
              Gemini, ChatGPT-4o, and Grok
            </span>{" "}
            simultaneously. Compare perspectives side-by-side to verify reasoning and act
            with confidence.
          </p>
          <p className="mt-3 text-sm text-neutral-300">
            <span className="font-semibold text-neutral-200">Your identity is never shared</span>{" "}
            with AI providers. No API keys required.
          </p>
        </div>

        {/* Future vision (keep, but tighten) */}
        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h3 className="text-lg font-semibold">On-demand intelligence</h3>
          <p className="mt-2 text-neutral-300">
            The future of software is shifting from static apps to systems that generate
            solutions on demand. Kramio turns real-world inputs into structured outputs—
            when you need them—without waiting to get back to a desk.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:flex-row md:items-center">
          <div>
            <div className="text-lg font-semibold">Ready to run your first workflow?</div>
            <div className="mt-1 text-sm text-neutral-300">
              Start with Life Intelligence, then add a Professional Suite when needed.
            </div>
          </div>
          <a
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
            href={APP_SIGNIN_URL}
          >
            Start Free Trial / Sign In
          </a>
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
