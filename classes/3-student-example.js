//                          Ще приклад про студентів 
//
//

// Створимо новий клас для учнів школи
class Student {

  constructor(name, surname, classNumber, classLetter, gender) {
    this.name = name;
    this.surname = surname;
    this.classNumber = classNumber;
    this.classLetter = classLetter;
    this.gender = gender;
  }

    fullName() {
    return `${this.name} ${this.surname}`;
  }
}

const student1 = new Student('Олександр', 'Тоболін', 1, 'Б', 'чоловік');

// Перевіримо як відобразився учень
// console.log(student1);

// Викличемо функцію для цього учня
console.log(student1.fullName());