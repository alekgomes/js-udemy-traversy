import { http } from './http';
import { ui } from './ui';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// List to add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Delete Post
document.querySelector('#posts').addEventListener('click', deletePost);

// Get posts
function getPosts () {
  http.get('http://localhost:3000/posts').then((data) => ui.showPosts(data)).catch((err) => console.log(err));
}

function submitPost () {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const data = {
    title: title,
    body: body
  };

  http
    .post('http://localhost:3000/posts', data)
    .then((data) => {
      ui.showAlert('Post added', 'alert alert-success');
      ui.clearFields();
      getPosts();
    })
    .catch((err) => console.log(err));
}

function deletePost (e) {
  if (e.target.classList.contains('fa-remove')) {
    const postId = e.target.parentElement.dataset.id;
    e.preventDefault();
    http
      .delete(`http://localhost:3000/posts/${postId}`)
      .then((res) => {
        getPosts();
        ui.showAlert('Post deleted', 'alert alert-danger');
      })
      .catch((err) => console.log(err));
  }
}
