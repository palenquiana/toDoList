
const form = document.getElementById('task-items');


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const task = {
        title : form.title.value,
        date : form.dateT.value,
        status : form.status.value,
        category : getCategories(),
        // user: falta funcion get user
        description : form.description.value
    }
    
    addTask(task)
    
    const taskMap = mapToArray(task);

    const optionCat = document.createElement('option');
    optionCat.setAttribute('id', "category")
    optionCat.setAttribute('value', ` ${task.category}`)

    const optionUser = document.createElement('option');
    optionUser.setAttribute('id', "user")
    // optionCat.setAttribute('value', ` ${task.category}`)

    
})

