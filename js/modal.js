// Función que crea y muestra el banner
function showConstructionBanner() {
  const banner = document.createElement('div');
  banner.className = 'construction-banner';
  banner.innerHTML = `
    <i class="fas fa-times close-banner"></i>
    <div class="construction-icon">
      <i class="fas fa-tools"></i>
      <span class="construction-title">Sitio web en Construcción</span>
    </div>
    <p class="construction-text">Estamos trabajando en nuestro sitio web. Algunas funcionalidades podrían estar en proceso de actualización o no estar disponibles.</p>
    <p class="contact-info">Consultas: (+57) 607 670 4695 </p>
    <p class="contact-info"> contacto@corporacioncima.com</p>
  `;

  document.body.appendChild(banner);

  banner.querySelector('.close-banner').addEventListener('click', () => {
    banner.classList.add('sliding-out');
    setTimeout(() => {
      banner.remove();
    }, 500);
  });
}

// Mostrar el banner cuando la página se carga
document.addEventListener('DOMContentLoaded', showConstructionBanner);