// Змінна
let age = 28
const BIRTHYEAR = 1994

// Примітиви
// Існує 7 типів примітивів: string, number, bigint, boolean, symbol, null та undefined.

// Методи
// Це такі штуки, які дозволяють впливати на змінні, примітиви, об’єкти та масиви
let str = "Привіт";
alert( str.toUpperCase() ); // ПРИВІТ


// Об’єкт
let user = {
    name: "Сашко",
    surname: "Тоболін",
    age: 28,
    hasBrains: false,
    alwaysSays: function() {
        console.log("хехе");
    },
    wantsPutinDead: true,
    "бажає дохлої русні": true,
    isAdmin: "yes",
};

// Виклик окремих властивостей об’єкту
user.hasBrains;
user.alwaysSays;
user.wantsPutinDead;
user["бажає дохлої русні"];
user.isAdmin;


// Масив
let fruits = ["Яблуко", "Банан", "Груша"];
console.log(fruits[0]);


