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
    store.save("projects", projects);
  }

  buildNewProject() {
    const addProjectInput = document.querySelector(".add-quest-btn");
    const projectsList = document.querySelector(".projects");

    const newProject = document.createElement("div");
    const projectRadioButton = document.createElement("input");

    projectRadioButton.type = "radio";

    projectsList.appendChild(newProject);
    newProject.appendChild(projectRadioButton);

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
    const projectTitle = addProjectInput.value;
    newProject.addEventListener("click", () => {
      project.displayProjectDetails(projectTitle);
    });
    newProject.textContent = projectTitle;
    this.addNewProject(projectTitle);
    addProjectInput.value = "";
  }
}

export { Projects };
