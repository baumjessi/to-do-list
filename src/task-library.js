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

//local storage

function getAllTasks() {
    const tasks = JSON.parse(localStorage.getItem("task-library") || "[]");
    return tasks;
}

function saveTask(title, description, dueDate, priority, project) {
    let newTask = new Task(title, description, dueDate, priority, project);
    const tasks = getAllTasks();
    tasks.push(newTask);
    localStorage.setItem("all-saved-tasks", JSON.stringify(tasks));
}

function removeTask(ID) {}

function editTask() {}

export {
    getAllTasks,
    saveTask,
    removeTask,
    editTask
}


export { Task, addToTaskLibrary, removeFromTaskLibrary, filterTaskByProject, displayTaskLibrary };
