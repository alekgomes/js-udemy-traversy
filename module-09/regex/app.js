let re;

re = /hello/i; // Isso, por si só representa uma REGEX

// console.log(re)
// console.log(re.source)

// Funções para avaliar regex
// exec()  => retorna um array se houver match
  // const result = re.exec('hello world');

  // console.log(result)

// test()  - Retorna true se há match, false se não há
  // const result = re.test('hello');
  // console.log(result); // True

// match() - Retorna resultado ou null
  // const str = "Hello there";
  // const result = str.match(re);

  // console.log(result)

// search() - Retorna o index do primeiro match ou -1
  // const str = 'hey, hell there';
  // const result = str.search(re);
  // console.log(result);


// replace() - Retorna nova string com elementos alterados
  const str = 'Hello there';
  const newStr = str.replace(re,'hi');
  console.log(newStr);
  

