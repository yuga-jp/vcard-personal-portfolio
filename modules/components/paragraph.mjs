function createParagraph(data) {
  const paragraph = document.createElement("p");

  paragraph.classList.add("mb-4", "text-sm", "font-light", "leading-relaxed", "text-gray-300", "sm:text-base");
  paragraph.textContent = data.content;

  return paragraph;
}

function updateParagraph(element, data) {
  element.textContent = data.content;
}

export { createParagraph, updateParagraph };