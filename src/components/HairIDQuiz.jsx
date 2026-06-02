// src/components/HairIDQuiz.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

// ── Question banks ─────────────────────────────────────────
const femaleQuestions = [
  {
    id: 'scalp',
    cat: 'Scalp Type',
    title: 'By the end of day 2 after washing, how does your scalp feel?',
    hint: 'This helps us understand your scalp\'s natural oil production.',
    opts: [
      { v: 'oily', l: 'Oily & Greasy', desc: 'My roots look flat, feel slick, and may have greasy or yellowish buildup.' },
      { v: 'dry', l: 'Dry & Flaky', desc: 'My scalp feels tight or itchy, and I notice small white flakes.' },
      { v: 'normal', l: 'Balanced', desc: 'My scalp feels comfortable — not too oily and not too dry.' },
      { v: 'combo', l: 'Combination', desc: 'My roots get oily, but other areas feel dry.' },
    ],
  },
  {
    id: 'porosity',
    cat: 'Hair Porosity',
    title: 'When your hair gets wet, what happens?',
    hint: 'This helps us discover how well your hair absorbs and holds moisture.',
    opts: [
      { v: 'low', l: 'Absorbs Very Slowly', desc: 'Water sits on top of my hair before soaking in.' },
      { v: 'medium', l: 'Absorbs Normally', desc: 'My hair absorbs water at a steady, balanced pace.' },
      { v: 'high', l: 'Absorbs Very Quickly', desc: 'My hair becomes fully wet almost instantly.' },
    ],
  },
  {
    id: 'density',
    cat: 'Hair Density',
    title: 'When you gather your hair into a ponytail, how thick does it feel?',
    hint: 'This helps us measure how much hair you actually have on your scalp.',
    opts: [
      { v: 'low', l: 'Low Density', desc: 'My ponytail feels small — less than the width of a pencil.' },
      { v: 'medium', l: 'Medium Density', desc: 'My ponytail feels average — about the size of a coin.' },
      { v: 'high', l: 'High Density', desc: 'My ponytail feels thick, full, and noticeably heavy.' },
    ],
  },
  {
    id: 'thickness',
    cat: 'Strand Thickness',
    title: 'Take a single strand of hair and roll it between your fingers. How does it feel?',
    hint: 'This helps determine the thickness of each individual strand.',
    opts: [
      { v: 'fine', l: 'Fine', desc: 'Hard to feel — very thin and delicate.' },
      { v: 'medium', l: 'Medium', desc: 'Noticeable — similar to the feel of sewing thread.' },
      { v: 'coarse', l: 'Coarse', desc: 'Thick and strong — easy to feel between your fingers.' },
    ],
  },
  {
    id: 'elasticity',
    cat: 'Hair Elasticity',
    title: 'Gently stretch a wet strand of hair. What happens?',
    hint: 'This shows how strong and flexible your hair is — a key sign of health.',
    opts: [
      { v: 'poor', l: 'Snaps Quickly', desc: 'It breaks with very little stretch.' },
      { v: 'good', l: 'Stretches Slightly', desc: 'It stretches a bit before returning to normal.' },
      { v: 'over', l: 'Very Stretchy', desc: 'It stretches significantly and springs back without breaking.' },
    ],
  },
  {
    id: 'issue',
    cat: 'Primary Concern',
    title: 'What is your biggest hair struggle right now?',
    hint: 'Be honest — this shapes your entire personalised roadmap.',
    opts: [
      { v: 'breakage', l: 'Breakage', desc: 'My hair snaps or splits easily, especially at the ends.' },
      { v: 'growth', l: 'Slow or Stunted Growth', desc: 'My hair doesn\'t seem to grow past a certain length.' },
      { v: 'dryness', l: 'Persistent Dryness', desc: 'No matter what I use, my hair always feels dry or brittle.' },
      { v: 'shedding', l: 'Excessive Shedding', desc: 'I notice a lot of hair coming out during washing or styling.' },
      { v: 'scalp', l: 'Scalp Issues', desc: 'I deal with dandruff, itching, buildup or sensitivity.' },
      { v: 'damage', l: 'Heat or Chemical Damage', desc: 'My hair has been weakened by relaxers, colour or heat tools.' },
    ],
  },
];

