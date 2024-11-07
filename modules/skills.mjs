import fetchSkillData from "./api/fetchSkillData.mjs";
import { createSkillItem, updateSkillItem } from "./components/skillItem.mjs";

async function setSkills(type, imageScale) {
  const data = await fetchSkillData(type);

  const skillList = document.querySelector(`#${type}`);

  for (const skill of data.contents) {
    const skillItem = createSkillItem(skill, imageScale);
    skillList.appendChild(skillItem);
  }
}

async function updateSkills(type, imageScale) {
  const data = await fetchSkillData(type);

  const skillList = document.querySelector(`#${type}`);

  for (let i = 0; i < skillList.children.length; i++) {
    updateSkillItem(skillList.children[i], data.contents[i], imageScale);
  }
}

export { setSkills, updateSkills };