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
      (project) => project.id === updatedProject.id
    );
    currentProject.status = status;

    storage.save("projects", allProjects);
    this.displayProjectDetails(currentProject.id);
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
    let project = projects.find((projectItem) => projectItem.id === projectId);

    titleBlock.textContent = project.title;
    project.status
      ? titleBlock.classList.add("line-through")
      : titleBlock.classList.remove("line-through");
    statusBlock.textContent = project.status
      ? "Status: Done"
      : "Status: In Progress";
    utils.goToUrl("page", "project");
    utils.goToUrl("project-id", project.id);

    document.addEventListener("keypress", (event) => {
      const currentPage = utils.getCurrentPage();
      const currentProjectId = utils.getCurrentProjectId();
      const currentProject = projects.find(
        (project) => project.id === currentProjectId
      );
      const newTask = {
        id: 0,
        title: "",
        description: "Change task description",
        priority: "low",
        status: false,
        date: new Date(),
      };
      if (event.key === "n" && currentPage === "project") {
        this.createNewTask(newTask, currentProject);
      }
    });

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