const maleQuestions = [
  {
    id: 'scalp',
    cat: 'Scalp Type',
    title: 'A couple of days after washing, how does your scalp feel?',
    hint: 'This helps us understand your scalp\'s natural oil production.',
    opts: [
      { v: 'oily', l: 'Oily & Greasy', desc: 'My scalp feels slick and may look shiny with buildup.' },
      { v: 'dry', l: 'Dry & Flaky', desc: 'My scalp itches and I notice white flakes on my hair or collar.' },
      { v: 'normal', l: 'Balanced', desc: 'My scalp feels mostly comfortable with no major issues.' },
      { v: 'combo', l: 'Combination', desc: 'Oily around the crown or hairline, but dry in other spots.' },
    ],
  },
  {
    id: 'porosity',
    cat: 'Hair Porosity',
    title: 'When your hair gets wet, what happens?',
    hint: 'This tells us how well your hair takes in and holds moisture.',
    opts: [
      { v: 'low', l: 'Absorbs Very Slowly', desc: 'Water beads up or rolls off before soaking in.' },
      { v: 'medium', l: 'Absorbs Normally', desc: 'My hair gets wet at a steady, balanced pace.' },
      { v: 'high', l: 'Absorbs Immediately', desc: 'My hair soaks up water almost instantly.' },
    ],
  },
  {
    id: 'density',
    cat: 'Hair Density',
    title: 'Looking at your hairline in a mirror, how dense does your hair appear?',
    hint: 'This measures how many hairs you have per square inch of scalp.',
    opts: [
      { v: 'low', l: 'Thin / Sparse', desc: 'I can clearly see my scalp through my hair without parting it.' },
      { v: 'medium', l: 'Average', desc: 'My scalp is slightly visible in some areas, but mostly covered.' },
      { v: 'high', l: 'Thick / Full', desc: 'My scalp is rarely or never visible — my hair feels very full.' },
    ],
  },
  {
    id: 'thickness',
    cat: 'Strand Thickness',
    title: 'Pull out one strand and roll it between your fingers. What do you feel?',
    hint: 'This identifies individual strand width — separate from how much hair you have.',
    opts: [
      { v: 'fine', l: 'Fine', desc: 'Barely noticeable — the strand feels almost invisible.' },
      { v: 'medium', l: 'Medium', desc: 'I can feel it clearly — like a piece of thread.' },
      { v: 'coarse', l: 'Coarse', desc: 'Thick and wiry — I can feel it easily and it feels strong.' },
    ],
  },
  {
    id: 'elasticity',
    cat: 'Hair Elasticity',
    title: 'Gently stretch a wet strand of hair. What happens?',
    hint: 'Elasticity is one of the most reliable indicators of hair strength and protein balance.',
    opts: [
      { v: 'poor', l: 'Snaps Immediately', desc: 'It breaks with very little stretch — almost no give.' },
      { v: 'good', l: 'Stretches & Returns', desc: 'It stretches slightly then bounces back to its normal length.' },
      { v: 'over', l: 'Stretches a Lot', desc: 'It stretches significantly but still returns — feels very elastic.' },
    ],
  },
  {
    id: 'issue',
    cat: 'Primary Concern',
    title: 'What is the main thing you want to fix or improve?',
    hint: 'This shapes your personalised programme.',
    opts: [
      { v: 'locs', l: 'Loc Issues', desc: 'My locs are thinning, unravelling, or not locking properly.' },
      { v: 'growth', l: 'Growth & Length', desc: 'My hair isn\'t growing as fast or as full as I\'d like.' },
      { v: 'scalp', l: 'Scalp Problems', desc: 'I deal with dandruff, buildup, itching or scalp sensitivity.' },
      { v: 'fade', l: 'Fade & Edge Care', desc: 'My edges are thinning or my fade isn\'t looking clean.' },
      { v: 'breakage', l: 'Breakage', desc: 'My hair snaps or feels weak, especially around the crown.' },
      { v: 'natural', l: 'Transitioning Natural', desc: 'I\'m moving away from relaxers or chemicals and need guidance.' },
    ],
  },
];

