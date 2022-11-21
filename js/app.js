"use strict";

// *** Burger ***//

const nav = document.querySelector('.nav'),
      burger = document.querySelector('.burger'),
      navItem = document.querySelectorAll('.nav__item');

      burger.addEventListener('click', () => {
        nav.classList.toggle('menu-show');
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
      });

      navItem.forEach((item )=> {
        item.addEventListener('click', (e) => {
           nav.classList.remove('menu-show');
           burger.classList.remove('active');
        });
      });




 // *** Slide ***//   
 var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  centerSlide: true,
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
          spaceBetween: 20,
      },
  },
});