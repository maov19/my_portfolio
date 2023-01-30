let hamburger_btn = document.querySelector('.icon');
let menuOpen = false;
hamburger_btn.addEventListener('click', () => {
    if (!menuOpen) {
        hamburger_btn.classList.add('open');
        menuOpen = true;
    } else {
        hamburger_btn.classList.remove('open');
        menuOpen = false;
    }
});