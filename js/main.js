const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeMenuButton = document.querySelector('.close');

menuButton.addEventListener('click', (e) => {
  menu.classList.add('is-open');
});
closeMenuButton.addEventListener('click', (e) => {
  menu.classList.remove('is-open')
});