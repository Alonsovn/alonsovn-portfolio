// Module marker: keeps top-level names scoped to this file.
export {};

document.querySelectorAll<HTMLElement>('[data-filter-group]').forEach((group) => {
  const options = group.querySelectorAll<HTMLButtonElement>('[data-filter-value]');
  const items = group.querySelectorAll<HTMLElement>('[data-filter-item]');

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const selected = option.dataset.filterValue ?? 'all';

      options.forEach((other) => {
        other.setAttribute('aria-pressed', String(other === option));
      });
      items.forEach((item) => {
        item.hidden = selected !== 'all' && item.dataset.category !== selected;
      });
    });
  });
});
