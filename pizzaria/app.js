// Btn incremento tem que:
// Aumentar a quantidade e alterar o valor total

const form = document.querySelector('#form');

form.addEventListener('click', function(e){
  // Implementando INCREMENTO
  if(e.target.id === 'incremento'){
    // Definindo variáveis
    const preco = Number(e.target.parentElement.previousElementSibling.querySelector('#preco').textContent);
    let quantidade = Number(e.target.parentElement.querySelector('#quantidade').textContent); 
    let valor = e.target.parentElement.nextElementSibling.querySelector('#valor');

    // Incrementa quantidade ao click
    quantidade++;

    // Altera quantidade na UI
    e.target.parentElement.querySelector('#quantidade').textContent = quantidade;

    // Atualizar o valor conforme altero quantidade
    valor.textContent = quantidade * preco;
  }

  // Implementando DECREMENTO
  if(e.target.id === 'decremento'){
    // Diminuir quantidade no UI
    // Diminuir no valor total

    // Selecionando variáveis da UI
    let quantidade = Number(e.target.parentElement.querySelector('#quantidade').textContent);

    const preco = Number(e.target.parentElement.previousElementSibling.querySelector('#preco').textContent);

    let valor = e.target.parentElement.nextElementSibling.querySelector('#valor');
    // Impedindo quantidade negativa
    if(quantidade !== 0){
      quantidade--

    // Atualizando UI com novo quantidade
    e.target.parentElement.querySelector('#quantidade').textContent = quantidade ;
    
    // Atualizando valor
    valor.textContent = valor.textContent - preco;
    }

    




  }
});