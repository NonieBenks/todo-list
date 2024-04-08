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
    const newQuest = sideQuestsList.appendChild(document.createElement("div"));
    newQuest.classList.add(
      "bg-slate-200",
      "h-auto",
      "w-auto",
      "rounded-lg",
      "border-2",
      "border-sky-300",
      "p-12",
      "my-12",
      "flex",
      "justify-left",
      "items-center"
    );
    newQuest.textContent = input.value;
    input.value = "";
  }
}

export { AddQuest };
