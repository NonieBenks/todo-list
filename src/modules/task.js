import { StorageManager } from "./storage-manager";

const storage = new StorageManager();
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

    tasks.classList.add(
      "tasks-container",
      "col-span-3",
      "row-span-4",
      "w-full",
      "bg-amber-300"
    );

    const titleBlock = createBlock("Title:", "Enter title");
    const descriptionBlock = createBlock("Description:", "Enter description");
    const dueDateBlock = createBlock("Due Date:", "Enter due date");
    const priorityBlock = createBlock("Priority:", "Enter priority");

    document.body.appendChild(titleBlock);
    document.body.appendChild(descriptionBlock);
    document.body.appendChild(dueDateBlock);
    document.body.appendChild(priorityBlock);

    function createBlock(label, defaultValue) {
      const blockDiv = document.createElement("div");
      blockDiv.classList.add("block");

      const labelH3 = document.createElement("h3");
      labelH3.textContent = label;

      const valueH3 = document.createElement("h3");
      valueH3.contentEditable = true;
      valueH3.textContent = defaultValue;

      valueH3.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          this.blur();
        }
      });

      valueH3.addEventListener("blur", function () {
        const editedValue = this.textContent.trim();
        console.log(editedValue);
      });

      blockDiv.appendChild(labelH3);
      blockDiv.appendChild(valueH3);

      return blockDiv;
    }

    appContainer.prepend(newWorkSpace);
    newWorkSpace.append(tasks);
    tasks.append(titleBlock);
    tasks.append(descriptionBlock);
    tasks.append(dueDateBlock);
    tasks.append(priorityBlock);
    let tasksElements = tasks.children;
    for (let i = 0; i < tasksElements.length; i++) {
      const child = tasksElements[i];
      child.classList.add("flex", "m-2.5", "text-2xl");
    }
  }

  displayTaskItem(task) {
    let tasksContainer = document.querySelector(".tasks-container");
    let taskCard = document.createElement("div");
    taskCard.classList.add("task-card", "h-40", "w-64", "bg-red-600");

    let taskTitle = document.createElement("h3");
    taskTitle.textContent = task.title;
    let taskDueDate = document.createElement("h3");
    taskDueDate.textContent = task.dueDate;

    taskCard.appendChild(taskTitle);
    taskCard.appendChild(taskDueDate);
    tasksContainer.appendChild(taskCard);
  }
}

export { Task };
