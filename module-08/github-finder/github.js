class Github {
  constructor(){
    // Infos de cadastro de API, para que não haja limite de requests
    this.client_id = 'e018357b9994f575d5d0';
    this.client_secret = '63165f30f8bfab08d40bca6c7655075ab7deabf8';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profileJson = await profileResponse.json();
    
    
    return {
      profile: profileJson,  
    }
  }
}