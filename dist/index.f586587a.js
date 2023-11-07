const e=document.getElementById("dashboard-section");document.getElementById("login-section");const t=document.getElementById("tasks-section"),s=document.getElementById("newtask-section");function a(){e.classList.add("hidden"),t.classList.add("hidden"),s.classList.add("hidden")}window.onload=function(){a()},document.getElementById("submitButton").addEventListener("click",function(){// Obtén los valores de los campos del formulario
let t=document.getElementById("ftitle").value,s=document.getElementById("fcategory").value,n=document.getElementById("fdate").value,d=document.getElementById("fdescription").value;// Llama a la función de JavaScript con los valores
(function(t,s,n,d){let o=JSON.parse(localStorage.getItem("tasks"))||[];o.push({title:t,category:s,date:n,description:d}),localStorage.setItem("tasks",JSON.stringify(o)),a(),e.classList.remove("hidden"),function(){let e=document.getElementById("tasks-wrapper"),t=JSON.parse(localStorage.getItem("tasks"))||[],s="";t.forEach((e,t)=>{console.log(e),s+=`
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-${t+1}">
        <label for="item-${t+1}">
          <span class="label-text">${e.title}</span>
        </label>
        <span class="tag ${e.category}">${e.category}</span>
      </div>
    `}),e.innerHTML=s;let a=document.getElementById("dash-tasks"),n=t.sort((e,t)=>new Date(t.date)-new Date(e.date)),d=n.slice(0,3),o="";d.forEach((e,t)=>{console.log(e),o+=`
        <div class="task-box ${"progress"==e.category?"blue":"approved"==e.category?"yellow":"red"}">
        <div class="description-task">
          <div class="time">${e.date}</div>
          <div class="task-name">${e.description}</div>
        </div>  
      </div>
    `}),a.innerHTML=o}()})(t,s,n,d)});//# sourceMappingURL=index.f586587a.js.map

//# sourceMappingURL=index.f586587a.js.map
