window.addEventListener("DOMContentLoaded", () => {
    //*** Tab-content ***/
const tabs = document.querySelectorAll(".tab-btn"),
tabsContent = document.querySelectorAll(".search-list"),
tabsParent = document.querySelector(".tab-btns");


const hideTabContent = () => {
  tabsContent.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show");
  });

  tabs.forEach((item) =>  {
    item.classList.remove('active');
  });
};

const showTabContent = (i = 0) => {
  tabsContent[i].classList.add("show");
  tabsContent[i].classList.remove("hide");
  tabs[i].classList.add("active");
};

hideTabContent();
showTabContent(); 

tabsParent.addEventListener("click", (event) => {
  const target = event.target;

  if (target && target.classList.contains("tab-btn")) {
    tabs.forEach((item, i) => {
      if (target == item) {
        // esli element-target kotoryi my tolko chto kliknuli budet sovpadat' s elementom kotorym my seichas perebiraem v cycle forEach
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

});