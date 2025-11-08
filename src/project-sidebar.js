import { getProjectsByName } from "./project-library";

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
  let addNewProjectBtn = document.createElement("button");
  addNewProjectBtn.className = "project-button";
  addNewProjectBtn.id = "add-new-project-button";
  addNewProjectBtn.innerText = "Add new project...";
  sidebar.appendChild(addNewProjectBtn);
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
  projectDropDownButton.addEventListener("click", (e) =>{
  let projectDivExists = checkForProjectDiv();
  if (projectDivExists === true) {
    hideProjects();
    return;
  } 
  else if (projectDivExists === false) {
    showProjects();
    return;
  }
  })
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
