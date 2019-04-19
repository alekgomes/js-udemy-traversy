document.querySelector('.get-jokes').addEventListener('click', (e) =>{
  e.preventDefault();
  getJokes()
  .then(json => addToUi(json))
  .catch(err => console.log(err));
});

async function getJokes(){
  let qntd = document.querySelector('#number').value;
  const response = await fetch(`http://api.icndb.com/jokes/random/${qntd}`);
  const json = await response.json();
  return json;
};

function addToUi(json) {
  const ul = document.querySelector('.jokes');
  let li = '';
  
  for (joke of json.value){
    li += `<li>${joke.joke}</li>`;
  }
  ul.innerHTML = li;
};