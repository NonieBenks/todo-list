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

  displayProjectDetails(
    title,
    description = "",
    dueDate = "",
    priority = "Low"
  ) {
    // TODO: Build project details DOM structure
    console.log("WORKS: " + title);
    let workspace = document.querySelector(".work-space");
    let child = workspace.querySelector(".container");
    workspace.removeChild(child);

    let container = document.createElement("div");

    [...arguments].forEach((item) => {
      console.log(item);
    });

    // let titleBlock = document.createElement("div");
    // let descriptionBlock = document.createElement("div");
    // let dueDateBlock = document.createElement("div");
    // let priorityBlock = document.createElement("div");

    // titleBlock.textContent = title;
    // descriptionBlock.textContent = description;
    // dueDateBlock.textContent = dueDate;
    // priorityBlock.textContent = priority;

    // container.appendChildren(titleBlock, descriptionBlock, dueDateBlock, priorityBlock);
  }
}
export { Project };
