const Person = require('./person');
class Student extends Person{
    constructor(name,age,clazz,id){
        super(name,age,id);
        this.clazz=clazz;
    }
    introduce(){
        if(this.clazz.leader==this.name)
            return super.introduce()+` I am a Student. I am Leader of Class ${this.clazz.number}.`
        if(this.clazz.hasStudent(this)) return super.introduce() +` I am a Student. I am at Class ${this.clazz.number}.`
        return super.introduce()+` I am a Student. I haven't been allowed to join Class.`
    }
}
/*var  Student=function (id,name,age,klass) {
    Person.call(id,name,age);
    this.klass=klass;
}
function f() {}                       //空函数f作为中间函数
f.prototype=Person.prototype;         //中间函数原型和父函数原型相等
Student.prototype=new f();            //子类原型和中间函数对象相等
Student.prototype.constructor=Student;//子类构造器修复
Student.prototype.introduce=function () {
    if(this.klass.leader==this.name)
    return super.introduce()+` I am a Student. I am Leader of Class ${this.klass.number}.`/!*I am at Class 2.*!/
    return super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`
}*/
module.exports = Student;
