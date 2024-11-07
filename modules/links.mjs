import fetchLinkData from "./api/fetchLinkData.mjs";
import createLinkItem from "./components/linkItem.mjs";

async function setLinks() {
  const data = await fetchLinkData("./assets/links/data/links.json");

  const linkList_aside = document.querySelector("#links-1");
  const linkList_article = document.querySelector("#links-2");

  for (const link of data.contents) {
    const linkItem_aside = createLinkItem(link);
    linkList_aside.appendChild(linkItem_aside);

    const linkItem_article = createLinkItem(link);
    linkList_article.appendChild(linkItem_article);
  }
}

export default setLinks;