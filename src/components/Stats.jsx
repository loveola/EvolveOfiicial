export default function Stats() {
  return (
    <section className="bg-warm py-[72px] px-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_20%_50%,rgba(194,98,45,0.18)_0%,transparent_65%)] pointer-events-none" />

      <div className="flex items-center gap-5 max-w-[900px] mx-auto mb-10 relative z-10 r">
        <span className="text-[9px] tracking-[0.38em] uppercase px-3 py-1 rounded-full bg-gold/15 text-gold">Her Reality</span>
        <div className="flex-1 h-px bg-gold/15" />
        <span className="text-[9px] tracking-[0.38em] uppercase px-3 py-1 rounded-full bg-terra/15 text-terra">His Reality</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1080px] mx-auto gap-px bg-gold/10 border border-gold/10 relative z-10">
        {[
          { n: '46%',  d: 'of Nigerian women experience traction alopecia from styling tension', tag: 'Her', color: 'text-gold', tagStyle: 'bg-gold/15 text-gold', delay: 'd1' },
          { n: '80%',  d: 'use chemical relaxers that damage the scalp and worsen breakage',    tag: 'Her', color: 'text-gold', tagStyle: 'bg-gold/15 text-gold', delay: 'd2' },
          { n: '70%',  d: 'of Nigerian men experience scalp dryness, dandruff, or stunted growth — and have no personalised solution', tag: 'Him', color: 'text-terra', tagStyle: 'bg-terra/15 text-terra', delay: 'd3' },
          { n: '$311M',d: 'Nigerian men\'s grooming market — with zero brands offering Hair ID-matched routines for men',               tag: 'Him', color: 'text-terra', tagStyle: 'bg-terra/15 text-terra', delay: 'd4' },
        ].map((s, i) => (
          <div key={i} className={`bg-warm flex flex-col items-center text-center px-5 py-10 gap-3 r ${s.delay}`}>
            <div className={`font-display font-light leading-none text-[clamp(44px,6vw,72px)] ${s.color}`}>{s.n}</div>
            <div className="text-[12px] leading-relaxed text-cream/60 max-w-[180px]">{s.d}</div>
            <span className={`text-[9px] tracking-[0.3em] uppercase px-[10px] py-[3px] rounded-full mt-1 ${s.tagStyle}`}>{s.tag}</span>
          </div>
        ))}
        {/* Span-2 last stat */}
        <div className="bg-warm col-span-2 flex flex-col items-center text-center px-5 py-10 gap-3 r d5">
          <div className="font-display font-light leading-none text-[clamp(44px,6vw,72px)] text-goldl">0</div>
          <div className="text-[12px] leading-relaxed text-cream/60 max-w-[420px]">
            brands in Africa have combined Hair ID + the right products + the right tools + a personalised routine system — for both genders. Until EVOLVE.
          </div>
          <span className="text-[9px] tracking-[0.3em] uppercase px-[10px] py-[3px] rounded-full mt-1 bg-gold/15 text-goldl">Both</span>
        </div>
      </div>
    </section>
  );
}