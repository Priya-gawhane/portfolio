export default function Skills() {
  const skills = [
    "Python",
    "FastAPI",
    "Django",
    "REST APIs",
    "LLM Integration",
    "LangChain",
    "Agentic AI Systems",
    "RAG Pipelines",
    "ChromaDB / Vector DBs",
    "MongoDB",
    "JWT Authentication",
    "Full-Stack Development",
  ];

  return (
    <section className="py-20 px-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>

      {/* Short Description */}
      <p className="text-gray-300 text-lg mb-10 leading-relaxed">
        I mostly work on{" "}
        <span className="text-white font-semibold">
          LLM integration, GenAI workflows, and Agentic AI systems
        </span>
        — building intelligent backend solutions with modern tools.
        <br />
        I’m also a{" "}
        <span className="text-purple-400 font-semibold">
          fast learner
        </span>{" "}
        who enjoys exploring new technologies and shipping real products.
      </p>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill}
            style={{
              animationDelay: `${index * 0.05}s`,
            }}
            className="px-5 py-2 rounded-2xl bg-gray-900 text-gray-200 
                       hover:bg-purple-500 hover:text-white 
                       transition duration-300 ease-in-out
                       transform hover:scale-105
                       animate-fadeUp"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
