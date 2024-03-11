const inputBox = document.getElementById("taskInput");
const taskBox = document.getElementById("listOfTasks");

function addTask(){
    if(inputBox.value === ''){
    alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();

}

taskBox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskBox.innerHTML);
}

function showData(){
    taskBox.innerHTML = localStorage.getItem("data");
}

showData();
