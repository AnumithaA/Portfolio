import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, X, Trophy } from "lucide-react";
import { tone } from "../tones";
import LinkButton from "./LinkButton";
import { Sprig } from "./Doodles";

function Block({ label, children }) {
  return (
    <section className="mt-8">
      <h3 className="font-type text-xs uppercase tracking-[0.3em] text-ink/70 mb-3 flex items-center gap-3">
        {label}
        <span className="flex-1 border-t border-dashed border-ink/30" />
      </h3>
      {children}
    </section>
  );
}

export default function ProjectModal({ project, onClose }) {
  const t = tone(project.tone);
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  // Lock page scroll, close on Escape, keep Tab inside the dialog,
  // and give focus back to whatever opened it.
  useEffect(() => {
    const opener = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      opener?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-ink/45"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        className="relative w-full sm:max-w-3xl max-h-[92dvh] overflow-y-auto bg-cream border-[3px] border-ink shadow-[10px_10px_0_rgba(53,51,46,0.3)]"
        initial={{ y: 60, opacity: 0, rotate: -1.5, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {/* contact-sheet header */}
        <div className={`${t.bg} border-b-[3px] border-ink px-5 sm:px-8 pt-6 pb-5 relative`}>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 p-3 bg-cream border-2 border-ink rounded-full hover:bg-mustard transition-colors"
          >
            <X size={18} />
          </button>
          <div className="flex flex-wrap items-center gap-3 pr-12">
            <span className="font-type text-xs bg-cream border-2 border-ink px-2.5 py-1">FRAME {project.number}</span>
            <span className="font-type text-xs bg-cream border-2 border-ink px-2.5 py-1 uppercase tracking-wider">
              {project.status}
            </span>
          </div>
          <h2
            id="project-title"
            className="font-display uppercase text-2xl sm:text-4xl leading-[1.05] mt-4 text-ink pr-6 [text-wrap:balance]"
          >
            {project.title}
          </h2>
        </div>

        <div className="px-5 sm:px-8 pb-8">
          <Block label="Overview">
            <p className="text-lg leading-relaxed">{project.short}</p>
          </Block>

          <Block label="The problem">
            <p className="leading-relaxed text-ink/90">{project.problem}</p>
          </Block>

          <Block label="Approach & implementation">
            <ul className="space-y-3">
              {project.approach.map((a, i) => (
                <li key={i} className="flex gap-3 leading-relaxed">
                  <span className="font-type text-ink/70 shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Key features">
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2 leading-snug">
                  <span aria-hidden="true" className="text-olive font-bold">✦</span>
                  {f}
                </li>
              ))}
            </ul>
          </Block>

          <Block label="Technologies">
            <ul className="flex flex-wrap gap-2.5">
              {project.tech.map((s) => (
                <li key={s} className={`font-type text-sm px-3 py-1.5 border-2 border-ink rounded-full ${t.bg}`}>
                  {s}
                </li>
              ))}
            </ul>
          </Block>

          {project.results.length > 0 && (
            <Block label="Results">
              <ul className="space-y-2">
                {project.results.map((r) => (
                  <li key={r} className="flex gap-3 bg-mustard/35 border-2 border-ink/70 px-4 py-3 leading-snug">
                    <Trophy size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          <div className="mt-9 pt-6 border-t-2 border-ink flex flex-wrap items-center gap-3">
            <LinkButton url={project.github} icon={Github} className="bg-cream hover:bg-mustard/40" soonLabel="repo link coming soon">
              GitHub repository
            </LinkButton>
            {/* Only shown if you add a demo URL in src/data/projects.js */}
            {project.demo && (
              <LinkButton url={project.demo} className="bg-cream hover:bg-mustard/40">
                Live demo
              </LinkButton>
            )}
            <span className="ml-auto hidden sm:block" aria-hidden="true">
              <Sprig size={90} />
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
