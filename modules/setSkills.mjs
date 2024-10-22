import fetchSkillData from "./api/fetchSkillData.mjs";
import { createSkillProgressIndicator } from "./components/skillProgressIndicator.mjs";

async function setSkills(type, imageScale) {
  const data = await fetchSkillData(type);

  const skillList = document.querySelector(`#${type}`);

  for (const skill of data.contents) {
    const skillItem = createSkillProgressIndicator(skill, imageScale);
    skillList.appendChild(skillItem);
  }
}

export default setSkills;