const newDataUser = async (newUser)=> {
    const optionNewUser = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
    }
    await fetch ('https://todolist-d34a7-default-rtdb.firebaseio.com/addusers.json', optionNewUser)

}






const formNewUser = document.getElementById('form-new-user');

formNewUser.addEventListener('submit', function (e) {
    e.preventDefault();
    var category = {
       // name: formInput.value
    };
    //addUser(category);
});