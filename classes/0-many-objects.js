// Ви працюєте в деканаті ВУЗу і ведете облік студентів. 
// Кожен студент - новий обʼєкт з властивостями.

// let student1 = {
//     firstName: 'Сашко',
//     lastName: 'Тоболін',
//     group: 13,
//     isOnBudget: true,
// }

// let student2 = {
//     firstName: 'Вітя',
//     lastName: 'Цирін',
//     group: 22,
//     isOnBudget: true,
// }

// let student3 = {
//     firstName: 'Ліза',
//     lastName: 'Веренчук',
//     group: 12,
//     isOnBudget: false,
// }

// let student4 = {
//     firstName: 'Гарік',
//     lastName: 'Боровко',
//     group: 13,
//     isOnBudget: false,
// }

// let student5 = {
//     firstName: 'Олена',
//     lastName: 'Головач',
//     group: 45,
//     isOnBudget: true,
// }


// Створювати кожного разу всі властивості для нового обʼєкту - запара.









// Класи допомагають перетворити створення обʼєктів у майже приємне заняття. 
// Уявіть собі такий запис наших пʼятьох студентів.
// let student1 = new Student('Сашко','Тоболін', 13, true);
// let student2 = new Student('Вітя','Цирін', 22, true);
// let student3 = new Student('Ліза','Веренчук', 12, false);
// let student4 = new Student('Гарік','Боровко', 13, false);
// let student5 = new Student('Олена','Головач', 45, true);



class Student {
    constructor(firstName, lastName, group, isOnBudget) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.isOnBudget = isOnBudget;
    }
}

let student1 = new Student('Сашко','Тоболін', 13, true);
let student2 = new Student('Вітя','Цирін', 22, true);
let student3 = new Student('Ліза','Веренчук', 12, false);
let student4 = new Student('Гарік','Боровко', 13, false);
let student5 = new Student('Олена','Головач', 45, true);


console.log(student3.group);