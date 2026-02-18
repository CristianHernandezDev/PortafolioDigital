const toggle = document.querySelector('.menu-toggle');
const menuMovil = document.querySelector('#menu-movil');
const linksMovil = document.querySelectorAll('#menu-movil a');

toggle.addEventListener('click', () => {
  menuMovil.classList.toggle('show');
});

linksMovil.forEach(link => {
  link.addEventListener('click', () => {
    menuMovil.classList.remove('show');
  });
});
