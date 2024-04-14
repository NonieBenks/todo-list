import { Project } from "./project";
import { Store } from "./store";

let store = new Store();
let project = new Project();

class BuildHomePage {
  constructor() {}

  buildHomePage() {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add(
      "grid",
      "grid-rows-4",
      "grid-cols-4",
      "w-screen",
      "h-screen"
    );
    document.body.appendChild(gridContainer);

    const mainSection = document.createElement("div");
    mainSection.classList.add(
      "work-space",
      "bg-amber-300",
      "p-2",
      "col-span-3",
      "row-span-4",
      "flex",
      "items-center",
      "text-center",
      "justify-start"
    );
    gridContainer.appendChild(mainSection);

    const container = document.createElement("div");
    container.classList.add("container", "inline-block");
    mainSection.appendChild(container);

    const typingText = document.createElement("div");
    typingText.classList.add("typing-text");
    typingText.textContent = "Press 'n' to create a new project";
    container.appendChild(typingText);

    const mainQuestSection = document.createElement("div");
    mainQuestSection.classList.add("bg-orange-400", "p-2", "main-quest");
    gridContainer.appendChild(mainQuestSection);

    const mainQuestTitle = document.createElement("h3");
    mainQuestTitle.classList.add("text-4xl", "font-bold");
    mainQuestTitle.textContent = "Main quest";
    mainQuestSection.appendChild(mainQuestTitle);

    const mainQuestDescription = document.createElement("p");
    mainQuestDescription.textContent = "Define your ultimate goal";
    mainQuestSection.appendChild(mainQuestDescription);

    const sideQuestSection = document.createElement("div");
    sideQuestSection.classList.add(
      "p-2",
      "side-quests",
      "bg-lime-600",
      "row-span-4"
    );
    gridContainer.appendChild(sideQuestSection);

    const sideQuestTitle = document.createElement("h3");
    sideQuestTitle.classList.add("text-3xl");
    sideQuestTitle.textContent = "Projects";
    sideQuestSection.appendChild(sideQuestTitle);

    const sideQuestsList = document.querySelector(".side-quests");
    let retrievedProjects = store.retrieveProjectsData();
    console.log(retrievedProjects);
    retrievedProjects.map((quest) => {
      const newQuest = sideQuestsList.appendChild(
        document.createElement("div")
      );
      newQuest.classList.add(
        "project",
        "bg-slate-200",
        "h-auto",
        "w-auto",
        "rounded-lg",
        "border-2",
        "border-sky-300",
        "p-3",
        "my-3",
        "flex",
        "justify-left",
        "items-center"
      );
      newQuest.addEventListener("click", () => {
        console.log(quest);
        project.displayProjectDetails(quest.title);
      });
      newQuest.textContent = quest.title;
    });

    const addQuestSection = document.createElement("div");
    addQuestSection.classList.add(
      "col-span-4",
      "h-16",
      "text-left",
      "p-2",
      "row-span-3",
      "bg-blue-300",
      "flex",
      "flex-row",
      "content-center"
    );
    gridContainer.appendChild(addQuestSection);

    const plusSpan = document.createElement("span");
    plusSpan.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "min-w-10"
    );
    plusSpan.textContent = "+";
    addQuestSection.appendChild(plusSpan);

    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("placeholder", "Add new project");
    inputElement.classList.add(
      "add-quest-btn",
      "bg-blue-300",
      "w-screen",
      "border-none",
      "p-3"
    );
    addQuestSection.appendChild(inputElement);
  }

  buildProjectsSection() {}
}

export { BuildHomePage };