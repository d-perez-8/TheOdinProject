import { createDOMElement } from './createDomElement';
import { deleteItem } from './deleteItem';

class Todo {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    render() {
        const todo = createDOMElement('li', '', { class: 'todo' });
        const title = createDOMElement('span', this.title, { class: 'todoTitle' });
        const description = createDOMElement('span', this.description, { class: 'todoDescription' });
        const dueDate = createDOMElement('span', this.dueDate, { class: 'dueDate' });
        const editTodo = createDOMElement('button', 'Edit', { class: 'editTodo' });
        const removeTodo = createDOMElement('button', 'Remove', { class: 'removeTodo deleteBtn' });
        
        todo.appendChild(title);
        todo.appendChild(description);
        todo.appendChild(dueDate);
        todo.appendChild(editTodo);
        todo.appendChild(removeTodo);

        return todo;
    }
}

export default class TodoFormHandler {
    constructor(formId, todosContainer) {
        this.form = document.getElementById(formId);
        this.todosContainer = document.querySelector(todosContainer);
        this.addEventListeners();
    }

    addEventListeners() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();

        const todoTitle = this.getElementValue('#title');
        const todoDescription = this.getElementValue('#description');
        const todoDueDate = this.getElementValue('#dueDate');

        const todo = new Todo(todoTitle, todoDescription, todoDueDate)
        const todoElement = todo.render();

        this.todosContainer.appendChild(todoElement);

        // Reinstantiate function for each new project
        deleteItem();

        this.clearInputFields();
    }

    clearInputFields() {
        this.setElementValue('#title', '');
        this.setElementValue('#description', '');
        this.setElementValue('#dueDate', '');
    }

    getElementValue(selector) {
        return this.form.querySelector(selector).value;
    }

    setElementValue(selector, value) {
        this.form.querySelector(selector).value = value;
    }
}