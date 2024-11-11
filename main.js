"use strict";
import { setTexts, updateTexts } from "./modules/text.mjs";
import setLinks from "./modules/links.mjs"
import { setSkills, updateSkills } from "./modules/skills.mjs";
import setProjects from "./modules/projects.mjs";

const languageSelectorItems = document.querySelectorAll("[data-lang-select]");

for (const langSelectorItem of languageSelectorItems) {
  langSelectorItem.addEventListener("click", () => {
    updateTexts(langSelectorItem.dataset.langSelect);
  });
}

const profileNavigationItem = document.querySelector("#navigation-profile");
const mainNavigationItems = document.querySelectorAll("[data-navigation]");
const profilePage = document.querySelector("#page-profile");
const mainPages = document.querySelectorAll("[data-page]");
let lastMainPage = document.querySelector("#page-about");
let viewingPage = document.querySelector("#page-about");

for (const selectNavItem of mainNavigationItems) {
  selectNavItem.addEventListener("click", () => {
    for (const navItem of mainNavigationItems) {
      if (navItem === selectNavItem) {
        navItem.classList.add("active");
      } else {
        navItem.classList.remove("active");
      }
    }
    profileNavigationItem.classList.remove("active");
    for (const page of mainPages) {
      if (page.dataset.page === selectNavItem.dataset.navigation) {
        page.classList.add("active");
        viewingPage = page;
        lastMainPage = page;
      } else {
        page.classList.remove("active");
      }
    }
    profilePage.classList.remove("active");
  });
}

profileNavigationItem.addEventListener("click", () => {
  profileNavigationItem.classList.add("active");

  for (const navItem of mainNavigationItems) {
    navItem.classList.remove("active");
  }
  for (const page of mainPages) {
    page.classList.remove("active");
  }
  profilePage.classList.add("active");
  viewingPage = profilePage;
});

// Language menu
const langButton = document.querySelector("#lang-button");
const langMenu = document.querySelector("#lang-menu");
let isMenuOpen = false;

function toggleLangMenu() {
  langMenu.classList.toggle("hidden");
  langMenu.classList.toggle("flex");
  isMenuOpen = !isMenuOpen;
}

addEventListener("click", (event) => {
  let isLangButton = false;
  if (event.target === langButton) {
    isLangButton = true;
  }
  if (isLangButton) {
    toggleLangMenu();
  } else if (isMenuOpen && event.target !== langMenu) {
    toggleLangMenu();
  }
});

// Skills list
addEventListener("load", () => {
  setTexts("en");
  setLinks();
  if (innerWidth >= 640) {
    setSkills("programming_languages", 72 / 56);
    setSkills("frontend_frameworks", 72 / 56);
    setSkills("backend_frameworks", 72 / 56);
  } else {
    setSkills("programming_languages", 1.0);
    setSkills("frontend_frameworks", 1.0);
    setSkills("backend_frameworks", 1.0);
  }
  setProjects();
});

// Media queries 640px
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

// Media queries 768px
const mql_768 = window.matchMedia("(min-width: 768px)");

mql_768.addEventListener("change", (e) => {
  if (e.matches && viewingPage.id === "page-profile") {
    profileNavigationItem.classList.remove("active");
    profilePage.classList.remove("active");

    for (const navItem of mainNavigationItems) {
      if (navItem.dataset.navigation === lastMainPage.dataset.page) {
        navItem.classList.add("active");
      }
    }
    for (const page of mainPages) {
      if (page === lastMainPage) {
        page.classList.add("active");
        viewingPage = page;
      }
    }
  }
});