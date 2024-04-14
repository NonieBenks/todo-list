import { Store } from "./store";

let store = new Store();
class AddQuest {
  constructor(title, tasks, status) {
    this.title = title;
    this.tasks = tasks;
    this.status = status;
  }

  newProjectTemplate = {
    name: "",
    status: false,
    tasks: [],
  };

  addNewProject(title) {
    let projects = store.retrieveProjectsData();

    this.newProjectTemplate.title = title;

    projects.push(this.newProjectTemplate);
    store.save("projects", projects);
  }

  buildNewProject() {
    const input = document.querySelector(".add-quest-btn");
    const sideQuestsList = document.querySelector(".side-quests");
    const newQuest = sideQuestsList.appendChild(document.createElement("div"));
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
      this.displayProjectDetails(input.value);
    });
    newQuest.textContent = input.value;
    this.addNewProject(input.value);
    input.value = "";
  }
}

export { AddQuest };
