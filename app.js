//selectors
let todoinput = document.querySelector(".todo-input")
let todobutton = document.querySelector(".todo-button")
let todolist = document.querySelector(".todo-list")
    //events listener
todobutton.addEventListener('click', addtodo)
todolist.addEventListener('click', deletecheck)
    //functions
function addtodo(event) {
    //prevent form from submitting
    event.preventDefault()
        //to do div container
    const tododiv = document.createElement('div')
    tododiv.classList.add('todo')
        //to do li
    const todoli = document.createElement('li')
    todoli.innerText = todoinput.value
    todoli.classList.add('todoli')
    tododiv.appendChild(todoli)
        //add check icon
    const todocheck = document.createElement('button')
    todocheck.innerHTML = '<i class = "fas fa-check"></i>'
    todocheck.classList.add('todocheck')
    tododiv.appendChild(todocheck)
        //add trash icon
    const todotrash = document.createElement('button')
    todotrash.innerHTML = '<i class = "fas fa-trash"></i>'
    todotrash.classList.add('todotrash')
    tododiv.appendChild(todotrash)
        //append child to do list

    todolist.appendChild(tododiv)
    todoinput.value = ''
}

function deletecheck(x) {
    const result = x.target
        //     console.log(result.classList[0])
        //     console.log(x.target)
        //delete and animation
    if (result.classList[0] === "todotrash") {
        const todo = result.parentElement
        todo.classList.add('fall')
        todo.addEventListener("transitionend", function() {
            todo.remove()
        })
    }
    //check opacity
    if (result.classList[0] === "todocheck") {
        const todo = result.parentElement
        todo.classList.toggle('check')
    }

}