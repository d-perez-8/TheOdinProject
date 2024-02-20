import { deleteTodo } from "./modules/deleteItem";

// DOM Elements
const todoContainer = document.querySelector("#todoContainer");
const todoForm = document.querySelector("#todoForm");
const projectForm = document.querySelector('#projectForm');
const projectContainer = document.querySelector('#projectContainer');
const openTodoFormBtn = document.querySelector('#openTodoForm');
const openProjectFormBtn = document.querySelector('#openProjectForm');
const closeProjectFormBtn = document.querySelector('#closeProjectForm');
const addOrUpdateTodoBtn = document.querySelector('#add-or-update-todo-button');
const closeTodoFormBtn = document.querySelector('#close-todo-form-button');
const discardTodoBtn = document.querySelector('#discard-btn');
const confirmCloseDialog = document.querySelector('#confirm-close-dialog');
const cancelTodoBtn = document.querySelector('#cancel-btn');

// Input elements
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dueDateInput = document.querySelector("#dueDate");


const todoData = JSON.parse(localStorage.getItem('data')) || [];
let currentTodo = {};

const addOrUpdateTodo = () => {
    const dataArrIndex = todoData.findIndex(todo => todo.id === currentTodo.id);
    const todoObj = {
        id: `${titleInput.value.toLowerCase()}-${Date.now()}`,
        title: titleInput.value,
        description: descriptionInput.value,
        dueDate: dueDateInput.value
    };

    if (dataArrIndex < 0) {
        todoData.push(todoObj);
    } else {
        todoData[dataArrIndex] = todoObj;
    }
    
    localStorage.setItem('data', JSON.stringify(todoData));
    updateTodoContainer();
    reset();
}

const updateTodoContainer = () => {
    todoContainer.innerHTML = '';
    todoData.forEach(
        ({ id, title, description, dueDate }) => {
            (todoContainer.innerHTML += `
                <div class="todo" id="${id}">
                    <span>${title}</span>
                    <span>${description}</span>
                    <span>${dueDate}</span>
                    <button type="button" class="edit-btn btn">Edit</button>
                    <button type="button" class="delete-btn btn">Delete</button>
                </div>
            `)
        }
    );
    const editBtns = document.querySelectorAll('.edit-btn');
    const deleteBtns = document.querySelectorAll('.delete-btn');

    editBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => editTodo(event.target))
    })
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => deleteTodo(event.target))
    })
};

const editTodo = (buttonEl) => {
    const dataArrIndex = todoData.findIndex(todo => todo.id === buttonEl.parentElement.id);

    currentTodo = todoData[dataArrIndex];

    titleInput.value = currentTodo.title;
    descriptionInput.value = currentTodo.description;
    dueDateInput.value = currentTodo.date;

    addOrUpdateTodoBtn.innerText = 'Update';

    todoForm.showModal();
}

const reset = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    todoForm.close();
    currentTodo = {};
}

if (todoData.length) {
    updateTodoContainer();
}

openTodoFormBtn.addEventListener('click', () => {
    todoForm.showModal();
})

closeTodoFormBtn.addEventListener('click', () => {
    const formInputContainValues = titleInput.value || descriptionInput.value || dueDateInput.value;
    const formInputValuesUpdated = titleInput.value !== currentTodo.title || descriptionInput.value !== currentTodo.description || dueDateInput.value !== currentTodo.dueDate;

    return (formInputContainValues && formInputValuesUpdated) ? confirmCloseDialog.showModal() : reset();
})

cancelTodoBtn.addEventListener('click', () => {
    reset();
})

discardTodoBtn.addEventListener('click', () => {
    confirmCloseDialog.close();
    reset();
})

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addOrUpdateTodo();
})