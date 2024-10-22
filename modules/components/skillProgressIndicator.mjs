function createSkillProgressIndicator(data, imageScale) {
  const skillProgressIndicator = document.createElement("li");
  skillProgressIndicator.classList.add("relative", "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-full", "bg-gradient-to-br", "from-neutral-700", "to-neutral-800", "to-20%", "text-base", "text-orange-300", "shadow", "ring-1", "ring-neutral-900", "sm:h-[72px]", "sm:w-[72px]");

  const progressIndicator = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  progressIndicator.classList.add("absolute");
  progressIndicator.setAttribute("viewBox", "0 0 100 100");

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "50%");
  circle.setAttribute("cy", "50%");
  circle.setAttribute("r", "45%");
  circle.setAttribute("transform", "rotate(-90)");
  circle.setAttribute("transform-origin", "center");
  circle.setAttribute("fill", "transparent");
  circle.setAttribute("stroke", "url(#gradient-1)");
  circle.setAttribute("stroke-dasharray", `calc(${data.progress} / 100 * 90% * pi) 1000`);
  circle.setAttribute("stroke-linecap", "round");
  circle.setAttribute("stroke-width", "6");
  progressIndicator.appendChild(circle);

  const skillImage = document.createElement("img");
  skillImage.classList.add("h-auto");
  skillImage.setAttribute("src", `./assets/skills/${data.name}.${data.format}`);
  skillImage.setAttribute("alt", data.name);
  skillImage.setAttribute("style", `width: ${data.imageWidth * imageScale}px; margin-top: ${data.marginTop * imageScale}px; margin-right: ${data.marginRight * imageScale}px; margin-bottom: ${data.marginBottom * imageScale}px; margin-left: ${data.marginLeft * imageScale}px;`);

  skillProgressIndicator.appendChild(progressIndicator);
  skillProgressIndicator.appendChild(skillImage);

  return skillProgressIndicator;
}

function updateSkillProgressIndicator(element, data, imageScale) {
  element.children[1].setAttribute("style", `width: ${data.imageWidth * imageScale}px; margin-top: ${data.marginTop * imageScale}px; margin-right: ${data.marginRight * imageScale}px; margin-bottom: ${data.marginBottom * imageScale}px; margin-left: ${data.marginLeft * imageScale}px;`);
}

export { createSkillProgressIndicator, updateSkillProgressIndicator };