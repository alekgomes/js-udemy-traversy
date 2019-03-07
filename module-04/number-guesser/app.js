// Declaração das variáveis
const guessInput = document.querySelector('#guess-input');
const btnSubmit = document.querySelector('#guess-btn');
const numMinSpan = document.querySelector(".min-num");
const numMaxSpan = document.querySelector(".max-num");
const message = document.querySelector('.message');
const game = document.querySelector('#game');

// Variáveis do jogo
let numMin = 1;
let numMax = 10;
let winningNumber = getRandomNum(numMin, numMax);
let guessesLeft = 3;

// Definindo mínimo e máximo na UI
numMinSpan.textContent = numMin;
numMaxSpan.textContent = numMax;

// Play again
game.addEventListener('mousedown', function(e){
  if(e.target.classList.contains('play-again')){
    window.location.reload();
  }
})

btnSubmit.addEventListener('click', function(){
  let guessNumber = Number(guessInput.value);

  // Validação
  if(guessNumber < numMin || guessNumber > numMax){
    exibeMsg(`insira um número entre ${numMin} e ${numMax}`, 'red');
  }

  // Caso erro
  else if(guessNumber !== winningNumber){
    guessesLeft--;

    if(guessesLeft <= 0){
      exibeMsg(`Você perdeu. O número correto era ${winningNumber}.`);
      guessInput.setAttribute('disabled', true);
      playAgain();

    }else{
      exibeMsg(`Você errou. Ainda restam ${guessesLeft} tentativas`, 'red');
      guessInput.value = '';
      guessInput.focus();
    }
  }
  // Caso acerto
  else{
    exibeMsg(`${winningNumber} é mesmo o número certo. Você ganhou!`, 'green');
    guessInput.setAttribute('disabled', true);
    playAgain();
  }


});

function exibeMsg(msg, color){
  message.textContent = msg;
  guessInput.style.borderColor = color;
  message.style.color = color;
}

function playAgain(){
  btnSubmit.value = 'Play Again';
  btnSubmit.classList.add('play-again');
}

function getRandomNum(min, max){
  num = Math.floor(Math.random()*(max - min + 1) + min);
  return num;
}
