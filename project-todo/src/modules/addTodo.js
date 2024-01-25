// Submit Todo Modal Form
export default class Todo {
    constructor(todoForm) {
        this.formElement = document.getElementById(todoForm);
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        this.dueDate = document.getElementById('dueDate');
        this.addEventListener();
    }

    addEventListener() {
        this.formElement.addEventListener('submit', this.handleSubmit.bind(this));
    }
    
    handleSubmit(event) {
        event.preventDefault();

        const todoTitle = this.title.value;
        const todoDescription = this.description.value;
        const todoDueDate = this.dueDate.value;

        this.clearInputFields();        

        //How do we send this data to the DOM
        console.log(todoTitle, todoDescription, todoDueDate);
    }

    clearInputFields() {
        this.title.value = '';
        this.description.value = '';
        this.dueDate.value = '';
    }
}