import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { Reveal, Decor } from "./Motion";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
import { tone } from "../tones";
import { Camera, Computer, Sparkle, Leaf, Flower, FilmRoll } from "./Doodles";
import { CornerCluster } from "./Botanicals";
import { flow } from "../theme";

// One doodle per frame, chosen by project order.
const art = [
  (p) => <Computer size={96} {...p} />,
  (p) => <Sparkle size={84} {...p} />,
  (p) => <Leaf size={64} {...p} />,
  (p) => <Camera size={112} {...p} />,
  (p) => <Flower size={80} {...p} />,
];

// How the frames are laid out on the strips: [first three, last two].
const strips = [
  { items: [0, 1, 2], rotate: "md:-rotate-[1.4deg]", offset: "" },
  { items: [3, 4], rotate: "md:rotate-[1deg]", offset: "md:ml-[12%] md:w-[78%]" },
];
const frameTilt = ["md:rotate-[1.5deg]", "md:-rotate-[2deg]", "md:rotate-[1deg]", "md:-rotate-[1.5deg]", "md:rotate-[2deg]"];

function Frame({ project, index, onOpen }) {
  const t = tone(project.tone);
  return (
    <button
      type="button"
      onClick={() => onOpen(project, index)}
      aria-haspopup="dialog"
      aria-label={`Open details for ${project.title}`}
      className={`film-frame group relative flex-1 text-left bg-cream border-[3px] border-ink p-2.5 pb-3 ${frameTilt[index]} cursor-pointer`}
    >
      {/* the "photograph" */}
      <div className={`relative aspect-[4/3] ${t.bg} border-2 border-ink overflow-hidden flex items-center justify-center`}>
        <span
          className="absolute -left-1 -bottom-5 font-display text-[7rem] leading-none text-cream/60 select-none"
          aria-hidden="true"
        >
          {project.number}
        </span>
        <span className="relative">{art[index]()}</span>
        <span className="absolute top-2 right-2 font-type text-[10px] bg-cream border border-ink px-1.5 py-0.5 uppercase tracking-wider">
          {project.status}
        </span>

        {/* hover / focus preview */}
        <span
          className="absolute inset-0 bg-cream/95 p-4 flex flex-col justify-center gap-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-300"
          aria-hidden="true"
        >
          <span className="text-sm leading-snug">{project.short}</span>
          <span className="font-type text-xs uppercase tracking-widest text-ink underline decoration-brick decoration-2 underline-offset-4">View details →</span>
        </span>
      </div>

      {/* caption on the white border */}
      <div className="mt-2.5 flex items-start gap-2">
        <span className="font-type text-xs mt-1 shrink-0 text-ink/70">{project.number}</span>
        <h3 className="font-body font-bold text-[0.95rem] leading-snug line-clamp-3">{project.title}</h3>
      </div>
      <p className="md:hidden font-type text-[11px] uppercase tracking-widest mt-2 text-ink/70">Tap to open →</p>
    </button>
  );
}

function FilmStrip({ strip, onOpen }) {
  return (
    <div className={`relative ${strip.rotate} ${strip.offset}`}>
      <div className="bg-dust border-y-4 border-ink/80 px-3 md:px-5 py-3 shadow-[6px_8px_0_rgba(53,51,46,0.22)]">
        <div className="film-holes h-4 mb-3 opacity-90" aria-hidden="true" />
        <div className="flex flex-col md:flex-row gap-6 md:gap-5 py-1">
          {strip.items.map((i) => (
            <Reveal key={projects[i].id} delay={i * 0.14} className="flex flex-1">
              <Frame project={projects[i]} index={i} onOpen={onOpen} />
            </Reveal>
          ))}
        </div>
        <div className="film-holes h-4 mt-3 opacity-90" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const open = useCallback((project) => setSelected(project), []);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="projects" className="flow grain relative pt-20 pb-44 md:py-32 overflow-hidden" style={flow("projects")}>
      <Decor className="top-14 left-[3%] hidden 2xl:block" speed={0.04} rotate={-8}>
        <FilmRoll size={96} />
      </Decor>
      <Decor className="top-24 right-4 md:right-[4%]" speed={0.04} rotate={10} origin="top right">
        <Camera size={140} body="#8298A5" />
      </Decor>
      <Decor className="bottom-0 right-0" speed={0.015} float={false} origin="bottom right">
        <CornerCluster corner="br" />
      </Decor>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading label="Page 04 · The Gallery" title="Projects" underline="developed, framed, and hung up" botanical="maple" />

        <Reveal>
          <p className="font-type text-sm md:text-base max-w-xl mb-12 leading-relaxed">
            Each frame is one project. Hover over a frame for a quick preview, and click it to see the full story.
          </p>
        </Reveal>

        <div className="space-y-12 md:space-y-16">
          {strips.map((s, i) => (
            <FilmStrip key={i} strip={s} onOpen={open} />
          ))}
        </div>

        <div className="flex justify-end mt-10 items-center gap-3">
          <span className="font-hand text-2xl text-ink/80 -rotate-2">more frames on the way…</span>
          <Sparkle size={30} />
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal key={selected.id} project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
