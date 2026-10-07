// Module marker: keeps top-level names scoped to this file.
export {};

const SHOW_AFTER_PX = 400;

const button = document.querySelector<HTMLButtonElement>('[data-scroll-top]');

if (button) {
  const update = (): void => {
    button.hidden = window.scrollY <= SHOW_AFTER_PX;
  };

  window.addEventListener('scroll', update, { passive: true });
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  update();
}
