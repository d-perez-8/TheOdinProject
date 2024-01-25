// Submit Project Modal Form
export default class Project {
    constructor(projectForm) {
        this.formElement = document.getElementById(projectForm);
        this.title = document.getElementById('title');
        this.addEventListener();
    }

    addEventListener() {
        this.formElement.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();

        const projectTitle = this.title.value;
        
        this.clearInputFields();

        console.log(projectTitle);
    }

    clearInputFields() {
        this.title.value = '';
    }
}