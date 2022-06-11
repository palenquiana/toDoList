
const header = document.createElement('header');
const icon = document.createElement('i');
icon.classList.add("fa-solid","fa-house-user", "fs-3", "text-black", "p-2");
const linkHome = document.createElement('a');
linkHome.setAttribute('href', "./home.html")
linkHome.appendChild(icon);
header.appendChild(linkHome)
document.body.appendChild(header)
// const main = document.createElement('main');
// document.body.appendChild(header);
// document.body.appendChild(main);
