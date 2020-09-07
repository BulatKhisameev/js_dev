'use strict';

let isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    // обращаемся к пользователю с вопросами и записываем полученные ответы
let money;
let income = Number(prompt('Какой у вас дополнительный доход?', 25000))
let mission = 10000000;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');


let start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money))
};

start();


let showTypeof = function(item) {
    console.log(typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

let expenses = [];

console.log(addExpenses.toLowerCase().split(','));

//
let getExpensesMonth = function() {
    let sum;
    do {
        for (let i = 0; i < 1; i++) {

            expenses[i] = prompt('Введите обязательную статью расходов?');

            sum = prompt(`Во сколько обойдется?`);
        }
    }
    while (!isNumber(sum));

    console.log(expenses);
    return sum;
};


let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function() {
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
    return mission / accumulatedMonth
};

console.log(accumulatedMonth);

//рассчитываем срок достижения цели
if (getTargetMonth() >= 0) {
    let period = Math.ceil(mission / accumulatedMonth);
    console.log(`Цель будет достигнета через: ${period} месяца`);
} else {
    console.log(`Цель не будет достигнута`);
}

// //рассчитываем дневной бюджет
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log(`Бюджет на день: ${budgetDay}`);

// сообщаем пользователю его финансовое состояние
let getStatusIncome = (budgetDay < 0) ? 'Что-то пошло не так' :
    (budgetDay >= 1200) ? 'У вас высокий уровень дохода!' :
    (budgetDay >= 600) ? 'У вас средний уровень дохода' :
    'К сожалению у вас уровень дохода ниже среднего!';
console.log(getStatusIncome);