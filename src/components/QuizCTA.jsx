export default function QuizCTA() {
  return (
    <section id="quiz">
      <div className="quiz-inner">
        <span className="eyebrow r" style={{ color: 'rgba(250,246,240,0.7)' }}>Step One — It's Free</span>
        <h2 className="quiz-title r">
          Discover your<br /><em>Hair ID</em>
        </h2>
        <p className="quiz-sub r">
          Before anything else — know your hair. Take our free quiz and understand your scalp type, porosity, density and thickness. It's the foundation everything else is built on. Three minutes. Life-changing results.
        </p>
        <a href="https://evolvequizapp.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-gold r">
          Take the Free Hair ID Quiz →
        </a>
        <p className="quiz-note r">Free · Takes 3 minutes · Personalised to you · Works for women and men</p>
      </div>
    </section>
  );
}
