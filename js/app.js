"use strict";

window.addEventListener("DOMContentLoaded", () => {

// ******* Burger ***//

  const nav = document.querySelector(".nav"),
    burger = document.querySelector(".burger"),
    navItemPage = document.querySelectorAll(".nav__item-page"),
    navLink = document.querySelectorAll(".nav__link");

  burger.addEventListener("click", () => {
    nav.classList.toggle("menu-show");
    document.body.classList.toggle("lock");
    document.querySelector(".burger", ".nav__link").classList.toggle("active");
  });

  navItemPage.forEach((item) => {
    item.addEventListener("click", (e) => {
      nav.classList.remove("menu-show");
      burger.classList.remove("active");
      document.body.classList.remove("lock");
    });
  });



//******* drop-down menu */

 const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return (
        navigator.userAgent.match(/IEMobile/i) ||
        navigator.userAgent.match(/WPDesktop/i)
      );
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  const body = document.querySelector("body");

  if (isMobile.any()) {
    body.classList.add("touch");
    let arrows = document.querySelectorAll(".nav__arrow");

    if (arrows.length > 0) {
      for (let index = 0; index < arrows.length; index++) {
         const menuArrow = arrows[index];
         menuArrow.addEventListener('click', function(e) {
          menuArrow.parentElement.classList.toggle('open');
         });
      }
    }
  } else {
    body.classList.add("mouse");
  }

  


//****** Search input */

  const searchBtn = document.querySelector(".search-btn span"),
    searchCloseBtn = document.querySelector(".search-close"),
    searchForm = document.querySelector(".search-form");

  const showSearchForm = function () {
    searchBtn.classList.add("hide");
    searchCloseBtn.classList.add("show");
    searchForm.classList.add("input-show");
  };

  const closeSearchForm = function () {
    searchBtn.classList.remove("hide");
    searchCloseBtn.classList.remove("show");
    searchForm.classList.remove("input-show");
  };

  searchBtn.addEventListener("click", showSearchForm);
  searchCloseBtn.addEventListener("click", closeSearchForm);





  // *** Modal**//

  const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

        console.log(modalTrigger);
        console.log(modal);
  function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
  }

  function openModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    shareLinkInput.value = document.location.href;
  }  

  try {
    modalTrigger.addEventListener('click', openModal);
    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if(e.target === modal) {
        closeModal();
      }
    });
  } catch(e){
    console.log(e);
  }

  

//* Social share links

const facebookBtn = document.querySelector('.facebook-btn'),
      telegramBtn = document.querySelector('.telegram-btn'),
      whatsappBtn = document.querySelector('.whatsapp-btn');

function init() {
  let postUrl = encodeURI(document.location.href);
  
  try {
    facebookBtn.setAttribute('href',`https://www.facebook.com/sharer.php?u=${postUrl}`);
    telegramBtn.setAttribute('href',`https://t.me/share/url?url=${postUrl}&text=${postUrl}`);
    whatsappBtn.setAttribute('href',`https://api.whatsapp.com/send?text=${postUrl}`);
  } catch(e){}
  
}

init();

   
  /* Copy url in Modal window */

  const copyShareBtn =  document.getElementById('share-link-btn'),
    copyText = document.querySelector('.share-site-link input'),
    copyInfoPopup = document.querySelector('.copy-popup'),
    shareLinkInput = document.querySelector('#link-input');

  try {
    copyShareBtn.addEventListener('click', () => {
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
      copyInfoPopup.classList.add('show');
  
    setTimeout(() => {
      copyInfoPopup.classList.remove('show');
      
    }, 1500);
      
    });
  }catch (e){}



  

/* Comment block */

// commentTrigger and ScrollIntoView
const commentTrigger = document.querySelector('[data-comment]'),
      commentForm = document.querySelector('.comment__wrapper');
    

const setScrollIntoView = () => {
  commentForm.scrollIntoView({
    block: "center",
    inline: "nearest",
    behavior: "smooth"
  });
};

try {
  commentTrigger.addEventListener('click', () => {
    setScrollIntoView();
  });
  
}catch(e) {}

});

