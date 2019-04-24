class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }

 // Exibe perfil encontrado a cada digitação
  showProfile(user){
    this.profile.innerHTML = `
      <div class='card card-body mb-3'>
        <div class='row'>
        <div class='col-md-3'>
          <img class='img-fluid mb-2' src='${user.avatar_url}'>
          <a href='${user.html_url}' target='_blank' class='btn btn-primary btn-block mb-3'>
            View Profile
          </a>
        </div>
        <div class='col-md-9'>
          <span class='badge badge-primary'>
            Public repos: ${user.public_repos}
          </span>
          <span class='badge badge-secondary'>
            Public gists: ${user.public_gists}
          </span>
          <span class='badge badge-success'>
            Followers: ${user.followers}
          </span>
          <span class='badge badge-primary'>
            Following: ${user.following}
          </span>
          <br><br>
          <ul class='list-group'>
            <li class='list-group-item'>Company: ${user.company}</li>
            <li class='list-group-item'>Website/Blog${user.blog}</li>
            <li class='list-group-item'>Location: ${user.location}</li>
            <li class='list-group-item'>Member Since: ${user.created_at}</li>
          </ul>
        </div>
        </div>
      </div>
      <h3 class='page-heading mb-3'>Latest Repos:</h3>
      <div id='repos'></div>
    `;
  }

  // Show repo
  showRepo(repos){
    let output = '';

    repos.forEach((repo) => {
      output +=`
      <div class='card card-body mb-2'>
        <div class='row'>
          <div class='col-md-6' >
            <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
          </div>
          <div class='col-md-6' >
            <span class='badge badge-primary'>
              Stars: ${repo.stargazers_count}
            </span>
            <span class='badge badge-secondary'>
              Watchers: ${repo.watchers_count}
            </span>
            <span class='badge badge-success'>
              Fork: ${repo.forms_count}
            </span>
          </div>
        </div>
      </div>
      `;
    });

    // Output repositories
    document.getElementById('repos').innerHTML = output
  }

  // Show message
  showAlert(message, className){
    // Clear alert anteriores - evitar acúmulo
    this.clearAlert();
    // Create a div
    const div = document.createElement('div');

    // Adicionando classes
    div.className = className;
    // div.classList.add(className);

    // Add text
    div.appendChild(document.createTextNode(message));

    // Get parente
    const container = document.querySelector('.search-container');
    // Get reference to use in the insertBefore method
    const search = document.querySelector('.search');

    // Insert alert
    container.insertBefore(div, search);

    // Timeout depois de 3 seg
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    
    if(currentAlert){
      currentAlert.remove();
    }

  }

  // Clear profile when there is nothing in the input  
  clearProfile(){
    this.profile.innerHTML
      = '';
  }
}