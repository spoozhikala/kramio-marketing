const faqs = [
  {
    q: "Is my data and are my interactions secure?",
    a: "Kramio is designed for sensitive workflows. It uses security-first patterns and controlled access so your context and activity are protected. Your app experience also supports Bring Your Own Key (BYOK) so you control model access."
  },
  {
    q: "Do you store my API keys?",
    a: "Kramio supports BYOK. Keys are handled with an encryption-first approach so plaintext keys are not stored or exposed in logs. You can rotate or revoke your keys at any time."
  },
  {
    q: "How do I sign in?",
    a: "Click Sign In and authenticate using Google (Gmail) SSO."
  },
  {
    q: "How do I get an OpenAI API key?",
    a: "Create and manage your OpenAI API key from the OpenAI platform dashboard. In Kramio, you will paste your key in Settings (BYOK) to enable OpenAI models."
  },
  {
    q: "Which models do you support?",
    a: "Kramio supports multiple providers through its orchestration layer (for example: OpenAI, Google Gemini, Anthropic, and xAI), depending on availability and your configured keys."
  }
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
                <span className="float-right text-neutral-400 group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-neutral-300">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
