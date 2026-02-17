  //Selección
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });  

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