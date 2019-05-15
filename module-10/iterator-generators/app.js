// Exemplo de iterator

  // function nameIterator(names){
  //   let nextIndex = 0;

  //   return {
  //     next: function(){
  //       return nextIndex < names.length ?
  //       {value: names[nextIndex++], done: false}:
  //       {done: true};
  //     }
  //   }
  // }

  // // Criando array com names
  // const namesArray =['Lucas', 'Bruno', 'Bruce'];

  // // Iniciando o iterador passando namesArray

  // const names = nameIterator(namesArray);

  // console.log(names.next().value);

// Exemplo de generator

  // function* sayNames(){
  //   yield 'Lucas';
  //   yield 'Bruno';
  //   yield 'Bruce';
  // }

  // const name = sayNames();

  // console.log(name.next());


// gerador de ID's
function* createIds(){
  let index = 0;

  while(true){
    yield index++;
  }  
}

const gen = createIds();

console.log(gen.next())



