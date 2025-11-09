import { createTaskCard } from "./task-card-display";

function Task(title, description, dueDate, priority, project) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.project = project;
  this.UUID = crypto.randomUUID();
}


function filterTaskByProject(project) {
  const newTaskLibrary = taskLibrary.filter((task) => {
    return task.project === project;
  })
  taskLibrary = newTaskLibrary;
}

//local storage

function getAllTasks() {
    const tasks = JSON.parse(localStorage.getItem("task-library") || "[]");
    return tasks;
}

function saveTask(title, description, dueDate, priority, project) {
    let newTask = new Task(title, description, dueDate, priority, project);
    createTaskCard(newTask.title, newTask.description, newTask.dueDate, newTask.priority, newTask.project, newTask.id);
    const tasks = getAllTasks();
    tasks.push(newTask);
    localStorage.setItem("task-library", JSON.stringify(tasks));
}

function removeTask(id) {
  let tasks = getAllTasks();
  let updatedTasks = tasks.filter((task) => {
    return task.UUID !== id;
  })
  localStorage.setItem("task-library", JSON.stringify(updatedTasks));
}

export {
    Task,
    getAllTasks,
    saveTask,
    removeTask,
}

