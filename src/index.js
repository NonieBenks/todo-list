import { BuildHomePage } from "./modules/build-home-page";
import { StorageManager } from "./modules/storage-manager";
import "./styles.css";

const storage = new StorageManager();
const homePage = new BuildHomePage();
const projectsList = storage.retrieveProjectsData();

homePage.buildHomePage();

const btn = document.querySelector(".add-quest-btn");
const projects = document.querySelectorAll(".project");

btn.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    import("./modules/projects").then((Module) => {
      const projects = new Module.Projects();
      projects.addNewProject(btn.value);
    });
  }
});

projects.forEach((projectItem) => {
  projectItem.addEventListener("click", () =>
    prepareCurrentProject(projectsList, projectItem)
  );
});

function prepareCurrentProject(projectsList, projectItem) {
  let currentProject = projectsList.find(
    (project) => project.title === projectItem.textContent
  );

  import("./modules/project").then((Module) => {
    const project = new Module.Project();

    project.displayProjectDetails(currentProject.id);
    const containerBlock = document.querySelector(".project-details");
    containerBlock.setAttribute("tabindex", "0");
    containerBlock.addEventListener("keypress", (event) => {
      const newTask = {
        id: 0,
        title: "",
        description: "Change task description",
        priority: "Low",
        status: false,
        date: new Date(),
      };
      if (event.key === "n") {
        project.createNewTask(newTask, currentProject);
        console.log(newTask);
      }
    });
  });
}
