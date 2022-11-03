"use strict";

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