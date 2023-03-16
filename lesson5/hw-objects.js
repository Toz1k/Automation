// 1. Напишіть код, виконавши завдання з кожного пункту окремим рядком:
// - Створіть порожній об’єкт user.
// - Додайте властивість name зі значенням Іван.
// - Додайте властивість surname зі значенням Сміт.
// - Змініть значення name на Петро.
// - Видаліть властивість name з об’єкта.


let user = {};
user.name = 'Іван';
user.surname = 'Сміт';
user.name = 'Петро';
delete user.name;
console.log(user);


// 2. Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.
function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

let schedule = {};
console.log(isEmpty(schedule));

// schedule["8:30"] = "Вставай";
// console.log(isEmpty(schedule));

// 3. Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum. У наведеному вище прикладі має бути 390.
// Якщо об’єкт salaries порожній, то результат має бути 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  } console.log(sum);