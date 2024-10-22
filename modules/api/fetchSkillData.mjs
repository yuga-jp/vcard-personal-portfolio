async function fetchSkillData(type) {
  const response = await fetch("./assets/skills/data/" + type + ".json");

  if (!response.ok) {
    throw new Error("Error fetching skill data. Type: " + type + ", Status: " + response.status);
  }

  const data = await response.json();
  return data;
}

export default fetchSkillData;