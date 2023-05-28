export const postTask = (task) => fetch('/tasks', {
    method: 'POST',
    body: task
});