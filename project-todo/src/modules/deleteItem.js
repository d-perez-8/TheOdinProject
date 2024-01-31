// Delete Project or Todo Item
export const deleteItem = () => {
    const deleteItem = document.querySelectorAll('.deleteBtn');
    deleteItem.forEach(btn => btn.addEventListener('click', event => {
        if (event.target.classList.contains('deleteBtn')) {
            event.target.parentElement.remove();
        }
    }));
}
