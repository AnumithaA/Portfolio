import { Award, Users } from "lucide-react";
import { achievements } from "../data/achievements";
import { Reveal, Decor } from "./Motion";
import SectionHeading from "./SectionHeading";
import { tone } from "../tones";
import { Star, Daisy } from "./Doodles";
import { CornerCluster } from "./Botanicals";
import { flow } from "../theme";

// Achievements as stuck-in "badges" and ticket stubs. Add items in data/achievements.js.
export default function Achievements() {
  return (
    <section id="achievements" className="flow grain relative pt-20 pb-36 md:py-28 overflow-hidden" style={flow("achievements")}>
      <Decor className="top-0 right-0" speed={0.015} float={false} origin="top right">
        <CornerCluster corner="tr" />
      </Decor>
      <Decor className="bottom-8 right-4 md:right-[6%]" speed={0.04} rotate={10} origin="bottom right">
        <Daisy size={84} />
      </Decor>

      <div className="relative max-w-5xl mx-auto px-5 md:px-8">
        <SectionHeading label="Page 06 · Extras" title="Odds & Ends" underline="certificates and club life" botanical="olive" />

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((a, i) => {
            const Icon = a.kind === "Leadership" ? Users : Award;
            return (
              <Reveal key={a.id} delay={i * 0.12}>
                <article
                  className={`relative h-full bg-cream border-2 border-ink p-6 md:p-7 ${
                    i % 2 === 0 ? "-rotate-1" : "rotate-1"
                  } shadow-[5px_5px_0_rgba(53,51,46,0.22)] hover:rotate-0 transition-transform duration-300`}
                >
                  <span className={`absolute -top-4 -left-3 w-12 h-12 rounded-full border-2 border-ink flex items-center justify-center ${tone(a.color).bg}`}>
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <p className="font-type text-xs uppercase tracking-[0.25em] text-ink/70 pl-8">{a.kind}</p>
                  <h3 className="font-display uppercase text-xl md:text-2xl leading-tight mt-3">{a.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/90">{a.detail}</p>
                  {a.id === "seraphic" && (
                    <p className="font-hand text-2xl text-brick mt-3 flex items-center gap-2">
                      <Star size={20} /> 100+ participants
                    </p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
