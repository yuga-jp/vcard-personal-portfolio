import fetchTextData from "./api/fetchTextData.mjs";
import createTimelineItem from "./components/education.mjs";

async function setTextData(lang) {
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

export default setTextData;