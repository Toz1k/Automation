//                          Розглянемо приклад детальніше 
//
// Уявімо, що ми працюємо в компанії що продає автомобілі.
// В нас є проста програма для обліку наявних авто. Класи допомагають нам швидше додавати нові авто за шаблоном.
// Коли покупці дивляться авто на сайті, функція з класу Car виводить їм додаткову інформацію про конкретне авто. 
//


// Створюємо клас і додаємо в нього просту функцію
class Car {
  constructor(brand, engine, weight, country) {
    this.brand = brand;
    this.engine = engine;
    this.weight = weight;
    this.country = country;
  }

  showInfo() {
    console.log(
      `Hello, you're looking at ${this.brand} with ${this.engine} engine. \nIt is from ${this.country} and has a weight of ${this.weight} kg`
    );
  }
}

// // Створюємо обʼєкти за шаблоном
let car1 = new Car("Fiat", "petrol", "1200", "Italy");
let car2 = new Car("Volkswagen", "diesel", "1300", "Germany");
let car3 = new Car("ZAZ", "lpg", "1000", "Ukraine");

// Клієнт переглядає інформацію по кожному авто
car2.showInfo();

// car2.showInfo();

// car3.showInfo();