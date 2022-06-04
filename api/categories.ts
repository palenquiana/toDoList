const addCategory = async (newCategory)=>{
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
    }
   await fetch('https://todolist-d34a7-default-rtdb.firebaseio.com/categories.json',option)


}