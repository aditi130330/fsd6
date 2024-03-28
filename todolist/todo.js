let taskBtn = document.querySelector("#addTaskBtn")
let newTaskInput = document.querySelector("#newTask")
let todoList = document.querySelector("#todoList")


let draggingTask = null

// create function 
function createTaskElement(taskText) 
{
  let taskElements = document.createElement("div")
  taskElements.innerHTML = `
    <span>${taskText}</span>
    <button class="editTask">Edit</button>
    <button class="deleteTask">Delete</button>
    `;

  // edit and delete 
  let deleteBtn = taskElements.querySelector(".deleteTask")
  deleteBtn.addEventListener("click", () => {
    taskElements.remove()
  })

  let editBtn = taskElements.querySelector(".editTask")
  editBtn.addEventListener("click", () => {
    let newTaskText = prompt("edit the text", taskText)
    if (newTaskText !== "") {
      taskElements.querySelector("span").innerText = newTaskText
    }
  })

  // dragging (dragend and dragstart)
  taskElements.draggable = true

  taskElements.addEventListener("dragstart",()=>{
    draggingTask=taskElements
    taskElements.classList.add("dragging")
    todoList.appendChild(draggingTask)
  })

  taskElements.addEventListener("dragend",()=>{
    draggingTask=taskElements
    taskElements.classList.add("dragging")
    todoList.appendChild(draggingTask)
  })


  return taskElements;

}


// for button
taskBtn.addEventListener("click", function () {
  let taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    let taskElement = createTaskElement(taskText)
    todoList.appendChild(taskElement)
    newTaskInput.value = ""
  }
})

todoList.addEventListener("dragover",function(event){
 event.preventDefault()
 let draggableElement = document.querySelector("dragging")
 todoList.appendChild(draggableElement)
})





