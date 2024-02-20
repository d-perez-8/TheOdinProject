// Delete Project or Todo Item
const todoData = JSON.parse(localStorage.getItem('data')) || [];

export const deleteTodo = (buttonEl) => {
    const dataArrIndex = todoData.findIndex(todo => todo.id === buttonEl.parentElement.id);

    buttonEl.parentElement.remove();
    todoData.splice(dataArrIndex, 1);
    localStorage.setItem("data", JSON.stringify(todoData));
}
