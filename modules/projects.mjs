import fetchProjectData from "./api/fetchProjectData.mjs";
import createProjectItem from "./components/projectItem.mjs";

async function setProjects() {
  const data = await fetchProjectData();

  const portfolio = document.querySelector("#portfolio");

  for (const project of data.contents) {
    const projectItem = createProjectItem(project);
    portfolio.appendChild(projectItem);
  }
}

export default setProjects;