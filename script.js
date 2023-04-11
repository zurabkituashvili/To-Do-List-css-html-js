document.getElementById("addTask").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.className = "task";

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.addEventListener("change", function () {
    taskLabel.classList.toggle("scratch");
    deleteButton.classList.toggle("scratch");
  });

  const taskLabel = document.createElement("label");
  taskLabel.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
  taskInput.value = "";
});
