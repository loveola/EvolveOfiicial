export default function Pricing() {
  return (
    <section className="bg-warm py-[120px] px-10">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <span className="r text-[10px] tracking-[0.4em] uppercase text-gold block mb-5">Simple &amp; Transparent</span>
          <h2 className="r font-display font-light text-[clamp(36px,6vw,72px)] leading-none text-cream mb-4">
            Start for <em className="italic text-gold">free.</em><br />Transform in 2 months.
          </h2>
          <p className="r text-[15px] leading-[1.85] text-cream/65 max-w-[560px] mx-auto">
            You're not paying for sessions. You're paying for 6+ years of expertise, a system built entirely around your hair, and results that last a lifetime.
          </p>
        </div>

        <div className="r grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-px bg-gold/10">
          {/* Free card */}
          <div className="bg-warm px-10 py-12">
            <span className="text-[9px] tracking-[0.38em] uppercase text-gold block mb-5">Session One</span>
            <div className="font-display font-light text-[64px] text-cream leading-none mb-2">Free</div>
            <div className="text-[12px] text-cream/45 mb-9 tracking-[0.04em]">Your first consultation · No commitment required</div>
            <ul className="list-none flex flex-col gap-3 mb-9">
              {['Deep dive into your Hair ID quiz results','Full hair history assessment','Honest goal-setting conversation','Your personalised starting plan','Open to women and men','Zero pressure to continue'].map(f => (
                <li key={f} className="text-[13px] leading-relaxed text-cream/70 pl-[18px] relative before:content-['—'] before:absolute before:left-0 before:text-gold before:text-[11px]">{f}</li>
              ))}
            </ul>
            <a href="#book" className="block text-center font-sans text-[10px] font-medium tracking-[0.28em] uppercase no-underline px-8 py-[14px] bg-transparent text-cream/70 border border-cream/22 transition-all duration-300 hover:border-gold hover:text-gold">
              Book Free Session
            </a>
          </div>

          {/* Paid card */}
          <div className="bg-warm/80 border border-gold/30 px-10 py-12 relative">
            <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-terra text-cream text-[9px] tracking-[0.3em] uppercase px-[18px] py-[5px] whitespace-nowrap">
              Only 10 Spots
            </div>
            <span className="text-[9px] tracking-[0.38em] uppercase text-gold block mb-5">The 2-Month Intensive</span>
            <div className="font-display font-light text-[64px] text-cream leading-none mb-2">₦15k</div>
            <div className="text-[12px] text-cream/45 mb-9 tracking-[0.04em]">Per month · 2 months · Total ₦30,000</div>
            <ul className="list-none flex flex-col gap-3 mb-9">
              {[
                'Full Hair ID analysis and roadmap document',
                'Complete wash day routine (pre, during, post)',
                'Hair ID-matched product recommendations',
                'Tool recommendations for your hair type',
                'Month-by-month refinement and progress review',
                'WhatsApp support throughout',
                <><strong className="text-gold font-medium">50% discount on all EVOLVE products</strong></>,
                'Goal follow-up after programme graduation',
                'Early access to future EVOLVE launches',
                'Lifetime knowledge — no dependency',
              ].map((f, i) => (
                <li key={i} className="text-[13px] leading-relaxed text-cream/70 pl-[18px] relative before:content-['—'] before:absolute before:left-0 before:text-gold before:text-[11px]">{f}</li>
              ))}
            </ul>
            <a href="#book" className="block text-center font-sans text-[10px] font-medium tracking-[0.28em] uppercase no-underline px-8 py-[14px] bg-terra text-cream transition-all duration-300 hover:bg-[#a84e20] hover:-translate-y-px">
              Secure My Spot
            </a>
            <p className="text-[11px] text-cream/40 mt-4 text-center leading-relaxed">Backed by 6+ years of hair expertise · Limited to 10 people per cohort</p>
          </div>
        </div>
      </div>
    </section>
  );
}