(function swiper1() {
  const swiper = new Swiper(".mySwiper_1", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1.5,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keybord: {
      enabled: true,
    },
    breakpoints: {
      560: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
})();

(function swiper2() {
  const swiper = new Swiper(".mySwiper_2", {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    pagination: {
      el: ".pagination2",
    },
    navigation: {
      nextEl: ".next2",
      prevEl: ".prev2",
    },
    
  });
})();
