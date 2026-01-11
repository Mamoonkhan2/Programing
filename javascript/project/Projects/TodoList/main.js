let input = document.querySelector("#new-task")
let add   = document.querySelector('button')
let Goto  = document.querySelector("#task-list")


function inputs() {
        addTask() 
}
input.addEventListener('click',inputs)
function addTask() {
    let li = document.createElement('li')
    li.innerHTML = `${input.value} <span id='cross'>x</span>`
    Goto.appendChild(li)
    addTask()
    saveData()
}

function saveData() {
    let contant = Goto.innerHTML
    localStorage.setItem('data',contant)
}
function loadData() {
    localStorage.getItem
}
loadData()