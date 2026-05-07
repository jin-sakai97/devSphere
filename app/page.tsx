export default function DevSphereHomepage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
              Real Time Collaborative Developer Workspace
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Build, Study &
              <span className="block text-gray-300">Collaborate Smarter</span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              DevSphere combines collaborative coding, secure voice rooms, AI
              research assistance, whiteboards, and live project workflows into
              one powerful developer workspace.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-2xl bg-white text-black font-semibold shadow-lg">
                Launch Workspace
              </button>
              <button className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition">
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-2xl font-bold">Live</h3>
                <p className="text-sm text-gray-400">Code Collaboration</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Secure</h3>
                <p className="text-sm text-gray-400">Audio Study Rooms</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">AI</h3>
                <p className="text-sm text-gray-400">Research Assistant</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center text-gray-500 text-lg">
              DevSphere Workspace Preview
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-16 py-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Everything Developers Need
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Collaborative IDE",
                desc: "Real time coding with Monaco Editor, multi user cursors, code execution, and version history.",
              },
              {
                title: "Voice + Whiteboard",
                desc: "Secure WebRTC voice rooms with tldraw powered whiteboards for DSA and system design discussions.",
              },
              {
                title: "AI Research Engine",
                desc: "Get coding help, debugging support, startup idea validation, and project research using AI workflows.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-5xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One Workspace. Infinite Possibilities.
          </h2>
          <p className="text-gray-400 mb-8">
            From interview prep to startup building, DevSphere helps teams code,
            communicate, and execute faster with AI powered collaboration.
          </p>
          <button className="px-8 py-3 rounded-2xl bg-white text-black font-semibold shadow-lg">
            Start Building
          </button>
        </div>
      </section>
    </main>
  );
}
