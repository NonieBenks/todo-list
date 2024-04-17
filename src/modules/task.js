import { Quest } from "./quest";

class Task extends Quest {
  constructor(dueDate, description, priority) {
    super();
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
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
