const http = new easyHTTP;

// Utilizando GET
// http.get('https://jsonplaceholder.typicode.com/posts')
// .then(json => {for(user of json){
//     let output = '';
//     output += `<li>${user.id}</li>`
//     document.querySelector('body').appendChild(document.createElement('ul')).innerHTML = output;
// }})
// .catch(err => console.log(err));


// Dados utilizados no POST
const data = {
  title: 'Era uma vez',
  body: 'Chamariz de freguês'
}

// Utilizando POST 
// http.post('https://jsonplaceholder.typicode.com/posts', data)
// .then(response => console.log(response))

// Utilizando PUT
// http.put('https://jsonplaceholder.typicode.com/posts/1', data)
// .then((response) => console.log(response))

// Utilizando DELETE
http.delete('https://jsonplaceholder.typicode.com/pozsts/1')
.then((response) => console.log(response))
.catch((err) => console.log(err))