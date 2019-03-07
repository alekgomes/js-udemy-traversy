class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greetings(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
};

class Costumer extends Person {
  constructor(firstName, lastName, phone){
  super(firstName, lastName);

  this.phone = phone;
  }

};

p1 = new Person('Lucas', 'Alek');
console.log(p1.greetings());

c1 = new Costumer('Alek', 'Lucas');
console.log(c1.greetings());

