function Project(title) {
  this.title = title;
  this.UUID = crypto.randomUUID();
}

function getProjectsByName() {
  let projectLibrary = getAllProjects();
  const projectNamesArray = projectLibrary.map((project) => {
    return project.title;
  });
  return projectNamesArray;
}

function getAllProjects() {
    const projects = JSON.parse(localStorage.getItem("project-library") || "[]");
    return projects;
}

function saveProject(title) {
    let newProject = new Project(title);
    const projects = getAllProjects();
    projects.push(newProject);
    localStorage.setItem("project-library", JSON.stringify(projects));
}

function removeProject(id) {
  let projects = getAllProjects();
  let updatedProjects = projects.filter((project) => {
    return project.UUID !== id;
  })
  localStorage.setItem("project-library", JSON.stringify(updatedProjects));
}
export {
  Project,
  getProjectsByName,
  getAllProjects,
  saveProject,
  removeProject
};
