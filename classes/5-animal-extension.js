//                          Наслідування класу: Складніший варіант
//
// Варто памʼятати: Наслідування можливо в декілька рівнів (безліч)

// Створюємо клас тварин з більшою кількістю властивостей
class Animal {
    constructor(type, AnimalName, legs, eatsMeat, cellNumber) {
      this.type = type;
      this.AnimalName = AnimalName;
      this.legs = legs;
      this.eatsMeat = eatsMeat;
      this.cellNumber = cellNumber;
    }
  }
  
  // Створюємо розширений клас на основі Animal вже окремо для змій
  class Snake extends Animal {
    constructor(type, AnimalName, legs, eatsMeat, cellNumber, color, length, isPoisonous) {
      super(type, AnimalName, legs, eatsMeat, cellNumber);
      this.color = color;
      this.length = length;
      this.isPoisonous = isPoisonous;
    }
  }
  
  let snake1 = new Snake('python', 'Gosha', 0, true, 123, 'green', 2, true);
  
  
console.log(snake1);