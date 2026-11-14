import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import { Reveal, Decor } from "./Motion";
import SectionHeading from "./SectionHeading";
import { tone } from "../tones";
import { Flower } from "./Doodles";
import { CornerCluster } from "./Botanicals";
import { flow } from "../theme";

export default function Education() {
  return (
    <section id="education" className="flow grain relative pt-20 pb-44 md:py-28 overflow-hidden" style={flow("education")}>
      <Decor className="bottom-0 left-0" speed={0.015} float={false} origin="bottom left">
        <CornerCluster corner="bl" />
      </Decor>
      <Decor className="bottom-10 right-4 sm:right-[7%]" speed={0.04} rotate={-8} origin="bottom right">
        <Flower size={84} />
      </Decor>

      <div className="relative max-w-4xl mx-auto px-5 md:px-8">
        <SectionHeading label="Page 02 · Education" title="Schooling" underline="where it all began" botanical="oak" />

        <ol className="relative border-l-4 border-dotted border-ink/40 ml-3 md:ml-6 space-y-10">
          {education.map((e, i) => (
            <li key={e.id} className="relative pl-8 md:pl-12">
              <span
                className={`absolute -left-[14px] top-3 w-6 h-6 rounded-full border-[3px] border-ink ${tone(e.color).bg}`}
                aria-hidden="true"
              />
              <Reveal delay={i * 0.12}>
                <article
                  className={`relative bg-cream border-2 border-ink p-6 md:p-8 ${
                    i % 2 === 0 ? "-rotate-[0.8deg]" : "rotate-[0.8deg]"
                  } shadow-[5px_5px_0_rgba(53,51,46,0.22)]`}
                >
                  {/* ticket-style dashed inner border */}
                  <div className="absolute inset-2 border border-dashed border-ink/35 pointer-events-none" aria-hidden="true" />
                  <div className="relative flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-type text-xs uppercase tracking-[0.25em] text-ink/70 flex items-center gap-2">
                        <GraduationCap size={16} aria-hidden="true" />
                        {e.place}
                      </p>
                      <h3 className="font-display text-2xl md:text-3xl uppercase leading-tight mt-2">{e.school}</h3>
                      <p className="mt-2 text-lg font-medium">{e.degree}</p>
                    </div>
                    {e.period && (
                      <span className={`font-type text-sm px-3 py-1 border-2 border-ink rounded-full ${tone(e.color).bg}`}>
                        {e.period}
                      </span>
                    )}
                  </div>
                  <p className="relative mt-4 font-hand text-3xl text-brick">{e.score}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
