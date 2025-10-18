let projectLibrary = [];

function Project(title) {
  this.title = title;
  this.UUID = crypto.randomUUID();
}

function addToProjectLibrary(title, description, dueDate, priority) {
  const newProject = new Project(title);
  projectLibrary.push(newProject);
}

function removeFromProjectLibrary(title) {
  const newProjectLibrary = projectLibrary.filter((project) => {
    return project.title !== title;
  });
  projectLibrary = newProjectLibrary;
}

function getProjectsByName() {
  const projectNamesArray = projectLibrary.map((project) => {
    return project.title;
  });
  return projectNamesArray;
}

function displayProjectLibrary() {
  console.log(projectLibrary);
}

export {
  Project,
  addToProjectLibrary,
  removeFromProjectLibrary,
  displayProjectLibrary,
  getProjectsByName
};