const scalpMap = { oily: 'Oily Scalp', dry: 'Dry Scalp', normal: 'Balanced Scalp', combo: 'Combination Scalp' };
const porosityMap = { low: 'Low Porosity', medium: 'Medium Porosity', high: 'High Porosity' };
const densityMap = { low: 'Low Density', medium: 'Medium Density', high: 'High Density' };
const thicknessMap = { fine: 'Fine Strands', medium: 'Medium Strands', coarse: 'Coarse Strands' };
const elasticityMap = { poor: 'Low Elasticity', good: 'Healthy Elasticity', over: 'Over-Moisturised' };

const TOTAL = 6;

export default function HairIDQuiz() {
  const [gender, setGender] = useState(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = gender === 'male' ? maleQuestions : femaleQuestions;
  const currentQ = step >= 1 && step <= TOTAL ? questions[step - 1] : null;
  const progress = step > 0 ? ((step - 1) / TOTAL) * 100 : 0;

  const selectOption = (id, value) => setAnswers(prev => ({ ...prev, [id]: value }));

  const result = {
    scalp: scalpMap[answers.scalp],
    porosity: porosityMap[answers.porosity],
    density: densityMap[answers.density],
    thickness: thicknessMap[answers.thickness],
    elasticity: elasticityMap[answers.elasticity],
  };

  const hairTitle = [result.porosity, result.scalp, result.thickness].filter(Boolean).join(' • ');

  // ── Welcome Screen ─────────────────────────────────────
  if (step === 0) {
    return (
      <section className="min-h-screen py-32 bg-cream text-deep flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="ring" />
          <div className="ring" />
        </div>
        
        <div className="relative z-10 max-w-[680px] text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold">Hair ID Quiz</span>
          <h1 className="font-display font-light leading-[0.95] text-[clamp(42px,8vw,82px)] mt-4 mb-6">
            Welcome to your <br />
            <em className="italic text-gold">Hair ID</em>
          </h1>

          <p className="text-deep/60 leading-[1.9] mb-8">
            Answer 6 quick questions to discover your unique hair profile.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <button
              type="button"
              onClick={() => setGender('female')}
              className={`px-10 py-6 border transition-all duration-300 ${
                gender === 'female' ? 'border-gold bg-gold/10' : 'border-gold/20 hover:border-gold'
              }`}
            >
              <div className="text-gold text-[28px] mb-2">♀</div>
              <div className="font-display text-[26px]">For Her</div>
            </button>

            <button
              type="button"
              onClick={() => setGender('male')}
              className={`px-10 py-6 border transition-all duration-300 ${
                gender === 'male' ? 'border-[#3a6b2a] bg-[#3a6b2a]/10' : 'border-[#3a6b2a]/20 hover:border-[#3a6b2a]'
              }`}
            >
              <div className="text-[#3a6b2a] text-[28px] mb-2">♂</div>
              <div className="font-display text-[26px]">For Him</div>
            </button>
          </div>

          <button
            type="button"
            disabled={!gender}
            onClick={() => setStep(1)}
            className="relative z-20 bg-terra text-white hover:bg-deep transition-all duration-300 hover:-translate-y-1 hover:shadow-xl px-14 py-[18px] uppercase tracking-[0.28em] text-[11px] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Begin Hair ID →
          </button>
        </div>
      </section>
    );
  }

  // ── Questions ───────────────────────────────────────────
  if (step >= 1 && step <= TOTAL && currentQ) {
    return (
      <section key={step} className="min-h-screen py-32 bg-deep text-cream flex items-center justify-center px-6">
        <div className="w-full max-w-[700px]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-cream/30">Question {step} of {TOTAL}</span>
            <span className="text-[10px] text-cream/30">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-[2px] bg-gold/10 mb-12 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-terra to-gold transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>

          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-gold bg-gold/10 px-4 py-1 mb-5">{currentQ.cat}</span>
          <h2 className="font-display text-[clamp(24px,3.5vw,38px)] leading-[1.15] mb-3">{currentQ.title}</h2>
          {currentQ.hint && <p className="text-gold/70 text-[13px] leading-[1.7] mb-10">{currentQ.hint}</p>}

          <div className="flex flex-col gap-3 mb-10">
            {currentQ.opts.map(opt => {
              const selected = answers[currentQ.id] === opt.v;
              return (
                <button
                  key={opt.v}
                  type="button"
                  onClick={() => selectOption(currentQ.id, opt.v)}
                  className={`p-5 border text-left transition-all duration-300 group ${
                    selected ? 'border-gold bg-gold/10' : 'border-gold/15 hover:border-gold/40 hover:bg-gold/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-[3px] w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${selected ? 'border-gold' : 'border-cream/20'}`}>
                      {selected && <div className="w-2 h-2 rounded-full bg-gold" />}
                    </div>
                    <div>
                      <div className={`font-medium text-[15px] mb-1 transition-colors duration-200 ${selected ? 'text-gold' : 'text-cream'}`}>{opt.l}</div>
                      {opt.desc && <div className="text-cream/45 text-[12px] leading-[1.6]">{opt.desc}</div>}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex gap-4">
            <button type="button" onClick={() => setStep(step - 1)} className="px-8 py-4 border border-cream/15 uppercase tracking-[0.2em] text-[11px] hover:border-cream/30 transition-all">← Back</button>
            <button
              type="button"
              disabled={!answers[currentQ.id]}
              onClick={() => step === TOTAL ? setStep(TOTAL + 1) : setStep(step + 1)}
              className="bg-terra hover:bg-[#a84e20] transition-all px-10 py-4 uppercase tracking-[0.2em] text-[11px] disabled:opacity-40"
            >
              {step === TOTAL ? 'See My Results →' : 'Continue →'}
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── Results ─────────────────────────────────────────────
  return (
    <section className="min-h-screen py-32 bg-deep text-cream flex items-center justify-center px-6">
      <div className="w-full max-w-[780px] text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Your Hair ID</span>
        <h1 className="font-display font-light text-[clamp(42px,6vw,70px)] leading-[0.95] mt-4 mb-4">Your hair profile <br /><em className="italic text-gold">is ready.</em></h1>
        <h2 className="font-display text-[22px] text-gold/80 mb-10">{hairTitle}</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            { label: 'Scalp Type', value: result.scalp },
            { label: 'Porosity', value: result.porosity },
            { label: 'Density', value: result.density },
            { label: 'Strand Thickness', value: result.thickness },
            { label: 'Elasticity', value: result.elasticity },
          ].map(({ label, value }) => (
            <div key={label} className="border border-gold/15 p-6 text-left">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">{label}</div>
              <div className="font-display text-[22px]">{value || '—'}</div>
            </div>
          ))}
        </div>

        <div className="border border-gold/15 p-8 mb-10 bg-white/5">
          <h3 className="font-display text-[36px] mb-4">Ready to solve this?</h3>
          <p className="text-cream/60 leading-[1.8] mb-8">Our consulting programme builds your full personalised roadmap based on your results.</p>
          <Link to="/program" className="inline-block bg-terra hover:bg-[#a84e20] transition-all hover:-translate-y-1 px-12 py-[18px] uppercase tracking-[0.28em] text-[11px]">See the Programme →</Link>
        </div>

        <button type="button" onClick={() => { setStep(0); setGender(null); setAnswers({}); }} className="border border-cream/15 px-8 py-4 uppercase tracking-[0.2em] text-[11px] hover:border-cream/30 transition-all">Retake Quiz</button>
      </div>
    </section>
  );
}