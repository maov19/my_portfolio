const icon = document.getElementById('icon');
const menu = document.getElementById('menuAll');

icon.onclick = function a() {
  icon.classList.toggle('is-active');
  menu.classList.toggle('is-active');
};

document.onclick = function b(clickEvent) {
  if (clickEvent.target.id !== 'menuAll' && clickEvent.target.id !== 'icon') {
    icon.classList.remove('is-active');
    menu.classList.remove('is-active');
  }
};
