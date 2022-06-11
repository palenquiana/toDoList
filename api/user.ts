const addUser = async (newUser: any)=> {
    const optionNewUser = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
    }
    await fetch ('https://todolist-d34a7-default-rtdb.firebaseio.com/user.json', optionNewUser)
}


const getUser = async () => {
    const response = await fetch('https://todolist-d34a7-default-rtdb.firebaseio.com/user.json');
    const data = await response.json();
    return data;    
}
