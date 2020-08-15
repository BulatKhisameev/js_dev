// задаем переменные
let money = 230000;
let income = 'trading';
let addExpenses = 'Flat, Eat, Car';
let deposit = true;
let mission = '1000000';
let period = 4;

// вывод данных
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);

// работа со строкой
addExpenses = addExpenses.toLowerCase();
let arr = addExpenses.split(" ");
console.log(arr);

//дневной бюджет

let budgetDay = money / 30;
console.log(budgetDay);