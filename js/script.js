const taskInput = document.querySelector('[data-tasks="input"]');
const addTaskBtn = document.querySelector('[data-tasks="button"]');
const tasksDiv = document.querySelector(".tasks");

addTaskBtn.addEventListener("click", adicionaTask);

function adicionaTask(e) {
  e.preventDefault();
  const taskInputValue = taskInput.value;
  const taskDiv = document.createElement("div");
  const taskDivAmount = document.querySelectorAll(".tasks > div").length + 1;
  taskDiv.classList.add(`task${taskDivAmount}`);

  const checkTaskInput = document.createElement("input");
  checkTaskInput.type = "checkbox";

  const taskText = document.createElement("p");
  taskText.innerText = taskInputValue;
  checkTaskInput.addEventListener("click", taskFinished);

  const rmvTaskBtn = document.createElement("button");
  rmvTaskBtn.innerText = "remove task";

  taskDiv.append(checkTaskInput, taskText, rmvTaskBtn);
  tasksDiv.appendChild(taskDiv);

  console.log(taskDivAmount);

  rmvTaskBtn.addEventListener("click", removeTask);
}

function removeTask(e) {
  e.preventDefault();
  this.parentNode.remove();
}

function taskFinished() {
  console.log(taskText);
}
