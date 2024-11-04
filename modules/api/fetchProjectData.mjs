async function fetchProjectData() {
  const response = await fetch("./assets/projects/data/projects.json");

  if (!response.ok) {
    throw new Error("Error fetching project data. Status: " + response.status);
  }

  const data = await response.json();
  return data;
}

export default fetchProjectData;