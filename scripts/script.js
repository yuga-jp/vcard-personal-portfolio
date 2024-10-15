'use strict';

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

const sideNavigationItems = document.querySelectorAll("[data-side-nav]");
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
    for (const sideNavItem of sideNavigationItems) {
      if (sideNavItem.dataset.sideNav === "home") {
        sideNavItem.classList.add("active");
      } else {
        sideNavItem.classList.remove("active");
      }
    }
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

for (const sideNavItem of sideNavigationItems) {
  sideNavItem.addEventListener("click", () => {
    for (const item of sideNavigationItems) {
      if (item === sideNavItem) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
    if (sideNavItem.dataset.sideNav == "home") {
      for (const page of homePages) {
        if (page === lastHomePage) {
          page.classList.add("active");
          viewingPage = page;
        }
      }
      for (const homeNavItem of homeNavigationItems) {
        if (homeNavItem.dataset.homeNav === lastHomePage.dataset.page) {
          homeNavItem.classList.add("active");
        }
      }
      profilePage.classList.remove("active");
    } else {
      for (const homeNavItem of homeNavigationItems) {
        homeNavItem.classList.remove("active");
      }
      for (const page of homePages) {
        page.classList.remove("active");
      }
      profilePage.classList.add("active");
      viewingPage = profilePage;
    }
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && viewingPage.id === "page-profile") {
    profilePage.classList.remove("active");
    for (const sideNavItem of sideNavigationItems) {
      if (sideNavItem.dataset.sideNav === "home") {
        sideNavItem.classList.add("active");
      } else {
        sideNavItem.classList.remove("active");
      }
    }
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

// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = langData[key];
  });
}

// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch('assets/languages/${lang}.json');
  return response.json();
}

// Function to change language
async function changeLanguage(lang) {
  const langData = await fetchLanguageData(lang);
  updateContent(langData);
}