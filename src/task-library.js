let taskLibrary = [];

function Task(title, description, dueDate, priority, project) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.prority = priority;
  this.project = project;
  this.UUID = crypto.randomUUID();
}

function addToTaskLibrary(title, description, dueDate, priority, project) {
  const newTask = new Task(title, description, dueDate, priority, project);
  taskLibrary.push(newTask);
}

function removeFromTaskLibrary(title) {
    const newTaskLibrary = taskLibrary.filter((task) => {
      return task.title !== title;
    });
    taskLibrary = newTaskLibrary;
}

function filterTaskByProject(project) {
  const newTaskLibrary = taskLibrary.filter((task) => {
    return task.project === project;
  })
  taskLibrary = newTaskLibrary;
}

function displayTaskLibrary() {
  console.log(taskLibrary);
}


export { Task, addToTaskLibrary, removeFromTaskLibrary, filterTaskByProject, displayTaskLibrary };
