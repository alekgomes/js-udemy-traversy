function easyHttp(){
  this.http = new XMLHttpRequest();
}

// Http GET request
easyHttp.prototype.get = function(url, callback){

  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function(){
    if (self.http.status === 200){
      callback(self.http.responseText);
    }else{
      callback("Error: " + self.http.status);
    }
  }

  this.http.send();
}

// Http POST request
easyHttp.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true);

  // Especificar o tipo de dados que está sendo enviado:
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    if(self.http.status === 201){
      callback(self.http.responseText);
    }
    else{
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send(JSON.stringify(data)); // dado enviado precisa ser formatado
}

// Http PUT request
easyHttp.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    if (self.http.status === 200){
      callback(self.http.responseText);
    }else{
    callback('Error' + self.http.status);
  }}

  this.http.send(JSON.stringify(data));
}

// Http DELETE request
easyHttp.prototype.delete = function(url, callback){
  this.http.open('DELETE', url, true);

  let self = this;  
  this.http.onload = function(){
    if(self.http.status == 200){
      callback('Post deletado');
    }else{
      callback('Erro: ' + self.http.status);
    }
  }

  this.http.send();
}