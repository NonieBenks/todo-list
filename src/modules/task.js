import { Store } from "./store";

const store = new Store();
class Task {
  constructor() {}

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setDescription(description) {
    this.description = description;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  displayTaskDetails(task, currentProject) {
    let appContainer = document.querySelector(".app-container");
    let workSpace = document.querySelector(".work-space");
    workSpace.remove();

    let newWorkSpace = document.createElement("div");

    newWorkSpace.classList.add(
      "work-space",
      "col-span-3",
      "row-span-4",
      "w-full",
      "bg-amber-300"
    );

    let tasks = document.createElement("div");

    let titleBlock = document.createElement("h3");
    let descriptionBlock = document.createElement("h3");
    let dateBlock = document.createElement("h3");
    let priorityBlock = document.createElement("h3");

    titleBlock.textContent = `Title: ${task.title}`;
    descriptionBlock.textContent = `Description: ${task.description}`;
    dateBlock.textContent = `Due date: ${task.dueDate}`;
    priorityBlock.textContent = `Priority: ${task.priority}`;

    tasks.classList.add(
      "tasks-container",
      "col-span-3",
      "row-span-4",
      "w-full",
      "bg-amber-300"
    );

    appContainer.prepend(newWorkSpace);
    newWorkSpace.append(tasks);
    tasks.append(titleBlock);
    tasks.append(descriptionBlock);
    tasks.append(dateBlock);
    tasks.append(priorityBlock);
    let tasksElements = tasks.children;
    for (let i = 0; i < tasksElements.length; i++) {
      const child = tasksElements[i];
      child.classList.add("flex", "m-2.5", "text-2xl");
    }
  }
}

export { Task };
