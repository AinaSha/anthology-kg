"use strict";

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

//****** Search input */

document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector(".search-btn span"),
    searchCloseBtn = document.querySelector(".search-close"),
    searchForm = document.querySelector(".search-form"),
    searchInputBtn = searchForm.querySelector("#search-btn"),
    searchFormInput = document.getElementById("text-input"),
    searchOutput = document.getElementById("text-output"),
    notFindText = document.querySelector(".not-find");

  console.log(searchFormInput);
  console.log(searchOutput);
  console.log(notFindText);

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

  const redirectSearchResult = function() {
    if (window.location.href !== "http://127.0.0.1:5501/search-result.html") {
      window.location.href =
        "http://127.0.0.1:5501/search-result.html";
    }
  };

  const pushSearchResult = function() {
    console.log("hello");
    if (searchFormInput.value === "") {
      searchOutput.placeholder = "Издөө терминин киргизиңиз";
      notFindText.classList.add("open");
      document.querySelector(".search-result__input img").classList.add("hide");
    } else {
      searchOutput.value = searchFormInput.value;
      searchFormInput.value = "";
    }
  };

  // searchInputBtn.addEventListener("click", redirectSearchResult);
  searchInputBtn.addEventListener("click", () => {
    redirectSearchResult();
    setTimeout(pushSearchResult(), 1000);
  });
});



searchFormInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchInputBtn.click();
  }
});
