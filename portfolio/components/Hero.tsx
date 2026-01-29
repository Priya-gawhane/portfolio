export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold">
        Hi, I’m <span className="text-purple-400">Priya Gawhane</span>
      </h1>

      <p className="mt-4 text-xl text-gray-300 max-w-xl">
        AI/ML Developer building intelligent full-stack applications using
        LangChain, RAG, FastAPI, and Vector Databases.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="https://github.com/Priya-gawhane"
          className="px-6 py-3 bg-white text-black rounded-xl font-semibold"
        >
          GitHub
        </a>

        <a
          href="/resume.pdf"
          className="px-6 py-3 border border-white rounded-xl"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
