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
    if (users[username] == username && passwords[username] == password) console.log("NICE!!");
    else console.log("BAD!!");
}

//# sourceMappingURL=index.795b4621.js.map
