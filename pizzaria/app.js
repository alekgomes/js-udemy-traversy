const form = document.querySelector('#form');

form.addEventListener('click', function(e){

  //Definindo variáveis
  const preco = Number(e.target.parentElement.previousElementSibling.querySelector('#preco').textContent);
  let quantidade = Number(e.target.parentElement.querySelector('#quantidade').textContent); 
  let valor = e.target.parentElement.nextElementSibling.querySelector('#valor');
  let valorTotal = document.querySelector('#valor-total');

  // Implementando INCREMENTO
  if(e.target.id === 'incremento'){
    // Incrementa quantidade ao click
    quantidade++;

    // Altera quantidade na UI
    e.target.parentElement.querySelector('#quantidade').textContent = quantidade;

    // Atualizar o valor conforme altero quantidade
    valor.textContent = quantidade * preco;
  }

  // Implementando DECREMENTO
  if(e.target.id === 'decremento'){
    // Impedindo quantidade negativa
    if(quantidade !== 0){
      quantidade--

    // Atualizando UI com novo quantidade
    e.target.parentElement.querySelector('#quantidade').textContent = quantidade ;

    // Atualizando valor
    valor.textContent = valor.textContent - preco;
    }
  }

  // Atualizando VALOR TOTAL
  let valores = document.querySelectorAll('#valor');
  let total = 0;

  for(valor of valores){    
    total += (Number(valor.textContent));    
  }
  valorTotal.textContent = total;
  console.log(total);

});