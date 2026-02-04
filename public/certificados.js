//Carrousel-Movimiento
function abrirLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const imagenGrande = document.getElementById('imagenGrande');
  
  imagenGrande.src = img.src;
  lightbox.style.display = 'flex';

  // Bloquear scroll del body
  document.body.style.overflow = 'hidden';
}

function cerrarLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';

  // Restaurar scroll del body
  document.body.style.overflow = 'auto';
}

// Cerrar al hacer clic fuera de la imagen
document.getElementById('lightbox').addEventListener('click', function(e) {
  const imagenGrande = document.getElementById('imagenGrande');
  if (e.target !== imagenGrande) {
    cerrarLightbox();
  }
});
