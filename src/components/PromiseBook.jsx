export function Promise() {
  return (
    <section className="bg-deep py-[100px] px-10">
      <div className="max-w-[760px] mx-auto text-center">
        <h3 className="r font-display italic font-light text-[clamp(22px,3.5vw,38px)] leading-[1.45] text-cream mb-9">
          "We don't sell you a product and disappear. We walk the whole journey with you — and we only take 10 people at a time, because that is what real guidance requires."
        </h3>
        <p className="r text-[16px] leading-[1.9] text-cream/62">
          EVOLVE was built on one belief: the right routine makes all the difference — and that routine can only be built with real knowledge about your real hair. This programme gives every woman and man the guidance they were never given growing up. Not generic. Not guesswork. Yours. Always.
        </p>
      </div>
    </section>
  );
}

export function Book() {
  return (
    <section className="bg-terra py-[120px] px-10 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />
      <div className="max-w-[640px] mx-auto relative z-10">
        <div className="r inline-flex items-center gap-[10px] bg-black/20 px-5 py-2 mb-8 text-[12px] text-cream/80 tracking-[0.06em]">
          <div className="w-2 h-2 rounded-full bg-cream animate-pulse-dot shrink-0" />
          <span>7 of 10 spots remaining in this cohort</span>
        </div>
        <span className="r text-[10px] tracking-[0.4em] uppercase text-cream/70 block mb-5">You're Ready</span>
        <h2 className="r font-display font-light text-[clamp(40px,8vw,96px)] leading-[0.97] text-cream mb-7">
          Your hair is<br />ready to<br /><em className="italic text-goldl">evolve.</em>
        </h2>
        <p className="r text-[16px] leading-[1.85] text-cream/82 mb-12">
          Book your free first session. No cost, no commitment — just an honest conversation about your hair and where you want it to go. When the 10 spots fill, the cohort closes.
        </p>
        <a href="https://wa.me/YourNumberHere" target="_blank" rel="noreferrer"
          className="r inline-block font-sans text-[11px] font-medium tracking-[0.28em] uppercase no-underline px-14 py-[18px] bg-deep text-cream transition-all duration-300 hover:bg-warm hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
          Book My Free Session →
        </a>
        <p className="r mt-5 text-[12px] tracking-[0.04em] text-cream/55 leading-[1.7]">
          Free first session · ₦15,000/month for 2 months · 50% product discount included · Only 10 spots
        </p>
      </div>
    </section>
  );
}