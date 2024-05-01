import { StorageManager } from "./storage-manager";
import { Task } from "./task";
import { Utils } from "./utils";

const storage = new StorageManager();
const taskModule = new Task();
const utils = new Utils();

class Project {
  constructor(id, title, status, tasks) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.tasks = tasks;
  }

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
    taskModule.displayTaskDetails(task, currentProject);
  }

  changeStatus(updatedProject, status) {
    let allProjects = storage.retrieveProjectsData();

    let currentProject = allProjects.find(
      (project) => project.title === updatedProject.title
    );
    currentProject.status = status;

    storage.save("projects", allProjects);
    this.displayProjectDetails(updatedProject.id);
  }

  displayProjectDetails(projectId) {
    let appContainer = document.querySelector(".app-container");
    let workspace = document.querySelector(".work-space");
    workspace.remove();

    let workSpace = document.createElement("div");
    let titleBlock = document.createElement("h3");
    let statusBlock = document.createElement("h3");
    let tasksBlock = document.createElement("div");

    workSpace.classList.add(
      "project-details",
      "work-space",
      "col-span-3",
      "row-span-4",
      "w-full",
      "bg-amber-300",
      "grid"
    );
    titleBlock.classList.add("flex", "justify-center", "m-2.5", "text-3xl");
    statusBlock.classList.add("m-2.5", "text-2xl");
    tasksBlock.classList.add(
      "tasks-container",
      "grid",
      "grid-cols-2",
      "w-full",
      "justify-items-center",
      "flex-wrap",
      "gap-5",
      "overflow-y-scroll",
      "scroll-smooth"
    );

    let projects = storage.retrieveProjectsData();
    let project = projects.find((project) => project.id === projectId);

    titleBlock.textContent = project.title;
    project.status
      ? titleBlock.classList.add("line-through")
      : titleBlock.classList.remove("line-through");
    statusBlock.textContent = project.status
      ? "Status: Done"
      : "Status: In Progress";

    const currentPage = utils.getCurrentPage();

    appContainer.addEventListener("keypress", (event) => {
      const newTask = {
        id: 0,
        title: "",
        description: "Change task description",
        priority: "Low",
        status: false,
        date: new Date(),
      };
      utils.goToUrl("page", "task");
      if (event.key === "n" && currentPage === "project") {
        this.createNewTask(newTask, project);
      }
    });

    utils.goToUrl("page", "project");

    appContainer.prepend(workSpace);
    workSpace.append(titleBlock);
    workSpace.append(statusBlock);
    workSpace.append(tasksBlock);

    project.tasks.forEach((task) => {
      taskModule.displayTaskCard(task, project);
    });
  }
}
export { Project };
