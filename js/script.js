const taskInput = document.querySelector('[data-tasks="input"]');
const addTaskBtn = document.querySelector('[data-tasks="button"]');
const tasksDiv = document.querySelector(".tasks");
const tasksArray = [];

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

  const rmvTaskBtn = document.createElement("button");
  rmvTaskBtn.innerText = "remove task";

  class TaskObject {
    constructor(index, checkTaskInput, taskText, rmvTaskBtn) {
      this.index = +index - 1;
      this.checkInput = checkTaskInput;
      this.text = taskText.innerText;
      this.rmvBtn = rmvTaskBtn;
    }
  }
  const currentTask = new TaskObject(
    taskDivAmount,
    checkTaskInput,
    taskText,
    rmvTaskBtn
  );
  tasksArray.push(currentTask);
  console.log(tasksArray);
  console.log(tasksArray.indexOf(currentTask));

  taskDiv.append(checkTaskInput, taskInputValue, rmvTaskBtn);
  tasksDiv.appendChild(taskDiv);

  rmvTaskBtn.addEventListener("click", removeTask);
  checkTaskInput.addEventListener("click", () =>
    taskText.classList.toggle("finished-task")
  );
}

function removeTask(e) {
  e.preventDefault();
  this.parentNode.remove();
  // const taskIndex =
}
