const swiper = new Swiper('.swiper', {
  direction: 'horizontal',     // horizontal para colocar lado a lado
  loop: true,                  // mantém o loop infinito
  slidesPerView: 3,                  // 👈 mostra 3 livros por vez
  spaceBetween: 10,            // espaço em pixels entre eles

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  // opcional: faz o layout ficar responsivo
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});