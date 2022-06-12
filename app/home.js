var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var selectHome = document.getElementById("filter");
var opGroupCategories = document.getElementById('category-filter');
var opGroupUser = document.getElementById('user-filter');
var createOptionHome = function () { return __awaiter(_this, void 0, void 0, function () {
    var cat, categories, user, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getCategories()];
            case 1:
                cat = _a.sent();
                categories = mapToArray(cat);
                categories.forEach(function (category) {
                    var optionCat = document.createElement('option');
                    optionCat.setAttribute('id', category.idDB);
                    optionCat.setAttribute('value', category.name);
                    optionCat.appendChild(document.createTextNode(category.name));
                    opGroupCategories.appendChild(optionCat);
                });
                return [4 /*yield*/, getUser()];
            case 2:
                user = _a.sent();
                users = mapToArray(user);
                users.forEach(function (user) {
                    var optionUser = document.createElement('option');
                    optionUser.setAttribute('id', user.idDB);
                    optionUser.setAttribute('value', user.name);
                    optionUser.appendChild(document.createTextNode(user.name));
                    selectHome.appendChild(optionUser);
                });
                return [2 /*return*/];
        }
    });
}); };
createOptionHome();
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
