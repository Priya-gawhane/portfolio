import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}