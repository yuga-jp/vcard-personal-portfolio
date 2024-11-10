import fetchTextData from "./api/fetchTextData.mjs";
import { createParagraph, updateParagraph } from "./components/paragraph.mjs";
import { createTimelineItem, updateTimelineItem } from "./components/timelineItem.mjs";

async function setTexts(lang) {
  const data = await fetchTextData(lang);

  const aboutData = data.about;
  const aboutSection = document.querySelector("#section-about");
  for (const about of aboutData) {
    const aboutParagraph = createParagraph(about);
    aboutSection.appendChild(aboutParagraph);
  }

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

  const aboutData = data.about;
  const aboutSection = document.querySelector("#section-about");
  for (let i = 0; i < aboutData.length; i++) {
    updateParagraph(aboutSection.children[i], aboutData[i]);
  }

  const educationData = data.education;
  const educationList = document.querySelector("#education");
  for (let i = 0; i < educationData.length; i++) {
    updateTimelineItem(educationList.children[i], educationData[i]);
  }

  const experienceData = data.experience;
  const experienceList = document.querySelector("#experience");
  for (let i = 0; i < experienceData.length; i++) {
    updateTimelineItem(experienceList.children[i], experienceData[i]);
  }
}

export { setTexts, updateTexts };