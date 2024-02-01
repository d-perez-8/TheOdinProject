const toggleAddTodoButton = document.querySelector(".addTodo");
const todoModal = document.querySelector(".addTodoModal");
const toggleProjectButton = document.querySelector(".addProject");
const projectModal = document.querySelector(".addProjectModal");
const editTodoModal = document.querySelector(".editTodoModal");
const editProjectModal = document.querySelector(".editProjectModal");

// Toggle Todo Modal
export const toggleTodoModal = () => {
    toggleAddTodoButton.addEventListener('click', () => {
        todoModal.classList.toggle('hidden');
        projectModal.classList.add('hidden');
    });
}

// Toggle Project Modal
export const toggleProjectModal = () => {
    toggleProjectButton.addEventListener('click', () => {
        projectModal.classList.toggle('hidden');
        todoModal.classList.add('hidden');
    });
}

// Close Modal
export const closeModal = () => {
    const cancelButton = document.querySelectorAll(".cancel");
    cancelButton.forEach(btn => btn.addEventListener('click', () => {
        todoModal.classList.add('hidden');
        projectModal.classList.add('hidden');
        editTodoModal.classList.add('hidden');
    }));
}

// Edit Todo Modal
export const editTodo = () => {
    // Get DOM Elemenets
    const editBtn = document.querySelectorAll(".editTodo");
    const todoTitle = document.querySelectorAll(".todoTitle");
    const todoDescription = document.querySelectorAll(".todoDescription");
    const todoDueDate = document.querySelectorAll(".dueDate");
    const editTodoForm = document.querySelector("#editTodo");

    // Get Modal Elements
    const editTitle = document.querySelector("#editTitle");
    const editDescription = document.querySelector("#editDescription");
    const editDueDate = document.querySelector("#editDueDate");

    editBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Show modal 
            editTodoModal.classList.toggle('hidden');

            // Populate modal
            const title = todoTitle[index].textContent;
            const description = todoDescription[index].textContent;
            const dueDate = todoDueDate[index].textContent;

            editTitle.value = title;
            editDescription.value = description;
            editDueDate.value = dueDate;

            // Save new edits
            editTodoForm.addEventListener('submit', (event) => {
                event.preventDefault();
                todoTitle[index].textContent = editTitle.value;
                todoDescription[index].textContent = editDescription.value;
                todoDueDate[index].textContent = editDueDate.value;
                editTodoModal.classList.add('hidden');
            })
        });
    });
}

//Edit Project Modal
export const editProject = () => {
    //Get DOM Elements
    const editBtn = document.querySelectorAll(".editProject");
    const projectTitle = document.querySelectorAll(".projectTitle");
    const editProjectForm = document.querySelector("#editProject");

    //Get Modal Elements
    const editTitle = document.querySelector("#edit-title");

    editBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            //Show Modal
            editProjectModal.classList.toggle('hidden');

            //Populate Modal
            const title = projectTitle[index].textContent;

            editTitle.value = title;

            //Save new edits
            editProjectForm.addEventListener('submit', (event) => {
                event.preventDefault();
                projectTitle[index].textContent = editTitle.value;
                editProjectModal.classList.add('hidden');
            })
        });
    });
}