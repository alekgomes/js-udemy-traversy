// Instanciando Github class
const github = new Github;
const ui = new UI;

// Capturando Search input
const searchInput = document.getElementById('searchUser');

// Add event listener
searchInput.addEventListener('keyup', (e) =>{
  const userText = e.target.value;

  if(userText !== ''){
    // Make http request
    github.getUser(userText)
      .then((profile) => {
        if(profile.profile.message === 'Not Found'){
          // Show alert userNotFound

        }else{
          // Show profile
          ui.showProfile(profile.profile);
        }
      })
  }else{
    // Clear profile
  }

});
