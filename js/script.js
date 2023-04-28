const input = document.querySelector('.input-task');
const btn_add_task = document.querySelector('.btn-add-task');
const allList = document.querySelector('.list-task');

let myTasks = [] //array de tareas que começa vazio;

function addTask() {
  if(input.value == "")
  {
    alert("Informe uma tarefa antes de adionar!!");
  }
  else
  {
    myTasks.unshift({
      tarefa: input.value,
      concluida: false
    });

    input.value ="";

    showTasks();
  }
}

function showTasks() {
  
  let newLi = '';

  myTasks.forEach((task, position) =>{
    
    newLi += 
    `  
    <li class="task ${task.concluida && "done"} ">
      <img src="./img/checked.png" alt="checked-na-tarefa" onclick="concluirTask(${position})">
      <p>${task.tarefa}</p>
      <img src="./img/trash.png" alt="excluir tarefa" onclick="deleteTask(${position})">
    </li>
    `
  })

  allList.innerHTML = newLi;

  localStorage.setItem('list', JSON.stringify(myTasks))
}

function concluirTask(position) {
  
  myTasks[position].concluida = !myTasks[position].concluida;

  showTasks();

}

function deleteTask(position) {
  
  myTasks.splice(position, 1);

  showTasks();

}

function reloadTask() {

  const taskLocalStorage = localStorage.getItem ('list');

  if(taskLocalStorage){
    
  myTasks = JSON.parse(taskLocalStorage)
  }
  showTasks()
}

reloadTask()
btn_add_task.addEventListener('click', addTask)