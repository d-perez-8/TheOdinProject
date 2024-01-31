import { createDOMElement } from "./createDomElement";
import { deleteItem } from './deleteItem';


// Submit Project Modal Form
class Project {
    constructor(title) {
        this.title = title;
    }

    render() {
        const project = createDOMElement('li', '', { class: 'project' });
        const title = createDOMElement('span', this.title, { class: 'projectTitle' });
        const editProject = createDOMElement('button', 'E', { class: 'editProject' });
        const deleteProject = createDOMElement('button', 'D', { class: 'deleteProject deleteBtn' });

        project.appendChild(title);
        project.appendChild(editProject);
        project.appendChild(deleteProject);

        return project;
    }
    
}

export default class ProjectFormHandle {
    constructor(projectFormId, projectsContainer) {
        this.form = document.getElementById(projectFormId);
        this.projectsContainer = document.querySelector(projectsContainer);
        this.addEventListener();
    }

    addEventListener() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();

        const projectTitle = this.getElementValue('#project-title');
        
        const project = new Project(projectTitle);
        const projectElement = project.render();

        this.projectsContainer.appendChild(projectElement);

        // Reinstantiate function for each new project
        deleteItem();

        this.clearInputFields();
    }

    clearInputFields() {
        this.setElementValue('#project-title', '');
    }

    getElementValue(selector) {
        return this.form.querySelector(selector).value;
    }

    setElementValue(selector, value) {
        this.form.querySelector(selector).value = value;
    }
}