class SideQuest {
  constructor(name) {
    this.name = name;
    // this.description = description;
    // this.dueDate = dueDate;
    // this.priority = priority;
    // this.notes = notes;
    // this.checklist = checklist;
  }

  buldNewQuest(name) {
    const btn = document.querySelector(".add-quest-btn");
    btn.addEventListener("click", () => {
      const newQuest = new SideQuest(name);
      console.log(newQuest);
    });
    this.name = name;
  }
}
