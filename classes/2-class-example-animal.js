//                          Розглянемо приклад про тваринок 
//
// Ви - директор зоопарку і вам потрібно вести облік тварин, які у вас народжуються.
// Для цього можна створити клас з базовими параметрами тваринок, а потім за цим шаблоном легко додавати нових.
//
//

// Створюємо клас і додаємо в нього просту функцію
class Animal {
  constructor(type, name, legs, eatsMeat, cellNumber) {
    this.type = type;
    this.name = name;
    this.legs = legs;
    this.eatsMeat = eatsMeat;
    this.cellNumber = cellNumber;
  }

  showInfo() {
    console.log(
      `The ${this.type} called ${this.name} has ${this.legs} legs and lives in cell number ${this.cellNumber}.`
    );
  }
}

// // Створюємо обʼєкти за шаблоном
let animal1 = new Animal("Cat", "Мурчик", 4, false, 273);
let animal2 = new Animal("Spider", "Гоша", 8, true, 17);
let animal3 = new Animal("Parrot", "Кєша", 2, true, 211);

// Можемо звернутись до кожного обʼєкту, щоб отримати про нього інформацію чи запустити функцію
animal3.showInfo();