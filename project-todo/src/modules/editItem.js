const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dueDateInput = document.querySelector("#dueDate");
const addOrUpdateTodoBtn = document.querySelector('#add-or-update-todo-button');
const todoForm = document.querySelector("#todoForm");

const todoData = JSON.parse(localStorage.getItem('data')) || [];
let currentTodo = {};

export const editTodo = (buttonEl) => {
    console.log('editTodo called')
    const dataArrIndex = todoData.findIndex(todo => todo.id === buttonEl.parentElement.id);

    currentTodo = todoData[dataArrIndex];

    titleInput.value = currentTodo.title;
    descriptionInput.value = currentTodo.description;
    dueDateInput.value = currentTodo.date;

    addOrUpdateTodoBtn.innerText = 'Update';

    todoForm.showModal();
}