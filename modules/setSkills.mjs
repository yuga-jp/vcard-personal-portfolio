import fetchSkillData from "./api/fetchSkillData.mjs";
import { createSkillItem } from "./components/skillItem.mjs";

async function setSkills(type, imageScale) {
  const data = await fetchSkillData(type);

  const skillList = document.querySelector(`#${type}`);

  for (const skill of data.contents) {
    const skillItem = createSkillItem(skill, imageScale);
    skillList.appendChild(skillItem);
  }
}

export default setSkills;