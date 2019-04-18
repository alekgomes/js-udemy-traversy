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

function createPost(post){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post)
      resolve();
    }, 2000);    
  })
}

function getPost(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title:'Post #3', body:'Esse é o terceiro post'}).then(getPost);
