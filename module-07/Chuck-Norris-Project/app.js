const button = document.querySelector('.get-jokes');

button.addEventListener('click', function(e){
  e.preventDefault();

  const number = document.querySelector('input[type=number]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function(){   
    const response = JSON.parse(this.responseText);

    let output = '';
    console.log(response);
    if(response.type === 'success'){
      response.value.forEach(function(joke){
        output += `<li>${joke.joke}</li>`;
      });
    }else{
      output += '<li>Ocorrou algum erro</li>';
    }

    document.querySelector('.jokes').innerHTML = output;
  };
  xhr.send();
})

