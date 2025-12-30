import { getProjectsByName } from "./project-library";
import { saveTask } from "./task-library";
import { getAllTasks } from "./task-library";
import { createTaskCard } from "./task-card-display";

let newTaskDialog = document.getElementById("new-task-dialog");
let newTaskForm = document.getElementById("new-task-form");

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
    newTaskForm.reset();
  });
}

function newTaskFormSubmit() {
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let date = document.getElementById("date");
  let priority = document.getElementById("priority");
  let project = document.getElementById("project");
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    saveTask(
      title.value,
      description.value,
      date.value,
      priority.value,
      project.value
    );
    newTaskDialog.close();
    newTaskForm.reset();
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
  });

  let editProjectSelectMenu = document.getElementById("editProject");
  let editProjectNamesArray = getProjectsByName();
  editProjectNamesArray.forEach((element) => {
    var editProjectSelectOption = document.createElement("option");
    editProjectSelectOption.innerText = element;
    editProjectSelectOption.value = element;
    editProjectSelectMenu.appendChild(editProjectSelectOption);
  });
}

function displayAllTaskCards() {
  console.log("display function is working");
  let taskCards = document.querySelectorAll(".task-card");
  let taskCardsArray = Array.from(taskCards);
  taskCardsArray.forEach((taskCard) => {
    taskCard.remove();
  });
  let tasks = getAllTasks();
  tasks.forEach((task) => {
    const { title, description, dueDate, priority, project, id } = task;
    createTaskCard(title, description, dueDate, priority, project, id);
  });
}

function allTasksBtnHandler() {
  let allTasksBtn = document.getElementById("all-tasks-button");
  allTasksBtn.addEventListener("click", (e) => {
    displayAllTaskCards();
  });
}

export {
  showAddTaskDialog,
  exitAddTaskDialog,
  projectSelectMenuHandler,
  newTaskFormSubmit,
  allTasksBtnHandler,
};
