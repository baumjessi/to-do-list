import { getProjectsByName } from "./project-library";
import { taskButtonEventHandler } from "./task-card-display";

let sidebar = document.getElementById("sidebar");

function createProjectDiv() {
  let projectDiv = document.createElement("div");
  projectDiv.id = "project-div";
  sidebar.appendChild(projectDiv);
  let projectNamesArray = getProjectsByName();
  projectNamesArray.forEach((element) => {
    var projectBtn = document.createElement("button");
    projectBtn.innerText = element;
    projectDiv.appendChild(projectBtn);
    projectBtn.className = "project-button";
  });
}

function createAddProjectBtn() {
  let projectDiv = document.getElementById("project-div");
  let addNewProjectBtn = document.createElement("button");
  addNewProjectBtn.className = "project-button";
  addNewProjectBtn.id = "add-new-project-button";
  addNewProjectBtn.innerText = "Add new project...";
  sidebar.appendChild(addNewProjectBtn);
  addNewProjectBtn.addEventListener("click", (e) => {
    //create div, form, input, & btn for adding projects
    let newProjectInputDiv = document.createElement("div");
    newProjectInputDiv.id = "new-project-input-div";
    let newProjectInputForm = document.createElement("form");
    newProjectInputForm.id = "new-project-input-form";
    let newProjectInput = document.createElement("input");
    newProjectInput.id = "new-project-input";
    let newProjectSubmitBtn = document.createElement("button");
    newProjectSubmitBtn.id = "new-project-submit-button";
    newProjectSubmitBtn.textContent = "Save";
    //append form elements to form
    newProjectInputForm.appendChild(newProjectInput);
    newProjectInputForm.appendChild(newProjectSubmitBtn);
    //append form to div
    newProjectInputDiv.appendChild(newProjectInputForm);
    //append div to sidebar
    projectDiv.appendChild(newProjectInputDiv);
  });
}

function showProjects() {
  createProjectDiv();
  createAddProjectBtn();
  checkForProjectDiv();
}

function hideProjects() {
  let projectDiv = document.getElementById("project-div");
  let addNewProjectBtn = document.getElementById("add-new-project-button");
  projectDiv.remove();
  addNewProjectBtn.remove();
}

function projectDivEventHandler() {
  let projectDropDownButton = document.getElementById(
    "project-dropdown-button"
  );
  projectDropDownButton.addEventListener("click", (e) => {
    let projectDivExists = checkForProjectDiv();
    if (projectDivExists === true) {
      hideProjects();
      return;
    } else if (projectDivExists === false) {
      showProjects();
      return;
    }
  });
}

function checkForProjectDiv() {
  let projectDiv = document.getElementById("project-div");
  if (sidebar.contains(projectDiv)) {
    return true;
  } else if (!sidebar.contains(projectDiv)) {
    return false;
  }
}

export { projectDivEventHandler };
