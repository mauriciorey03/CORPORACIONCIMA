function createConstructionModal() {
  // Crear overlay
  const overlay = document.createElement('div');
  overlay.className = 'construction-overlay';
  
  // Crear modal
  const modal = document.createElement('div');
  modal.className = 'construction-modal';
  modal.innerHTML = `
      <i class="fas fa-times close-modal"></i>
      <div class="construction-icon">
          <i class="fas fa-tools"></i>
      </div>
      <h2 class="construction-title">Sitio en Construcción</h2>
      <p class="construction-text">
          Estamos trabajando para actualizar nuestro sitio web. 
          Algunas funcionalidades podrían estar en proceso de actualización o no estar disponibles.
      </p>
      <p class="contact-info">
          Para cualquier consulta:<br>
          (+57) 607 670 4695<br>
          contacto@corporacioncima.com
      </p>
      <button class="construction-button">Entendido</button>
  `;

  // Agregar al DOM
  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  // Función para cerrar el modal
  function closeModal() {
      overlay.classList.add('hidden');
      modal.classList.add('hidden');
      setTimeout(() => {
          overlay.remove();
          modal.remove();
      }, 300);
  }

  // Event listeners para cerrar
  modal.querySelector('.close-modal').addEventListener('click', closeModal);
  modal.querySelector('.construction-button').addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

// Mostrar el modal cuando la página se carga
document.addEventListener('DOMContentLoaded', createConstructionModal);