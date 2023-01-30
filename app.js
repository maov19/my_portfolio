let menuBtn = document.querySelector('.icon');
let menuMobile = document.querySelector('.menuAll')

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('is-active');
    menuMobile.classList.toggle('is-active');

});

let menu = document.getElementById('icon');

let menuAll = document.getElementById('menuAll')
menu.addEventListener('click', function() {
    menu.style.display = 'none';
    Object.assign(menuAll.style, styles);
})

