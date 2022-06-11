
const categoriesTableBody = document.getElementById('categoriesTableBody');

const createCategoryList = async () => {
    const response = await getCategories();
    // const data = await response.json();
    const categories = mapToArray(response);
    categoriesTableBody.innerHTML = ""; 
    categories.forEach(category => {      
                
        let tRow = document.createElement('tr');
        categoriesTableBody.appendChild(tRow);

        // Category list

        let tDataCat = document.createElement('td');
        let tDataText = document.createElement('span');
        tDataText.appendChild(document.createTextNode(category.name))
        tDataCat.style.width = "470px";
        tDataCat.appendChild(tDataText);
        tDataText.classList.add('categorySpan')
        tRow.appendChild(tDataCat);
        
  
       //Edit Button

        let tDataEdit = document.createElement('td');
        tRow.appendChild(tDataEdit);    
        const editBtn = document.createElement('a');
        editBtn.setAttribute('href', `./edit.html?slug=${category.slug}`);
        editBtn.classList.add("btn", "btn-link");
        editBtn.style.textDecoration = "none";
        editBtn.appendChild(document.createTextNode("Editar"));
        tDataEdit.appendChild(editBtn);

   
        //Delete Button

        let tDataDel = document.createElement('td');
        tRow.appendChild(tDataDel);
        const delBtn = document.createElement('button');
        delBtn.classList.add("btn", "btn-link");
        delBtn.style.textDecoration = "none";
        delBtn.appendChild(document.createTextNode("Eliminar"));
        tDataDel.appendChild(delBtn);


        delBtn.addEventListener('click', () => {
            deleteCategory(category.idDB);            
            createCategoryList();
        })
    })

    createCategoryList();
}

createCategoryList();

const formAddCategory = document.getElementById('formAddCategory');

// Add Category

formAddCategory.addEventListener('submit', (e) =>{
    e.preventDefault();
    const category = {
        name: e.target.inputTextCategory.value,
        slug: e.target.inputTextCategory.value,
    }
    addCategory(category);
    createCategoryList();
})