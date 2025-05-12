// Detecta elementos con la clase 'fade-in-js' y los anima al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in-js');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Solo una vez
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
});
function toggleMenu() {
  const menu = document.getElementById('menuResponsive');
  menu.classList.toggle('show');
}
document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll('.imagen');

  imagenes.forEach(imagen => {
    imagen.addEventListener('mouseenter', () => {
      imagen.style.transform = 'scale(1)';
    });

    imagen.addEventListener('mouseleave', () => {
      imagen.style.transform = 'scale(0.5)';
    });
  });
});

