
var username=prompt("enter ur name");
var heading=document.getElementById('todoname');
heading.textContent=username+"'s Todo List";


const todoinput=document.querySelector('.todo-input')
const todobutton=document.querySelector('.todo-button')
const todolist=document.querySelector('.todo-list')
// const filterOption = document.querySelector(".filter-todo");

//event listener
// document.addEventListener("DOMContentLoaded", getTodos);
todobutton.addEventListener('click',addtodo)
todolist.addEventListener('click', deleteCheck);
// filterOption.addEventListener("click", filterTodo);

function addtodo(event) {
    event.preventDefault();
    // Get the reference to the todo list
    const todolist = document.querySelector('.todo-list');

    // Create todo div element
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');

    // Create a list item
    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);

    // Check mark button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = `<i class="fas fa-check"></i>`;
    completedbutton.classList.add('completed-button');

    // Trash button
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML = `<i class="fas fa-trash"></i>`; // Fixed the trash icon
    trashbutton.classList.add('trash-button');

    // Append buttons to the todo div
    tododiv.appendChild(completedbutton);
    tododiv.appendChild(trashbutton);

    // Append todo div to the todo list
    todolist.appendChild(tododiv);


    todoinput.value="";
}

function deleteCheck(e) {
    const item = e.target;
    console.log("Clicked Element Class:", item.classList);

    if (item.classList.contains("trash-button")) {
        const todo = item.parentElement;
        todo.classList.add("fall");
        //to activate transition
        todo.addEventListener("transitioned",function()
        {
            todo.remove();
        });
        // todo.remove();
    }

    if (item.classList.contains("completed-button")) 
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo) {
//       switch (e.target.value) {
//         case "all":
//           todo.style.display = "flex";
//           break;
//         case "completed":
//           if (todo.classList.contains("completed")) {
//             todo.style.display = "flex";
//           } else {
//             todo.style.display = "none";
//           }
//           break;
//         case "uncompleted":
//           if (!todo.classList.contains("completed")) {
//             todo.style.display = "flex";
//           } else {
//             todo.style.display = "none";
//           }
//       }
//     });
//   }
  
//   function saveLocalTodos(todo) {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//       todos = [];
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }
//   function removeLocalTodos(todo) {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//       todos = [];
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     const todoIndex = todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoIndex), 1);
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }
  
//   function getTodos() {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//       todos = [];
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.forEach(function(todo) {
//       //Create todo div
//       const todoDiv = document.createElement("div");
//       todoDiv.classList.add("todo");
//       //Create list
//       const newTodo = document.createElement("li");
//       newTodo.innerText = todo;
//       newTodo.classList.add("todo-item");
//       todoDiv.appendChild(newTodo);
//       todoInput.value = "";
//       //Create Completed Button
//       const completedButton = document.createElement("button");
//       completedButton.innerHTML = `<i class="fas fa-check"></i>`;
//       completedButton.classList.add("complete-btn");
//       todoDiv.appendChild(completedButton);
//       //Create trash button
//       const trashButton = document.createElement("button");
//       trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
//       trashButton.classList.add("trash-btn");
//       todoDiv.appendChild(trashButton);
//       //attach final Todo
//       todoList.appendChild(todoDiv);
//     });
//   }
  
