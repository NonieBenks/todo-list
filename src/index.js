import { BuildHomePage } from "./modules/build-home-page";
import { StorageManager } from "./modules/storage-manager";
import { Task } from "./modules/task";
import { Utils } from "./modules/utils";
import "./styles.css";

const storageModule = new StorageManager();
const homePageModule = new BuildHomePage();
const taskModule = new Task();
const utilsModule = new Utils();

const projectsList = storageModule.retrieveProjectsData();

utilsModule.clearQueryParams();
homePageModule.buildHomePage();

const btn = document.querySelector(".add-project-btn");
const projects = document.querySelectorAll(".project");

btn.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    import("./modules/projects").then((Module) => {
      const projects = new Module.Projects();
      projects.createNewProject(btn.value);
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
      const currentPage = utilsModule.getCurrentPage();
      const newTask = {
        id: 0,
        title: "",
        description: "Change task description",
        priority: "low",
        status: false,
        date: new Date(),
      };
      if (event.key === "n" && currentPage === "project") {
        taskModule.createNewTask(newTask, currentProject);
      }
    });
  });
}
