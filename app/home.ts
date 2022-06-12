
 
const selectHome =document.getElementById("filter") as HTMLSelectElement;
const opGroupCategories = document.getElementById('category-filter') as HTMLOptGroupElement;
const opGroupUser = document.getElementById('user-filter') as HTMLOptGroupElement;
    
const createOptionHome = async ()=>{

    const cat = await getCategories();
    const categories = mapToArray(cat);

    categories.forEach((category)=>{
    
    const optionCat = document.createElement('option');
    optionCat.setAttribute('id', category.idDB)
    optionCat.setAttribute('value', category.name)
    optionCat.appendChild(document.createTextNode(category.name))
    opGroupCategories.appendChild(optionCat);

    

 })

    const user = await getUser();

    const users = mapToArray(user);

 

    users.forEach((user)=>{
 
    const optionUser = document.createElement('option');
    optionUser.setAttribute('id', user.idDB)
    optionUser.setAttribute('value', user.name)
    optionUser.appendChild(document.createTextNode(user.name))
    selectHome.appendChild(optionUser);

 

})
    



}

createOptionHome()


    














// const tbTasks = document.getElementById('tb-task') as HTMLTableSectionElement;


// const createTableTasks = async () => {
//     const response = await getTask();
//     // const data = await response.json();
//     const tasks = mapToArray(response);
//     tbTasks.innerHTML = ""; 

//     tasks.forEach(task=> {      
                
//         let tRow = document.createElement('tr');
//         tbTasks.appendChild(tRow);

//         // Category list

//         let tDataCat = document.createElement('td');
//         let tDataText = document.createElement('span');
//         tDataText.appendChild(document.createTextNode(task.title))
//         tDataCat.style.width = "470px";
//         tDataCat.appendChild(tDataText);
//         tDataText.classList.add('categorySpan')
//         tRow.appendChild(tDataCat);
        
  
//        //Edit Button

//         let tDataEdit = document.createElement('td');
//         tRow.appendChild(tDataEdit);    
//         const editBtn = document.createElement('a');
//         editBtn.setAttribute('href', `./edit.html?task=${task.s}`);
//         editBtn.classList.add("btn", "btn-link");
//         editBtn.style.textDecoration = "none";
//         editBtn.appendChild(document.createTextNode("Editar"));
//         tDataEdit.appendChild(editBtn);

   
//         //Delete Button

//         let tDataDel = document.createElement('td');
//         tRow.appendChild(tDataDel);
//         const delBtn = document.createElement('button');
//         delBtn.classList.add("btn", "btn-link");
//         delBtn.style.textDecoration = "none";
//         delBtn.appendChild(document.createTextNode("Eliminar"));
//         tDataDel.appendChild(delBtn);


//         delBtn.addEventListener('click', () => {
//             deleteCategory(category.idDB);            
//             createCategoryList();
//         })
//     })

//     createCategoryList();
// }

// createCategoryList();








