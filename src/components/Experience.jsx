import { Briefcase } from "lucide-react";
import { experience } from "../data/experience";
import { Reveal, Decor } from "./Motion";
import SectionHeading from "./SectionHeading";
import { tone } from "../tones";
import { Paperclip } from "./Doodles";
import { CornerCluster } from "./Botanicals";
import { flow } from "../theme";

// Editorial "column" layout: dates sit in the margin, stories sit in the column.
export default function Experience() {
  return (
    <section id="experience" className="flow grain relative py-20 md:py-28 overflow-hidden" style={flow("experience")}>
      <Decor className="top-0 right-0" speed={0.015} float={false} origin="top right">
        <CornerCluster corner="tr" />
      </Decor>

      <div className="relative max-w-5xl mx-auto px-5 md:px-8">
        <SectionHeading label="Page 05 · Experience" title="Internships" underline="learning on the job" botanical="ginkgo" />

        <div className="space-y-12">
          {experience.map((e, i) => (
            <Reveal key={e.id} delay={0.05}>
              <article className="grid md:grid-cols-[210px_1fr] gap-5 md:gap-10 items-start">
                {/* margin note */}
                <div className="md:text-right md:pt-6">
                  <p className="font-type text-sm uppercase tracking-widest">{e.period}</p>
                  <p className="font-hand text-2xl text-brick mt-1">{e.place}</p>
                </div>

                {/* clipping */}
                <div
                  className={`relative bg-cream border-2 border-ink p-6 md:p-8 ${
                    i % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"
                  } shadow-[6px_6px_0_rgba(53,51,46,0.22)]`}
                >
                  <div className="absolute -top-5 right-8" aria-hidden="true">
                    <Paperclip size={28} />
                  </div>
                  <span className={`inline-flex items-center gap-2 font-type text-xs uppercase tracking-widest border-2 border-ink px-3 py-1 ${tone(e.color).bg}`}>
                    <Briefcase size={14} aria-hidden="true" />
                    Internship
                  </span>
                  <h3 className="font-display uppercase text-2xl md:text-3xl leading-tight mt-4">{e.role}</h3>
                  <p className="font-body font-bold text-lg mt-1">{e.org}</p>
                  <ul className="mt-5 space-y-3">
                    {e.points.map((p, k) => (
                      <li key={k} className="flex gap-3 leading-relaxed">
                        <span aria-hidden="true" className="text-brick font-bold mt-0.5">✦</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
