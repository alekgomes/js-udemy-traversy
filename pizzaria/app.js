// Btn incremento tem que:
// Aumentar a quantidade e alterar o valor total

const form = document.querySelector('#form');

form.addEventListener('click', function(e){
  if(e.target.id === 'incremento'){
    // Definindo variáveis
    let quantidade = Number(e.target.parentElement.querySelector('#quantidade').textContent);

    const preco = Number(e.target.parentElement.previousElementSibling.querySelector('#preco').textContent);  

    let valor = e.target.parentElement.nextElementSibling.querySelector('#valor');

    // Incrementa quantidade ao click
    quantidade++;

    // Altera quantidade na UI
    e.target.parentElement.querySelector('#quantidade').textContent = quantidade;

    // Atualizar o valor conforme altero quantidade
    valor.textContent = quantidade * preco;
  }  
});