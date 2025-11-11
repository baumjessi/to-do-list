import deleteButtonImg from "./assets/bin.png";
import editButtonImg from "./assets/edit.png";

let taskContainerGrid = document.getElementById("task-container-grid");

function createTaskCard(title, description, date, priority, project, id) {
    const newTaskCard = document.createElement("div");
    newTaskCard.className = "task-card";
    taskContainerGrid.appendChild(newTaskCard);
    //create three divs to style task card
    const topDiv = document.createElement("div");
    topDiv.className = "task-card-top-div";
    newTaskCard.appendChild(topDiv);
    const middleDiv = document.createElement("div");
    middleDiv.className = "task-card-middle-div";
    newTaskCard.appendChild(middleDiv);
    const bottomDiv = document.createElement("div");
    bottomDiv.className = "task-card-bottom-div";
    newTaskCard.appendChild(bottomDiv);
    //create button div
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "task-card-button-div";
    //edit button 
    const editButton = new Image();
    editButton.src = editButtonImg;
    editButton.className = "task-card-button";
    buttonDiv.appendChild(editButton);
    //delete button
    const deleteButton = new Image();
    deleteButton.src = deleteButtonImg;
    deleteButton.className = "task-card-button";
    buttonDiv.appendChild(deleteButton);
    //title
    let titleText = document.createElement("h2");
    titleText.className = "task-card-title";
    titleText.innerHTML = title;
    //description
    let descriptionText = document.createElement("p");
    descriptionText.className = "task-card-description";
    descriptionText.innerHTML = description;
    //date
    let dateText = document.createElement("p");
    dateText.className = "task-card-date";
    dateText.innerHTML = date;
    //priority
    let priorityText = document.createElement("p");
    priorityText.className = "task-card-priority";
    priorityText.innerHTML = priority;
    //project
    let projectText = document.createElement("p");
    projectText.className = "task-card-project";
    projectText.innerHTML = project;
    //id
    newTaskCard.setAttribute("data-id", id);
    //append to top div
    topDiv.appendChild(titleText);
    topDiv.appendChild(buttonDiv);
    //append to middle div 
    middleDiv.appendChild(descriptionText);
    //append to bottom div
    bottomDiv.appendChild(dateText);
    bottomDiv.appendChild(projectText);
    bottomDiv.appendChild(priorityText);
}


function changeColorByPriority() {

}

export {
    createTaskCard
}