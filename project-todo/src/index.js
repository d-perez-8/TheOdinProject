import { toggleTodoModal, toggleProjectModal, closeModal } from './modules/modal.js';
import TodoFormHandler from './modules/addTodo.js';
import Project from './modules/addProject.js';
import { deleteItem } from './modules/deleteItem.js';

// Add todo toggle function
toggleTodoModal();
toggleProjectModal();
closeModal();
deleteItem();


// Classes for projects and todos
new Project('projectForm', '.projects');
new TodoFormHandler('todoForm', '.todos');
