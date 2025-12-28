import { editProject, saveProject, removeProject, getProjectsByName } from "./project-library";
import deleteButtonImg from "./assets/bin.png";
import editButtonImg from "./assets/edit.png";
import { sortTasksByProject } from "./task-library";
import { filterTaskCardDisplay } from "./task-card-display";

import saveBtnImg from "./assets/save.png";
import cancelBtnImg from "./assets/cancel.png";

let sidebar = document.getElementById("sidebar");

function createProjectListDisplay() {
  let projectListDisplay = document.createElement("div");
  projectListDisplay.id = "project-list-display";
  sidebar.appendChild(projectListDisplay);
  //create container for projects within display
  let projectCardContainer = document.createElement("div");
  projectListDisplay.appendChild(projectCardContainer);
  projectCardContainer.id = "project-card-container";
  let projectNamesArray = getProjectsByName();
  projectNamesArray.forEach((projectName) => {
    createProjectCard(projectName);
  });
  editAndDeleteProjectBtnHandler();
}


function createProjectCard(projectTitle) {
  let projectCardContainer = document.getElementById("project-card-container");
  let projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectCard.setAttribute("data-title", projectTitle);
  projectCardContainer.appendChild(projectCard);
  createProjectCardContent(projectTitle, projectCard);
}

function createProjectCardContent(projectTitle, projectCard) {
  let projectCardContent = document.createElement("div");
  projectCardContent.className = "project-card-content-div";
  let projectTitleBtn = document.createElement("button");
  projectTitleBtn.textContent = projectTitle;
  projectTitleBtn.className = "project-card-title-btn";
  //create edit btn
  const editButton = document.createElement("button");
  editButton.classList.add("project-card-button", "project-card-edit-button");
  const editButtonIcon = new Image();
  editButtonIcon.src = editButtonImg;
  editButtonIcon.classList.add("project-button-icon");
  editButton.appendChild(editButtonIcon);
  //create delete btn
  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "project-card-button",
    "project-card-delete-button"
  );
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
  projectCard.appendChild(projectCardContent);
}

function projectTitleBtnEventHandler(projectTitle) {
  let filteredTaskArray = sortTasksByProject(projectTitle);
  filterTaskCardDisplay(filteredTaskArray);
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
    let projectTitle = selectedProject.dataset.title;
    if (e.target.classList.contains("project-card-edit-button")) {
      createEditProjectForm(selectedProject);
    } else if (e.target.classList.contains("project-card-delete-button")) {
      removeProject(projectTitle);
      selectedProject.remove();
    } else if (e.target.id === "edit-project-form-cancel-btn") {
      let editProjectForm = document.getElementById("edit-project-form");
      e.preventDefault();
      editProjectForm.remove();
      createProjectCardContent(projectTitle, selectedProject);
      console.log("cancel button else statement is working")
    } else if (e.target.id === "edit-project-form-save-btn") {
      e.preventDefault();
      let editProjectForm = document.getElementById("edit-project-form");
      let newProjectTitle = editProjectFormSubmitHandler();
      editProjectForm.remove();
      createProjectCardContent(newProjectTitle, selectedProject);
      editProject(projectTitle, newProjectTitle);
      console.log("save button else statement is working");
    } else if (e.target.classList.contains("project-card-title-btn")) {
      projectTitleBtnEventHandler(projectTitle);
    }
  })};

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
  let selectedProjectTitle = selectedProject.dataset.title;
  //create various elements
  let editProjectForm = document.createElement("form");
  editProjectForm.id = "edit-project-form";
  let editProjectInput = document.createElement("input");
  editProjectInput.name = "editProjectInput";
  editProjectInput.id = "edit-project-input";
  editProjectInput.placeholder = selectedProjectTitle
  let editProjectBtnDiv = document.createElement("div");
  let editProjectSaveBtn = document.createElement("button");
  editProjectSaveBtn.className = "project-card-button";
  editProjectSaveBtn.id = "edit-project-form-save-btn";
  const saveBtnIcon = new Image();
  saveBtnIcon.src = saveBtnImg;
  saveBtnIcon.className = "project-button-icon";
  let editProjectCancelBtn = document.createElement("button");
  editProjectCancelBtn.className = "project-card-button";
  editProjectCancelBtn.id = "edit-project-form-cancel-btn";
  const cancelBtnIcon = new Image();
  cancelBtnIcon.src = cancelBtnImg;
  cancelBtnIcon.className = "project-button-icon";
  //append everything
  editProjectSaveBtn.appendChild(saveBtnIcon);
  editProjectCancelBtn.appendChild(cancelBtnIcon);
  editProjectBtnDiv.appendChild(editProjectSaveBtn);
  editProjectBtnDiv.appendChild(editProjectCancelBtn);
  editProjectForm.appendChild(editProjectInput);
  editProjectForm.appendChild(editProjectBtnDiv);
  selectedProject.replaceChildren(editProjectForm);
}

function editProjectFormSubmitHandler() {
  let editProjectInput = document.getElementById("edit-project-input");
  let newProjectTitle = editProjectInput.value;
  return newProjectTitle;
}

export { projectListDisplayEventHandler, createEditProjectForm };
