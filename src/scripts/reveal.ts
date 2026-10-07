// Module marker: keeps top-level names scoped to this file.
export {};

document.documentElement.dataset.reveal = 'ready';

const targets = document.querySelectorAll<HTMLElement>('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  },
  { rootMargin: '0px 0px -50px 0px' },
);

targets.forEach((target) => observer.observe(target));
