import "./style.css";
import { saveProject } from "./project-library";
import { projectDivEventHandler } from "./project-sidebar";
import {
  showAddTaskDialog,
  exitAddTaskDialog,
  projectSelectMenuHandler,
  newTaskFormSubmit,
} from "./task-sidebar";
import { deleteTaskCard, setPriorityColor } from "./task-card-display";

saveProject("Skateboarding and Yoga");
saveProject("Art and Coding");

projectDivEventHandler();

showAddTaskDialog();
exitAddTaskDialog();

projectSelectMenuHandler();

newTaskFormSubmit();


deleteTaskCard();

console.log(setPriorityColor("medium"));