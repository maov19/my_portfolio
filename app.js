// navigation bar js
const icon = document.getElementById('icon');
const menu = document.getElementById('menuAll');

icon.onclick = function openMenu() {
  icon.classList.toggle('is-active');
  menu.classList.toggle('is-active');
};

document.onclick = function closeMenu(clickEvent) {
  if (clickEvent.target.id !== 'menuAll' && clickEvent.target.id !== 'icon') { //when something is clicked in the menu, that is not the open or close button
    icon.classList.remove('is-active');
    menu.classList.remove('is-active');
  }
};

// popup js

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');


// open button function
function openModal (modal) {
  if (modal == null) return
  modal.classList.add('active');
  overlay.classList.add('active');
}

// close button function
function closeModal (modal) {
  if (modal == null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// assign open funcion to button
openModalButtons.forEach (button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget); //querySelector works based on modalTarget of html
    openModal(modal); //open button
  })
})

// assign closing function to button
closeModalButtons.forEach (button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal') //checks if the closest parent is in modal class
    closeModal(modal); //close button
  });
});

// assign closing function when click outside
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  }); 
});
