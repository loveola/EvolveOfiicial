import { Link } from 'react-router-dom';

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/evolve_2778/',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/shorts/egWpVcG9_m8?si=vqd56FFLlE0ZBTGy',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/love-idowu-b634653b8/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTuswNWEWTRaP3NUyr0iErw%3D%3D',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@evol_ve2778?_r=1&_d=el77194j7l7d5i&sec_uid=MS4wLjABAAAAh1vLjPX4QbXO_qVys6bqgtVC2Y2o2PeZ3evBb6IABiRVVTSEGmTUZcUy1Ii3HBe0&share_author_id=7523680041123185671&sharer_language=en&source=h5_m&u_code=el7727ge3i3je4&timestamp=1786967662&user_id=7523680041123185671&sec_user_id=MS4wLjABAAAAh1vLjPX4QbXO_qVys6bqgtVC2Y2o2PeZ3evBb6IABiRVVTSEGmTUZcUy1Ii3HBe0&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7669688187715438356&share_link_id=9eaff66b-c207-4f07-8913-8344ea7541a9&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>,
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer pt-20 pb-10 px-10">
      <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-[60px] mb-[60px]">

        {/* Brand col */}
        <div>
          <img src="/EVOLVE_LOGO-removebg-preview.png" alt="EVOLVE" className="h-9 w-auto mb-5 brightness-[0.85]" />
          <p className="text-[13px] leading-[1.8] text-cream/40 max-w-[300px]">
            Nigeria's first complete hair growth ecosystem — the right products, the right tools, the right routine, built around your Hair ID. For women and men.
          </p>
          {/* Social icons */}
          <div className="flex gap-4 mt-5 flex-wrap">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}
                className="text-cream/40 hover:text-gold transition-colors duration-200 flex items-center">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigate col */}
        <div>
          <span className="text-[9px] tracking-[0.4em] uppercase text-gold block mb-5">Navigate</span>
          <ul className="list-none flex flex-col gap-[10px]">
            {[
              { to: '/story',   label: 'Our Story' },
              { to: '/for-her', label: 'For Her' },
              { to: '/for-him', label: 'For Him' }
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-[13px] text-cream/45 no-underline transition-colors duration-300 hover:text-gold tracking-[0.04em]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Started col */}
        <div>
          <span className="text-[9px] tracking-[0.4em] uppercase text-gold block mb-5">Get Started</span>
          <ul className="list-none flex flex-col gap-[10px]">
            <li><a href="https://evolvequizapp.vercel.app/" target="_blank" rel="noreferrer" className="text-[13px] text-cream/45 no-underline transition-colors duration-300 hover:text-gold tracking-[0.04em]">Take the Hair ID Quiz</a></li>
            <li><a href="https://youtube.com/shorts/egWpVcG9_m8?si=vqd56FFLlE0ZBTGy" target="_blank" rel="noreferrer" className="text-[13px] text-cream/45 no-underline transition-colors duration-300 hover:text-gold tracking-[0.04em]">Watch the Journey</a></li>

          </ul>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto pt-8 border-t border-gold/10 flex justify-between flex-wrap gap-2">
        <p className="text-[11px] text-cream/25 tracking-[0.06em]">© 2025 <span className="text-gold/50">EVOLVE</span> — The Hair ID Company. All rights reserved.</p>
        <p className="text-[11px] text-cream/25 tracking-[0.06em]">Know your hair. Own your routine. Evolve.</p>
      </div>
    </footer>
  );
}