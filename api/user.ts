export const addUser = async (newUser: any)=> {
    const optionNewUser = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
    }
    await fetch ('https://todolist-d34a7-default-rtdb.firebaseio.com/addusers.json', optionNewUser)
}