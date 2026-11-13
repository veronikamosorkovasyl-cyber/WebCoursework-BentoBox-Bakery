const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('main-nav');
const mobileQuery = window.matchMedia('(max-width: 599px)');

if (toggle && menu) {
    // Єдина функція, яка відкриває/закриває меню і синхронізує ARIA
    function setMenu(open) {
        menu.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    // Клік по бургеру
    toggle.addEventListener('click', () => {
        setMenu(!menu.classList.contains('is-open'));
    });

    // Клік по пункту меню — закрити (щоб меню не перекривало секцію)
    menu.addEventListener('click', (e) => {
        if (e.target.closest('a')) setMenu(false);
    });

    // Клік поза шапкою — закрити
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav')) setMenu(false);
    });

    // Escape — закрити і повернути фокус на кнопку (доступність)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('is-open')) {
            setMenu(false);
            toggle.focus();
        }
    });

    // Перехід на desktop — скинути стан меню
    mobileQuery.addEventListener('change', (e) => {
        if (!e.matches) setMenu(false);
    });
}