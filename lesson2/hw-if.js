// 1. Чи буде показано alert?
if ('0') {
    alert( 'Привіт' );
  }
// alert зʼявиться, бо 0 написано в лапках, тобто це string, а string = true, що провокує виконання коду. 


/* 2. Назва JavaScript
Використовуючи конструкцію if..else, напишіть код, що запитує: ‘Яка “офіційна” назва JavaScript?’
Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”
*/

let jsName = prompt('Яка офіційна назва JavaScript?', '');
    if (jsName === 'ECMAScript') {
        console.log('То є так');}
    else {console.log('Ти шоооо? Це ж ECMAScript!');}


/* 3. Покажіть знак
Використовуючи if..else, напишіть код, що отримує число за допомогою prompt і потім виводить повідомлення сonsole.log
*/

let userInput = prompt('Okay, now tell me the number!', '');
let inputNumber = Number(userInput);
    if (inputNumber > 0) {
        console.log('1');}
    else if (inputNumber == 0) {
            console.log('0');}
    else if(inputNumber < 0) {
            console.log('-1');}
    else {
        console.log('I have nothing to say :(');}


/* 4. Перепишіть if на ?
Перепишіть конструкцію if, використовуючи умовний оператор '?'
*/
// Було
let result;

if (a + b < 4) {
  result = 'Нижче';
} else {
  result = 'Вище';
}

// Стало
let a = 10; // додав значення змінних щоб потім візуалізувати результат
let b = 2;
let result = (a + b <4) ? 'Нижче': 'Вище';
console.log(result);

// 5. Перепишіть 'if..else' на '?'
// Було 
let message;

if (login == 'Працівник') {
  message = 'Привіт';
} else if (login == 'Директор') {
  message = 'Вітаю';
} else if (login == '') {
  message = 'Немає логіну';
} else {
  message = '';
}

// Стало
let login = prompt('Ти хто?', ''); // додав запит щоб візуалізувати результат

let message = (login == 'Працівник') ? 'Привіт' :
        (login == 'Директор') ? 'Вітаю' :
        (login == '') ? 'Немає логіну' :
        'Я вас не знаю';
console.log(message);