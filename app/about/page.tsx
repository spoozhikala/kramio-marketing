"use client";

import { useEffect, useRef, useState } from "react";

const APP_SIGNIN_URL = "https://kramio-frontend-670239159166.us-central1.run.app/";

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
          <img src="/kramio-logo.png" alt="Kramio logo" className="h-16 w-auto" />
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

        <p className="mt-4 text-neutral-300">
          <span className="font-semibold text-neutral-200">
            Kramio is supported by experienced angel investors from the Silicon
            Valley technology ecosystem
          </span>
          , who bring decades of experience building, scaling, and operating
          technology platforms.
        </p>

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
