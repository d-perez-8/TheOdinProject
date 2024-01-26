import { toggleTodoModal, toggleProjectModal, closeModal } from './modules/modal.js';
import TodoFormHandler from './modules/addTodo.js';
import Project from './modules/addProject.js';
// Add todo toggle function
toggleTodoModal();
toggleProjectModal();
closeModal();


// Classes for projects and todos
new Project('projectForm');
new TodoFormHandler('todoForm', '.todos');
