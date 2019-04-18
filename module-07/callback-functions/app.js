const posts = [
  {
    title: "Post #1",
    body: "Esse é o primeiro post"
  },
  {
    title: "Post #2",
    body: "Esse é o segundo post"
  }
]


// MANEIRA SÍNCRONA 
// function createPost(post){
//   setTimeout(function(){
//     posts.push(post)
//   }, 2000);
// }

// function getPost(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title:'Post #3', body:'Esse é o terceiro post'});
// getPost();

// ###########

// Maneira ASSÍNCRONA

function createPost(post, callback){
  setTimeout(function(){
    posts.push(post)
    callback()
  }, 1000);
}

function getPost(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
}

createPost({title:'Post #3', body:'Esse é o terceiro post'}, getPost);
