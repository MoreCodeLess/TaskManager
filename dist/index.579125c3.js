const dashboard = document.getElementById("dashboard-section");
const loginSec = document.getElementById("login-section");
const tasks = document.getElementById("tasks-section");
window.onload = function() {
    hide();
};
function hide() {
    dashboard.classList.add("hidden");
    tasks.classList.add("hidden");
}
function login() {
    const users = {
        andres: "andres",
        estefania: "estefania"
    };
    const passwords = {
        andres: "andres123",
        estefania: "estefania123"
    };
    const userInput = document.getElementById("username");
    const passInput = document.getElementById("password");
    const password = passInput.value;
    const username = userInput.value;
    //if ((users[username] == username) && (passwords[username] == password)) {
    loginSec.classList.add("hidden");
    dashboard.classList.remove("hidden");
//   }
}
function openTasks() {
    hide();
    tasks.classList.remove("hidden");
}

//# sourceMappingURL=index.579125c3.js.map
