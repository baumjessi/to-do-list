import { getProjectsByName } from "./project-library";

let sidebar = document.getElementById("sidebar");

function createProjectDiv() {
    let projectDiv = document.createElement("div");
    projectDiv.id = "project-div";
    sidebar.appendChild(projectDiv);
    let projectNamesArray = getProjectsByName();
    projectNamesArray.forEach(element => {
        var projectBtn = document.createElement("button");
        projectBtn.innerText = element;
        projectDiv.appendChild(projectBtn);
        projectBtn.className = "project-button";
    });
}

function createAddProjectBtn() {
    let addNewProjectBtn = document.createElement("button");
    addNewProjectBtn.className = "project-button";
    addNewProjectBtn.innerText = "Add new project...";
    sidebar.appendChild(addNewProjectBtn);
}

function showProjects() {
    let projectDropDownButton = document.getElementById("project-dropdown-button");
    projectDropDownButton.addEventListener("click", (e) =>{
        createProjectDiv();
        createAddProjectBtn();
        checkForProjectDiv();
    })
}

function checkForProjectDiv() {
    let projectDiv = document.getElementById("project-div");
    if (sidebar.contains(projectDiv)) {
        console.log("true");
    }
    else 
    {
        console.log("false");
    }
}

export {
    createProjectDiv,
    showProjects,
    checkForProjectDiv
}