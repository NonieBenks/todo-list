import { Project } from "./project";
import { Store } from "./store";

let store = new Store();

class BuildHomePage {
  constructor() {}

  buildHomePage() {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add(
      "app-container",
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

    const projectSection = document.createElement("div");
    projectSection.classList.add(
      "p-2",
      "projects",
      "bg-lime-600",
      "row-span-4"
    );
    gridContainer.appendChild(projectSection);

    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("text-3xl");
    projectTitle.textContent = "Projects";
    projectSection.appendChild(projectTitle);

    const projectsList = document.querySelector(".projects");
    let retrievedProjects = store.retrieveProjectsData();

    retrievedProjects.map((project) => {
      let projectInstance = new Project(
        project.title,
        project.status,
        project.tasks
      );
      const projectItem = projectsList.appendChild(
        document.createElement("div")
      );
      projectItem.classList.add(
        "project",
        "bg-sky-50",
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

      projectItem.textContent = project.title;
      project.status
        ? projectItem.classList.add("line-through")
        : projectItem.classList.remove("line-through");

      let projectCheckbox = document.createElement("input");
      projectCheckbox.type = "checkbox";
      projectCheckbox.checked = project.status;
      projectCheckbox.className = "project-checkbox";
      projectCheckbox.addEventListener("change", (event) => {
        event.stopPropagation();
        console.log(projectItem);
        if (projectCheckbox.checked) {
          project.status = true;
          projectInstance.changeStatus(project, true);
        } else {
          project.status = false;
          projectInstance.changeStatus(project, false);
        }
        project.status
          ? projectItem.classList.add("line-through")
          : projectItem.classList.remove("line-through");
      });
      projectItem.prepend(projectCheckbox);
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
    gridContainer.append(addQuestSection);

    const plusSpan = document.createElement("span");
    plusSpan.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "min-w-10"
    );
    plusSpan.textContent = "+";
    addQuestSection.append(plusSpan);

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
    addQuestSection.append(inputElement);
  }

  buildProjectsSection() {}
}

export { BuildHomePage };
