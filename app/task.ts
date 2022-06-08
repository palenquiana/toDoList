
const form = document.getElementById('task-items');
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const task = {
        title : form.title.value,
        date : form.dateT.value,
        status : form.status.value,
        description : form.description.value
    }
    
    addTask(task)
    
})
