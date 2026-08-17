import { Link } from 'react-router-dom';
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-8 pt-[120px] pb-20 relative overflow-hidden bg-deep">
      {/* Rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
      </div>

      {/* Glow */}
      <div className="absolute w-[680px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(194,98,45,0.22)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] pointer-events-none" />

      <div className="grain" />

      {/* Content */}
      <div className="relative z-10 max-w-[820px]">
        <h1 className="hero-title-anim font-display font-light text-cream leading-[0.92] mb-9 text-[clamp(52px,10.5vw,130px)]">
          Your hair was<br />always meant to<br /><em className="italic text-gold">thrive.</em>
        </h1>

        <div className="hero-btns-anim flex gap-4 justify-center flex-wrap">
         
          <Link to="/hair-id"className="inline-block font-sans text-[11px] font-medium tracking-[0.28em] uppercase no-underline px-10 py-[17px] bg-transparent text-cream/70 border border-cream/20 transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(201,146,42,0.12)]"
            >
            Take Your Hair ID Quiz
          </Link>
        </div>

        <div className="hero-pills-anim flex gap-4 justify-center mt-7">
  <Link to="/for-her"
    className="text-[10px] tracking-[0.28em] uppercase px-6 py-2 border border-gold/30 text-gold no-underline transition-all duration-300 hover:bg-gold/10 hover:border-gold">
    For Her →
  </Link>
  <Link to="/for-him"
    className="text-[10px] tracking-[0.28em] uppercase px-6 py-2 border border-terra/30 text-terra no-underline transition-all duration-300 hover:bg-terra/10 hover:border-terra">
    For Him →
  </Link>
</div>
      </div>
    </section>
  );
}