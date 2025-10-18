import { getProjectsByName } from "./project-library";

function createProjectDiv() {
    let projectDiv = document.createElement("div");
    let sidebar = document.getElementById("sidebar");
    sidebar.appendChild(projectDiv);
    let projectNamesArray = getProjectsByName();
    projectNamesArray.forEach(element => {
        var addedProjectBtn = document.createElement("button");
        addedProjectBtn.innerText = element;
        projectDiv.appendChild(addedProjectBtn);
        addedProjectBtn.className = "added-project-button";
    });
}

function showProjects() {
    let projectDropDownButton = document.getElementById("project-dropdown-button");
    projectDropDownButton.addEventListener("click", (e) =>{
        createProjectDiv();
    })
}

function hideProjects() {

}

export {
    createProjectDiv,
    showProjects
}