const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById
("list-container");

function addTask(){
     if(inputBox.value === ''){
        alert("Você precisa escrever algo para adicionar ao To-do-List");
     } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = " \u00d7 ";
        li.appendChild(span);
     }
     inputBox.value = "";
     salvaDados();
}
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        salvaDados();
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function salvaDados(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function mostrarTarefa(){
    listContainer.innerHTML = localStorage.getItem("data");
}
mostrarTarefa();