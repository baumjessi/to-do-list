import "./style.css";
import { addToTaskLibrary, displayTaskLibrary, filterTaskByProject, removeFromTaskLibrary } from "./task-library";
import { addToProjectLibrary, displayProjectLibrary } from "./project-library";
import { projectDivEventHandler } from "./project-dom";
import { showAddTaskDialog, exitAddTaskDialog, projectSelectMenuHandler, newTaskFormSubmit } from "./task-dom";

addToTaskLibrary("Practice Ollie", "N/A", "10/31/2025", "High", "skateboarding");
addToTaskLibrary("practice shuvit", "N/A", "10/31/2025", "Medium", "skateboarding");
addToTaskLibrary("practice strawberry milkshake", "N/A", "10/31/2025", "High");
addToTaskLibrary("finish words", "N/A", "10/31/2025", "Medium", "comic");
addToTaskLibrary("scan pages", "N/A", "10/31/2025", "high", "comic");
addToTaskLibrary("print copies", "N/A", "10/31/2025", "high", "comic");
displayTaskLibrary();
removeFromTaskLibrary("Skateboard");
displayTaskLibrary();
filterTaskByProject("comic");
displayTaskLibrary();


addToProjectLibrary("Skateboarding and Yoga");
addToProjectLibrary("Art and Coding");
displayProjectLibrary();
displayProjectLibrary();

projectDivEventHandler();

showAddTaskDialog();
exitAddTaskDialog();

projectSelectMenuHandler();

newTaskFormSubmit();