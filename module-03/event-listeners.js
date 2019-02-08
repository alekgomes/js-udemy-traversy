const clearTasks = document.querySelector('.clear-tasks');

clearTasks.addEventListener('click', onClick);

function onClick(e){

  let val;

  val = e

  // O elemento target
  val = e.target;
  val = e.id;
  val = e.classList;
  // e.target.remove();

  // Tipo do evento 
  val = e.type;

  // TimeStamp
  val = e.timeStamp;

  // Coordenadas relativas a window
  val = e.clientX;
  val = e.clientY;

  // Coordenadas relativas ao elemento
  val = e.offsetY;
  val = e.offsetX;
  
  console.log(val);
}
