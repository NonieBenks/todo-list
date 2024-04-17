import { Quest } from "./quest";
import { Store } from "./store";

let store = new Store();

class Project extends Quest {
  constructor(tasks, status) {
    super();
    this.status = status;
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  changeStatus(updatedProject, status) {
    let allProjects = store.retrieveProjectsData();

    let currentProject = allProjects.find(
      (project) => project.title === updatedProject.title
    );
    currentProject.status = status;

    store.save("projects", allProjects);
    this.displayProjectDetails(updatedProject.id);
  }

  displayProjectDetails(projectId) {
    let appContainer = document.querySelector(".app-container");
    let workspace = document.querySelector(".work-space");
    workspace.remove();

    let workSpace = document.createElement("div");
    let titleBlock = document.createElement("h3");
    let statusBlock = document.createElement("h3");

    workSpace.classList.add(
      "work-space",
      "col-span-3",
      "row-span-4",
      "w-full",
      "bg-amber-300"
    );
    titleBlock.classList.add("flex", "justify-center", "m-2.5", "text-3xl");
    statusBlock.classList.add("m-2.5", "text-2xl");

    let projects = store.retrieveProjectsData();
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
  }
}
export { Project };
