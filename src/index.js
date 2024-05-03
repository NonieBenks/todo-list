import { BuildHomePage } from "./modules/build-home-page";
import { StorageManager } from "./modules/storage-manager";
import { Utils } from "./modules/utils";
import "./styles.css";

const storage = new StorageManager();
const homePage = new BuildHomePage();
const utils = new Utils();
const projectsList = storage.retrieveProjectsData();

utils.clearQueryParams();
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
  projectItem.addEventListener("click", () => {
    prepareCurrentProject(projectsList, projectItem);
  });
});

function prepareCurrentProject(projectsList, projectItem) {
  let currentProject = projectsList.find(
    (project) =>
      project.id.toString() === projectItem.getAttribute("project-id")
  );

  import("./modules/project").then((Module) => {
    const project = new Module.Project();

    project.displayProjectDetails(currentProject.id);
    const containerBlock = document.querySelector(".project-details");
    containerBlock.setAttribute("tabindex", "0");
    document.addEventListener("keypress", (event) => {
      const currentPage = utils.getCurrentPage();
      const newTask = {
        id: 0,
        title: "",
        description: "Change task description",
        priority: "low",
        status: false,
        date: new Date(),
      };
      if (event.key === "n" && currentPage === "project") {
        project.createNewTask(newTask, currentProject);
      }
    });
  });
}
