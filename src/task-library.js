import { createTaskCard, taskButtonEventHandler } from "./task-card-display";

function Task(title, description, dueDate, priority, project) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.project = project;
  this.id = crypto.randomUUID();
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

function editTask(id, title, description, dueDate, priority, project) {
  const tasks = getAllTasks();
  let updatedTasks = tasks.map(task => {
    if (task.id === id) {
      task.title = title;
      task.description = description;
      task.dueDate = dueDate;
      task.priority = priority;
      task.project = project;
    }
    return task;
  })
  localStorage.setItem("task-library", JSON.stringify(updatedTasks));
}

function removeTask(id) {
  let tasks = getAllTasks();
  let updatedTasks = tasks.filter((task) => {
    return task.id !== id;
  })
  localStorage.setItem("task-library", JSON.stringify(updatedTasks));
}

export {
    Task,
    getAllTasks,
    saveTask,
    editTask,
    removeTask,
}

