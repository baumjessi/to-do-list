import { getProjectsByName } from "./project-library";

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

export { showAddTaskDialog, exitAddTaskDialog, projectSelectMenuHandler };
