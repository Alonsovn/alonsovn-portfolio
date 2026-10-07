// Module marker: keeps top-level names scoped to this file.
export {};

const links = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');
const sections = document.querySelectorAll<HTMLElement>('main section[id]');

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }
  },
  { rootMargin: '-40% 0px -55% 0px' },
);

sections.forEach((section) => observer.observe(section));
