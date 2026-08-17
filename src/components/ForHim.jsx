import { Link } from 'react-router-dom';

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

        {/* ── The Masculinity Paradox ── */}
        <div className="px-10 py-24 border-b border-[rgba(180,140,50,0.08)] relative overflow-hidden">
          <div className="absolute -right-32 top-0 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(194,98,45,0.10)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <span className="r text-[10px] tracking-[0.38em] uppercase text-[rgba(180,140,50,0.7)] block mb-6">The Irony Nobody Explains</span>
                  <h3 className="r font-display font-light text-[clamp(32px,5.5vw,58px)] leading-[1.08] text-cream mb-9 max-w-[820px]">
              The same thing that makes him <em className="italic text-terra">more of a man</em> is often the same thing<br className="hidden sm:block" /> taking his hair.
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
              <div>
                <p className="r text-[16px] leading-[1.95] text-cream/55 mb-6 max-w-[560px]">
                  Testosterone builds the beard, the frame, the voice that drops an octave. But converted in the scalp, that same hormone becomes DHT — and for a lot of men, DHT is exactly what shrinks the follicle that used to hold a full head of hair. The more dominant the hormone, the more vulnerable the hairline. Nobody hands a man that fact when he's twenty-two and just starting to notice his temples.
                </p>
                <p className="r text-[16px] leading-[1.95] text-cream/55 max-w-[560px]">
                  So he's left thinking it's the durag. The pomade. The fade he got last week. He blames the barber, the water, the stress — anything but the truth: this was never a grooming mistake. It's biology working exactly as it's built to. And biology, once you actually understand it, is something you can work with — not something you have to silently lose to.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="border border-[rgba(180,140,50,0.15)] bg-[rgba(20,36,26,0.5)] px-7 py-6">
                  <div className="font-display font-light text-[15px] text-gold mb-2">What's actually happening</div>
                  <p className="text-[13px] leading-[1.8] text-cream/50">
                    DHT sensitivity gradually shrinks certain follicles over time — a process called androgenic thinning. It's genetic, hormonal, and almost never explained to the men going through it.
                  </p>
                </div>
                <div className="border border-[rgba(180,140,50,0.15)] bg-[rgba(20,36,26,0.5)] px-7 py-6">
                  <div className="font-display font-light text-[15px] text-terra mb-2">What EVOLVE won't do</div>
                  <p className="text-[13px] leading-[1.8] text-cream/50">
                    Promise to reverse your genetics. No honest brand can — and any that claims to is selling you a lie dressed up as hope.
                  </p>
                </div>
                <div className="border border-gold/25 bg-gold/5 px-7 py-6">
                  <div className="font-display font-light text-[15px] text-gold mb-2">What EVOLVE does instead</div>
                  <p className="text-[13px] leading-[1.8] text-cream/60">
                    Reads your Hair ID to show you exactly where you stand, then builds the routine that protects what you have and slows what's still in your control — starting now, not after it's already gone.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link
                to="/hair-id"
                className="r inline-block font-sans text-[11px] font-medium tracking-[0.28em] uppercase no-underline px-10 py-[17px] bg-terra text-cream transition-all duration-300 hover:bg-[#a84e20] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(194,98,45,0.28)]"
              >
                Find Out Where You Stand →
              </Link>
            </div>
          </div>
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