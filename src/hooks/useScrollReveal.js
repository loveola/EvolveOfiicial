import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.r');
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('v');
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => ro.observe(el));
    return () => ro.disconnect();
  }, []);
}
