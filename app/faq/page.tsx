type FAQ = {
  q: string;
  a: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    q: "Is my data and are my interactions secure?",
    a: (
      <>
        Kramio is designed for sensitive workflows. It uses security-first
        patterns and controlled access so your context and activity are
        protected. The platform supports Bring Your Own Key (BYOK), so you
        retain control over model access.
      </>
    ),
  },
  {
    q: "Do you store my API keys?",
    a: (
      <>
        Kramio supports BYOK. Keys are handled with an encryption-first approach
        so plaintext keys are not stored or exposed in logs. You can rotate or
        revoke keys at any time.
      </>
    ),
  },
  {
    q: "How do I sign in?",
    a: (
      <>
        Click <span className="font-semibold text-neutral-200">Sign In</span> and
        authenticate using Google (Gmail) SSO. Access is currently invite-only
        for beta users.
      </>
    ),
  },
  {
    q: "How do I get API keys?",
    a: (
      <>
        <p className="text-neutral-300">
          You can generate API keys directly from the AI providers you choose to
          use with Kramio:
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
          <li>
            <span className="font-semibold text-neutral-200">
              Google Gemini (Gemini 2.5 Pro)
            </span>{" "}
            —{" "}
            <a
              className="underline decoration-neutral-500 underline-offset-4 hover:text-white"
              href="https://ai.google.dev/gemini-api/docs/api-key"
              target="_blank"
              rel="noreferrer"
            >
              get an API key from Google AI Studio
            </a>
            .
          </li>
          <li>
            <span className="font-semibold text-neutral-200">
              OpenAI (ChatGPT-4o)
            </span>{" "}
            —{" "}
            <a
              className="underline decoration-neutral-500 underline-offset-4 hover:text-white"
              href="https://auth.openai.com/create-account"
              target="_blank"
              rel="noreferrer"
            >
              create an OpenAI account and generate an API key
            </a>
            .
          </li>
          <li>
            <span className="font-semibold text-neutral-200">xAI (Grok-4)</span>{" "}
            —{" "}
            <a
              className="underline decoration-neutral-500 underline-offset-4 hover:text-white"
              href="https://x.ai/api"
              target="_blank"
              rel="noreferrer"
            >
              generate an API key from the xAI platform
            </a>
            .
          </li>
        </ul>

        <p className="mt-4 text-neutral-300">
          Once created, paste your API key(s) into{" "}
          <span className="font-semibold text-neutral-200">
            Kramio AI Settings (BYOK)
          </span>{" "}
          to enable your tiles. You only need{" "}
          <span className="font-semibold text-neutral-200">one</span> model API
          key to start experiencing Kramio.
        </p>
      </>
    ),
  },
  {
    q: "Which AI models do you support?",
    a: (
      <>
        Kramio supports multiple AI providers through its orchestration layer,
        including OpenAI, Google Gemini, and xAI, depending on
        availability and your configured keys.
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">FAQ</h1>
        <p className="mt-4 text-neutral-300">
          Answers to common questions about security, access, and API keys.
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
