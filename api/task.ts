const addTask = async (newTask)=>{
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }
   await fetch('https://todolist-d34a7-default-rtdb.firebaseio.com/task.json',option)


}

const getTask = async () => {
    const response = await fetch('https://todolist-d34a7-default-rtdb.firebaseio.com/task.json');
    const data = await response.json();
    return data;    
}