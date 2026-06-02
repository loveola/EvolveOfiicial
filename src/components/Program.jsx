const whyMetrics = [
  { num: '6+',   label: 'Years of expertise behind every recommendation' },
  { num: '10',   label: 'Maximum spots — not 100, not 50. Ten.' },
  { num: '100%', label: 'Personalised to your Hair ID — nothing is generic' },
  { num: '50%',  label: 'Discount on all EVOLVE products for programme members' },
];

const months = [
  {
    num: '01', badgeClass: 'bg-terra/20 text-terra', badge: 'Session One · Free',
    title: <><em className="italic text-gold">Discovery</em> Session</>, titlePrefix: 'The ',
    desc: 'Your free first consultation. We go deep on your Hair ID results, your full hair history — relaxers, breakage, loc health, fade damage, past routines — and build honest, achievable goals together. No pressure. Just truth and a real plan. Available to women and men.',
    cardClass: 'bg-warm/50 border-b-2 border-terra',
  },
  {
    num: '02', badgeClass: 'bg-gold/15 text-gold', badge: 'Month 1 · ₦15,000',
    title: <>Your Complete <em className="italic text-gold">Hair Roadmap</em></>,
    desc: 'This is where the transformation begins. You receive your full Hair ID analysis, your personalised routine across all three wash day stages (pre-wash, wash day, post-wash), your product match, your tool recommendations, and your hair growth roadmap with milestone goals set in week one.',
    cardClass: 'bg-deep',
  },
  {
    num: '03', badgeClass: 'bg-gold/15 text-gold', badge: 'Month 2 · ₦15,000',
    title: <>Deep Education, Refinement &amp; <em className="italic text-gold">Lifetime Knowledge</em></>,
    desc: 'Month two goes deeper. Scalp health science, ingredient education, advanced techniques for your hair type, and a full review of your month-one progress. We refine your routine based on real results and ensure you graduate with the knowledge to care for your hair independently — for life.',
    cardClass: 'bg-deep',
  },
];

const incentives = [
  { icon: '💜', title: '50% off all EVOLVE products',       desc: 'Every product recommendation you receive comes with a 50% programme discount. The right products for your Hair ID — at half the price.' },
  { icon: '📋', title: 'Your personal hair roadmap document',desc: 'A full written roadmap covering your Hair ID profile, your routine, your product matches, your tool list, and your 6-month growth goals — yours to keep forever.' },
  { icon: '📲', title: 'WhatsApp support throughout',         desc: 'Direct access between sessions. Ask questions, share progress photos, flag concerns — not left to figure it out alone between appointments.' },
  { icon: '🎯', title: 'Goal follow-up after graduation',     desc: "The relationship doesn't end when the programme does. Your goals are tracked and followed up — because real hair growth takes time, and we don't disappear." },
  { icon: '🔒', title: 'Early access to future EVOLVE launches', desc: 'Programme graduates get first access to new products, app features, and future cohort openings — before anyone else.' },
  { icon: '🌿', title: 'Lifetime education foundation',       desc: "You leave knowing your hair — not just how to manage it today. The knowledge you gain is yours for life. No dependency. Just freedom." },
];

export default function Program() {
  return (
    <section className="bg-deep py-[120px] px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(194,98,45,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-[1080px] mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="r flex items-center justify-between bg-terra/12 border border-terra/25 px-7 py-[14px] mx-auto mb-12 max-w-[600px] gap-5">
            <div className="flex items-center gap-3 text-[13px] text-cream/80">
              <div className="w-2 h-2 rounded-full bg-terra shrink-0 animate-pulse-dot" />
              Only <strong className="text-terra font-medium">10 spots</strong> available per cohort
            </div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-terra whitespace-nowrap">7 spots remaining</span>
          </div>
          <h2 className="r font-display font-light text-[clamp(40px,7vw,90px)] leading-[0.97] text-cream mb-7">
            The EVOLVE<br /><em className="italic text-gold">2-Month</em><br />Intensive
          </h2>
          <p className="r text-[16px] leading-[1.85] text-cream/65 max-w-[680px] mx-auto mb-4">
            You are not just paying for two months. You are accessing over 6 years of hair expertise — compressed into the most personalised, results-driven hair programme available in Nigeria.
          </p>
          <p className="r text-[16px] text-terra italic max-w-[680px] mx-auto">
            This is not a regular consultancy. This is a limited, hands-on transformation programme. When these 10 spots are filled, the cohort closes.
          </p>
        </div>

        {/* Metrics */}
        <div className="r mb-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 border border-gold/10">
          {whyMetrics.map((m, i) => (
            <div key={i} className="bg-deep px-7 py-10 text-center">
              <div className="font-display font-light text-[56px] text-gold leading-none mb-3">{m.num}</div>
              <div className="text-[12px] leading-relaxed text-cream/55">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Month cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10 border border-gold/10 mb-20">
          {months.map((m, i) => (
            <div key={i} className={`r d${i + 1} p-12 px-9 ${m.cardClass}`}>
              <div className="font-display font-light text-[72px] text-gold/15 leading-none mb-4">{m.num}</div>
              <span className={`inline-block text-[9px] tracking-[0.3em] uppercase px-3 py-[5px] mb-5 ${m.badgeClass}`}>{m.badge}</span>
              <h3 className="font-display font-light text-[28px] text-cream mb-4 leading-[1.2]">{m.titlePrefix}{m.title}</h3>
              <p className="text-[14px] leading-[1.8] text-cream/55">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Incentives */}
        <div className="r border border-gold/20 px-12 py-[60px] bg-gold/3">
          <div className="text-center mb-[52px]">
            <span className="text-[9px] tracking-[0.4em] uppercase text-gold block mb-3">Programme Incentives — For the 10 Who Join</span>
            <h3 className="font-display font-light text-[clamp(28px,4vw,44px)] text-cream">What you get beyond the sessions</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {incentives.map((item, i) => (
              <div key={i} className="flex flex-col gap-[10px]">
                <div className="text-[24px]">{item.icon}</div>
                <div className="font-display text-[20px] font-normal text-cream leading-[1.2]">{item.title}</div>
                <div className="text-[13px] leading-[1.75] text-cream/50">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-[60px]">
          <a href="#book"
            className="r inline-block font-sans text-[11px] font-medium tracking-[0.28em] uppercase no-underline px-14 py-[18px] bg-terra text-cream transition-all duration-300 hover:bg-[#a84e20] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(194,98,45,0.28)]">
            Secure My Spot — Free Discovery Session
          </a>
          <p className="r text-[12px] tracking-[0.06em] text-cream/40 mt-5">
            Only 10 spots per cohort · ₦15,000/month for 2 months after your free session · 50% product discount included
          </p>
        </div>
      </div>
    </section>
  );
}