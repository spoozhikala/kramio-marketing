"use client";

import { useEffect, useRef, useState } from "react";

const APP_SIGNIN_URL =
  "https://kramio-frontend-670239159166.us-central1.run.app/";

function TopNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

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

        <div className="flex items-center gap-3" ref={menuRef}>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/40 px-3 py-2 text-sm font-semibold text-neutral-100 hover:bg-neutral-900 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            Menu
          </button>

          <a
            className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-neutral-200 md:inline-flex"
            href={APP_SIGNIN_URL}
          >
            Sign In
          </a>

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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <TopNav />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">About Kramio</h1>

        <p className="mt-6 text-lg text-neutral-300">
          Kramio is a secure execution workspace for real decisions in{" "}
          <span className="font-semibold text-neutral-200">life</span> and{" "}
          <span className="font-semibold text-neutral-200">work</span>. Instead
          of “chatting with AI,” you run pre-built{" "}
          <span className="font-semibold text-neutral-200">Workflows</span> from
          a Command Deck—designed to turn what you already have into results.
        </p>

        <p className="mt-4 text-neutral-300">
          Kramio is built for people who don’t have time to prompt-engineer:
          real estate agents, sales professionals, clinicians, and busy
          individuals (including many 55+ users) who need clarity on health,
          home, and money.
        </p>

        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h2 className="text-xl font-semibold">What makes Kramio different</h2>

          <ul className="mt-4 space-y-3 text-neutral-300">
            <li>
              <span className="font-semibold text-neutral-200">
                Workflows, not prompts:
              </span>{" "}
              Kramio is designed for click-to-execute outcomes. You choose a
              workflow (e.g., “Review Lease,” “Explain Lab Results,” “Cashflow
              Audit”), add your input, and get a structured result.
            </li>
            <li>
              <span className="font-semibold text-neutral-200">
                Bring anything:
              </span>{" "}
              questions, pasted text, notes, documents, photos, and screenshots.
              Real work rarely starts with perfect prompts.
            </li>
            <li>
              <span className="font-semibold text-neutral-200">
                Verification when accuracy matters:
              </span>{" "}
              Kramio can run the same workflow across multiple leading AI models
              so you can compare reasoning side-by-side and choose the most
              reliable path forward.
            </li>
            <li>
              <span className="font-semibold text-neutral-200">
                Privacy by design:
              </span>{" "}
              personal identifiers are stripped before requests reach AI
              providers, and your identity is not shared with them.
            </li>
            <li>
              <span className="font-semibold text-neutral-200">
                Data safety you can understand:
              </span>{" "}
              your information is stored encrypted and accessed only by the
              application service account used to run Kramio—not by people.
            </li>
          </ul>
        </div>

        <p className="mt-10 text-neutral-300">
          The team behind Kramio has designed and deployed technology platforms
          across consumer products, SMB systems, and enterprise environments—
          often with strict privacy, security, and regulatory requirements. We
          built Kramio because modern AI is powerful, but most tools are not
          structured or governed enough for serious decisions.
        </p>

        <p className="mt-4 text-neutral-300">
          <span className="font-semibold text-neutral-200">
            Kramio is backed by experienced angel investors
          </span>{" "}
          with deep operational experience building and scaling technology
          products.
        </p>

        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h2 className="text-xl font-semibold">
            The shift toward on-demand, generated software
          </h2>

          <p className="mt-3 text-neutral-300">
            A major shift is underway: software is moving from static,
            pre-written applications toward systems that generate solutions on
            demand. Instead of hunting across tools, templates, and tabs, people
            increasingly expect intelligent software to assemble workflows in
            real time—based on the problem, the context, and the desired
            outcome.
          </p>

          <p className="mt-3 text-neutral-300">
            Kramio is built for that future. Workflows bring structure to AI so
            outputs are more consistent and actionable. Verification reduces the
            risk of relying on a single model. Privacy is enforced by default.
            And your workspace preserves continuity—so you don’t restart from
            scratch every session.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:flex-row md:items-center">
          <div>
            <div className="text-lg font-semibold">Try Kramio (Beta)</div>
            <div className="mt-1 text-sm text-neutral-300">
              Start with Life Intelligence, then add a Professional Suite when
              needed. Invite-only during beta.
            </div>
          </div>
          <a
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
            href={APP_SIGNIN_URL}
          >
            Start Free Trial / Sign In
          </a>
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
