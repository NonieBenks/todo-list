class Store {
  constructor() {}
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  retrieveProjectsData() {
    if (localStorage.getItem("projects") === null) {
      let projects = [
        {
          id: 0,
          title: "Training",
          status: false,
          tasks: [],
        },
        {
          id: 1,
          title: "Family",
          status: true,
          tasks: [],
        },
        {
          id: 2,
          title: "Build a home",
          status: false,
          tasks: [],
        },
      ];
      this.save("projects", projects);
      return projects;
    } else {
      let projects = JSON.parse(localStorage.getItem("projects"));
      console.log(projects);
      return projects;
    }
  }

  retrieveMainQuestData() {
    if (localStorage.getItem("mainQuest") === null) {
      let mainQuest = {
        title: "Save the princess",
        subquests: [
          "Get a horse",
          "Find a map",
          "Prepare weapons",
          "Kill a dragon",
        ],
        notes:
          "Princess Celestia disappeared a few hours ago. I have only one suspect: a dragon.",
        sidequests: ["Read a book", "Find Harold", "Buy a silver spear"],
      };
      this.save("mainQuest", mainQuest);
      return mainQuest;
    } else {
      let mainQuest = JSON.parse(localStorage.getItem("mainQuest"));
      console.log(mainQuest);
      return mainQuest;
    }
  }
}
export { Store };
