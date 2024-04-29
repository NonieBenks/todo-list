import { StorageManager } from "./storage-manager";
import { Task } from "./task";

const storage = new StorageManager();
let taskModule = new Task();

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

    currentProject.tasks.push(task);
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

    appContainer.prepend(workSpace);
    workSpace.append(titleBlock);
    workSpace.append(statusBlock);
    workSpace.append(tasksBlock);

    project.tasks.forEach((task) => {
      taskModule.displayTaskItem(task);
    });
  }
}
export { Project };
