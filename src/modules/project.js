class Project {
  constructor(tasks, status) {
    this.tasks = tasks;
    this.status = status;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  changeStatus(status) {
    this.status = status;
  }

  displayProjectDetails(title, status = true, tasks) {
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

    titleBlock.textContent = title;
    status
      ? titleBlock.classList.add("line-through")
      : titleBlock.classList.remove("line-through");
    statusBlock.textContent = status ? "Done" : "In Progress";

    appContainer.prepend(workSpace);
    workSpace.append(titleBlock);
    workSpace.append(statusBlock);
  }
}
export { Project };
