try{
  // Gerando um RefereError
  myFunction();
}
catch(err){
  console.log(err)
} finally {
  console.log("Finally será executado independente da situação")
}

console.log('E o programa continua...')