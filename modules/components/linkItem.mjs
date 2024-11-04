function createLinkItem(data) {
  const linkItem = document.createElement("li");

  const link = document.createElement("a");
  link.classList.add("text-lg", "text-gray-400", "hover:text-gray-300");
  link.setAttribute("href", data.url);
  link.setAttribute("target", "_blank");

  if (data.iconType == "font-awesome") {
    const icon = document.createElement("i");
    icon.classList.add("fa-brands", `fa-${data.icon}`);
    link.appendChild(icon);
  }

  linkItem.appendChild(link);

  return linkItem;
}

export default createLinkItem;