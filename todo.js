const inputtask = document.getElementById('inputtask');
const addtask = document.getElementById('addtask');
const todos = document.getElementById('todos');

addtask.addEventListener('click', function() {
  const task = inputtask.value;

  if (task === '') {
    alert('Please enter a task first!');
    return;

  }
  const taskItem = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.innerText = task;
  const taskButton = document.createElement('button');
  taskButton.innerText = '✓';
  taskItem.appendChild(taskText);
  taskItem.appendChild(taskButton);
  todos.appendChild(taskItem);
  inputtask.value = '';
  


  taskButton.addEventListener('click', function() {
    taskItem.classList.toggle('completed');
    if (taskButton.innerText === '✓') {
      taskButton.innerText = '⨯';
    } else {
      taskButton.innerText = '✓';
    }
  });
})                      ;



const taskItems = document.querySelectorAll('li');
taskItems.forEach(function(item) {
  const taskButton = item.querySelector('button');
  taskButton.innerText = '✓';
  item.classList.remove('completed');
});
