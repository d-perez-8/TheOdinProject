import { toggleTodoModal, toggleProjectModal, closeModal } from './modules/modal.js';
import Todo from './modules/addTodo.js';
import Project from './modules/addProject.js';
// Add todo toggle function
toggleTodoModal();
toggleProjectModal();
const project = new Project('projectForm');
const todo = new Todo('todoForm');
closeModal();
console.log(project)