const Person = require('./person');
class Teacher extends Person{
    constructor(name,age,classes,id){
        super(name,age,id);
        classes.forEach(element=>{ element.teacher=this});
        this.clazzes=classes;

    }
    introduce(){
        if(this.clazzes.length!=0)
        return super.introduce()+` I am a Teacher. I teach Class ${this.clazzes.map(element=>element.number).join()}.`;
        return super.introduce()+` I am a Teacher. I teach No Class.`;
    }
    isTeaching(student){
        for(let clazz of this.clazzes){
            if(clazz.hasStudent(student)) return true;
        }
        return false;
    }
    notifyStudentAppended(message){
        console.log(message);
    }
    notifyLeaderAssigned(message){
             console.log(message);

    }
   /* Teacher还有一个isTeaching方法，传入一个学生，返回true/false。只要学生在classes中的任一个class中，就是在教他。 而学生是否在class中这件事情，应该是Class有一个方法hasStudent来判断。

    当学生加入Teacher教的班级的时候，Teacher会打印一个句话,形如：

`I am Tom. I know Jerry has joined Class 2.`

    当学生成为Teacher教的班级的班长的时候，Teacher会打印一个句话,形如：

`I am Tom. I know Jerry become Leader of Class 2.`*/
}
/*var Teacher=function (id,name,age,classes) {
    Person.call(id,name,age);
    this.classes=classes;
}
Teacher.prototype.introduce=function () {
    if(this.classes.length==0) return super.introduce()+ `I am a Teacher. I teach No Class.`;
    else  return super.introduce()+`I teach Class ${this.classes.join()}.`;
}*/
module.exports = Teacher;