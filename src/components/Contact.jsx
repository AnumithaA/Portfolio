import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { contact, socials, profile } from "../data/profile";
import { Reveal, Decor } from "./Motion";
import SectionHeading from "./SectionHeading";
import LinkButton from "./LinkButton";
import { Envelope, Stamp, Flower } from "./Doodles";
import { Botanical, CornerCluster } from "./Botanicals";
import { flow } from "../theme";

const icons = { github: Github, linkedin: Linkedin };

// The form opens the visitor's own mail app with a pre-filled message (mailto:).
// No server or account is needed.
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = `Hello from ${form.name || "your portfolio"}`;
    const body = `${form.message}\n\n- ${form.name}\n${form.email}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full bg-cream border-2 border-ink px-4 py-3 font-body text-base placeholder:text-ink/50 focus:bg-white";

  return (
    <section id="contact" className="flow grain relative pt-20 md:pt-28 pb-12 overflow-hidden" style={flow("contact")}>
      <Decor className="top-0 right-0" speed={0.015} float={false} origin="top right">
        <CornerCluster corner="tr" />
      </Decor>
      <Decor className="bottom-[30%] left-[2%] hidden xl:block" speed={0.05} rotate={-8}>
        <Stamp size={90} />
      </Decor>
      <Decor className="bottom-[34%] right-[2%] hidden xl:block" speed={0.05} rotate={-10}>
        <Flower size={70} />
      </Decor>

      <div className="relative max-w-5xl mx-auto px-5 md:px-8">
        <SectionHeading label="Back cover · Contact" title="Say hello" underline="drop me a letter" botanical="fern" />

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-start">
          {/* left: address card */}
          <Reveal>
            <div className="relative bg-cream border-2 border-ink p-7 -rotate-1 shadow-[6px_6px_0_rgba(53,51,46,0.22)]">
              <div className="flex justify-between items-start gap-4" aria-hidden="true">
                <Envelope size={92} />
                <span className="font-type text-[10px] uppercase tracking-widest border-2 border-brick text-brick px-2 py-1 rotate-6 mt-1">
                  Handle with care
                </span>
              </div>

              <p className="mt-6 text-lg leading-relaxed">{contact.closingMessage}</p>

              <a
                href={`mailto:${contact.email}`}
                className="mt-5 inline-flex items-center gap-2 font-type text-base md:text-lg break-all scribble-underline hover:text-brick transition-colors"
              >
                <Mail size={20} aria-hidden="true" />
                {contact.email}
              </a>

              <div className="mt-7 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <LinkButton key={s.id} url={s.url} icon={icons[s.id]} className="bg-paper hover:bg-mustard/40">
                    {s.label}
                  </LinkButton>
                ))}
              </div>
            </div>
          </Reveal>

          {/* right: form */}
          <Reveal delay={0.12}>
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label htmlFor="c-name" className="font-type text-xs uppercase tracking-[0.25em] block mb-2">
                  Your name
                </label>
                <input id="c-name" className={field} required autoComplete="name" value={form.name} onChange={update("name")} placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="c-email" className="font-type text-xs uppercase tracking-[0.25em] block mb-2">
                  Your email
                </label>
                <input id="c-email" type="email" className={field} required autoComplete="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="c-msg" className="font-type text-xs uppercase tracking-[0.25em] block mb-2">
                  Message
                </label>
                <textarea id="c-msg" rows={5} className={`${field} resize-y`} required value={form.message} onChange={update("message")} placeholder="Write your letter here…" />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-ink text-paper font-type uppercase tracking-widest text-sm px-7 py-3.5 rounded-full border-2 border-ink hover:bg-brick hover:border-brick transition-colors"
              >
                <Send size={16} aria-hidden="true" />
                Open in my email app
              </button>
              <p className="font-type text-xs text-ink/75" role="status" aria-live="polite">
                {sent
                  ? "Your email app should have opened. If it didn't, write to me at the address on the left."
                  : "This opens your email app with the message ready to send."}
              </p>
            </form>
          </Reveal>
        </div>

        {/* footer */}
        <div className="mt-20 pt-6 border-t-2 border-dashed border-ink/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <Botanical kind="fern" size={80} />
          <p className="font-hand text-2xl">The end. Thanks for reading!</p>
          <p className="font-type text-xs uppercase tracking-widest">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </div>
    </section>
  );
}
