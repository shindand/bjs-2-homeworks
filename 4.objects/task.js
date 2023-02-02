function Student(name, gender, age, marks) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];  
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;    
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks = this.marks.concat(marks);
  }
}

Student.prototype.getAverage = function () {
    let count = 0;
    if (this.marks && this.marks.length > 0) {
    return (this.marks.reduce((acc, items) => {count++; return acc + items; }, 0)) / count;
    }
    else {return 0;}
   }

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.reason = reason;
}


let student1 = new Student("Василиса", "женский", 19);

student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1);
student1.addMarks(3, 2, 4);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);

student1.exclude('прогулы');
console.log(student1);
console.log(student1.marks);
student1.addMarks(4, 5, 4);
console.log(student1);
console.log(student1.marks);
console.log(student1.reason);
console.log(student1.getAverage()); // 0



