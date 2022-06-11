var form = document.getElementById('task-items');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var task = {
        title: form.title.value,
        date: form.dateT.value,
        status: form.status.value,
        description: form.description.value
    };
    addTask(task);
});
