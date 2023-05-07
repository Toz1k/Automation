class Students {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  study() {
    console.log(`Студент ${this.name} зараз навчається.`);
  }
}

class MainSubject extends Students {
  constructor(name, age, gender, subjectName, mark) {
    super(name, age, gender);
    this.subjectName = subjectName;
    this.mark = mark;
  }
  learnSubject() {
    if (this.mark < 5) {
      console.log(`Студент ${this.name} по ${this.subjectName} - довбень.`);
    }
  }
  study() {
    console.log(`Студент ${this.name} зараз тупить і відпочиває.`);
  }
}

const sasha = new MainSubject("Сашко", 28, "чоловік", "JavaScript", 3);

sasha.study();