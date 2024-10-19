async function fetchTextData(lang) {
  const response = await fetch("./assets/texts/" + lang + ".json");

  if (!response.ok) {
    throw new Error("Error fetching language data. Language: " + lang + ", Status: " + response.status);
  }

  const data = await response.json();
  return data;
}

export default fetchTextData;