try{
  // Gerando um refere error
  myFunction();
}
catch(err){
  console.log(err)
} finally {
  console.log("Finally será executado independente da situação")
}

console.log('E o programa continua...')