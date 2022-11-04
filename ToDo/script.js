let text = document.getElementById("text");
let addTaskButton = document.getElementById('add-task');
let saveTaskButton = document.getElementById("save-todo");
let listBox = document.getElementById("listBox");
let saveIndex = document.getElementById("saveIndex");

let todoList = [];

addTaskButton.addEventListener('click', function(){
    console.log('hi')
    todoList.push(text);
    console.log(todoList)
    });