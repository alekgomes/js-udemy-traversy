class easyHTTP{

  async get(url){
    const response = await fetch(url);
    if(response.status === 200){
      const json = await response.json();
      return json;
    }
    else{
      return `Algum erro aconteceu: ${response.status}`;
    }
  }

  async post(url, data){
    const post = await fetch(url,
      {
      method:'POST',
      headers:{
          'Content-type': 'application/json'
        },
      body: JSON.stringify(data)
      }
    )
    const retorno =  await post.json();
    return retorno
  }

  async put(url, data){
    const put = await fetch(url,{
      method: 'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    
    return put.json();
  }

  async delete(url){
    const postDelete = await fetch(url,{
      method:'DELETE',
      headers:{
        'Content-type': 'application/json'
      }
    });
    if (postDelete.status !== 200){
      return `Erro: ${postDelete.status}`;
    }
    return 'Dado deletado';
  }
}