import { Project } from "./project";
import { StorageManager } from "./storage-manager";

const storage = new StorageManager();
class Projects {
  constructor() {}
  project = new Project(this.id, this.title, this.status, this.tasks);

  addNewProject(title) {
    let projects = storage.retrieveProjectsData();

    this.project.id = projects.length;
    this.project.title = title;
    this.project.status = false;
    this.project.tasks = [];

    projects.push(this.project);
    this.buildNewProject(this.project);
    storage.save("projects", projects);
  }

  buildNewProject(projectTemplate) {
    const addProjectInput = document.querySelector(".add-quest-btn");
    const projectsList = document.querySelector(".projects");

    const newProject = document.createElement("div");
    const projectCheckbox = document.createElement("input");

    newProject.textContent = projectTemplate.title;

    projectCheckbox.type = "checkbox";

    projectsList.append(newProject);
    newProject.prepend(projectCheckbox);

    newProject.classList.add(
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
    projectCheckbox.className = "project-checkbox";

    newProject.addEventListener("click", () => {
      this.project.displayProjectDetails(projectTemplate.id);
    });

    projectCheckbox.addEventListener("change", () => {
      if (projectCheckbox.checked) {
        project.changeStatus(this.project, true);
      } else {
        project.changeStatus(this.project, false);
      }
    });

    addProjectInput.value = "";
  }
}

export { Projects };
