
document.addEventListener("DOMContentLoaded", loadTasks);

document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("newTask");
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task before adding.");
    return;
  }

  const taskItem = createTaskElement(taskText, false);
  document.getElementById("taskList").appendChild(taskItem);

  saveTasks();
  taskInput.value = "";
}

function createTaskElement(text, isDone) {
  const taskItem = document.createElement("li");

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = isDone;
  taskCheckbox.addEventListener("change", () => {
    taskTextElement.classList.toggle("done");
    saveTasks();
  });

  const taskTextElement = document.createElement("span");
  taskTextElement.textContent = text;
  taskTextElement.style.marginLeft = "10px";
  if (isDone) taskTextElement.classList.add("done");

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
  deleteButton.onclick = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      taskItem.remove();
      saveTasks();
    }
  };

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(deleteButton);

  return taskItem;
}

function saveTasks() {
  const taskList = document.getElementById("taskList").children;
  const tasks = [];
  for (let task of taskList) {
    const text = task.querySelector("span").textContent;
    const isDone = task.querySelector("input[type='checkbox']").checked;
    tasks.push({ text, isDone });
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  for (let task of tasks) {
    const taskItem = createTaskElement(task.text, task.isDone);
    document.getElementById("taskList").appendChild(taskItem);
  }
}
