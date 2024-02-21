// Delete Project or Todo Item
const todoData = JSON.parse(localStorage.getItem('data')) || [];
const projectData = JSON.parse(localStorage.getItem('projects')) || [];

export const deleteTodo = (buttonEl) => {
    const dataArrIndex = todoData.findIndex(todo => todo.id === buttonEl.parentElement.id);

    buttonEl.parentElement.remove();
    todoData.splice(dataArrIndex, 1);
    localStorage.setItem("data", JSON.stringify(todoData));
}

export const deleteProject = (buttonEl) => {
    const dataArrIndex = projectData.findIndex(project => project.id === buttonEl.parentElement.id);

    buttonEl.parentElement.remove();
    projectData.splice(dataArrIndex, 1);
    localStorage.setItem("projects", JSON.stringify(projectData));
}
