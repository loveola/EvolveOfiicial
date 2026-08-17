import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const navLinks = [
    { to: '/story',   label: 'Our Story' },
    { to: '/for-her', label: 'For Her' },
    { to: '/for-him', label: 'For Him' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] h-[72px] px-10 flex items-center justify-between bg-deep shadow-[0_1px_0_rgba(201,146,42,0.12)]">
        <Link to="/" className="flex items-center">
          <img src="/EVOLVE_LOGO-removebg-preview.png" alt="EVOLVE" className="h-[70px] w-auto brightness-90" />
        </Link>

        <ul className="hidden lg:flex gap-[22px] list-none items-center m-0 p-0">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="nav-link-item text-[10px] tracking-[0.2em] uppercase text-cream/60 no-underline transition-colors duration-300 hover:text-gold">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger lg:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1 ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`fixed top-[72px] left-0 right-0 bg-[rgba(19,11,6,0.98)] backdrop-blur-xl px-10 py-8 z-[999] border-t border-gold/10 flex-col gap-6 ${menuOpen ? 'flex' : 'hidden'}`}>
        {navLinks.map(({ to, label }) => (
          <Link key={to} to={to} onClick={() => setMenuOpen(false)}
            className="text-[13px] tracking-[0.22em] uppercase text-cream/70 no-underline transition-colors duration-300 hover:text-gold">
            {label}
          </Link>
        ))}
        <Link to="/book" onClick={() => setMenuOpen(false)} className="text-[13px] tracking-[0.22em] uppercase text-gold no-underline hover:text-goldl transition-colors duration-300">
          Book Free Call →
        </Link>
      </div>
    </>
  );
}