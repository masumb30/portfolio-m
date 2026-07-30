import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    // <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      <div className="min-h-screen bg-gray-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
