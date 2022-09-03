const getLocalStorage = () => {
  const list = localStorage.getItem('list')
  if(list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}
// elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditButton = document.querySelector("#cancel-edit-button");
const tollBar = document.querySelector("#tool-bar");
const search = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");
const eraseButton = document.querySelector("#erase-button");
const filter = document.querySelector("#filter");
const filterSelect = document.querySelector("#filter-select");
const todoList = document.querySelector("#todo-list");

let oldInputValue;

// functions

const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo","todo-buttons");
    
    const todoTitle = document.createElement("h4");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);    

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.setAttribute("title","done");
    doneBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.setAttribute("title","edit");
    editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.setAttribute("title","delete");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
};

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h4");
        if (todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        }
    })
}

// events

console.log(todoForm)
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();    
    const inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue);
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h4")){
        todoTitle = parentEl.querySelector("h4").innerText;
    };

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    };

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }

    if(targetEl.classList.contains("edit-todo")){
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
});

cancelEditButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const editInputValue = editInput.value;
    if(editInputValue){
        updateTodo(editInputValue);
    }
    toggleForms();
})