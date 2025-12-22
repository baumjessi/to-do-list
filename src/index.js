import "./style.css";
import { saveProject } from "./project-library";
import { projectDivEventHandler } from "./project-sidebar";
import {
  showAddTaskDialog,
  exitAddTaskDialog,
  projectSelectMenuHandler,
  newTaskFormSubmit,
} from "./task-sidebar";
import { taskButtonEventHandler, editTaskFormSubmit } from "./task-card-display";
import { displayAllTasks } from "./on-page-load";

saveProject("Skateboarding and Yoga");
saveProject("Art and Coding");

projectDivEventHandler();

showAddTaskDialog();
exitAddTaskDialog();

projectSelectMenuHandler();

newTaskFormSubmit();

taskButtonEventHandler();

editTaskFormSubmit();

displayAllTasks();