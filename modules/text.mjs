import fetchTextData from "./api/fetchTextData.mjs";
import { createTimelineItem, updateTimelineItem } from "./components/timelineItem.mjs";

async function setTexts(lang) {
  const data = await fetchTextData(lang);

  const educationData = data.education;
  const educationList = document.querySelector("#education");
  for (const education of educationData) {
    const educationItem = createTimelineItem(education);
    educationList.appendChild(educationItem);
  }

  const experienceData = data.experience;
  const experienceList = document.querySelector("#experience");
  for (const experience of experienceData) {
    const experienceItem = createTimelineItem(experience);
    experienceList.appendChild(experienceItem);
  }
}

async function updateTexts(lang) {
  const data = await fetchTextData(lang);

  const educationData = data.education;
  const educationList = document.querySelector("#education");
  for (let i = 0; i < educationData.length; i++) {
    updateTimelineItem(educationList.children[i], educationData[i]);
  }
}

export { setTexts, updateTexts };