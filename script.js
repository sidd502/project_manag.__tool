document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');
    const taskList = document.getElementById('task-list');
    const taskNameInput = document.getElementById('task-name');
    const assigneeSelect = document.getElementById('assignee');
    const assignButton = document.getElementById('assign-button');

    assignButton.addEventListener('click', () => {
        const taskName = taskNameInput.value;
        const assignee = assigneeSelect.value;

        if (taskName && assignee) {
            const taskItem = document.createElement('li');
            taskItem.textContent = `${taskName} (Assigned to ${assignee})`;
            taskList.appendChild(taskItem);
            taskNameInput.value = '';
        } else {
            alert('Please enter a task name and select an assignee.');
        }
    });
});