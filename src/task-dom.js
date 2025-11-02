import { getProjectsByName } from "./project-library";
import { addToTaskLibrary, displayTaskLibrary } from "./task-library";
 
let newTaskDialog = document.getElementById("new-task-dialog");

function showAddTaskDialog() {
  let addTaskBtn = document.getElementById("add-task-button");
  addTaskBtn.addEventListener("click", (e) => {
    newTaskDialog.showModal();
  });
}

function exitAddTaskDialog() {
  let exitTaskDialogBtn = document.getElementById("dialog-exit");
  exitTaskDialogBtn.addEventListener("click", (e) => {
    newTaskDialog.close();
  });
}

function newTaskFormSubmit() {
    let newTaskForm = document.getElementById("new-task-form");
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let date = document.getElementById("date");
    let priority = document.getElementById("priority");
    let project = document.getElementById("project");
    newTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addToTaskLibrary(title.value, description.value, date.value, priority.value, project.value);
        displayTaskLibrary();
    });
}

function projectSelectMenuHandler() {
    let projectSelectMenu = document.getElementById("project");
    let projectNamesArray = getProjectsByName();
    projectNamesArray.forEach((element) => {
        var projectSelectOption = document.createElement("option");
        projectSelectOption.innerText = element;
        projectSelectOption.value = element;
        projectSelectMenu.appendChild(projectSelectOption);
    })
}

export { showAddTaskDialog, exitAddTaskDialog, projectSelectMenuHandler, newTaskFormSubmit };
