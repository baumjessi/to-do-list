function createTaskCard(title, description, date, priority, project, id) {
    let taskContainerGrid = document.getElementById("task-container-grid");
    let newTaskCard = document.createElement("div");
    newTaskCard.className = "task";
    taskContainerGrid.appendChild(newTaskCard);
    //title
    let titleText = document.createElement("h2");
    titleText.className = "task-card-title";
    newTaskCard.appendChild(titleText);
    titleText.innerHTML = title;
    //description
    let descriptionText = document.createElement("p");
    descriptionText.className = "task-card-description";
    newTaskCard.appendChild(descriptionText);
    descriptionText.innerHTML = description;
    //date
    let dateText = document.createElement("p");
    dateText.className = "task-card-date";
    newTaskCard.appendChild(dateText);
    dateText.innerHTML = date;
    //priority
    let priorityText = document.createElement("p");
    priorityText.className = "task-card-priority";
    newTaskCard.appendChild(priorityText);
    priorityText.innerHTML = priority;
    //project
    let projectText = document.createElement("p");
    projectText.className = "task-card-project";
    newTaskCard.appendChild(projectText);
    projectText.innerHTML = project;
    //id
    newTaskCard.setAttribute("data-id", id);
}

export {
    createTaskCard
}