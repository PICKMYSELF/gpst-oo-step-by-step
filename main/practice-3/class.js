// Write your code here
const Student = require('./student');
const Teacher = require('./teacher');
class Class{
    constructor(number){
        this.number=number;
        this.member=[];
        this.teacher=null;
    }
    assignLeader(student) {
        if(this.hasStudent(student)){
            this.leader=student.name;
            if(this.teacher!=null)this.teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.number}`);
            return 'Assign team leader successfully.';
            }
            else  return 'It is not one of us.';
    }
    appendMember(student){
       student.clazz=this;
        this.member.push(student);
        if(this.teacher!=null)this.teacher.notifyStudentAppended(`${student.name} has joined Class ${this.number}`);


    }
    hasStudent(student){
        if(this.member.indexOf(student)!=-1) return true;
        return false;
    }
}
/*var Class=function (number) {
    this.number=number;
}
Class.prototype.assignLeader=function (student) {
    this.leader=student.name;
}*/
module.exports = Class;
let clazz = new Class(2);
let student = new Student("Jerry", 21, clazz);
let teacher = new Teacher("Tom", 21, [clazz]);
clazz.appendMember(student);
clazz.assignLeader(student);