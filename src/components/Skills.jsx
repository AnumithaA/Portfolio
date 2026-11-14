import { skillGroups } from "../data/skills";
import { Reveal, Decor } from "./Motion";
import SectionHeading from "./SectionHeading";
import { tone } from "../tones";
import { Computer, Star } from "./Doodles";
import { CornerCluster } from "./Botanicals";
import { flow } from "../theme";

// Skills as index cards inside a retro computer window. No bars, no percentages.
export default function Skills() {
  return (
    <section id="skills" className="flow grain relative pt-20 pb-44 md:py-28 overflow-hidden" style={flow("skills")}>
      <Decor className="top-14 right-4 md:right-[5%]" speed={0.04} rotate={6} origin="top right">
        <Computer size={140} />
      </Decor>
      <Decor className="bottom-0 right-0" speed={0.015} float={false} origin="bottom right">
        <CornerCluster corner="br" />
      </Decor>
      <Decor className="bottom-12 left-[3%] hidden md:block" speed={0.05} rotate={0} float={false}>
        <Star size={34} />
      </Decor>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading label="Page 03 · Skills" title="Toolbox" underline="things I like to use" botanical="pine" />

        <Reveal>
          <div className="bg-cream border-[3px] border-ink shadow-[8px_8px_0_rgba(53,51,46,0.25)]">
            {/* title bar */}
            <div className="flex items-center justify-between bg-sage border-b-[3px] border-ink px-4 py-2">
              <span className="font-type text-sm uppercase tracking-widest">skills.txt</span>
              <span className="flex gap-2" aria-hidden="true">
                <span className="w-3.5 h-3.5 border-2 border-ink bg-mustard" />
                <span className="w-3.5 h-3.5 border-2 border-ink bg-cream" />
                <span className="w-3.5 h-3.5 border-2 border-ink bg-brick" />
              </span>
            </div>

            <div className="p-5 md:p-8 grid md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-7">
              {skillGroups.map((group, gi) => {
                const t = tone(group.color);
                // 5 groups: first two wide, last three narrower on large screens
                const span = gi < 2 ? "lg:col-span-3" : "lg:col-span-2";
                const tilt = ["-rotate-[0.8deg]", "rotate-[0.6deg]", "rotate-[0.9deg]", "-rotate-[0.5deg]", "rotate-[0.7deg]"][gi % 5];
                return (
                  <Reveal key={group.id} delay={gi * 0.08} className={span}>
                    <section
                      aria-labelledby={`skills-${group.id}`}
                      className={`h-full bg-paper border-2 border-ink ${tilt} hover:rotate-0 transition-transform duration-300`}
                    >
                      <div className={`${t.bg} border-b-2 border-ink px-4 py-2.5`}>
                        <h3 id={`skills-${group.id}`} className="font-display uppercase text-lg md:text-xl text-ink">
                          {group.title}
                        </h3>
                      </div>
                      <ul className="p-4 flex flex-wrap gap-2.5">
                        {group.skills.map((s) => (
                          <li
                            key={s}
                            className={`font-type text-sm px-3 py-1.5 border-2 border-ink rounded-full bg-cream ${t.hover} transition-colors`}
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
