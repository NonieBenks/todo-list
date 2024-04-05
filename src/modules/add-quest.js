class AddQuest {
  constructor() {
    // this.description = description;
    // this.dueDate = dueDate;
    // this.priority = priority;
    // this.notes = notes;
    // this.checklist = checklist;
  }

  buildNewQuest() {
    const input = document.querySelector(".add-quest-btn");
    const sideQuestsList = document.querySelector(".side-quests");
    const newQuest = sideQuestsList.appendChild(document.createElement("p"));
    newQuest.textContent = input.value;
    input.value = "";
  }
}

export { AddQuest };
