// Write your code here
var Person=function (name,age,id) {
    this.name=name;
    this.age=age;
    this.id=id;
}
Person.prototype.introduce=function () {
  return `My name is ${this.name}. I am ${this.age} years old.`
}

let person = new Person("Tom", 21);
console.log(person.name)
module.exports = Person;