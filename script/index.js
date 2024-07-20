

//Carrousel de ofertas

const carousel = document.getElementById('carousel');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  const cardWidth = document.querySelector('.carousel-item').offsetWidth; // Ancho de una tarjeta
  const visibleCards = Math.floor(window.innerWidth / cardWidth); // Número de tarjetas visibles basado en el ancho de la ventana

  prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -cardWidth * visibleCards, behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: cardWidth * visibleCards, behavior: 'smooth' });
  });

  // Actualiza el número de tarjetas visibles cuando se redimensiona la ventana
  window.addEventListener('resize', () => {
    const newCardWidth = document.querySelector('.carousel-item').offsetWidth;
    const newVisibleCards = Math.floor(window.innerWidth / newCardWidth);
    prevButton.addEventListener('click', () => {
      carousel.scrollBy({ left: -newCardWidth * newVisibleCards, behavior: 'smooth' });
    });
    nextButton.addEventListener('click', () => {
      carousel.scrollBy({ left: newCardWidth * newVisibleCards, behavior: 'smooth' });
    });
  });



  // Carrito de compras

  document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.getElementById('closeModalButton');
    const cartModal = document.getElementById('cartModal');
    const cartItemsContainer = document.getElementById('cartItemsContainer');

    // Abrir el modal
    openModalButton.addEventListener('click', () => {
      cartModal.classList.remove('hidden');
      loadCartItems();
    });

    // Cerrar el modal
    closeModalButton.addEventListener('click', () => {
      cartModal.classList.add('hidden');
    });

    // Cargar productos del carrito desde localStorage
    function loadCartItems() {
      cartItemsContainer.innerHTML = ''; // Limpiar el contenedor
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center">El carrito está vacío.</p>';
        return;
      }

      cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'flex justify-between items-center p-2 border-b';
        itemElement.innerHTML = `
          <div>
            <p class="font-semibold">${item.name}</p>
            <p class="text-gray-600">${item.description}</p>
          </div>
          <div>
            <p class="font-semibold">$${item.price}</p>
          </div>
        `;
        cartItemsContainer.appendChild(itemElement);
      });
    }
  });