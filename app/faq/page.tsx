const APP_SIGNIN_URL = "https://kramio-frontend-670239159166.us-central1.run.app/";

type FAQ = {
  q: string;
  a: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    q: "Do I need to provide my own AI API keys?",
    a: (
      <>
        No. Kramio provides managed access to leading AI models, so you can
        start immediately without creating or configuring API keys.
      </>
    ),
  },
  {
    q: "Is there a free trial?",
    a: (
      <>
        Yes. Kramio includes a{" "}
        <span className="font-semibold text-neutral-200">3-day free trial</span>{" "}
        and{" "}
        <span className="font-semibold text-neutral-200">
          no credit card is required
        </span>
        .
      </>
    ),
  },
  {
    q: "Is my identity shared with AI model providers?",
    a: (
      <>
        No.{" "}
        <span className="font-semibold text-neutral-200">
          Your identity is never shared with AI providers
        </span>
        . Kramio brokers model access on your behalf so providers do not receive
        your personal account identity.
      </>
    ),
  },
  {
    q: "What happens to personal or sensitive data in my documents?",
    a: (
      <>
        Before requests are sent to AI models, Kramio removes personal
        identifiers and sensitive metadata to minimize exposure. The model only
        receives what is necessary to complete the task.
      </>
    ),
  },
  {
    q: "Who is Kramio built for?",
    a: (
      <>
        Kramio is built for prosumers and professionals who need structured,
        repeatable AI workflows—across personal intelligence and role-based
        suites such as medical, real estate, and sales.
      </>
    ),
  },
  {
    q: "Which AI models does Kramio work with?",
    a: (
      <>
        Kramio works with leading AI models such as{" "}
        <span className="font-semibold text-neutral-200">Gemini</span>,{" "}
        <span className="font-semibold text-neutral-200">ChatGPT</span>, and{" "}
        <span className="font-semibold text-neutral-200">Grok</span>. Kramio
        orchestrates models behind the scenes so you can focus on outcomes, not
        configuration.
      </>
    ),
  },
  {
    q: "How do I sign in?",
    a: (
      <>
        Click{" "}
        <span className="font-semibold text-neutral-200">Start free trial</span>{" "}
        or{" "}
        <span className="font-semibold text-neutral-200">Sign In</span>, then
        authenticate using Google (Gmail) SSO. Access is currently invite-only
        for beta users.
      </>
    ),
  },
];

export default function FAQPage() {
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
        <h1 className="text-4xl font-semibold tracking-tight">FAQ</h1>
        <p className="mt-4 text-neutral-300">
          Quick answers about trial access, privacy, and how Kramio works.
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
