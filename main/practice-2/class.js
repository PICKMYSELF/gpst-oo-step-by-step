// Write your code here
class Class{
    constructor(number){
        this.number=number;
    }
    assignLeader(student) {
        this.leader=student.name;
    }
}
/*var Class=function (number) {
    this.number=number;
}
Class.prototype.assignLeader=function (student) {
    this.leader=student.name;
}*/
module.exports = Class;