import { format } from "date-fns";

// DOM Elements
const todoContainer = document.querySelector("#todoContainer");
const todoForm = document.querySelector("#todoForm");
const projectForm = document.querySelector('#projectForm');
const projectContainer = document.querySelector('#projectContainer');
const openTodoFormBtn = document.querySelector('#openTodoForm');
const openProjectFormBtn = document.querySelector('#openProjectForm');
const addOrUpdateTodoBtn = document.querySelector('#add-or-update-todo-button');
const addOrUpdateProjectBtn = document.querySelector('#add-or-update-project-button');
const closeTodoFormBtn = document.querySelector('#close-todo-form-button');
const closeProjectFormBtn = document.querySelector('#close-project-form-button');
const discardTodoBtn = document.querySelector('#discard-btn');
const confirmCloseDialog = document.querySelector('#confirm-close-dialog');
const cancelTodoBtn = document.querySelector('#cancel-btn');

// Input elements
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dueDateInput = document.querySelector("#dueDate");
const projectTitleInput = document.querySelector('#project-title');

const todoData = JSON.parse(localStorage.getItem('data')) || [];
const projectData = JSON.parse(localStorage.getItem('projects')) || [];
let currentTodo = {};
let currentProject = {};

const addOrUpdateTodo = () => {
    const dataArrIndex = todoData.findIndex(todo => todo.id === currentTodo.id);
    const todoObj = {
        id: `${titleInput.value.toLowerCase()}-${Date.now()}`,
        title: titleInput.value,
        description: descriptionInput.value,
        dueDate: format(dueDateInput.value, 'MM/dd/yyyy')
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

const addOrUpdateProject = () => {
    const projectdataArrIndex = projectData.findIndex(project => project.id === currentProject.id);
    const projectObj = {
        id: `${projectTitleInput.value.toLowerCase()}-${Date.now()}`,
        title: projectTitleInput.value
    };

    if (projectdataArrIndex < 0) {
        projectData.push(projectObj);
    } else {
        projectData[projectdataArrIndex] = projectObj;
    }
    
    localStorage.setItem('projects', JSON.stringify(projectData));
    updateProjectContainer();
    resetProject();
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

const updateProjectContainer = () => {
    projectContainer.innerHTML = '';
    projectData.forEach(
        ({ id, title }) => {
            (projectContainer.innerHTML += `
                <div class="project" id="${id}">
                    <span>${title}</span>
                    <button type='button' class="edit-project-btn btn">Edit</button>
                    <button type="button" class="delete-project-btn btn">Delete</button>
                </div>
            `)
        }
    );
    const editProjectBtns = document.querySelectorAll('.edit-project-btn');
    const deleteProjectBtns = document.querySelectorAll('.delete-project-btn');

    editProjectBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => editProject(event.target))
    })
    deleteProjectBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => deleteProject(event.target))
    })
}

const editTodo = (buttonEl) => {
    const dataArrIndex = todoData.findIndex(todo => todo.id === buttonEl.parentElement.id);

    currentTodo = todoData[dataArrIndex];

    titleInput.value = currentTodo.title;
    descriptionInput.value = currentTodo.description;
    dueDateInput.value = currentTodo.date;

    addOrUpdateTodoBtn.innerText = 'Update';

    todoForm.showModal();
}

const editProject = (buttonEl) => {
    const dataArrIndex = projectData.findIndex(project => project.id === buttonEl.parentElement.id);

    currentProject = projectData[dataArrIndex];

    projectTitleInput.value = currentProject.title;

    addOrUpdateProjectBtn.innerText = 'Update';

    projectForm.showModal();
}

const deleteTodo = (buttonEl) => {
    const dataArrIndex = todoData.findIndex(todo => todo.id === buttonEl.parentElement.id);

    buttonEl.parentElement.remove();
    todoData.splice(dataArrIndex, 1);
    localStorage.setItem("data", JSON.stringify(todoData));
}

const deleteProject = (buttonEl) => {
    const dataArrIndex = projectData.findIndex(project => project.id === buttonEl.parentElement.id);

    buttonEl.parentElement.remove();
    projectData.splice(dataArrIndex, 1);
    localStorage.setItem("projects", JSON.stringify(projectData));
}

const reset = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    todoForm.close();
    currentTodo = {};
}

const resetProject = () => {
    titleInput.value = ""
    projectForm.close();
    currentProject = {};
}

// Populates items on refresh
if (todoData.length) {
    updateTodoContainer();
}

if (projectData.length) {
    updateProjectContainer();
}

openTodoFormBtn.addEventListener('click', () => {
    todoForm.showModal();
})

openProjectFormBtn.addEventListener('click', () => {
    projectForm.showModal();
})

closeTodoFormBtn.addEventListener('click', () => {
    const formInputContainValues = titleInput.value || descriptionInput.value || dueDateInput.value;
    const formInputValuesUpdated = titleInput.value !== currentTodo.title || descriptionInput.value !== currentTodo.description || dueDateInput.value !== currentTodo.dueDate;

    return (formInputContainValues && formInputValuesUpdated) ? confirmCloseDialog.showModal() : reset();
})

closeProjectFormBtn.addEventListener('click', () => {
    const formInputContainValues = titleInput.value;
    const formInputValuesUpdated = titleInput.value !== currentProject.title;

    return (formInputContainValues && formInputValuesUpdated) ? confirmCloseDialog.showModal() : resetProject();
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

projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addOrUpdateProject();
})