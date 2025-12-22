import { getAllTasks } from "./task-library";
import { createTaskCard } from "./task-card-display";

function displayAllTasks() {
    document.addEventListener("DOMContentLoaded", e => {
        let tasks = getAllTasks();
        tasks.forEach((task) => {
            const { title, description, dueDate, priority, project, id } = task;
            createTaskCard(title, description, dueDate, priority, project, id);
        })
    })
}

export { displayAllTasks };