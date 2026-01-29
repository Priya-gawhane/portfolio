const projects = [
  {
    title: "Breast Cancer Prediction Web App",
    tech: "Django + Vue.js + CNN + Random Forest",
    desc: "Cancer prediction platform with chatbot assistant and REST APIs.",
  },
  {
    title: "Weather Forecast Web App",
    tech: "Flask + OpenWeather API",
    desc: "Real-time weather webapp with responsive frontend.",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-purple-400 text-sm mt-1">{p.tech}</p>
            <p className="text-gray-300 mt-3">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
