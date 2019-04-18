
document.getElementById('button1').addEventListener('click', loadCustumer);

function loadCustumer(e){
  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'customer.json', true );
  
  xhr.onload = function(){
    if(this.status === 200){
      // console.log(customer.name);
      
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id} </li>
          <li>Name: ${customer.name} </li>
          <li>Phone: ${customer.phone} </li>
        </ul>
        `
        document.querySelector(".customer").innerHTML = output;
      }
  }

  xhr.send();
}

document.getElementById('button2').addEventListener('click', loadCustumers);

function loadCustumers(e){
  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'customers.json', true );
  
  xhr.onload = function(){
    if(this.status === 200){
      
      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id} </li>
          <li>Name: ${customer.name} </li>
          <li>Phone: ${customer.phone} </li>
        </ul>
        `
      });
      document.querySelector(".customers").innerHTML = output;
    }
  }

  xhr.send();
}