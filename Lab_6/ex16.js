const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    sayHello: function() {
      return "Hello my name is " + this.firstName + " " + this.lastName;
    }
  };

console.log(person.sayHello());