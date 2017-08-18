const Person = require('./person');
const Class = require('./class');
class Teacher extends Person{
    constructor(name,age,classes,id){
        super(name,age,id);
        this.clazzes=classes;
    }
    introduce(){
        if(this.clazzes.length!=0)
        return super.introduce()+` I am a Teacher. I teach Class ${this.clazzes.map(element=>element.number).join()}.`;
        return super.introduce()+` I am a Teacher. I teach No Class.`;
    }
}
/*var Teacher=function (id,name,age,classes) {
    Person.call(id,name,age);
    this.classes=classes;
}
Teacher.prototype.introduce=function () {
    if(this.classes.length==0) return super.introduce()+ `I am a Teacher. I teach No Class.`;
    else  return super.introduce()+`I teach Class ${this.classes.join()}.`;
}*/
let clazz1 = new Class(2);
let clazz2 = new Class(3);
let teacher = new Teacher("Joun", 21, [clazz1, clazz2]);
console.log(teacher.introduce());
module.exports = Teacher;