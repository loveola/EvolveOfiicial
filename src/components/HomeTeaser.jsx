import { Link } from 'react-router-dom';

const teasers = [
  {
    label: 'Our Story',
    headline: 'Born from a gap nobody was filling.',
    body: 'Six years of expertise, a personal journey through damage and recovery, and a mission to give every Nigerian the hair knowledge they were never given.',
    link: '/story',
    cta: 'Read the story →',
    badgeColor: 'bg-gold/15 text-gold',
  },
  {
    label: 'For Her',
    headline: 'Your crown was never the problem.',
    body: 'From relaxer damage to natural hair growth, EVOLVE builds the exact routine your hair type needs — no generic advice, no guesswork.',
    link: '/for-her',
    cta: "See what's for her →",
    badgeColor: 'bg-gold/15 text-gold',
  },
  {
    label: 'For Him',
    headline: 'His hair was never given the guidance it deserved.',
    body: 'Scalp dryness, receding hairlines, loc health — EVOLVE is the first brand to build a Hair ID-matched system for the Nigerian man.',
    link: '/for-him',
    cta: "See what's for him →",
    badgeColor: 'bg-terra/15 text-terra',
  },
];

export default function HomeTeaser() {
  return (
    <section className="py-20 bg-deep">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="r text-[10px] tracking-[0.4em] uppercase text-gold block mb-5">Built for you</span>
          <h2 className="r font-display font-light text-[clamp(40px,7vw,90px)] leading-[0.97] text-cream">
            One system.<br /><em className="italic text-gold">Infinite crowns.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teasers.map((t, i) => (
            <div key={i} className={`r d${i + 1} bg-deep border border-gold/15 p-12 flex flex-col gap-3 hover:bg-warm/70 transition-colors duration-300`}>
              <span className={`self-start text-[9px] tracking-[0.3em] uppercase px-3 py-1 ${t.badgeColor}`}>
                {t.label}
              </span>
              <h3 className="font-display font-light text-[22px] text-cream leading-snug">{t.headline}</h3>
              <p className="text-[14px] leading-[1.8] text-cream/55 flex-1">{t.body}</p>
              <Link to={t.link} className="text-gold font-display text-[14px] no-underline tracking-[0.04em] mt-2 hover:text-goldl transition-colors duration-300">
                {t.cta}
              </Link>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}