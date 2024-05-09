import { BuildHomePage } from "./build-home-page";
import { Project } from "./project";
import { StorageManager } from "./storage-manager";

const storageModule = new StorageManager();
const buildHomePageModule = new BuildHomePage();
class Projects {
  constructor() {}
  project = new Project(this.id, this.title, this.status, this.tasks);

  createNewProject(btn) {
    const projects = storageModule.retrieveProjectsData();

    this.project.id = projects.length;
    this.project.title = btn.value;
    this.project.status = false;
    this.project.tasks = [];

    projects.push(this.project);
    storageModule.save("projects", projects);

    btn.value = "";

    const projectsList = document.querySelector(".projects");
    buildHomePageModule.buildProjectItem(projectsList, this.project);
  }
}

export { Projects };
