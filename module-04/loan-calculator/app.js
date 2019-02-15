// Declarando variáveis da interface
// Elementos de entrada
const valor = document.getElementById('valor');
const porcentagem = document.getElementById('porcentagem');
const anosPagamento = document.getElementById('anos-pagamento');

// Elementos de saída
const pagamentoMensal = document.getElementById('pagamento-mensal');
const pagamentoTotal = document.getElementById('pagamento-total');
const jurosTotal = document.getElementById('juros-total');

const form = document.getElementById('form-group');

// Add eventListener
form.addEventListener('submit', calculaJuros);

// Definindo display inicial do loader e resultado
const loadingDiv = document.querySelector('#loading');
const resultadoDiv = document.querySelector('#resultado');
loadingDiv.style.display = 'none';
resultadoDiv.style.display = 'none';


// Declarando funções
function calculaJuros(e){
  e.preventDefault();

  // Display resultado = none
  resultadoDiv.style.display = 'none';

  // Variáveis para o cálculo 
  const principal = parseFloat(valor.value);
  const jurosCalculado = parseFloat(porcentagem.value) / 100 / 12;
  const pagamentosTotais = parseFloat(anosPagamento.value) * 12;

  // Efetuando o cálculo
  const x = Math.pow(1 + jurosCalculado, pagamentosTotais);
  const mensal = (principal * x * jurosCalculado)/(x-1);

  // Verificando se mensal é 'finito' ~ parte do calculo
  if(isFinite(mensal)){
    pagamentoMensal.value = mensal.toFixed(2);
    pagamentoTotal.value = (mensal * pagamentosTotais).toFixed(2);
    jurosTotal.value = ((mensal * pagamentosTotais)- principal).toFixed(2);

    // Exibe loader
    loadingDiv.style.display = 'block';    
    setTimeout(displayMensagens, 2000);
  }else{
    exibirErro();
  }
};

// Função que exibe erro
function exibirErro(){
  // Declarando variáveis
  const divErro = document.createElement('div');  
  let errorMsg = document.createTextNode('Verifique seus números');
  const card = document.querySelector('.card');
  const heading = document.querySelector('#heading');

  // Adicionando bs a divErro
  divErro.classList.add('msgErro', 'alert', 'alert-danger');

  // Fazendo os appends
  divErro.appendChild(errorMsg);
  card.insertBefore(divErro, heading);

  // Removendo mensagem de erro após 4s
  setTimeout(function(){
    document.querySelector('.msgErro').remove();
  }, 4000);
};

function displayMensagens(){
  loadingDiv.style.display = 'none';
  resultadoDiv.style.display = 'block';
}