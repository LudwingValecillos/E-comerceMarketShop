

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



  //