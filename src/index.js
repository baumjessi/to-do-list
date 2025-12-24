import "./style.css";
import { saveProject } from "./project-library";
import { projectListDisplayEventHandler, displayNewProject, newProjectFormSubmit } from "./project-sidebar";
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
