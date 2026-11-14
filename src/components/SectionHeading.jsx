import { Reveal } from "./Motion";
import { Botanical } from "./Botanicals";
import { Sparkle } from "./Doodles";

// Typewriter label + oversized display title + a different small plant for each page.
// botanical: wildflower | oak | pine | maple | ginkgo | olive | fern
export default function SectionHeading({ label, title, align = "left", underline, id, botanical = "wildflower" }) {
  const center = align === "center";
  return (
    <Reveal className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="font-type text-xs md:text-sm uppercase tracking-[0.3em] text-ink/80">{label}</span>
        <Sparkle size={18} />
      </div>
      <h2
        id={id}
        className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] uppercase mt-3 text-ink break-words"
      >
        {title}
        {underline && (
          <span
            className={`block font-hand normal-case text-3xl md:text-4xl text-brick mt-2 scribble-underline w-fit ${
              center ? "mx-auto" : ""
            }`}
          >
            {underline}
          </span>
        )}
      </h2>
      <div className={`mt-4 ${center ? "flex justify-center" : ""}`}>
        <Botanical kind={botanical} size={120} />
      </div>
    </Reveal>
  );
}
