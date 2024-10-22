import fetchSkillData from "./api/fetchSkillData.mjs";
import { updateSkillProgressIndicator } from "./components/skillProgressIndicator.mjs";

async function updateSkills(type, imageScale) {
  const data = await fetchSkillData(type);

  const skillList = document.querySelector(`#${type}`);

  for (let i = 0; i < skillList.children.length; i++) {
    updateSkillProgressIndicator(skillList.children[i], data.contents[i], imageScale);
  }
}

export default updateSkills;