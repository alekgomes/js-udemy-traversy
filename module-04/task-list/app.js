// Definindo UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Carrega todos os eventListeners
loadEventListeners();

// Carregando todos os eventListeners
function loadEventListeners(){
  // Add evento de DOM carregado
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add Task event
  form.addEventListener('submit', addTask);

  // Remove single task
  taskList.addEventListener('click', removeTask);

  // Clear tasks
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks
  filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e){
  e.preventDefault();

  if(taskInput.value === ''){
    alert('Add uma task');
  }

  // Criando li element
  const li = document.createElement('li');

  // Adicionando class
  li.classList.add('collection-item');

  // Criando text node
  let taskNode = document.createTextNode(taskInput.value);

  // Appending text node
  li.appendChild(taskNode);

  // Criando remove link element
  const link = document.createElement('a');

  // Add class ao link
  link.classList.add("delete-item", "secondary-content");

  // Add ícone no link
  link.innerHTML = '<i class="fas fa-trash-alt"></i>';
  // link.innerHTML = "<i class='fa trash-alt'></i>";

  // Append link no li
  li.appendChild(link);

  //append li no ul
  taskList.appendChild(li);

  // Add task do LS
  addTaskToLocalStorage(taskInput.value);
  // Limpando input
  taskInput.value = '';

  // Focus no input
  taskInput.focus();  
}

// Add Task no LS
function addTaskToLocalStorage(task){  
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Get tasks
function getTasks(){
  // Verifica se existe item no LS
  if(localStorage.getItem('tasks') !== null){
    // Loop em cada item para criar li + link de remoção
    for(task of JSON.parse(localStorage.getItem('tasks'))){
      // Declaração dos DOM elements needed
      let textNode = document.createTextNode(task);
      const li = document.createElement('li');
      const link = document.createElement('a');

      // Adicionando as classes no li e no link
      link.classList.add('delete-item', 'secondary-content');
      li.classList.add('collection-item');

      // Add move icon no link
      link.innerHTML = '<i class="fas fa-trash-alt"></i>';

      // Fazendo append nos elementos
      li.appendChild(textNode);
      li.appendChild(link);
      taskList.appendChild(li);
    }
  }
  
}

// Remove Task
function removeTask(e){
  // Definido variaveis que serão utilizadas na função
  const deleteIcon = e.target.parentElement;
  let tasks = JSON.parse(localStorage.getItem('tasks'));

  // Aplicando delegation pra encontrar item com classe 'delete-item'
  if(deleteIcon.classList.contains('delete-item')){
    // Apagando elemento do UI
    deleteIcon.parentElement.remove();

    // Loop em itens do LS para encontra elemento deletado do UI
    for(task of tasks){
      if (task === deleteIcon.parentElement.textContent)
        // Remove elemento encontrado da lista de tasks
        tasks.splice(task, 1);
    }
  }
  // Atualiza o LS 
  localStorage.setItem('tasks', JSON.stringify(tasks));  
}

// Clear all tasks
function clearTasks(e){
  while(taskList.firstChild){
    taskList.firstChild.remove(taskList.firstChild);
  }
  localStorage.clear();
};

// Filtra lista de tasks
function filterTasks(e){
  const inputText = e.target.value.toLowerCase();
  const lis = document.querySelectorAll('.collection-item');

  for(li of lis){
    // indexOf() procura se existe o caracter inserido no input
    // no text content da lista
    if(li.textContent.toLowerCase().indexOf(inputText) !== -1){
      li.style.display = 'block';
    }else{
      li.style.display = 'none';
    }
  }; 
};