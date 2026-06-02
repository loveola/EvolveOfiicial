import { useState } from 'react';

const pillars = [
  {
    icon: '🧬',
    title: 'Hair ID Discovery',
    desc: "Born from years of trial, error, and confusion — we identify your scalp type, porosity, density, and strand behavior so you finally understand your hair instead of guessing."
  },
  {
    icon: '🔍',
    title: 'Clarity Over Trends',
    desc: "After years of following trends and influencer advice that didn’t work, we remove the noise. No viral routines — only what your hair actually needs."
  },
  {
    icon: '🧴',
    title: 'Personalised Product System',
    desc: "Instead of random product-hopping, we match you to a structured system built for your Hair ID — cleanser, conditioner, and treatment designed for your exact needs."
  },
  {
    icon: '🪮',
    title: 'Damage-Free Tool Guidance',
    desc: "From experience, the wrong tools caused as much damage as the wrong products. We guide you to combs, brushes, and tools that support your hair health, not fight it."
  },
  {
    icon: '📖',
    title: 'Education That Explains Your Hair',
    desc: "We break down porosity, breakage, growth cycles, and routines in a way that finally makes sense — so you understand *why* your hair behaves the way it does."
  },
  {
    icon: '📊',
    title: 'Structure & Progress Tracking',
    desc: "After years of inconsistency, we introduce structure — tracking growth, breakage, moisture, and scalp health so progress becomes visible, not guesswork."
  },
  {
    icon: '👑',
    title: 'EVOLVE Transformation System',
    desc: "Everything learned across 6 years of experience, mistakes, and breakthroughs — built into one system so you don’t repeat the same trial-and-error journey. Your hair evolves with guidance, not struggle."
  }
];
const journeySteps = [
  {
    year: '2020',
    title: 'The Beginning of My Hair Journey',
    desc: 'This was when my hair journey officially began. It was a discovery phase filled with trial and error — trying things without really understanding my hair, just learning as I went.',
    icon: '🌱'
  },
  {
    year: '2021',
    title: 'Still Searching',
    desc: 'The trial and error continued. I followed different trends, switching routines and products, still trying to figure out what actually worked for my hair.',
    icon: '🔄'
  },
  {
    year: '2022',
    title: 'Following Without Understanding',
    desc: 'I kept following advice from influencers and social media, but I still didn’t truly understand my own hair. It was more imitation than knowledge.',
    icon: '📱'
  },
  {
    year: 'Late 2023',
    title: 'The Turning Point: Porosity',
    desc: 'Then everything changed. I discovered hair porosity for the first time, and it became the beginning of real understanding — the first time my hair started to make sense to me.',
    icon: '🔬'
  },
  {
    year: '2024',
    title: 'Growth with Hidden Struggles',
    desc: 'My hair grew, but I still struggled with constant breakage. I couldn’t understand why my hair kept falling off despite all my efforts.',
    icon: '⚖️'
  },
  {
    year: '2025',
    title: 'Structure & Transformation',
    desc: 'I finally built a proper hair care routine. My hair transformed drastically, and this breakthrough experience became the foundation that birthed EVOLVE.',
    icon: '🚀'
  },
  {
    year: '2026',
    title: 'EVOLVE is Born',
    desc: 'A combination of six years of experience, mistakes, learning, and breakthroughs — all shaped into a system designed to help others avoid endless trial and error and finally understand their hair. My hair is still evolving, and so is this mission.',
    icon: '👑'
  }
];

