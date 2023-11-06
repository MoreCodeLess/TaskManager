const dashboard = document.getElementById("dashboard-section");
const loginSec = document.getElementById("login-section");
const tasks = document.getElementById("tasks-section");
const newtask = document.getElementById("newtask-section");

window.onload = function () {
  hide();
};

function hide() {
  dashboard.classList.add("hidden");
  tasks.classList.add("hidden");
  newtask.classList.add("hidden");
}

document.getElementById("submitButton").addEventListener("click", function () {
  // Obtén los valores de los campos del formulario
  const title = document.getElementById("ftitle").value;
  const category = document.getElementById("fcategory").value;
  const date = document.getElementById("fdate").value;
  const description = document.getElementById("fdescription").value;

  // Llama a la función de JavaScript con los valores
  createTask(title, category, date, description);
});

function createTask(title, category, date, description) {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const inputTask = {
    title: title,
    category: category,
    date: date,
    description: description,
  };
  savedTasks.push(inputTask);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
}

function login() {
  const users = {
    andres: "andres",
    estefania: "estefania",
  };
  const passwords = {
    andres: "andres123",
    estefania: "estefania123",
  };
  const userInput = document.getElementById("username");
  const passInput = document.getElementById("password");
  const password = passInput.value;
  const username = userInput.value;
  if (users[username] == username && passwords[username] == password) {
    loginSec.classList.add("hidden");
    openDash();
  }
}

function openTasks() {
  hide();
  tasks.classList.remove("hidden");
  loadTasks();
}

function openDash() {
  hide();
  dashboard.classList.remove("hidden");
  loadDashTasks();
}
function openNewTask() {
  hide();
  newtask.classList.remove("hidden");
}
function deleteSelectedTasks() {
  const tasks = document.getElementsByName("task");
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const selectedTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].checked) {
      selectedTasks.push(savedTasks[i]);
    }
  }
  if (selectedTasks.length === 0) {
    alert("Please select at least one task to delete.");
    return;
  }
  const confirmed = window.confirm(
    "Are you sure you want to delete the selected tasks?"
  );
  if (confirmed) {
    const updatedTasks = savedTasks.filter((task, index) => {
      return !tasks[index].checked;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    loadDashTasks();
  }
}

function loadDashTasks() {
  const miDiv = document.getElementById("tasks-wrapper");
  const tasksToInject = JSON.parse(localStorage.getItem("tasks")) || [];
  let tasksHTML = "";
  tasksToInject.forEach((element, index) => {
    console.log(element);
    tasksHTML += `
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-${
          index + 1
        }">
        <label for="item-${index + 1}">
          <span class="label-text">${element.title}</span>
        </label>
        <span class="tag ${element.category}">${element.category}</span>
      </div>
    `;
  });
  miDiv.innerHTML = tasksHTML;
  const schedulesDiv = document.getElementById("dash-tasks");
  const sortedTasks = tasksToInject.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Tomar las tres primeras tareas
  const topThreeTasks = sortedTasks.slice(0, 3);
  let schedulesHTML = "";
  topThreeTasks.forEach((element, index) => {
    console.log(element);
    schedulesHTML += `
        <div class="task-box ${
          element.category == "progress"
            ? "blue"
            : element.category == "approved"
            ? "yellow"
            : "red"
        }">
        <div class="description-task">
          <div class="time">${element.date}</div>
          <div class="task-name">${element.description}</div>
        </div>  
      </div>
    `;
  });
  schedulesDiv.innerHTML = schedulesHTML;
}

function loadTasks() {
  const miDiv = document.getElementById("tasks-sec-here");
  const tasksToInject = JSON.parse(localStorage.getItem("tasks")) || [];
  let tasksHTML = "";
  tasksToInject.forEach((element, index) => {
    console.log(element);
    tasksHTML += `
        <div class="task-box ${
          element.category == "progress"
            ? "blue"
            : element.category == "approved"
            ? "yellow"
            : "red"
        }">
        <div class="description-task">
          <div class="time">${element.date}</div>
          <div class="task-name">${element.description}</div>
        </div>  
      </div>
    `;
  });
  miDiv.innerHTML = tasksHTML;
}
