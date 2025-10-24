function addTaskViaBtn() {
    let addTaskBtn = document.getElementById("add-task-button");
    let newTaskDialog = document.getElementById("new-task-dialog");
    addTaskBtn.addEventListener("click", (e) => {
        newTaskDialog.showModal();
    });
}

export {
    addTaskViaBtn
}