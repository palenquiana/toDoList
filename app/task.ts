const selectC = document.getElementById("category-select") as HTMLSelectElement;
const selectU = document.getElementById("user-select") as HTMLSelectElement;


const createOption = async ()=>{
    const cat = await getCategories();

    const categories = mapToArray(cat);
    console.log(categories);
    

    categories.forEach((category)=>{
    
    const optionCat = document.createElement('option');
    optionCat.setAttribute('id', category.idDB)
    optionCat.setAttribute('value', category.name)
    optionCat.appendChild(document.createTextNode(category.name))
    selectC.appendChild(optionCat);

    

 })
    



}

createOption()








const form = document.getElementById('task-items');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
  
    const task = {
        title : e.target.title.value,
        date : e.target.dateT.value,
        status : e.target.status.value,
        category : categories.name,
        // user: falta funcion get user
        description : e.target.description.value
    }
   
    
    addTask(task)
    
    const taskMap = mapToArray(task);


    
})

