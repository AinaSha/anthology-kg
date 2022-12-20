"use strict";

// *** Burger ***//

const nav = document.querySelector(".nav"),
  burger = document.querySelector(".burger"),
  navItem = document.querySelectorAll(".nav__item"),
  navLink = document.querySelectorAll(".nav__link");

burger.addEventListener("click", () => {
  nav.classList.toggle("menu-show");
  document.body.classList.toggle("lock");
  document.querySelector(".burger", ".nav__link").classList.toggle("active");
});

navItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    // nav.classList.remove("menu-show");
    burger.classList.remove("active");
  });
});

//** drop-down menu */

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
  const arrows = document.querySelectorAll(".arrow");

  for (let i = 0; i < arrows.length; i++) {
    let thisNavItem = arrows[i].parentElement;
    let thisLink = arrows[i].previousElementSibling;
    let subMenu = arrows[i].nextElementSibling;
    let thisArrow = arrows[i];

    thisLink.classList.add("parent");

    thisNavItem.addEventListener("click", () => {
      subMenu.classList.toggle("open");
    });
    
    
  }
} else {
  body.classList.add("mouse");
}

//** Search input */
const searchBtn = document.querySelector('.search-btn span'),
      searchCloseBtn = document.querySelector('.search-close'),
      searchInput = document.querySelector('.search-form');
   

searchBtn.addEventListener('click', () => {
  searchBtn.classList.add('hide');
  searchCloseBtn.classList.add('show');
  searchInput.classList.add('input-show');
});

searchCloseBtn.addEventListener('click', () => {
  searchBtn.classList.remove('hide');
  searchCloseBtn.classList.remove('show');
  searchInput.classList.remove('input-show');
});



// *** Pagination ***//

// const paginationNumbers = document.getElementById("pagination-numbers");
// const paginatedList = document.getElementById("paginated-list");
// const listItems = document.querySelectorAll(".paginated-card");
// const nextButton = document.getElementById("next-button");
// const prevButton = document.getElementById("prev-button");

// const paginationLimit = 12;
// const pageCount = Math.ceil(listItems.length / paginationLimit);
// let currentPage = 1;

// const disableButton = (button) => {
//   button.classList.add("disabled");
//   button.setAttribute("disabled", true);
// };

// const enableButton = (button) => {
//   button.classList.remove("disabled");
//   button.removeAttribute("disabled");
// };

// const handlePageButtonsStatus = () => {
//   if (currentPage === 1) {
//     disableButton(prevButton);
//   } else {
//     enableButton(prevButton);
//   }

//   if (pageCount === currentPage) {
//     disableButton(nextButton);
//   } else {
//     enableButton(nextButton);
//   }
// };

// const handleActivePageNumber = () => {
//   document.querySelectorAll(".pagination-number").forEach((button) => {
//     button.classList.remove("active");
//     const pageIndex = Number(button.getAttribute("page-index"));
//     if (pageIndex == currentPage) {
//       button.classList.add("active");
//     }
//   });
// };

// const appendPageNumber = (index) => {
//   const pageNumber = document.createElement("button");
//   pageNumber.className = "pagination-number";
//   pageNumber.innerHTML = index;
//   pageNumber.setAttribute("page-index", index);
//   pageNumber.setAttribute("aria-label", "Page " + index);

//   paginationNumbers.append(pageNumber);
// };

// const getPaginationNumbers = () => {
//   for (let i = 1; i <= pageCount; i++) {
//     appendPageNumber(i);
//   }
// };

// const setCurrentPage = (pageNum) => {
//   currentPage = pageNum;

//   handleActivePageNumber();
//   handlePageButtonsStatus();

//   const prevRange = (pageNum - 1) * paginationLimit;
//   const currRange = pageNum * paginationLimit;

//   listItems.forEach((item, index) => {
//     item.classList.add("hidden");
//     if (index >= prevRange && index < currRange) {
//       item.classList.remove("hidden");
//     }
//   });
// };

// window.addEventListener("load", () => {
//   getPaginationNumbers();
//   setCurrentPage(1);

//   prevButton.addEventListener("click", () => {
//     setCurrentPage(currentPage - 1);
//   });

//   nextButton.addEventListener("click", () => {
//     setCurrentPage(currentPage + 1);
//   });

//   document.querySelectorAll(".pagination-number").forEach((button) => {
//     const pageIndex = Number(button.getAttribute("page-index"));

//     if (pageIndex) {
//       button.addEventListener("click", () => {
//         setCurrentPage(pageIndex);
//       });
//     }
//   });
// });

