const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


function addTask(task) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';

    const taskText = document.createElement('span');
    taskText.textContent = task;

    taskText.addEventListener('click', () =>{
        const editInput = document.createElement('input');
        editInput.value = taskText.textContent;
        taskText.replaceWith(editInput);

        editInput.addEventListener('blur', () => {
            const editedText = editInput.value.trim();
            if (editedText === '') {
                li.remove();
            } else {
                taskText.textContent = editedText;
                editInput.replaceWith(taskText);
            }
        });

        editInput.addEventListener('keydown', (e) =>{
            if (e.key === 'Enter') {
                taskText.textContent = editInput.value.trim();
                if (editedText === '') {
                    li.remove();
                } else {
                    taskText.textContent = editedText;
                    editInput.replaceWith(taskText);
                }
            }
        });
    });

    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    todoList.appendChild(li);
}


window.onload = () => {
    const dummy = [
        'Click me to edit 📝',
        'When you edit, try deleting to remove me ❌'
    ];
    dummy.forEach(task => addTask(task)); 
};
todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const task = todoInput.value.trim();
        if (task !== '') {
            addTask(task); 
            todoInput.value = ''; 
        }
    }
});