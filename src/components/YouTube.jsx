export default function YouTube() {
  return (
    <section id="youtube">
      <div className="yt-layout">
        <div className="yt-text">
          <span className="eyebrow r">The Founder's Journey</span>
          <h2 className="yt-heading r">
            See the<br />transformation<br /><em>for yourself</em>
          </h2>
          <p className="yt-body r">
            Before EVOLVE was a brand, it was a personal mission. Watch the founder's own natural hair journey — the setbacks, the breakthroughs, and everything the beauty industry never told her.
          </p>
          <a href="https://youtube.com/@YourChannelHere" target="_blank" rel="noreferrer" className="yt-btn r">
            <svg className="yt-icon" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch My Hair Journey
          </a>
        </div>
        <div className="yt-visual r d2">
          <div className="yt-card">
            <div className="yt-play">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <div className="yt-card-title">My Natural Hair Journey</div>
            <div className="yt-card-sub">From relaxed to thriving — watch the full story</div>
          </div>
        </div>
      </div>
    </section>
  );
}
