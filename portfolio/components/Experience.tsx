export default function Experience() {
  return (
    <section className="py-20 px-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="bg-gray-900 p-6 rounded-2xl mb-6">
        <h3 className="text-xl font-semibold">
          AI/ML Developer — Encegen AI Labs
        </h3>
        <p className="text-gray-400">Aug 2025 – Present</p>

        <ul className="list-disc pl-6 mt-3 text-gray-300">
          <li>Built LLM-powered full-stack applications using RAG pipelines</li>
          <li>Integrated Ollama, Mistral, Hugging Face models</li>
          <li>Used ChromaDB for semantic search + retrieval</li>
        </ul>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl">
        <h3 className="text-xl font-semibold">
          Machine Learning Intern — Codsoft
        </h3>
        <p className="text-gray-400">Jan 2024 – Feb 2024</p>

        <ul className="list-disc pl-6 mt-3 text-gray-300">
          <li>Built classification, recommendation & generative ML models</li>
          <li>Optimized workflows from preprocessing to validation</li>
        </ul>
      </div>
    </section>
  );
}
