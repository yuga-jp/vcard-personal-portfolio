async function fetchLinkData() {
  const response = await fetch("./assets/links/data/links.json");

  if (!response.ok) {
    throw new Error("Error fetching link data. Status: " + response.status);
  }

  const data = await response.json();
  return data;
}

export default fetchLinkData;