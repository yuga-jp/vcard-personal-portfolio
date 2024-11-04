import fetchSkillData from "./api/fetchSkillData.mjs";
import { updateSkillItem } from "./components/skillItem.mjs";

async function updateSkills(type, imageScale) {
  const data = await fetchSkillData(type);

  const skillList = document.querySelector(`#${type}`);

  for (let i = 0; i < skillList.children.length; i++) {
    updateSkillItem(skillList.children[i], data.contents[i], imageScale);
  }
}

export default updateSkills;