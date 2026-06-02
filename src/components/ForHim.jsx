const problems = [
  {
    roman: 'I.',   head: 'Scalp dryness and dandruff',
    copy: "An estimated 70%+ of Nigerian men struggle with chronic scalp dryness or dandruff. They buy anti-dandruff shampoo and it comes back within days — because they're treating the symptom, not the cause. EVOLVE identifies the root: is it scalp type? Water hardness? Product buildup? The Hair ID quiz answers this and maps the solution.",
  },
  {
    roman: 'II.',  head: 'Receding hairlines and edge thinning',
    copy: "Traction from tight braids, dreadlock maintenance, and fade cuts done on already-stressed scalps leads to hairline recession in Nigerian men as young as their 20s. Most don't know it's preventable. EVOLVE maps the tools, techniques, and routine adjustments that stop it before it becomes permanent.",
  },
  {
    roman: 'III.', head: 'Loc health and growth stagnation',
    copy: "Men with locs often find their hair growing slowly, thinning at the roots, or breaking mid-shaft — and they have no personalised guidance on why. EVOLVE builds loc-specific routines matched to the individual's porosity and scalp type. Not YouTube tutorials for someone else's hair. A plan built for theirs.",
  },
  {
    roman: 'IV.',  head: 'Relaxer transition with no roadmap',
    copy: "More Nigerian men are transitioning away from relaxers — but the journey without guidance is brutal. Breakage at the line of demarcation, scalp sensitivity, and no idea which products to use creates setbacks that send men back to the creamy crack. EVOLVE is the only brand providing a Hair ID-matched transition roadmap for men.",
  },
];

export default function ForHim() {
  return (
    <section className="bg-slate relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(180,140,50,0.07)_0%,transparent_60%),radial-gradient(ellipse_40%_60%_at_10%_80%,rgba(194,98,45,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-[1080px] mx-auto relative z-10">

        {/* Headline block */}
        <div className="px-10 pt-[120px] pb-20 border-b border-[rgba(180,140,50,0.1)] relative">
          <div className="absolute bottom-[-12px] left-10 text-[9px] tracking-[0.4em] uppercase text-terra bg-slate px-3">— For Him</div>
          <span className="r text-[10px] tracking-[0.4em] uppercase text-terra block mb-5">For Him</span>
          <h2 className="r font-display font-light text-[clamp(48px,9vw,112px)] leading-[0.94] text-cream mb-5">
            His crown<br />was never<br />the <em className="italic text-terra">problem.</em>
          </h2>
          <p className="r font-display italic text-[clamp(20px,3vw,32px)] text-gold/80">Nobody just taught him how to care for it.</p>
        </div>

        {/* Truth */}
        <div className="r px-10 py-[72px] border-b border-[rgba(180,140,50,0.08)]">
          <p className="font-display italic font-light text-[clamp(19px,2.8vw,28px)] text-cream/20 leading-[1.7] max-w-[780px]">
            The Nigerian man has been sold shampoo, pomade, and silence. No brand has ever sat with him and asked: what is your scalp type? What is your porosity? What does your hair actually need to grow and thrive? EVOLVE is the first to ask — and the first to answer with a system built around his Hair ID.
          </p>
        </div>

        {/* Problems */}
        <div className="px-10 py-20 border-b border-[rgba(180,140,50,0.08)]">
          <p className="r text-[10px] tracking-[0.38em] uppercase text-[rgba(180,140,50,0.6)] mb-10 block">What Nigerian men actually deal with — and nobody talks about</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[rgba(180,140,50,0.1)] border border-[rgba(180,140,50,0.1)]">
            {problems.map((p, i) => (
              <div key={i} className={`r d${i + 1} bg-slate px-8 py-10 hover:bg-[rgba(20,36,26,0.9)] transition-colors duration-300`}>
                <span className="font-display text-[28px] text-terra mb-4 block leading-none">{p.roman}</span>
                <div className="font-display text-[24px] font-normal text-cream mb-3">{p.head}</div>
                <p className="text-[13.5px] leading-[1.8] text-cream/52">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promise */}
        <div className="px-10 py-20 pb-[120px]">
          <div className="max-w-[680px] mx-auto text-center">
            <p className="r font-display italic font-light text-[clamp(20px,3vw,30px)] text-cream/20 leading-[1.55] mb-11">
              "Hair care was never just for women. EVOLVE was built for everyone whose hair was never given the guidance it deserved — and that includes him."
            </p>
            <a href="/program" className="r inline-block font-sans text-[11px] font-medium tracking-[0.28em] uppercase no-underline px-10 py-[17px] bg-transparent text-cream/70 border border-cream/22 transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-1">
              Join the Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 