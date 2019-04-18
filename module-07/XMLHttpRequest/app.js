// Criando event listener para o button
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  // Criar um objeto XHR
  const xhr = new XMLHttpRequest();

  // Open method = especifica o tipo de request e a URL (ou arquivo)
  xhr.open('GET', 'data.txt', true); // open(typeOfRequest, URL, async?)


  // Opcionais - spinners/loaders
  xhr.onprogress = function(){
    console.log('ReadyState', xhr.readyState);
  };

  // Opcional - error
  xhr.onerror = function(){
    console.log('Um erro ocorreu...');
  };


  xhr.onload = function(){
    if (xhr.status === 200){
      // console.log(xhr.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  };

  xhr.send();

}

// HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"

// OBS.: Utilizando xhr.onload, significa que já passamos pelo readyState 4 

// readyState Values
  // 0: request not initialized
  // 1: server connection stablished
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready