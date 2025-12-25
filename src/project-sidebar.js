import { getProjectsByName } from "./project-library";
import { saveProject } from "./project-library";
import { removeProject } from "./project-library";
import deleteButtonImg from "./assets/bin.png";
import editButtonImg from "./assets/edit.png";

let sidebar = document.getElementById("sidebar");

function createProjectListDisplay() {
  let projectListDisplay = document.createElement("div");
  projectListDisplay.id = "project-list-display";
  sidebar.appendChild(projectListDisplay);
  //create container for projects within display\
  let projectCardContainer = document.createElement("div");
  projectListDisplay.appendChild(projectCardContainer);
  projectCardContainer.id = "project-card-container";
  let projectNamesArray = getProjectsByName();
  projectNamesArray.forEach((projectName) => {
    createProjectCard(projectName);

  });
  editAndDeleteProjectBtnHandler();
}

// function createProjectCard(projectName) {
//   let projectCardContainer = document.getElementById("project-card-container");
//   var projectCard = document.createElement("div");
//   projectCard.innerText = projectName;
//   projectCard.setAttribute("data-title", projectName);
//   projectCardContainer.appendChild(projectCard);
//   projectCard.className = "project-card";
//   //create edit btn
//   const editButton = document.createElement("button");
//   editButton.classList.add("project-button", "project-edit-button");
//   const editButtonIcon = new Image();
//   editButtonIcon.src = editButtonImg;
//   editButtonIcon.classList.add("project-button-icon");
//   editButton.appendChild(editButtonIcon);
//   //create delete btn
//   const deleteButton = document.createElement("button");
//   deleteButton.classList.add("project-button", "project-delete-button");
//   const deleteButtonIcon = new Image();
//   deleteButtonIcon.src = deleteButtonImg;
//   deleteButtonIcon.classList.add("project-button-icon");
//   deleteButton.appendChild(deleteButtonIcon);
//   //create div for btns & append to project link
//   const projectBtnDiv = document.createElement("div");
//   projectBtnDiv.appendChild(editButton);
//   projectBtnDiv.appendChild(deleteButton);
//   projectCard.appendChild(projectBtnDiv);
// }

function createProjectCard(projectTitle) {
  let projectCardContainer = document.getElementById("project-card-container");
  let projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectCard.setAttribute("data-title", projectTitle);
  projectCardContainer.appendChild(projectCard);
  createProjectCardContent(projectTitle, projectCard);
}

function createProjectCardContent(projectTitle, projectContainer) {
  let projectCardContent = document.createElement("div");
  let projectTitleBtn = document.createElement("button");
  projectTitleBtn.textContent = projectTitle;
  projectTitleBtn.className = "project-card";
  //create edit btn
  const editButton = document.createElement("button");
  editButton.classList.add("project-button", "project-edit-button");
  const editButtonIcon = new Image();
  editButtonIcon.src = editButtonImg;
  editButtonIcon.classList.add("project-button-icon");
  editButton.appendChild(editButtonIcon);
  //create delete btn
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("project-button", "project-delete-button");
  const deleteButtonIcon = new Image();
  deleteButtonIcon.src = deleteButtonImg;
  deleteButtonIcon.classList.add("project-button-icon");
  deleteButton.appendChild(deleteButtonIcon);
  //create div for btns & append btns
  const projectBtnDiv = document.createElement("div");
  projectBtnDiv.appendChild(editButton);
  projectBtnDiv.appendChild(deleteButton);
   //append everything else
  projectCardContent.appendChild(projectTitleBtn);
  projectCardContent.appendChild(projectBtnDiv);
  projectContainer.appendChild(projectCardContent);
}

function createAddProjectBtn() {
  let addNewProjectBtn = document.createElement("button");
  addNewProjectBtn.className = "project-card";
  addNewProjectBtn.id = "add-new-project-button";
  addNewProjectBtn.innerText = "Add new project...";
  sidebar.appendChild(addNewProjectBtn);
  addNewProjectBtn.addEventListener("click", (e) => {
    let doesNewProjectFormExist = checkForInputFormDiv();
    if (doesNewProjectFormExist === false) {
      displayNewProjectForm();
    } else if (doesNewProjectFormExist === true) {
      console.log("input animation will go here");
    }
  });
}

