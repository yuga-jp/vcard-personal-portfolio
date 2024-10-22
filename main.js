"use strict";
import setTextData from "./modules/setTextData.mjs";
import setSkills from "./modules/setSkills.mjs";
import updateSkills from "./modules/updateSkills.mjs";

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

const profileNavigation = document.querySelector("#navigation-profile");
const homeNavigationItems = document.querySelectorAll("[data-home-nav]");
const profilePage = document.querySelector("#page-profile");
const homePages = document.querySelectorAll("[data-page-type='home']");
let lastHomePage = document.querySelector("#page-cv");
let viewingPage = document.querySelector("#page-cv");

for (const homeNavItem of homeNavigationItems) {
  homeNavItem.addEventListener("click", () => {
    for (const item of homeNavigationItems) {
      if (item === homeNavItem) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
    profileNavigation.classList.remove("active");
    for (const page of homePages) {
      if (page.dataset.page === homeNavItem.dataset.homeNav) {
        page.classList.add("active");
        viewingPage = page;
        lastHomePage = page;
      } else {
        page.classList.remove("active");
      }
    }
    profilePage.classList.remove("active");
  });
}

profileNavigation.addEventListener("click", () => {
  profileNavigation.classList.add("active");

  for (const homeNavItem of homeNavigationItems) {
    homeNavItem.classList.remove("active");
  }
  for (const page of homePages) {
    page.classList.remove("active");
  }
  profilePage.classList.add("active");
  viewingPage = profilePage;
});



addEventListener("resize", () => {
  if (window.innerWidth >= 768 && viewingPage.id === "page-profile") {
    profilePage.classList.remove("active");
    profileNavigation.classList.remove("active");

    for (const homeNavItem of homeNavigationItems) {
      if (homeNavItem.dataset.homeNav === lastHomePage.dataset.page) {
        homeNavItem.classList.add("active");
      }
    }
    for (const page of homePages) {
      if (page === lastHomePage) {
        page.classList.add("active");
        viewingPage = page;
      }
    }
  }
});

const langButtton = document.querySelector("#lang-button");
const langMenu = document.querySelector("#lang-menu");

langButtton.addEventListener("click", () => {
  langMenu.classList.toggle("hidden");
  langMenu.classList.toggle("flex");
});

addEventListener("click", (event) => {
  const target = event.target;
  let bool = false;
  for (const child of langButtton.children) {
    if (target === child) {
      bool = true;
    }
  }
  if (target === langButtton || target === langMenu) {
    bool = true;
  }
  if (!bool) {
    langMenu.classList.add("hidden");
    langMenu.classList.remove("flex");
  }
});

addEventListener("touchstart", (event) => {
  const target = event.target;
  let bool = false;
  for (const child of langButtton.children) {
    if (target === child) {
      bool = true;
    }
  }
  if (target === langButtton || target === langMenu) {
    bool = true;
  }
  if (!bool) {
    langMenu.classList.add("hidden");
    langMenu.classList.remove("flex");
  }
});

addEventListener("load", () => {
  setTextData("en");
  if (innerWidth >= 640) {
    setSkills("programming_languages", 72 / 56);
    setSkills("frontend_frameworks", 72 / 56);
    setSkills("backend_frameworks", 72 / 56);
  } else {
    setSkills("programming_languages", 1.0);
    setSkills("frontend_frameworks", 1.0);
    setSkills("backend_frameworks", 1.0);
  }
});

const mql_640 = window.matchMedia("(min-width: 640px)");

mql_640.addEventListener("change", (e) => {
  if (e.matches) {
    updateSkills("programming_languages", 72 / 56);
    updateSkills("frontend_frameworks", 72 / 56);
    updateSkills("backend_frameworks", 72 / 56);
  } else {
    updateSkills("programming_languages", 1.0);
    updateSkills("frontend_frameworks", 1.0);
    updateSkills("backend_frameworks", 1.0);
  }
});