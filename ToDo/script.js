;
let addTaskButton = document.getElementById('add-task');
let saveTaskButton = document.getElementById("save-todo");
let listBox = document.getElementById('listBox');
let saveIndex = document.getElementById("saveIndex");
let completed = document.getElementById("completedList")




addTaskButton.addEventListener('click', function(){
    //create element where task is stored
    let div = document.createElement('div');
    div.id = "aTask";
    div.classList.add ("aTask")
    listBox.appendChild(div)
    //first save the text in input
    let text = document.getElementById("task-text-input").value
    div.innerHTML = text
    //checkbox when complete task
    let checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.id = "taskComplete"
    div.appendChild(checkbox)
    //move completed tasks to seperate list
    checkbox.addEventListener('click', function(){
        listBox.removeChild(div)
        let completedTask = document.createElement('div')
        completedTask.innerHTML = (text)
        completed.appendChild(completedTask)
    })
    });



