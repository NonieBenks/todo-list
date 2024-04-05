class SaveQuestsList {
  constructor() {
    // this.description = description;
    // this.dueDate = dueDate;
    // this.priority = priority;
    // this.notes = notes;
    // this.checklist = checklist;
  }

  saveQuestsList(title, id) {
    localStorage.setItem(id, title);
  }
}

export { SaveQuestsList };
