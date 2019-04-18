const http = new easyHttp();


// Get todos posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(response){
//     console.log(response);
// });

// Get um post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(response){
//     console.log(response);
// });

// Criando dado para enviar
const data =  {
  "title": "Esse é um post criado por mim",
  "body": "Esse é o corpo da requisição"
}

// POST
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(response){
//   console.log(response);
// })

// PUT
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(response){
//   console.log(response);
// });

// DELETE
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(response){
//   console.log(response)
// })