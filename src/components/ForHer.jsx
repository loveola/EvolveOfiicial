export default function ForHer() {
  return (
    <section className="bg-deep py-[120px] px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_50%,rgba(201,146,42,0.08)_0%,transparent_65%)] pointer-events-none" />
      <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start relative z-10">
        <div>
          <span className="r text-[10px] tracking-[0.4em] uppercase text-gold block mb-5">For Her</span>
          <h2 className="r font-display font-light text-[clamp(36px,6vw,68px)] leading-[1.05] text-cream mb-8">
            She doesn't hate<br />her hair. She hates<br />what the world<br /><em className="italic text-gold">taught her to feel</em><br />when she looked at it.
          </h2>
          <p className="r text-[15px] leading-[1.9] text-cream/25 mb-5">
            Even now — in the age of the natural hair movement — women still straighten before job interviews. Still relax their daughters' hair at eight years old. Still feel quiet panic when rain is forecast. The shame is not vanity. It is survival instinct written into the body across generations.
          </p>
          <p className="r text-[15px] leading-[1.9] text-cream/25">
            And even when she decides to go natural, nobody tells her how. The right aisle is overwhelming. Products that don't work for her specific coils. Routines built for someone else's hair. Her hair breaks again, and she wonders if they were right all along.
          </p>
        </div>

        <div className="r d2 flex flex-col gap-5">
          {[
            { n: '46%', label: 'traction alopecia from styling tension' },
            { n: '80%', label: 'using relaxers linked to hormonal disruption and scalp damage' },
            { n: '∞',   label: 'money spent on products that were never made for her Hair ID' },
          ].map((s, i) => (
            <div key={i} className="border border-gold/20 bg-gold/4 px-8 py-7">
              <div className="font-display font-light text-[52px] text-gold leading-none mb-2">{s.n}</div>
              <div className="text-[13px] leading-relaxed text-cream/60">{s.label}</div>
            </div>
          ))}
          <div className="pt-2">
            <p className="font-display italic text-[14px] leading-[1.8] text-cream/62 mb-5">
              EVOLVE gives her the right products, the right tools, and a routine that was built for her hair — not someone else's.
            </p>
            <a href="#program" className="inline-block font-sans text-[11px] font-medium tracking-[0.28em] uppercase no-underline px-14 py-[18px] bg-terra text-cream transition-all duration-300 hover:bg-[#a84e20] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(194,98,45,0.28)]">
              See the Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}