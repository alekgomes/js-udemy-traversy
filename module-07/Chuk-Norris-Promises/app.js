
// Click event
document.querySelector('.get-jokes').addEventListener('click', (e) => {
  e.preventDefault();
  getJoke()  
  // .then(jokes => console.log(jokes))
  .then(jokes => adicionarElemento(jokes))
  .catch(err => console.log(err));

})

// retornando promise
function getJoke(){
  // Evita acúmulo de mensagens
  document.querySelector('.jokes').innerHTML = '';
  let number = document.querySelector('#number').value;

  return new Promise((resolve, reject) =>{
    fetch(`http://api.icndb.com/jokes/random/${number}`)
      .then((response) => response.json())
      .then((json) => resolve(json.value))
      .catch(err => reject(err));
  });
}

// adiciona elemento 
function adicionarElemento(jokes){
  // criando elemento de UI
  const ul = document.createElement('ul');
  const outputDiv = document.querySelector('.jokes');
  
  let output = '';

  for (joke of jokes){
    output += `<li> ${joke.joke}</li>`;
  }
  
  outputDiv.appendChild(ul);
  ul.innerHTML = output;
}
