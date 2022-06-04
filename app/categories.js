// Container
var container = document.createElement('div');
// container.classList.add("container-xl", "px-5", "d-flex", "justify-content-center");
// main.appendChild(container);
document.body.appendChild(container);
// Card 
var categoriesCard = document.createElement('div');
categoriesCard.setAttribute("id", "categories");
// categoriesCard.classList.add("my-5");
container.appendChild(categoriesCard);
// Card Title
var categoriesTitle = document.createElement('h2');
categoriesTitle.appendChild(document.createTextNode("CategorÃ­as"));
categoriesCard.appendChild(categoriesTitle);
var categoriesRow = document.createElement('div');
categoriesRow.classList.add("row");
categoriesCard.appendChild(categoriesRow);
// Form
var form = document.createElement('form');
form.classList.add("row", "gx-5", "align-items-center");
categoriesRow.appendChild(form);
var label = document.createElement('label');
label.classList.add("form-label");
label.setAttribute("name", "formLabel");
label.appendChild(document.createTextNode("Nombre"));
// label.classList.add("fs-6", "fw-bold", "mt-4");
form.appendChild(label);
var formColText = document.createElement('div');
formColText.classList.add("col-10");
form.appendChild(formColText);
var formInput = document.createElement('input');
formInput.classList.add("form-control");
formInput.setAttribute("name", "formInput");
formInput.setAttribute("type", "text");
formColText.appendChild(formInput);
var formColSubmit = document.createElement('div');
formColSubmit.classList.add("col-2");
form.appendChild(formColSubmit);
var formSubmit = document.createElement('button');
formSubmit.appendChild(document.createTextNode("Agregar"));
formSubmit.classList.add("btn", "btn-primary", "btn-success");
formSubmit.setAttribute("type", "submit");
formColSubmit.appendChild(formSubmit);
// Table
var categoriesTable = document.createElement('table');
categoriesTable.classList.add("table", "table-borderless");
categoriesCard.appendChild(categoriesTable);
var tableBody = document.createElement('tbody');
categoriesTable.appendChild(tableBody);
categoriesTable.classList.add("mt-5");
// const createCategoryList = () => {
//     tableBody.innerHTML = "";
//     stored.categories.forEach(category => {
//         let tRow = document.createElement('tr');
//         tableBody.appendChild(tRow);
//         // category list
//         let tDataCat = document.createElement('td');
//         let tDataText = document.createElement('span');
//         // tDataText.appendChild(document.createTextNode(category.name))
//         tDataCat.style.width = "470px";
//         tDataCat.appendChild(tDataText);
//         tDataText.classList.add('categorySpan')
//         tRow.appendChild(tDataCat);
//         // Edit Button
//         let tDataEdit = document.createElement('td');
//         tRow.appendChild(tDataEdit);    
//         const editBtn = document.createElement('a');
//         // editBtn.setAttribute('href', `./edit.html?id=${category.id}`);
//         editBtn.classList.add("btn", "btn-link");
//         editBtn.style.textDecoration = "none";
//         editBtn.appendChild(document.createTextNode("Editar"));
//         tDataEdit.appendChild(editBtn);
//         // Delete Button
//         let tDataDel = document.createElement('td');
//         tRow.appendChild(tDataDel);
//         const delBtn = document.createElement('button');
//         delBtn.classList.add("btn", "btn-link");
//         delBtn.style.textDecoration = "none";
//         delBtn.appendChild(document.createTextNode("Eliminar"));
//         tDataDel.appendChild(delBtn);
//             delBtn.addEventListener('click', () => {
//             createCategoryList();
//         })
//     })
// }
// createCategoryList();
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var category = {
        name: formInput.value
    };
    addCategory(category);
});
