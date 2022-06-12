const selectC = document.getElementById("category-select") as HTMLSelectElement;
const selectU = document.getElementById("user-select") as HTMLSelectElement;


const createOption = async ()=>{
    const cat = await getCategories();

    const categories = mapToArray(cat);
  
    

    categories.forEach((category)=>{
    
    const optionCat = document.createElement('option');
    optionCat.setAttribute('id', category.idDB)
    optionCat.setAttribute('value', category.name)
    optionCat.appendChild(document.createTextNode(category.name))
    selectC.appendChild(optionCat);


    

 })

    const user = await getUser();
    // console.log(user);

    const users = mapToArray(user);

 

    users.forEach((user)=>{
 
    const optionUser = document.createElement('option');
    optionUser.setAttribute('id', user.idDB)
    optionUser.setAttribute('value', user.name)
    optionUser.appendChild(document.createTextNode(user.name))
    selectU.appendChild(optionUser);

 

})
    



}

createOption()






const form = document.getElementById('task-items') as HTMLFormElement;

form.addEventListener('submit', (e) =>{
    e.preventDefault();
  
    const task = {
        title : e.target.title.value,
        date : e.target.dateT.value,
        status : e.target.status.value,
        category : selectC.value,
        user: selectU.value,
        description : e.target.description.value
    }
   

    
   
    
    addTask(task)
    
    const taskMap = mapToArray(task);
    
    


    
})

