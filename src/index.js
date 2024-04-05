import "./styles.css";

const btn = document.querySelector(".add-quest-btn");

btn.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    import("./modules/add-quest").then((Module) => {
      const addQuest = new Module.AddQuest();
      addQuest.buildNewQuest();
    });
  }
});
