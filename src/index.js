import "./style.css";
import { saveTask, removeTask } from "./task-library";
import { addToProjectLibrary, displayProjectLibrary } from "./project-library";
import { projectDivEventHandler } from "./project-dom";
import { showAddTaskDialog, exitAddTaskDialog, projectSelectMenuHandler, newTaskFormSubmit } from "./task-dom";

addToProjectLibrary("Skateboarding and Yoga");
addToProjectLibrary("Art and Coding");
displayProjectLibrary();
displayProjectLibrary();

projectDivEventHandler();

showAddTaskDialog();
exitAddTaskDialog();

projectSelectMenuHandler();

newTaskFormSubmit();

let poop = document.getElementById("poop");
poop.addEventListener("click", (e) => {
    removeTask(
"4915b000-b668-4631-a4e1-7d87c8280917"
);
});