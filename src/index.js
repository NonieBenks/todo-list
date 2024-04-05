import "./modules/side-quest";
import "./styles.css";

const btn = document.querySelector(".add-quest-btn");

btn.addEventListener("click", () => {
  const newQuest = new SideQuest(name);
  console.log(newQuest);
});
