  //Mantener el menu anclado
  const menu = document.getElementById("menu");
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= header.offsetHeight) {
      menu.classList.add("sticky");
    } else {
      menu.classList.remove("sticky");
    }
  });