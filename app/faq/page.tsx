"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const APP_SIGNIN_URL =
  "https://kramio-frontend-670239159166.us-central1.run.app/";

type FAQ = {
  q: string;
  a: ReactNode;
};

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

const faqs: FAQ[] = [
  {
    q: "Is there a free trial?",
    a: (
      <>
        Yes. Kramio includes a{" "}
        <span className="font-semibold text-neutral-200">7-day free trial</span>{" "}
        with{" "}
        <span className="font-semibold text-neutral-200">
          no credit card required
        </span>
        .
      </>
    ),
  },
  {
    q: "Is Kramio for personal use, professional use, or both?",
    a: (
      <>
        Both. Kramio is designed for{" "}
        <span className="font-semibold text-neutral-200">
          real decisions in life and work
        </span>
        . Many users start with personal tiles (health, home, cashflow) and then
        add professional suites (real estate, sales, healthcare workflows) when
        needed.
      </>
    ),
  },
  {
    q: "What is the Command Deck / Workflows?",
    a: (
      <>
        The Command Deck is where you run{" "}
        <span className="font-semibold text-neutral-200">
          pre-built, expert-designed workflows
        </span>{" "}
        instead of writing prompts from scratch. Pick a workflow (e.g., “Review a
        Lease,” “Create a Listing,” “Explain Lab Results”), provide your input,
        and Kramio generates structured outputs you can act on.
      </>
    ),
  },
  {
    q: "What kind of input can I use (text, files, images)?",
    a: (
      <>
        You can use{" "}
        <span className="font-semibold text-neutral-200">
          whatever you already have
        </span>
        : a question, pasted text, notes, documents, photos, screenshots, or
        images. Workflows are designed to work with real-world inputs—not just
        perfect prompts.
      </>
    ),
  },
  {
    q: "Do I need to be good at prompting or “prompt engineering”?",
    a: (
      <>
        No. Kramio is built for{" "}
        <span className="font-semibold text-neutral-200">click-to-execute</span>{" "}
        workflows. Tiles come with system-level instructions so you can focus on
        your situation—not on how to phrase the request.
      </>
    ),
  },
  {
    q: "Do I need to provide my own AI API keys?",
    a: (
      <>
        No. Kramio manages access to leading AI models on your behalf, so you can
        start immediately without creating or configuring API keys.
      </>
    ),
  },
  {
    q: "Is my identity shared with AI providers?",
    a: (
      <>
        No.{" "}
        <span className="font-semibold text-neutral-200">
          Your identity is never shared
        </span>{" "}
        with AI model providers. Kramio brokers requests so providers do not see
        your personal account or credentials.
      </>
    ),
  },
  {
    q: "How does Kramio protect sensitive information?",
    a: (
      <>
        Kramio applies{" "}
        <span className="font-semibold text-neutral-200">
          privacy-first redaction
        </span>{" "}
        to remove personal identifiers before requests are sent to AI models.
        Only the minimum required context is provided to complete the workflow.
      </>
    ),
  },
  {
    q: "Who can access my data?",
    a: (
      <>
        Only Kramio’s application itself can access your data.
        <br />
        <br />
        Your information is stored in an{" "}
        <span className="font-semibold text-neutral-200">
          encrypted database
        </span>{" "}
        and is accessed only by a secure service account used to operate the
        platform.
        <br />
        <br />
        Even Kramio system administrators cannot read your personal data. In the
        unlikely event of a system issue, your data remains encrypted and
        inaccessible to humans.
      </>
    ),
  },
  {
    q: "Why does Kramio compare multiple AI models?",
    a: (
      <>
        Because one model isn’t enough when accuracy matters. Kramio can run the
        same workflow through{" "}
        <span className="font-semibold text-neutral-200">Gemini</span>,{" "}
        <span className="font-semibold text-neutral-200">ChatGPT-4o</span>, and{" "}
        <span className="font-semibold text-neutral-200">Grok</span> so you can
        compare perspectives side-by-side and decide with confidence.
      </>
    ),
  },
  {
    q: "Does Kramio replace all the other software I use?",
    a: (
      <>
        Kramio can reduce tool sprawl by combining execution, verification, and
        privacy in one place. The bigger value is{" "}
        <span className="font-semibold text-neutral-200">
          repeatable, high-quality outputs
        </span>{" "}
        you can rely on—especially for client-facing or high-stakes decisions.
      </>
    ),
  },
  {
    q: "Can I use Kramio without documents or images?",
    a: (
      <>
        Yes. You can run workflows using a question or pasted context only.
        Documents and images are optional—helpful when you want deeper analysis
        or to avoid retyping.
      </>
    ),
  },
  {
    q: "Is Kramio appropriate for medical use?",
    a: (
      <>
        Kramio can help organize information, summarize research, and analyze
        medication interactions. It is{" "}
        <span className="font-semibold text-neutral-200">
          not a substitute for professional medical judgment
        </span>
        . Always consult a qualified clinician for diagnosis or treatment
        decisions.
      </>
    ),
  },
  {
    q: "How do I sign in?",
    a: (
      <>
        Click{" "}
        <span className="font-semibold text-neutral-200">
          Start 7-Day Free Trial
        </span>{" "}
        or <span className="font-semibold text-neutral-200">Sign In</span>, then
        authenticate using Google (Gmail) SSO. Access is currently invite-only
        during beta.
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <TopNav />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">FAQ</h1>
        <p className="mt-4 text-neutral-300">
          Quick answers about workflows, privacy, and how Kramio works for life
          and work.
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold">
                {item.q}
                <span className="float-right text-neutral-400 transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <div className="mt-3 text-neutral-300">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
