const inputBox = document.getElementById("input-box");
const listaContainer = document.getElementById("Lista-container");

function addTarefa(){
    if(inputBox.value === ''){
        alert("Escreva uma tarefa primeiro!");   
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listaContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span); 
    }
    inputBox.value = "";
    Salvar();
}

listaContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checado");
        Salvar();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        Salvar();
    }
},false);

function Salvar(){
    localStorage.setItem("data",listaContainer.innerHTML);
}

function ExibirTarefas(){
    listaContainer.innerHTML = localStorage.getItem("data");
}

ExibirTarefas();