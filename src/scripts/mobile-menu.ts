// Module marker: keeps top-level names scoped to this file.
export {};

const dialog = document.querySelector<HTMLDialogElement>('[data-mobile-menu]');

if (dialog) {
  document.querySelectorAll<HTMLElement>('[data-mobile-menu-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => dialog.showModal());
  });

  dialog.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const clickedBackdrop = target === dialog;
    const clickedClose = target.closest('[data-mobile-menu-close]') !== null;
    const clickedLink = target.closest('a') !== null;

    if (clickedBackdrop || clickedClose || clickedLink) dialog.close();
  });

  window.matchMedia('(min-width: 769px)').addEventListener('change', (event) => {
    if (event.matches) dialog.close();
  });
}
