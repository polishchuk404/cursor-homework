// Создайте новый класс BudgetStudent, который полностью наследует класс Student
// Бюджетный студент может получать стипендию с помощью метода this.getScholarship. 
// Получение стипендии сопровождается выводом информации в консоль: Вы получили 1400 грн. стипендии
// Метод получения стипендии автоматически вызывается каждые 30 секунд после создания объекта. Подсказка: вызывайте его в constructor
// Студент получает стипендию только в том случае, если средний балл у него выше или равен 4.0
// Если студент исключен, он не получает стипендию (думаю это было и так очевидно :) )


class Student {
  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
  }
  getInfo() {
    return `Студент ${this.course}го курса ${this.university}  ${this.fullName}`;
  }
  getMarks(){
    return this.marks;
  }
  setMarksNew(mark){
    this.marks.push(mark);
    return this.marks;
  }
  getAverageMark(){
    return this.marks.reduce((a, b) => (a + b), 0) / this.marks.length;
  }
  dismiss(){
    this.marks = null;
    return "Студент исключен!";
  }
  recover(){
    this.marks = [5, 4, 4, 5];
    return "Студент восстановлен!";
  }
}

class BudgetStudent extends Student{
  constructor(university, course, fullName, marks){
    super(university, course, fullName, marks);
  }
  getScholarship(){
    if (this.marks === null || this.getAverageMark() < 4) {
      return "Вы не получили 1400 грн. стипендии";
    } else if (this.getAverageMark() > 4){
      return "Вы получили 1400 грн. стипендии";
    }
  }
}



let student = new Student('Высшей Школы Мошенничества г.Одесса', 5, 'Остап Родоманський Бендер', [5, 4, 4, 5]);
let budgetStudent = new BudgetStudent('Высшей Школы Мошенничества г.Одесса', 5, 'Иван Родоманський Бендер', [5, 4, 4, 5]);
console.log(student.getInfo());
console.log(student.getMarks());
console.log(student.setMarksNew(5));
console.log(student.getAverageMark());
console.log(student.dismiss());
console.log(student.recover());
setInterval(() => console.log(budgetStudent.getScholarship()), 30000);
