class Github {
  constructor(){
    // Infos de cadastro de API, para que não haja limite de requests
    this.client_id = 'e018357b9994f575d5d0';
    this.client_secret = '63165f30f8bfab08d40bca6c7655075ab7deabf8';
    this.repos_count = 5;
    this.repos_sort = 'created:asc'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileJson = await profileResponse.json();
    const repoJson = await repoResponse.json();
    
    
    
    return {
      profile: profileJson,
      repo: repoJson,
    }
  }
}