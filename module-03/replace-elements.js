// REPLACE ELEMENTS

// criando o elemento
const newHeading = document.createElement('h2');

// Adicionando ID ao elemento
newHeading.id = 'task-title';

// Adicionando textNode
newHeading.appendChild(document.createTextNode('Task List'));

// Pegando o headgin antigo
const oldHeading = document.getElementById('task-title');

// Pegando elemento pai, pois utilizaremos a o método 'parent.replaceChild(child)'
const parentDiv = document.querySelector('.card-action');

// Replace
parentDiv.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENTS
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Removendo um item
lis[0].remove() // Remove o li[0]

// Removendo child element
list.removeChild(lis[3]);

