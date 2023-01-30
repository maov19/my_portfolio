let icon = document.getElementById('icon');
let menu = document.getElementById('menuAll');

icon.onclick = function () {
    icon.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

document.onclick = function(clickEvent) {
    if(clickEvent.target.id !== 'menuAll' && clickEvent.target.id !== 'icon') {
        icon.classList.remove('is-active');
        menu.classList.remove('is-active');
    }
}




