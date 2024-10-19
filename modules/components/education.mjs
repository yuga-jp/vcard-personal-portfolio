function createTimelineItem(data) {
  const timelineItem = document.createElement("li");
  timelineItem.classList.add("relative", "mb-5", "before:absolute", "before:-left-[29px]", "before:-top-6", "before:h-[calc(100%+50px)]", "before:w-px", "before:bg-neutral-700", "after:absolute", "after:-left-[31.625px]", "after:top-1.5", "after:h-1.5", "after:w-1.5", "after:rounded-full", "after:border", "after:border-neutral-700", "after:bg-orange-300", "after:shadow-lg", "last:mb-0", "before:last:hidden", "before:sm:-left-[41px]", "before:sm:w-0.5", "after:sm:-left-[43.5px]", "after:sm:h-2", "after:sm:w-2");

  const title = document.createElement("h4");
  title.classList.add("mb-2", "text-sm", "leading-snug", "sm:text-base");
  title.textContent = data.title;

  const period = document.createElement("div");
  period.classList.add("font-normal", "leading-relaxed", "text-orange-300")
  period.textContent = data.start;
  period.textContent += " – ";
  if (data.end !== null) {
    period.textContent += data.end;
  }

  const content = document.createElement("p");
  content.classList.add("text-sm", "font-light", "leading-relaxed", "text-gray-300", "sm:text-base");
  content.textContent = data.content;

  timelineItem.appendChild(title);
  timelineItem.appendChild(period);
  timelineItem.appendChild(content);

  return timelineItem;
}

export default createTimelineItem;