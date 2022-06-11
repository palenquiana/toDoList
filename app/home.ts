// const opGroupStatus = document.getElementById('status-filter') as HTMLOptGroupElement;
// const opStatus= document.createElement('option');
// opStatus.setAttribute('value', `${task.status}`) // `${task.status}`
// opGroupStatus.appendChild(opStatus)

// const opGroupCategories = document.getElementById('category-filter') as HTMLOptGroupElement;
// const opCategories= document.createElement('option');
// opCategories.setAttribute('value', `${task.category}`) // `${task.status}`
// opGroupStatus.appendChild(opCategories);


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





// // Table

// const categoriesTable = document.createElement('table');
// categoriesTable.classList.add("table", "table-borderless");
// categoriesCard.appendChild(categoriesTable);
// const tableBody = document.createElement('tbody');
// categoriesTable.appendChild(tableBody);
// categoriesTable.classList.add("mt-5");





// const createCategoryList = () => {
    
//     tableBody.innerHTML = "";
//     let stored = JSON.parse(localStorage.getItem('storedData'));
//     const categories = stored.categories;
    

//     stored.categories.forEach(category => {
       
                
//         let tRow = document.createElement('tr');
//         tableBody.appendChild(tRow);

//         // category list

//         let tDataCat = document.createElement('td');
//         let tDataText = document.createElement('span');
//         tDataText.appendChild(document.createTextNode(category.name))
//         tDataCat.style.width = "470px";
//         tDataCat.appendChild(tDataText);
//         tDataText.classList.add('categorySpan')
//         tRow.appendChild(tDataCat);

//         //Edit Button

//         let tDataEdit = document.createElement('td');
//         tRow.appendChild(tDataEdit);    
//         const editBtn = document.createElement('a');
//         editBtn.setAttribute('href', `./edit.html?id=${category.id}`);
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


   
//             delBtn.addEventListener('click', () => {
           
//             let index = categories.indexOf(category);
//             stored.categories.splice(index, 1);
//             console.log(stored.categories);

//             localStorage.setItem('storedData', JSON.stringify(stored));
//             createCategoryList();
//         })


//     })
// }