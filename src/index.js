import { BuildHomePage } from "./modules/build-home-page";
import { Store } from "./modules/store";
import "./styles.css";

let store = new Store();
let homePage = new BuildHomePage();

homePage.buildHomePage();

const btn = document.querySelector(".add-quest-btn");
const projects = document.querySelectorAll(".project");

btn.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    import("./modules/projects").then((Module) => {
      const projects = new Module.Projects();
      projects.buildNewProject();
    });
  }
});

projects.forEach((projectItem) => {
  projectItem.addEventListener("click", () => {
    import("./modules/project").then((Module) => {
      const project = new Module.Project();
      project.displayProjectDetails(projectItem.textContent);
    });
  });
});