export default function OurStory() {
  const [showContext, setShowContext] = useState(false);

  return (
    <>
      {/* ── SECTION 1: Story ── */}
      <section className="bg-cream py-[120px] px-10">
        <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[100px] items-center">
          <div>
            <span className="r text-[10px] tracking-[0.4em] uppercase text-terra block mb-5">Our Story</span>
            <h2 className="r font-display font-light text-[clamp(38px,6vw,68px)] leading-[1.05] text-warm mb-8">
              I spent years trying to fix hair that was <em className="italic text-terra">never broken.</em>
            </h2>
            <div className="text-[#3A2010]">
              <p className="r text-[16px] leading-[1.9] mb-[22px]">
                I genuinely believed Black girls couldn't grow long hair. Everyone around me believed it too our mothers, our teachers, the women on television. We reached for the relaxer not because we wanted straight hair, but because nobody ever showed us another way was possible.
              </p>
              <p className="r text-[16px] leading-[1.9] mb-[22px]">
                 After years of relying on chemical treatments like texturizers, facing setbacks, and carrying silent shame, I finally decided to embrace my natural hair journey. What I discovered was that the hardest part wasn’t the hair itself it was the lack of honest guidance and support. So, I became the expert I once needed.
              </p>
              <p className="r font-display italic text-[18px] text-terra">
                EVOLVE was born from that gap between wanting to love your natural hair, and actually knowing how to care for it. For everyone.
              </p>

              {/* Read More toggle */}
              <div className="mt-7">
                <button
                  onClick={() => setShowContext(!showContext)}
                  className="text-[13px] tracking-[0.08em] px-[22px] py-[10px] border border-gold text-gold bg-transparent cursor-pointer transition-all duration-200 hover:bg-gold hover:text-deep"
                >
                  {showContext ? '↑ Show less' : '+ Read the full context'}
                </button>

                {showContext && (
                  <div className="mt-7 border-l-2 border-terra pl-5">
                    <p className="text-[16px] leading-[1.9] mb-[22px]">
                      Everyone around me believed it too. So we reached for the white cream in the box. We sat still while our scalps burned because someone called it beauty. We watched our edges thin and our lengths break and we blamed ourselves, never the lie we had been sold.
                    </p>
                    <p className="text-[16px] leading-[1.9] mb-[22px]">
                      And the men around us weren't any better served. Nobody told them why their scalp was always dry, why their locs were thinning, why their hairline kept receding.
                    </p>
                    <blockquote className="border-l-[3px] border-gold pl-8 py-6 bg-gradient-to-br from-gold/5 to-transparent mt-5">
                      <p className="font-display italic font-light text-[clamp(18px,2.6vw,26px)] text-warm leading-[1.45]">
                        "Before colonialism touched the continent, a Black woman's coils were not a problem to be solved. They were a proclamation: I am here. I am whole."
                      </p>
                    </blockquote>
                    <blockquote className="border-l-[3px] border-terra pl-8 py-6 mt-4">
                      <p className="font-display italic font-light text-[clamp(18px,2.6vw,26px)] text-terra leading-[1.45]">
                        "And a Black man's crown his locs, his fade, his coils was never a liability. It was identity. EVOLVE gives that back."
                      </p>
                    </blockquote>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div className="founder-img-frame mb-8">
              <img src="/linkdln image.jpg" alt="Founder of EVOLVE" className="w-full rounded-sm" />
            </div>
            <blockquote className="border-l-[3px] border-terra pl-7 py-5">
              <p className="font-display italic font-light text-[clamp(19px,2.4vw,26px)] text-terra leading-[1.45]">
                "The right routine changes everything. I built EVOLVE so no woman and no man would have to figure that out alone."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Journey Timeline ── */}
      <section className="bg-deep py-[100px] px-6">
        <div className="max-w-[860px] mx-auto">
          <div className="mb-[60px]">
            <span className="r text-[10px] tracking-[0.4em] uppercase text-gold block mb-5">The Journey</span>
            <h2 className="r font-display font-light text-[clamp(40px,7vw,90px)] leading-[0.97] text-cream mb-6">
              From damage<br />to <em className="italic text-gold">mastery.</em>
            </h2>
            <p className="r font-display italic text-[clamp(16px,2.2vw,22px)] text-cream/52 max-w-[580px] leading-[1.65]">
              Every step of this journey became a lesson that now lives inside the EVOLVE system.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[31px] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold to-transparent opacity-35" />

            <div className="flex flex-col gap-11">
              {journeySteps.map((step, i) => (
                <div key={i} className={`r d${i + 1} flex gap-7 items-start`}>
                  <div className="shrink-0 w-[62px] h-[62px] rounded-full border border-gold flex items-center justify-center text-[22px] relative z-10 bg-deep">
                    {step.icon}
                  </div>
                  <div className="pt-[10px]">
                    <div className="font-sans text-[11px] tracking-[0.14em] uppercase text-gold mb-[5px]">{step.year}</div>
                    <div className="font-display font-semibold text-[19px] text-cream mb-[10px]">{step.title}</div>
                    <p className="text-[14px] leading-[1.8] text-cream/55 max-w-[520px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-[72px]">
            <a href="https://www.youtube.com/shorts/egWpVcG9_m8?feature=share" target="_blank" rel="noreferrer"
              className="r inline-block font-sans text-[11px] font-medium tracking-[0.28em] uppercase no-underline px-10 py-[17px] bg-transparent text-cream/70 border border-cream/22 transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-1">
              Watch the Full Journey on YouTube →
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Difference ── */}
      <section className="bg-deep py-[120px] px-10 relative overflow-hidden">
        <div className="absolute w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(194,98,45,0.09)_0%,transparent_70%)] -top-[250px] -right-[200px] pointer-events-none" />
        <div className="max-w-[1080px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="r text-[10px] tracking-[0.4em] uppercase text-gold block mb-5">What Makes EVOLVE Different</span>
            <h2 className="r font-display font-light text-[clamp(40px,7vw,90px)] leading-[0.97] text-cream mb-6">
              Not just a<br />product. A<br /><em className="italic text-gold">system.</em>
            </h2>
            <p className="r font-display italic text-[clamp(16px,2.2vw,22px)] text-cream/20 max-w-[580px] mx-auto leading-[1.65]">
              Most brands sell you a promise. EVOLVE sells you a solution built around you your Hair ID, your biology, your goals.
            </p>
          </div>

          <div className="r grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gold/15 gap-px bg-gold/10">
            {pillars.map((p, i) => (
              <div key={i} className="bg-deep p-11 px-8 transition-colors duration-300 hover:bg-warm/70">
                <span className="text-[30px] block mb-4">{p.icon}</span>
                <div className="font-display text-[22px] font-normal text-cream mb-[10px]">{p.title}</div>
                <div className="text-[13px] leading-[1.7] text-cream/52">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Founder ── */}
      <section className="bg-cream py-[120px] px-10 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(194,98,45,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-[88px] items-start relative z-10">
          <div className="relative">
            <div className="founder-img-frame">
              <img src="evolve founder image.jpg" alt="Founder of EVOLVE" className="w-full h-[600px] object-cover object-top block filter contrast-[1.03] saturate-[0.93]" />
            </div>
            <div className="w-14 h-[3px] bg-gradient-to-r from-gold via-goldl to-transparent mt-8" />
          </div>

          <div className="flex flex-col justify-start pt-2">
            <span className="r text-[10px] tracking-[0.42em] uppercase text-terra block mb-[18px]">Meet the Founder</span>
            
            <span className="r text-[11px] tracking-[0.3em] uppercase text-mid block mb-7">Founder &amp; Hair Consultant · EVOLVE</span>
            <div className="r w-12 h-px bg-gold mb-8" />
            <p className="r text-[16px] leading-[1.85] text-[#3A2010] mb-6">
              Six years of deep study, trial, and transformation led to EVOLVE everything I needed and never found. A complete system built around your hair, not someone else's.
            </p>
            <blockquote className="r border-l-[3px] border-terra pl-7 py-5 mb-6">
              <p className="font-display italic font-light text-[clamp(19px,2.4vw,26px)] text-terra leading-[1.45]">
                "The right routine changes everything. I built EVOLVE so no woman and no man would have to figure that out alone."
              </p>
            </blockquote>
            <p className="r text-[16px] leading-[1.85] text-[#3A2010] mb-6">
              I now work with women and men across Nigeria teaching them not just what to do with their hair, but why. And watching them grow their hair and their confidence is everything this was built for.
            </p>
            <div className="r flex flex-col gap-2 mt-3">
              <div className="w-20 h-px bg-gold" />
              <span className="font-display text-[22px] font-light italic text-warm">Idowu love olamide</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}