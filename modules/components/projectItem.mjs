function createProjectItem(data) {
  const projectItem = document.createElement("li");
  projectItem.classList.add("flex", "flex-col", "items-start");

  const projectLink = document.createElement("a");
  projectLink.classList.add("group", "relative");
  projectLink.setAttribute("href", data.url);
  projectLink.setAttribute("target", "_blank");

  const projectFigure = document.createElement("figure");
  projectFigure.classList.add("flex", "h-52", "items-center", "overflow-clip", "rounded-3xl", "transition", "duration-200", "group-hover:blur-sm", "group-hover:brightness-50", "sm:h-80", "sm:rounded-2xl", "md:h-auto");

  const projectImage = document.createElement("img");
  projectImage.classList.add("transition", "duration-200", "group-hover:scale-110");
  projectImage.setAttribute("src", `./assets/projects/${data.name}.${data.format}`);
  projectImage.setAttribute("alt", data.name);
  projectImage.setAttribute("loading", "lazy");

  projectFigure.appendChild(projectImage);

  const hoverOverlay = document.createElement("div");
  hoverOverlay.classList.add("absolute", "top-[50%]", "flex", "w-full", "-translate-y-1/2", "items-center", "justify-center", "gap-1", "text-center", "text-base", "text-slate-50", "opacity-0", "transition", "duration-100", "group-hover:opacity-100");
  
  const hoverText = document.createElement("p");
  hoverText.textContent = data.linkTo;

  const hoverImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  hoverImage.classList.add("size-5");
  hoverImage.setAttribute("fill", "none");
  hoverImage.setAttribute("viewBox", "0 0 24 24");
  hoverImage.setAttribute("stroke", "currentColor");
  hoverImage.setAttribute("stroke-width", "1.5");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("d", "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25");

  hoverImage.appendChild(path);

  hoverOverlay.appendChild(hoverText);
  hoverOverlay.appendChild(hoverImage);

  projectLink.appendChild(projectFigure);
  projectLink.appendChild(hoverOverlay);

  const projectTitle = document.createElement("h3");
  projectTitle.classList.add("ml-2", "text-base", "font-normal", "leading-relaxed", "text-slate-50");
  projectTitle.textContent = data.name;

  const projectCategory = document.createElement("p");
  projectCategory.classList.add("ml-2", "text-sm", "font-light", "text-gray-300", "sm:text-base");
  projectCategory.textContent = data.category;

  projectItem.appendChild(projectLink);
  projectItem.appendChild(projectTitle);
  projectItem.appendChild(projectCategory);

  return projectItem;
}

export default createProjectItem;