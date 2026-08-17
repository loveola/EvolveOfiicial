import { Link } from 'react-router-dom';

export default function ForHer() {
  return (
    <section className="bg-deep py-[120px] px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_50%,rgba(201,146,42,0.08)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start relative z-10">

        {/* Vertical divider between columns — desktop only */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent -translate-x-1/2 pointer-events-none"
        />

        <div>
          {/* Eyebrow + coil motif — a small nod to curl pattern, the thing this whole page is about */}
          <div className="r flex items-center gap-4 mb-5">
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">For Her</span>
            <svg width="72" height="14" viewBox="0 0 72 14" fill="none" className="text-gold/50" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7C1 7 5 1 9 7C13 13 17 1 21 7C25 13 29 1 33 7C37 13 41 1 45 7C49 13 53 1 57 7C61 13 65 1 69 7"
                stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>

          <h2 className="r font-display font-light text-[clamp(36px,6vw,68px)] leading-[1.05] text-cream mb-8">
            She doesn't hate<br />her hair. She hates<br />what the world<br /><em className="italic text-gold">taught her to feel</em><br />when she looked at it.
          </h2>

          <p className="r text-[15px] leading-[1.9] text-cream/25 mb-5">
            Even now — in the age of the natural hair movement — women still straighten before job interviews. Still relax their daughters' hair at eight years old. Still feel quiet panic when rain is forecast. The shame is not vanity. It is survival instinct written into the body across generations.
          </p>
          <p className="r text-[15px] leading-[1.9] text-cream/25 mb-5">
            And even when she decides to go natural, nobody tells her how. The right aisle is overwhelming. Products that don't work for her specific coils. Routines built for someone else's hair. Her hair breaks again, and she wonders if they were right all along.
          </p>
          <p className="r text-[15px] leading-[1.9] text-cream/25 mb-8">
            EVOLVE starts differently — with a Hair ID diagnostic that tells her, in minutes, what her porosity, density, and scalp actually are, instead of what a bottle's marketing assumes. From there, one routine. Not fifteen products guessed at random, but a prepoo treatment mapped to her exact Hair ID, with instructions written for her curl pattern — not a stranger's.
          </p>

          <a href="https://evolvequizapp.vercel.app/"
            className="inline-flex items-center gap-2 font-sans text-[11px] font-medium tracking-[0.28em] uppercase no-underline px-10 py-[17px] bg-transparent text-gold border border-gold/30 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:-translate-y-1">
            Find Her Hair ID <span aria-hidden="true">→</span>
          </a>
         
        </div>

        <div className="r d2 flex flex-col gap-5">
          {[
            { n: '46%', label: 'traction alopecia from styling tension' },
            { n: '80%', label: 'using relaxers linked to hormonal disruption and scalp damage' },
            { n: '∞',   label: 'money spent on products that were never made for her Hair ID' },
          ].map((s, i) => (
            <div key={i}
              className="border border-gold/20 bg-gold/4 px-8 py-7 transition-all duration-300 hover:border-gold/40 hover:bg-gold/6 hover:-translate-y-0.5">
              <div className="font-display font-light text-[52px] text-gold leading-none mb-2">{s.n}</div>
              <div className="text-[13px] leading-relaxed text-cream/60">{s.label}</div>
            </div>
          ))}

          <div className="pt-4 relative">
            <span aria-hidden="true" className="absolute -top-4 -left-1 font-display text-[48px] text-gold/25 leading-none select-none">"</span>
             <p className="font-display italic text-[14px] leading-[1.8] text-cream/70 mb-5 pl-6 border-l border-gold/20">
               EVOLVE gives her the right products, the right tools, and a routine that was built for her hair — not someone else's.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}