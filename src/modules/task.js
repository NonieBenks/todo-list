import { Store } from "./store";

const store = new Store();
class Task {
  constructor() {}

  createNewTask(task) {
    const retrievedProjects = store.retrieveProjectsData();
    const currentProject = retrievedProjects.find(
      (project) => project.id === this.id
    );
    console.log(currentProject);
  }
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setDescription(description) {
    this.description = description;
  }

  setPriority(priority) {
    this.priority = priority;
  }
}

export { Task };
