import deleteSvg from "../assets/delete.svg";
import { StorageManager } from "./storage-manager";
import { Utils } from "./utils";

const storage = new StorageManager();
const utils = new Utils();
class Task {
  constructor() {}

  createNewTask(task, openedProject) {
    const retrievedProjects = storage.retrieveProjectsData();
    const currentProject = retrievedProjects.find(
      (project) => project.id === openedProject.id
    );

    task.id = currentProject.tasks.length;
    task.title = `Task${currentProject.tasks.length}`;

    currentProject.tasks.push(task);
    utils.goToUrl("page", "task");
    storage.save("projects", retrievedProjects);
    this.displayTaskDetails(task, currentProject);
  }

  displayTaskDetails(currentTask, currentProject) {
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

    const titleBlock = createBlock("Title:", currentTask.title, "title");
    const descriptionBlock = createBlock(
      "Description:",
      currentTask.description,
      "description"
    );
    const dueDateBlock = createBlock(
      "Due Date:",
      currentTask.dueDate || "Enter date here",
      "dueDate"
    );
    const priorityBlock = createBlock(
      "Priority:",
      currentTask.priority,
      "priority"
    );

    document.body.appendChild(titleBlock);
    document.body.appendChild(descriptionBlock);
    document.body.appendChild(dueDateBlock);
    document.body.appendChild(priorityBlock);

    function createBlock(label, defaultValue, reference) {
      const blockDiv = document.createElement("div");
      blockDiv.id = reference;

      const labelField = document.createElement("h3");
      labelField.textContent = label;

      let valueField;

      switch (reference) {
        case "dueDate":
          valueField = document.createElement("input");
          valueField.type = "date";
          break;
        case "priority":
          const selectElement = document.createElement("select");
          const optionValues = ["low", "medium", "high"];

          optionValues.map((value) => {
            const optionElement = document.createElement("option");
            optionElement.textContent = value;
            selectElement.appendChild(optionElement);
          });
          valueField = selectElement;
          break;
        case "description":
          valueField = document.createElement("textarea");
          break;
        default:
          valueField = document.createElement("input");
      }

      valueField.className = "bg-amber-300";
      valueField.value = defaultValue;

      valueField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          this.blur();
        }
      });

      valueField.addEventListener("blur", function () {
        const editedValue = this.value.trim();
        const currentElement = valueField.parentElement.id;
        const retrievedProjects = storage.retrieveProjectsData();

        const ourProject = retrievedProjects.find(
          (project) => project.id === currentProject.id
        );
        const ourTask = ourProject.tasks.find(
          (task) => task.id === currentTask.id
        );
        ourTask[currentElement] = editedValue;
        storage.save("projects", retrievedProjects);
      });

      blockDiv.appendChild(labelField);
      blockDiv.appendChild(valueField);

      return blockDiv;
    }

    appContainer.prepend(newWorkSpace);
    newWorkSpace.append(tasks);
    tasks.append(titleBlock);
    tasks.append(dueDateBlock);
    tasks.append(priorityBlock);
    tasks.append(descriptionBlock);

    let tasksElements = tasks.children;
    for (let i = 0; i < tasksElements.length; i++) {
      const child = tasksElements[i];
      child.classList.add("flex", "m-2.5", "text-2xl");
    }
  }

  displayTaskCard(task, project) {
    let tasksContainer = document.querySelector(".tasks-container");
    let taskCard = document.createElement("div");
    taskCard.classList.add("task-card", "h-40", "w-64", "text-xl", "p-3");
    switch (task.priority) {
      case "low":
        taskCard.classList.add("bg-lime-600");
        break;
      case "medium":
        taskCard.classList.add("bg-orange-400");
        break;
      case "high":
        taskCard.classList.add("bg-rose-600");
        break;
      default:
        taskCard.classList.add("bg-white");
    }

    taskCard.addEventListener("click", () => {
      utils.goToUrl("page", "task");
      this.displayTaskDetails(task, project);
    });

    let taskTitle = document.createElement("h3");
    taskTitle.classList.add("flex");
    taskTitle.textContent = task.title;
    let deleteButton = document.createElement("img");
    deleteButton.classList.add("ml-auto");
    deleteButton.src = deleteSvg;
    let taskDueDate = document.createElement("h3");
    taskDueDate.textContent = task.dueDate;

    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const result = confirm("Are you sure you want to delete this task?");
      if (result) {
        this.deleteTask(task, project);
        taskCard.remove();
      }
    });

    taskCard.appendChild(taskTitle);
    taskTitle.appendChild(deleteButton);
    taskCard.appendChild(taskDueDate);
    tasksContainer.appendChild(taskCard);
  }

  deleteTask(taskToDelete, parentProject) {
    let allProjects = storage.retrieveProjectsData();

    let currentProject = allProjects.find(
      (project) => project.id === parentProject.id
    );

    let currentTask = currentProject.tasks.find(
      (task) => task.id === taskToDelete.id
    );

    let allTasks = currentProject.tasks;
    allTasks.splice(allTasks.indexOf(currentTask), 1);

    storage.save("projects", allProjects);
  }
}

export { Task };
