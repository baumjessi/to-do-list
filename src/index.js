import "./style.css";
import { projectListDisplayEventHandler } from "./project-sidebar";
import { projectSelectMenuHandler } from "./task-sidebar";
import {
  showAddTaskDialog,
  exitAddTaskDialog,
  newTaskFormSubmit,
  editTaskFormSubmit
} from "./task-form-handler";
import { taskButtonEventHandler } from "./task-card-display";
import { displayAllTasks } from "./on-page-load";
import { allTasksBtnHandler } from "./task-sidebar";

projectListDisplayEventHandler();

showAddTaskDialog();
exitAddTaskDialog();

projectSelectMenuHandler();

newTaskFormSubmit();

taskButtonEventHandler();

editTaskFormSubmit();
displayAllTasks();

allTasksBtnHandler();