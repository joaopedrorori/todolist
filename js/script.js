const taskInput = document.querySelector('[data-tasks="input"]');
const addTaskBtn = document.querySelector('[data-tasks="button"]');
const tasksDiv = document.querySelector(".tasks");
const tasksArray = [];

addTaskBtn.addEventListener("click", adicionaTask);

function adicionaTask(e) {
  e.preventDefault();
  const taskDiv = document.createElement("div");
  const taskDivAmount = document.querySelectorAll(".tasks > div").length + 1;
  taskDiv.classList.add(`task${taskDivAmount}`);

  const checkTaskInput = document.createElement("input");
  checkTaskInput.type = "checkbox";

  const taskText = document.createElement("p");
  taskText.innerText = taskInput.value;

  const rmvTaskBtn = document.createElement("button");
  rmvTaskBtn.innerText = "remove task";

  class TaskObject {
    constructor(index, checkTaskInput, taskText, rmvTaskBtn) {
      this.index = +index - 1;
      this.checkInput = checkTaskInput;
      this.text = taskText;
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

  taskDiv.append(checkTaskInput, taskText, rmvTaskBtn);
  tasksDiv.appendChild(taskDiv);

  rmvTaskBtn.addEventListener("click", removeTask);
  checkTaskInput.addEventListener("click", checkTask);
}

const removeTask = (e) => {
  e.preventDefault();
  const el = e.target;
  el.parentNode.remove();
};
const checkTask = (e) => {
  const el = e.target;
  // this.nextElementSibling.classList.toggle("finished-task");
  el.nextElementSibling.classList.toggle("finished-task");
};
