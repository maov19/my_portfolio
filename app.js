
let menu = document.getElementById('icon');
let image = document.getElementById('hamburger');

let styles = {
    display: 'block',
    border: '2px solid blue',
    position: 'relative',
    top: '25px',
    padding: '10px',
    'font-family': 'poppins',
}

let menuAll = document.getElementById('menuAll')
menu.addEventListener('click', function() {
    menu.style.display = 'none'
    Object.assign(menuAll.style, styles)
})
