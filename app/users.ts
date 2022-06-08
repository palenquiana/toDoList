import { addUser } from "../api/user";
const formNewUser = document.getElementById("form-new-user");
formNewUser?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("POST-name") as HTMLInputElement;
  const email = document.getElementById("POST-email") as HTMLInputElement;
  const password = document.getElementById("POST-password") as HTMLInputElement;
  var user = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  addUser(user);
});


