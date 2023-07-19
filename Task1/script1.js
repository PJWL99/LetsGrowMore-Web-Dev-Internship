// Get elements from the DOM
var taskForm = document.getElementById("taskForm");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// Add event listener to the form submission
taskForm.addEventListener("submit", function(event) {
  event.preventDefault();
  addTask();
});

// Function to add a new task
function addTask() {
  var taskText = taskInput.value.trim();
  if (taskText !== "") {
    // Create a new list item
    var newTask = document.createElement("li");
    newTask.innerHTML = '<span class="task-text">' + taskText + '</span>' +
                        '<button class="delete-button">Done</button>';

    // Add the new item to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";

    // Add event listener to the "Delete" button
    var deleteButton = newTask.querySelector(".delete-button");
    deleteButton.addEventListener("click", function() {
      deleteTask(newTask);
    });
  }
}

// Function to delete a task
function deleteTask(task) {
  taskList.removeChild(task);
}
