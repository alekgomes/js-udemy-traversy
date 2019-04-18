const http = new easyHttp();

// Utilizando o GET
http.get('https://jsonplaceholder.typicode.com/users')
  .then((info) =>{info.forEach((user) => console.log(user.name))})
  .catch((err) => console.log(err));

  
// // Utilizando o POST
http.post('https://jsonplaceholder.typicode.com/posts', data)
.then(json => console.log(json))
.catch(err => console.log(err))
  
// Utilizando o PUT
http.put('https://jsonplaceholder.typicode.com/posts/5', data)
.then((info) => console.log(info))
.catch((err) => console.log(err))

// Utilizando DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/8', data)
.then((info) => console.log(info))
.catch((err) => console.log(err))


// Criando dado para enviar
const data = {
  title: 'Esse é um título fictício',
  body: 'Esse corpo tbm o é'
};