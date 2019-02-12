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

  // Limpando input
  taskInput.value = '';

  // Focus no input
  taskInput.focus();
}

// Remove Task
function removeTask(e){
  const deleteIcon = e.target.parentElement;
  if(deleteIcon.classList.contains('delete-item')){
    deleteIcon.parentElement.remove();
  }
  }

// Clear all tasks
function clearTasks(e){
  while(taskList.firstChild){
    taskList.firstChild.remove(taskList.firstChild);
  }
};

// Filtra lista de tasks
function filterTasks(e){
  const inputText = e.target.value.toLowerCase();
  const lis = document.querySelectorAll('.collection-item');

  // console.log(inputText);

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