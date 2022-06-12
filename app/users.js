var formNewUser = document.getElementById("form-new-user");
formNewUser.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("POST-name");
    var email = document.getElementById("POST-email");
    var password = document.getElementById("POST-password");
    var user = {
        name: name.value,
        email: email.value,
        password: password.value
    };
    addUser(user);
    var UserMap = mapToArray(user);
});
