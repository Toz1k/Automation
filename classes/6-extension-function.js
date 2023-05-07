//                          Наслідування класу: зміна функції
//
// Варто памʼятати: В дочірньому класі можна перевизначити метод з батьківської функції.
//
//

// Створюємо клас тварин
class Animal {
  constructor(type, AnimalName) {
    this.type = type;
    this.AnimalName = AnimalName;
  }
  showMessage() {
    console.log('Привіт, я - тварина!');
  }
}

// Створюємо розширений клас на основі Animal вже окремо для змій
class Snake extends Animal {
  constructor(type, AnimalName, color, isPoisonous) {
    super(type, AnimalName);
    this.color = color;
    this.isPoisonous = isPoisonous;
  }
  showMessage() {
    console.log('Привіт, я - змія!');
  }
}

let snake1 = new Snake('пітон','Гоша','зелений',false);
let snake2 = new Snake('анаконда','Ліза','жовтий',false);
let snake3 = new Snake('кобра','Валентин','чорний',true);

let tiger = new Animal('tiger','Люся');

snake2.showMessage();