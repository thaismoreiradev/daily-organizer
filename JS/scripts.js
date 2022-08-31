// elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const editInput = document.querySelector("#edit-input");
const cancelEditButton = document.querySelector("#cancel-edit-button");
const tollBar = document.querySelector("#tool-bar");
const search = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");
const eraseButton = document.querySelector("#erase-button");
const filter = document.querySelector("#filter");
const filterSelect = document.querySelector("#filter-select");
const todoList = document.querySelector("#todo-list");


// functions

const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo","todo-buttons");
    
    const todoTitle = document.createElement("h4");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
    

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    todo.appendChild(deleteBtn);


    todoList.appendChild(todo)

    console.log(todo);

};



// events

console.log(todoForm)
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue);
    }


});