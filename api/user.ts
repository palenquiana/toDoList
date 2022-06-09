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





// const optionNewUser2 = (user:any) => {
//     fetch ('https://todolist-d34a7-default-rtdb.firebaseio.com/user.json',{
//         method: 'POST',
//         body: JSON.stringify(user), 
//         headers: {
//              'Content-Type': 'application/json'
//     }
//   }).then((res) => res.json())
//   .then((data) => {
//     console.log(data)
//     })
// }

