"use strict";
exports.__esModule = true;
var user_1 = require("../api/user");
var formNewUser = document.getElementById("form-new-user");
formNewUser === null || formNewUser === void 0 ? void 0 : formNewUser.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("POST-name");
    var email = document.getElementById("POST-email");
    var password = document.getElementById("POST-password");
    var user = {
        name: name.value,
        email: email.value,
        password: password.value
    };
    (0, user_1.addUser)(user);
});
