const menu = document.querySelector('nav');
document.querySelectorAll('section').forEach(sec => {
  sec.style.scrollMarginTop = menu.offsetHeight + "px";
});

// Selecciona el nav
const nav = document.querySelector('nav');

// Escucha el evento de scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.classList.add('sticky');   // añade la clase cuando bajas
  } else {
    nav.classList.remove('sticky'); // la quita cuando vuelves arriba
  }
});
