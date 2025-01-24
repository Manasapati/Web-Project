document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if(taskText) {
        addTask(taskText);
        taskInput.value = ' ' ; //clear input after adding task
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.innerHTML = `
                 ${taskText}
                 <button class="remove-btn">Remove</button>
                 `;

//mark as task completed
li.addEventListener('click' , function() {
    li.classList.toggle('completed');
})

//Remove task
li.querySelector('.remove-btn').addEventListener('click' , function() {
    taskList.removeChild(li);
});

taskList.appendChild(li);
}