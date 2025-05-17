const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const links = document.querySelectorAll('.nav__link');


function bodyScroll(menuOpen) {
    if (menuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}


burger.addEventListener('click', () => {
    const active = menu.classList.toggle('active');
    burger.classList.toggle('active');

    bodyScroll(active);
});


window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {

        menu.classList.remove('active');
        burger.classList.remove('active');

        bodyScroll(false);
    }
});

links.forEach(link => {
    link.addEventListener('click', () => {

        menu.classList.remove('active');
        burger.classList.remove('active');

        bodyScroll(false);
    });
});
