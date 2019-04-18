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
    .then(function(response){
      // console.log(response);
      return response.text();
    })
      .then(function(text){
        console.log(text);    
      })
};

function getJson(){
  fetch('dataJson.json')
    .then(function(response){
      // console.log(response.json());
      return (response.json());
    })
      .then(function(json){
        for (element of json){
          console.log(element.name);
        }
      })
}

function getApi(){
  fetch('https://api.github.com/users')
    .then(function(response){
      // console.log(response);  
      return response.json();
    })
      .then(function(json){
        // console.log(json);
        for (element of json){
          console.log(element.login);
        }
      })
}