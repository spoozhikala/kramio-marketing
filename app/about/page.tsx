export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">About Kramio</h1>

        <p className="mt-6 text-lg text-neutral-300">
          Kramio is built by professionals who have designed and rolled out
          innovative technology solutions across consumer products, SMB
          platforms, and enterprise systems—often in environments with strict
          privacy, security, and regulatory requirements.
        </p>

        <p className="mt-4 text-neutral-300">
          We have spent years implementing security-by-design architectures,
          data governance, access controls, and compliance-aligned workflows
          across jurisdictions. Kramio exists because modern AI is powerful,
          but most tools are not structured, governed, or safe enough for
          serious work.
        </p>

        <p className="mt-4 text-neutral-300">
          Our goal is to make AI useful, controllable, and trustworthy for
          prosumers and professionals alike—so you can bring your knowledge and
          context into every session, without repeatedly rebuilding the setup.
        </p>

        {/* Expanded philosophy section (Jensen concept, non-quoted) */}
        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <h2 className="text-xl font-semibold">
            The shift toward generated, on-demand software
          </h2>

          <p className="mt-3 text-neutral-300">
            A major shift is underway: software is moving from static,
            pre-written applications toward systems that can generate solutions
            on demand. Instead of installing an app that was designed years
            ago, users increasingly expect intelligent software to assemble the
            right tools and workflows in real time—based on the problem, the
            context, and the desired outcome.
          </p>

          <p className="mt-3 text-neutral-300">
            Technology leaders, including NVIDIA CEO Jensen Huang, have
            described this direction as a future where AI-driven systems
            “assemble” solutions dynamically—often through coordinated agents
            and model services—rather than relying only on fixed, manually
            written interfaces. In this view, software becomes more personal,
            more situational, and sometimes even ephemeral: generated when
            needed, then adapted or replaced as the task changes.
          </p>

          <p className="mt-3 text-neutral-300">
            Kramio is built for that future. Your work is organized into
            context-aware tiles, your information is handled securely, and you
            can evaluate multiple models in parallel—so you can generate
            high-quality outputs on demand, with governance and continuity.
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
