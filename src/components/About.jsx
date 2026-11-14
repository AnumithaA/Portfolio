import { BookOpen } from "lucide-react";
import { profile } from "../data/profile";
import { Reveal, Decor } from "./Motion";
import SectionHeading from "./SectionHeading";
import { Daisy, Paperclip, Pencil, Star } from "./Doodles";
import { CornerCluster, QuestionMark } from "./Botanicals";
import { flow } from "../theme";

// Small doodle for each polaroid, chosen by label.
function PolaroidArt({ label }) {
  const l = label.toLowerCase();
  if (l === "art") return <Pencil size={90} />;
  if (l === "craft") return <Star size={64} fill="#B76E5B" />;
  if (l === "crochet") return <Daisy size={70} />;
  return <BookOpen size={58} strokeWidth={2.2} color="#35332E" aria-hidden="true" />;
}

const polaroidBg = ["bg-mustard/60", "bg-sky/50", "bg-brick/40", "bg-sage/70"];
const tilts = ["-rotate-3", "rotate-2", "rotate-3", "-rotate-2"];

export default function About() {
  return (
    <section id="about" className="flow grain relative py-20 md:py-28 overflow-hidden" style={flow("about")}>
      <Decor className="top-0 right-0" speed={0.015} float={false} origin="top right">
        <CornerCluster corner="tr" />
      </Decor>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading label="Page 01 · About" title="About me" underline="a little scrapbook page" botanical="wildflower" />

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-start">
          {/* journal page */}
          <Reveal>
            <div className="relative -rotate-1 bg-cream border-2 border-ink/80 rounded-sm p-7 md:p-10 shadow-[6px_6px_0_rgba(53,51,46,0.25)]">
              <div className="absolute -top-4 left-10 w-24 h-7 bg-mustard/70 rotate-[-4deg] border border-ink/20" aria-hidden="true" />
              <div className="absolute -top-8 right-8" aria-hidden="true">
                <Paperclip size={30} />
              </div>

              <p className="font-type text-xs uppercase tracking-[0.25em] text-ink/60 mb-5">Dear reader,</p>
              <div className="space-y-5 text-[1.05rem] leading-[1.9] font-body">
                {profile.aboutParagraphs.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-xl font-medium" : ""}>
                    {p}
                  </p>
                ))}
              </div>
              <p className="font-hand text-3xl text-brick mt-6 text-right">- {profile.firstName}</p>
            </div>

            <div className="flex items-center gap-4 mt-8 ml-4 md:ml-10 text-ink/80">
              <QuestionMark size={46} />
              <span className="font-hand text-2xl -rotate-2">a machine that learns, with no brain!</span>
            </div>
          </Reveal>

          {/* polaroid hobbies */}
          <div>
            <Reveal>
              <p className="font-type text-xs uppercase tracking-[0.25em] mb-6">Outside of code, I like…</p>
            </Reveal>
            <div className="grid grid-cols-2 gap-5 sm:gap-7">
              {profile.likes.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.12}>
                  <figure
                    className={`bg-cream p-3 pb-4 border border-ink/30 shadow-[4px_5px_0_rgba(53,51,46,0.22)] ${tilts[i % 4]} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
                  >
                    <div className={`aspect-square flex items-center justify-center ${polaroidBg[i % 4]} border border-ink/20`}>
                      <PolaroidArt label={item.label} />
                    </div>
                    <figcaption className="mt-3 text-center">
                      <span className="font-hand text-3xl leading-none block">{item.label}</span>
                      <span className="font-type text-[11px] uppercase tracking-wider text-ink/70">{item.note}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
