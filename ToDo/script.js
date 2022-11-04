let text = document.getElementById("task-text-input");
let addTaskButton = document.getElementById('add-task');
let saveTaskButton = document.getElementById("save-todo");
let listBox = document.getElementById('listBox');
let saveIndex = document.getElementById("saveIndex");



addTaskButton.addEventListener('click', function(){
    text.changeInput
    console.log(text)
    let div = document.createElement('div');
    div.id = "aTask";
    div.classList.add ("aTask")
    listBox.appendChild(div)
    div.style.backgroundColor = "blue"
    div.style.height = 135 + 'px' 
    div.innerHTML = text
    });

