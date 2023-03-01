// 1. Напишіть функцію яка приймає 2 параметри додає їх та вертає їх суму

let param1 = 69;
let param2 = 1;

function calcSum() {
  return param1 + param2;
}
calcSum();

// АБО так: 
function sum (x, y) {
  return x + y;
}
sum(1,88);


// 2. Перепишіть функцію, використовуючи '?' або '||'
// Сама функція: 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Батьки дозволили?');
  }
}

// Перепис через ?
function checkAge1(age) {
  let accessAllowed = (age > 18) ? true : confirm('Батьки дозволили?');
}
checkAge1(19);


// Перепис через ||
function checkAge2(age) {
  return (age > 18) || confirm('Батьки дозволили?');
}
checkAge2(1)


// 3. Функція min(a, b). Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
function min(a,b) {
  if (a > b) {
    return b;
  }
  if (a < b) {
    return a;
  }
  else {
  console.log('Error, enter two different numbers')
  }
}
min(2,3);