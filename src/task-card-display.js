import deleteButtonImg from "./assets/bin.png";
import editButtonImg from "./assets/edit.png";
import { removeTask } from "./task-library";

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
  const editButton = document.createElement("button");
  editButton.classList.add("task-card-button", "edit-button");
  const editButtonIcon = new Image();
  editButtonIcon.src = editButtonImg;
  editButtonIcon.classList.add("task-card-button-icon");
  buttonDiv.appendChild(editButton);
  editButton.appendChild(editButtonIcon);
  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("task-card-button", "delete-button");
  const deleteButtonIcon = new Image();
  deleteButtonIcon.src = deleteButtonImg;
  deleteButtonIcon.classList.add("task-card-button-icon");
  buttonDiv.appendChild(deleteButton);
  deleteButton.appendChild(deleteButtonIcon);
  //title
  let titleText = document.createElement("h2");
  titleText.className = "task-card-title";
  titleText.innerHTML = title;
  //description
  let descriptionText = document.createElement("p");
  descriptionText.className = "task-card-description";
  descriptionText.innerHTML = description;
  //bottom div sections
  let bottomDivLeftDiv = document.createElement("div");
  bottomDivLeftDiv.className = "task-card-bottom-left";
  let bottomDivRightDiv = document.createElement("right");
  bottomDivRightDiv.className = "task-card-bottom-right";
  //date
  let dateText = document.createElement("p");
  dateText.className = "task-card-date";
  dateText.innerHTML = date;
  bottomDivLeftDiv.appendChild(dateText);
  //project
  let projectText = document.createElement("p");
  projectText.className = "task-card-project";
  projectText.innerHTML = project;
  bottomDivRightDiv.appendChild(projectText);
  //priority
  let priorityText = document.createElement("p");
  priorityText.classList.add("task-card-priority", setPriorityColor(priority));
  priorityText.innerHTML = priority;
  bottomDivRightDiv.appendChild(priorityText);
  //id
  newTaskCard.setAttribute("data-id", id);
  //append to top div
  topDiv.appendChild(titleText);
  topDiv.appendChild(buttonDiv);
  //append to middle div
  middleDiv.appendChild(descriptionText);
  //append to bottom div
  bottomDiv.appendChild(bottomDivLeftDiv);
  bottomDiv.appendChild(bottomDivRightDiv);
}

function deleteTaskCard() {
  let deleteButton = document.getElementsByClassName("delete-button");
  Array.from(deleteButton).forEach((button) => {
    button.addEventListener(
      ("click",
      (e) => {
        let selectedTaskCard = button.parentElement.parentElement.parentElement;
        selectedTaskCard.remove();
      })
    );
  });
}

function setPriorityColor(priority) {
let priorityClass
if (priority === "high") {
  priorityClass = "high-priority";
  return priorityClass;
}
else if (priority === "medium") {
  priorityClass = "medium-priority";
  return priorityClass;
}
else if (priority === "low") {
  priorityClass = "low-priority";
  return priorityClass;
}
}
export { createTaskCard, deleteTaskCard, setPriorityColor };
