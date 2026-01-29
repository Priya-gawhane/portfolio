export default function Contact() {
  return (
    <section className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <p className="text-gray-300 mb-8 text-lg">
        Let’s connect and build something impactful together.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        {/* Email Button */}
        <a
          href="mailto:priyagawhane75@gmail.com"
          className="px-6 py-3 bg-purple-500 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Email Me
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/priyagawhane"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-white rounded-xl font-semibold hover:bg-white hover:text-black transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
