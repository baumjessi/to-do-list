import "./style.css";
import { saveProject } from "./project-library";
import { projectListDisplayEventHandler, displayNewProject, newProjectFormSubmit, createEditProjectForm } from "./project-sidebar";
import {
  showAddTaskDialog,
  exitAddTaskDialog,
  projectSelectMenuHandler,
  newTaskFormSubmit,
} from "./task-sidebar";
import { taskButtonEventHandler, editTaskFormSubmit } from "./task-card-display";
import { displayAllTasks } from "./on-page-load";

projectListDisplayEventHandler();

showAddTaskDialog();
exitAddTaskDialog();

projectSelectMenuHandler();

newTaskFormSubmit();

taskButtonEventHandler();

editTaskFormSubmit();
displayAllTasks();

let poop = document.getElementById("poop");

function changePoop() {
  createEditProjectForm();
  let newForm = document.getElementById("edit-project-form");
  poop.replaceWith(newForm);
}

poop.addEventListener("click", changePoop);