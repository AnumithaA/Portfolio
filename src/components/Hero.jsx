import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "../data/profile";
import { Camera, Flower, Leaf, Star, Squiggle } from "./Doodles";
import { Decor } from "./Motion";
import { flow } from "../theme";

// Slow, natural typing. Types a phrase, pauses, deletes it, moves to the next.
function useTypewriter(phrases, reduce) {
  const [text, setText] = useState(reduce ? phrases[0] : "");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const full = phrases[index % phrases.length];
    let delay = deleting ? 45 : 95;
    if (!deleting && text === full) delay = 1900;
    if (deleting && text === "") delay = 500;

    const t = setTimeout(() => {
      if (!deleting && text === full) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setIndex((i) => i + 1);
      }
      setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, reduce]);

  return text;
}

export default function Hero() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(profile.typewriterPhrases, reduce);

  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] },
  });

  return (
    <section
      id="top"
      className="flow grain relative min-h-[100svh] overflow-hidden flex"
      style={flow("hero")}
    >
      {/* a few quiet decorations */}
      <Decor className="bottom-8 right-4 sm:bottom-auto sm:top-24 sm:right-[4%]" speed={0.04} rotate={8} origin="bottom right">
        <Camera size={170} />
      </Decor>
      <Decor className="bottom-10 left-4 sm:left-[4%]" speed={0.05} rotate={-10} origin="bottom left">
        <Flower size={84} />
      </Decor>
      <Decor className="top-[38%] right-[30%] hidden md:block" speed={0.03} rotate={0} float={false}>
        <Star size={30} />
      </Decor>
      <Decor className="bottom-12 right-[14%] hidden sm:block" speed={0.05} rotate={25}>
        <Leaf size={56} />
      </Decor>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-5 md:px-8 pt-28 pb-16 flex flex-col justify-center">
        {/* magazine masthead */}
        <motion.div
          {...rise(0.05)}
          className="flex items-center gap-4 border-y-2 border-ink py-2 font-type text-[11px] sm:text-xs uppercase tracking-[0.25em]"
        >
          <span>The Portfolio Edition</span>
          <span className="flex-1 border-t border-dashed border-ink/50" />
          <span>AI &amp; ML</span>
        </motion.div>

        <motion.p {...rise(0.15)} className="font-hand text-3xl md:text-4xl text-brick mt-10 md:mt-14">
          Hello, welcome in!
        </motion.p>

        <motion.h1
          {...rise(0.25)}
          className="font-display uppercase text-ink leading-[0.88] text-[length:min(11rem,13.5vw)] tracking-tight"
        >
          Anumitha
          <span className="block text-olive pl-[6vw] md:pl-24">Asokan</span>
        </motion.h1>

        <motion.div {...rise(0.4)} className="mt-6 md:mt-8 max-w-xl">
          <p className="font-body text-lg md:text-xl leading-relaxed">
            <span className="marker">{profile.tagline}</span>
          </p>

          {/* typewriter */}
          <p className="font-type mt-5 text-base md:text-lg" aria-label={`Interests: ${profile.typewriterPhrases.join(", ")}`}>
            <span className="text-ink/70">currently into: </span>
            <span aria-hidden="true">
              {typed}
              <span className="caret" />
            </span>
          </p>

          <p className="mt-5 text-ink/80 leading-relaxed">{profile.intro}</p>
        </motion.div>

        <motion.div {...rise(0.55)} className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-ink text-paper font-type uppercase tracking-widest text-sm px-6 py-3.5 rounded-full border-2 border-ink hover:bg-olive hover:border-olive transition-colors"
          >
            Explore My Work
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={profile.resumePath}
            download={profile.resumeFileName}
            className="inline-flex items-center gap-2 bg-transparent text-ink font-type uppercase tracking-widest text-sm px-6 py-3.5 rounded-full border-2 border-ink hover:bg-mustard/50 transition-colors"
          >
            <Download size={16} />
            Get My Resume
          </a>
        </motion.div>

        <motion.div {...rise(0.7)} className="mt-12 hidden sm:block">
          <Squiggle width={150} />
        </motion.div>
      </div>
    </section>
  );
}
