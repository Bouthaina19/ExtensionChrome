let taskEL = document.getElementById("task-el")
let savebtn = document.getElementById("save-btn")
let printbtn = document.getElementById("print-btn")
let listEL = document.getElementById("ul-el")
let deletebtn = document.getElementById("Delete")
let tasks = []
const localStorageTasks = JSON.parse(localStorage.getItem('myTasks'))

if (localStorageTasks) {
    tasks = localStorageTasks
}

function render() {
    let list = ""
    for (i = 0; i < tasks.length; i++) {
        list += `<li>
                    ${tasks[i]}
                 <button class="del" data-index="${i}"">x</button></li>`
    }
    listEL.innerHTML = list
    let deleteButtons = document.getElementsByClassName("del");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function() {
            let index = parseInt(this.getAttribute("data-index"));
            delet(index);
        });
    }
} 

savebtn.addEventListener('click', function() {
    tasks.push(taskEL.value)
    taskEL.value = ""
    localStorage.setItem('myTasks', JSON.stringify(tasks))
    console.log(tasks)
    render()
})

printbtn.addEventListener('click', render)

deletebtn.addEventListener('click', function() {
    localStorage.clear()
    tasks = []
    render()
})

function delet(index) {
    tasks.splice(index, 1);
    localStorage.setItem('myTasks', JSON.stringify(tasks));
    render();
}