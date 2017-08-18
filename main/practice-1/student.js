const Person = require('./person');
class Student extends Person{
    constructor(name,age,clazz){
        super(name,age);
        this.klass=clazz;
    }
    introduce(){
        return `${super.basicIntroduce()} I am a Student. I am at Class ${this.klass}.`
    }
}
module.exports = Student;
let stu=new Student("Tom",21,2);
console.log(stu.introduce());