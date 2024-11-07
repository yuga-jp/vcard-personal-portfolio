"use strict";
import { setTexts, updateTexts } from "./modules/text.mjs";
import setLinks from "./modules/setLinks.mjs"
import { setSkills, updateSkills } from "./modules/skills.mjs";
import setProjects from "./modules/setProjects.mjs";

const languageSelectorItems = document.querySelectorAll("[data-lang-select]");

for (const langSelectorItem of languageSelectorItems) {
  langSelectorItem.addEventListener("click", () => {
    updateTexts(langSelectorItem.dataset.langSelect);
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