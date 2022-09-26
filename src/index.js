function Student(name, grades) {
  this.name = name;
  this.grades = grades;

  Object.defineProperty(this, 'averageGrade', {
    get() {
      //return this.grades[1];
      return this.grades.reduce((acc, curr) => acc + curr) / this.grades.length;
    },
  });
}


export const school = {
  students: {
    0: new Student('Maria', [45, 76, 45, 98, 90, 87, 56]),
    1: new Student('Dmytro', [67, 34, 87, 34, 98, 76]),
    2: new Student('Anton', [45, 34, 87, 34, 23, 76]),
    3: new Student('Olha', [67, 34, 34, 23, 98, 76]),
    4: new Student('Anna', [67, 34, 85, 34, 85, 76]),
    5: new Student('Bohdan', [67, 25, 87, 34, 25, 76]),
    6: new Student('Eugene', [97, 34, 78, 85, 98, 65]),
    7: new Student('Ivan', [76, 89, 78, 98, 98, 99, 89, 96]),
  },
  getArrInRange(min, max){
    return Object.values(this.students).filter(stud => {return stud.averageGrade >= min && stud.averageGrade <= max})
      .map(stud => {return stud.name}).join(", ")
  },
  get aGradeStudents(){
    return this.getArrInRange(90, 100);
  },
  get bGradeStudents(){
    //return this.students.filter(stud => {return stud.averageGrade() >= 75 && stud.averageGrade <= 89});
    return this.getArrInRange(75, 89);
  },
  get cGradeStudents(){
    //return this.students.filter(stud => {return stud.averageGrade >= 60 && stud.averageGrade < 75});
    return this.getArrInRange(60, 74);
  },
  get dGradeStudents(){
    //return this.students.filter(stud => {return stud.averageGrade <= 59});
    return this.getArrInRange(0, 59);
  },
};





// git add .
//   git commit -m "init"
// git push


