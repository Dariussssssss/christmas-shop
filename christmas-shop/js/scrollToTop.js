const scrollToTop = document.querySelector('.scroll-to-top');

function toggleScrollButton() {
    if (window.scrollY >= 300 && window.innerWidth <= 768) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
}

window.addEventListener('scroll', toggleScrollButton);
window.addEventListener('resize', toggleScrollButton);

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

toggleScrollButton();
