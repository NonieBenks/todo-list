import { Project } from "./project";
import { Store } from "./store";

let store = new Store();
let project = new Project();
class Projects {
  constructor(title, tasks, status) {
    this.title = title;
    this.tasks = tasks;
    this.status = status;
  }

  newProjectTemplate = {
    title: "",
    status: false,
    tasks: [],
  };

  addNewProject(title) {
    let projects = store.retrieveProjectsData();

    this.newProjectTemplate.title = title;

    projects.push(this.newProjectTemplate);
    this.buildNewProject(this.newProjectTemplate);
    store.save("projects", projects);
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
      project.displayProjectDetails(projectTemplate);
    });
    addProjectInput.value = "";
  }
}

export { Projects };
