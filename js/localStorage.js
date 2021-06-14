(document.getElementById('formTask')).addEventListener('submit', saveTask);

function saveTask(e) {
  
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;

  const task = {
    title,
    description
  };

  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task),
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  e.preventDefault();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('task');

  tasksView.innerHTML += ``;

  for(let i = 0; i < tasks.length; i++){
    let title = tasks[i].title,
        description = tasks[i].description;

    tasksView.innerHTML += 
    `<div class="task">
      <div class="card-body">
        <p class="titulo">${title}</p>
        <p class="descripcion">${description}</p>
        <li class="trash" onclick="deleteTask('${title}')"><i class="fas fa-trash"></i></li>
      </div> 
    </div>`
  }
}
getTasks();
//--------------------_Delete Task
function deleteTask(title) {
  let tasks = JSON.parse(localStorage.getItem('tasks', 'title'));
   for (let i = 0; i < tasks.length; i++){
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
      } else {
        alert('No encontrada');
      }
  }
  getTasks();
}

