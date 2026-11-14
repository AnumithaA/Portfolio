import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  const reduce = useReducedMotion();
  const [loading, setLoading] = useState(true);

  // Short camera-shutter intro. Skipped for visitors who prefer reduced motion.
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), reduce ? 0 : 1400);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && !reduce && <Loader key="loader" />}</AnimatePresence>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-ink focus:text-paper focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </MotionConfig>
  );
}
