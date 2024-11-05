import IStudent from './students';



function processStudent(student: IStudent){
    console.log(`Processing ${student.name}...`);
}
const student1 = {
    name: "Necati Abay",
    age: 38
};
processStudent(student1 as IStudent)
const Student1Object = student1 as IStudent;
processStudent(Student1Object);
const student2 = {
    name: "Ugur Abay",
    age: 34
};
processStudent(student2 as IStudent);
const student3 = {
    age: 33
};
processStudent(student3 as IStudent);
// Processing undefined bc the function can´t find a name
const student4 = {
    age: 33,
}
console.log(student2);
console.log(student4);
processStudent(student4 as IStudent)





