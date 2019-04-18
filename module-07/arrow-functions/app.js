// Definindo UI variables
const getTextBtn = document.querySelector('.btn-01');
const getJsonBtn = document.querySelector('.btn-02');
const getApiBtn = document.querySelector('.btn-03');
// console.log(getApiBtn);

// Escutando click event
getTextBtn.addEventListener('click', getText);
getJsonBtn.addEventListener('click', getJson);
getApiBtn.addEventListener('click', getApi);


// Declaração de funções
function getText(){
  fetch('data.txt')
    .then( response => response.text())
      .then(text => console.log(text))
};

function getJson(){
  fetch('dataJson.json')
    .then(response => response.json())
      .then(json => {
        for(person of json){
          console.log(person.name)
        }
      })
}

function getApi(){
  fetch('https://api.github.com/users')
    .then(response => response.json())
      .then(json =>{
        for (element of json){
          console.log(element.login);
        }
      })
}