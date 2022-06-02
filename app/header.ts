const nav = document.createElement('nav');
nav.classList.add("p-4","navbar","bg-warning","bg-gradient","text-white","navbar-expand-lg","justify-content-sm-between"); //"container-fluid"
const boxBrand = document.createElement('div');
nav.appendChild(boxBrand);
const homeLink = document.createElement('a');
homeLink.classList.add("btn-link","text-white","text-decoration-none");
homeLink.setAttribute('href',"./index.html");
homeLink.setAttribute('role', "button");
boxBrand.appendChild(homeLink);
const pageTitle = document.createElement('h1');
pageTitle.appendChild(document.createTextNode("ToDoList"));
homeLink.appendChild(pageTitle);

const boxNav = document.createElement('div');
boxNav.classList.add("d-lg-block","d-none","d-sm-block","d-md-block","d-lg-block","d-md-none","d-sm-none")
nav.appendChild(boxNav);
const listNav = document.createElement('ul')
listNav.classList.add("nav")
const liNav1= document.createElement('li')
listNav.appendChild(liNav1)
const liNav2 = document.createElement('li')
listNav.appendChild(liNav2)
const liNav3 = document.createElement('li')
listNav.appendChild(liNav3)
boxNav.appendChild(listNav)

const addCategories = document.createElement('a');
addCategories.setAttribute("role", "button")
addCategories.classList.add("btn","btn-success")
addCategories.setAttribute('href',"./categories.html")
addCategories.appendChild(document.createTextNode('+Categoria'))
liNav1.appendChild(addCategories);

const addUsers = document.createElement('a');
addUsers.setAttribute("role", "button")
addUsers.classList.add("btn","btn-success")
addUsers.setAttribute('href',"./users.html");
addUsers.appendChild(document.createTextNode('+Usuarios '));
liNav2.appendChild(addUsers);

const addTasks = document.createElement('a');
addTasks.setAttribute("role", "button")
addTasks.classList.add("btn","btn-success");
addTasks.setAttribute('href',"./reports.html");
addTasks.appendChild(document.createTextNode('+Tareas'));
liNav3.appendChild(addTasks);

header.appendChild(nav)