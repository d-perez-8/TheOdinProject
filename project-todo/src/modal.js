const toggleButton = document.querySelector(".addTodo");
const todoModal = document.querySelector(".addTodoModal");

// Toggle Modal
export const toggleTodoModal = () => {
    console.log('Toggle Button Clicked')
    toggleButton.addEventListener('click', () => {
        todoModal.classList.toggle('hidden');
    });
}

// Close to-do modal
export const closeTodoModal = () => {
    const cancelButton = document.querySelector(".cancel");
    cancelButton.addEventListener('click', () => {
        todoModal.classList.toggle('hidden');
    });
}

// Submit Modal Form
export const addTodoItem = () => {
    const add = document.querySelector(".add");
    add.addEventListener('click', () => {
        todoModal.classList.toggle('hidden');
    })
}
