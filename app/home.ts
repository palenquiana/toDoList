
 
const selectStatus = document.getElementById("status-filter") as HTMLSelectElement;
const selectCategories = document.getElementById('category-filter') as HTMLSelectElement;
const selectUser = document.getElementById('user-filter') as HTMLSelectElement;
    
const createSelectsHome = async ()=>{

    const catResponse = await getCategories();
    const categories = mapToArray(catResponse);

    const userResponse = await getUser();
    const users = mapToArray(userResponse);

    categories.forEach((category)=>{
        const optionCat = document.createElement('option');
        optionCat.setAttribute('id', category.idDB)
        optionCat.setAttribute('value', category.name)
        optionCat.appendChild(document.createTextNode(category.name))
        selectCategories.appendChild(optionCat);
    })

    users.forEach((user)=>{
        const optionUser = document.createElement('option');
        optionUser.setAttribute('id', user.idDB)
        optionUser.setAttribute('value', user.name)
        optionUser.appendChild(document.createTextNode(user.name))
        selectUser.appendChild(optionUser);
    })
    

}

createSelectsHome();

selectStatus.addEventListener('change', (e) => {
    e.stopPropagation();  
    const params = new URLSearchParams(window.location.search);
    params.set('status', e.target.value);
    window.location.href = window.location.pathname + '?' + params.toString(); 
})

selectCategories.addEventListener('change', (e) => {
    e.stopPropagation();  
    const params = new URLSearchParams(window.location.search);
    params.set('category', e.target.value);
    window.location.href = window.location.pathname + '?' + params.toString(); 
})

selectUser.addEventListener('change', (e) => {
    e.stopPropagation();  
    const params = new URLSearchParams(window.location.search);
    params.set('user', e.target.value);
    window.location.href = window.location.pathname + '?' + params.toString(); 
})
    














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