function displayNewProjectForm() {
  let projectListDisplay = document.getElementById("project-list-display");
  //create div, form, input, & btn for adding projects
  let newProjectInputDiv = document.createElement("div");
  newProjectInputDiv.id = "new-project-input-div";
  let newProjectInputForm = document.createElement("form");
  newProjectInputForm.id = "new-project-input-form";
  let newProjectInput = document.createElement("input");
  newProjectInput.id = "new-project-input";
  newProjectInput.setAttribute("type", "text");
  newProjectInput.setAttribute("name", "newProjectName");
  let newProjectSubmitBtn = document.createElement("button");
  newProjectSubmitBtn.id = "new-project-submit-button";
  newProjectSubmitBtn.textContent = "Save";
  //append form elements to form
  newProjectInputForm.appendChild(newProjectInput);
  newProjectInputForm.appendChild(newProjectSubmitBtn);
  //append form to div
  newProjectInputDiv.appendChild(newProjectInputForm);
  //append div to sidebar
  projectListDisplay.appendChild(newProjectInputDiv);
  newProjectFormSubmit();
}

function newProjectFormSubmit() {
  let newProjectInputDiv = document.getElementById("new-project-input-div");
  let newProjectSubmitBtn = document.getElementById(
    "new-project-submit-button"
  );
  let newProjectInput = document.getElementById("new-project-input");
  newProjectSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    saveProject(newProjectInput.value);
    createProjectCard(newProjectInput.value);
    newProjectInputDiv.remove();
  });
}

function showProjects() {
  createProjectListDisplay();
  createAddProjectBtn();
  checkForProjectListDisplay();
}

function hideProjects() {
  let projectListDisplay = document.getElementById("project-list-display");
  let addNewProjectBtn = document.getElementById("add-new-project-button");
  projectListDisplay.remove();
  addNewProjectBtn.remove();
}

function editAndDeleteProjectBtnHandler() {
  let projectCardContainer = document.getElementById("project-card-container");
  projectCardContainer.addEventListener("click", (e) => {
    let selectedProject = e.target.closest(".project-card");
    let projectName = selectedProject.dataset.title;
    console.log(projectName);
    if (e.target.classList.contains("project-edit-button")) {
      createEditProjectForm(selectedProject);
    } else if (e.target.classList.contains("project-delete-button")) {
      removeProject(projectName);
      selectedProject.remove();
    }
  });
}

function projectListDisplayEventHandler() {
  let projectDropDownButton = document.getElementById(
    "project-dropdown-button"
  );
  projectDropDownButton.addEventListener("click", (e) => {
    let projectListDisplayExists = checkForProjectListDisplay();
    if (projectListDisplayExists === true) {
      hideProjects();
      return;
    } else if (projectListDisplayExists === false) {
      showProjects();
      return;
    }
  });
}

function checkForProjectListDisplay() {
  let projectListDisplay = document.getElementById("project-list-display");
  if (sidebar.contains(projectListDisplay)) {
    return true;
  } else if (!sidebar.contains(projectListDisplay)) {
    return false;
  }
}

function checkForInputFormDiv() {
  let projectListDisplay = document.getElementById("project-list-display");
  let newProjectInputDiv = document.getElementById("new-project-input-div");
  if (projectListDisplay.contains(newProjectInputDiv)) {
    return true;
  } else if (!projectListDisplay.contains(newProjectInputDiv)) {
    return false;
  }
}

function createEditProjectForm(selectedProject) {
  //create various elements
  let editProjectForm = document.createElement("form");
  editProjectForm.id = "edit-project-form";
  let editProjectInput = document.createElement("input");
  editProjectInput.placeholder = selectedProject.dataset.title;
  let editProjectBtnDiv = document.createElement("div");
  let editProjectSaveBtn = document.createElement("button");
  editProjectSaveBtn.textContent = "Save";
  let editProjectCancelBtn = document.createElement("button");
  editProjectCancelBtn.textContent = "Cancel";
  editProjectCancelBtn.id = "edit-project-form-cancel-btn";
  //append everything
  editProjectBtnDiv.appendChild(editProjectSaveBtn);
  editProjectBtnDiv.appendChild(editProjectCancelBtn);
  editProjectForm.appendChild(editProjectInput);
  editProjectForm.appendChild(editProjectBtnDiv);
  selectedProject.replaceChildren(editProjectForm);
}

function editProjectFormCancelBtnHandler() {
  let editProjectCancelBtn = document.getElementById(
    "edit-project-form-cancel-btn"
  );
}

export { projectListDisplayEventHandler, createEditProjectForm };
