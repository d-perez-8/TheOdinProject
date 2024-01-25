const toggleAddTodoButton = document.querySelector(".addTodo");
const todoModal = document.querySelector(".addTodoModal");
const toggleProjectButton = document.querySelector(".addProject")
const projectModal = document.querySelector(".addProjectModal");

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

// Close modal
export const closeModal = () => {
    const cancelButton = document.querySelectorAll(".cancel");
    cancelButton.forEach(btn => btn.addEventListener('click', () => {
        todoModal.classList.add('hidden');
        projectModal.classList.add('hidden');
    }));
}