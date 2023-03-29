// Фільтрація за діапазоном
// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, 
// шукає в ньому елементи більші-рівні a та менші-рівні b і віддає масив цих елементів.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25, 30];
let a = 5;
let b = 25;

let filterRange = arr.filter(value => value >= a && value <= b);
console.log(filterRange);
console.log(arr);



// Функція паліндром
// Саша - довбень, тому функція згенерована за допомогою ChatGPT. 

let newArray = ['око', 'дід', 'піп', 'наган', 'Анна', 'шалаш', 'радар', 'ротатор', 'лодка', 'пінап'];

function findPalindromesInArray(wordsArray) {
  let palindromeWords = [];
  
  for (let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i].toLowerCase();
    let reversedWord = word.split('').reverse().join('');
    
    if (word === reversedWord) {
      palindromeWords.push(word);
    }
  }
  
  console.log("Palindrome words found in the array:");
  console.log(palindromeWords);
}
findPalindromesInArray(newArray);