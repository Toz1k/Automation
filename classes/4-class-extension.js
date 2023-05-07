//                          Наслідування класу
//
// Наслідування класу – це коли один клас розширює інший.
// Таким чином, ми можемо створити нову функціональність на основі тої, що існує.
//
//

// В вашому зоопарку скоро відкриється новий терраріум в який завезуть багато змій, потрібно вести їх детальний облік
// Для них підходять стандартні параметри тварин, але потрібно додати деякі специфічні, щоб не заплутатись
//
//

// Створюємо клас тварин
class Animal {
  constructor(type, AnimalName) {
    this.type = type;
    this.AnimalName = AnimalName;
  }
}

// Створюємо розширений клас на основі Animal вже окремо для змій
class Snake extends Animal {
  constructor(type, AnimalName, color, isPoisonous) {
    super(type, AnimalName);
    this.color = color;
    this.isPoisonous = isPoisonous;
  }
}

let snake1 = new Snake('пітон','Гоша','зелений',false);
let snake2 = new Snake('анаконда','Ліза','жовтий',false);
let snake3 = new Snake('кобра','Валентин','чорний',true);

let tiger = new Animal('tiger','Люся');



console.log(snake4);