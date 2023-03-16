// Створити масив з даними у відповідній послідовності 'Harry Potter', 'Godfather', 'Scarface', 'Casino'.
// Перебрати масив за допомогою цикла(for of), якщо довжина масива більше 3, то видалити перше значення з масиву.

let array = [
  'Harry Potter',
  'Godfather',
  'Scarface',
  'Casino',
];

let arrCount = 0;

for (const i of array) {
  arrCount++;
}

if (arrCount > 3) {
  array.shift();
}

console.log(array);