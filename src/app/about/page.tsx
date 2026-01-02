export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">About Kramio</h1>

        <p className="mt-6 text-lg text-neutral-300">
          Kramio is built by professionals who have designed and rolled out innovative technology solutions across
          consumer products, SMB platforms, and enterprise systems—often in environments with strict privacy, security,
          and regulatory requirements.
        </p>

        <p className="mt-4 text-neutral-300">
          We have spent years implementing security-by-design architectures, data governance, access controls, and
          compliance-aligned workflows across jurisdictions. Kramio exists because modern AI is powerful, but most tools
          are not structured, governed, or safe enough for serious work. Our goal is to make AI useful, controllable,
          and trustworthy for prosumers and professionals alike.
        </p>

        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h2 className="text-xl font-semibold">Domains</h2>
          <p className="mt-2 text-neutral-300">
            kramio.com and kramio.ai are owned by Kramio and are registered via GoDaddy.
          </p>
        </div>
      </div>
    </main>
  );
}
