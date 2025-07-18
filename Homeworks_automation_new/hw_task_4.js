// Task 2

/*
1) Write a program that takes a number as input and prints whether it is positive, negative, or zero.
*/

let inputData = prompt("Enter any number");
let number = Number(inputData);

if (number === 0) {
    console.log('Your number is Zero');
}
else if (number > 0) {
    console.log('Your number is Positive');
}
else if (number < 0) {
    console.log('Your number is Negative');
}
else {
    console.log('Your input in NOT a NUMBER. Please enter a valid number.');
}










