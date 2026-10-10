(function () {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', isOpen);
            navToggle.classList.toggle('is-active');
        });
    }

    document.querySelectorAll('form[data-demo-form]').forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    });
})();
