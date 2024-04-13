import { Store } from "./store";

let store = new Store();
class AddQuest {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  newProjectTemplate = {
    name: "",
    tasks: [],
  };

  addNewProject(title) {
    let storage = store.retrieveLocalStorage();

    this.newProjectTemplate.name = title;
    storage.projects.push(this.newProjectTemplate);
    store.save("store", storage);
    console.log(storage);
  }

  getAllProjects() {
    let storeObject = JSON.parse(localStorage.getItem("store"));
    console.log(storeObject);
    this.projectsList = storeObject.projects;
    return storeObject.projects;
  }

  buildNewProject() {
    const input = document.querySelector(".add-quest-btn");
    const sideQuestsList = document.querySelector(".side-quests");
    const newQuest = sideQuestsList.appendChild(document.createElement("div"));
    newQuest.classList.add(
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
    newQuest.textContent = input.value;
    this.addNewProject(input.value);
    input.value = "";
  }
}

export { AddQuest };
