'use strict';

// обращаемся к пользователю с вопросами и записываем полученные ответы
let money = Number(prompt('Ваш месячный доход?', 56000));
let income = Number(prompt('Какой у вас дополнительный доход?', 25000))
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?', 'ипотека');
let expenses2 = prompt('Введите обязательную статью расходов?', 'еда');
let amount1 = Number(prompt(`Во сколько обойдется ${expenses1}?`, 30000));
let amount2 = Number(prompt(`Во сколько обойдется ${expenses2}?`, 8000));

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.split(','));
//рассчитываем месячный бюджет
let budgetMonth = (money - amount1 - amount2);
console.log(budgetMonth);

//рассчитываем срок достижения цели
let mission = 10000000;
let period = Math.ceil(mission / budgetMonth);
console.log(`Цель будет достигнета через: ${period} месяца`);

//рассчитываем дневной бюджет
let budgetDay = Math.floor(budgetMonth / 30);
console.log(`Бюджет на день: ${budgetDay}`);

// сообщаем пользователю его финансовое состояние
let getStatusIncome = (budgetDay < 0) ? 'Что-то пошло не так' :
    (budgetDay >= 1200) ? 'У вас высокий уровень дохода!' :
    (budgetDay >= 600) ? 'У вас средний уровень дохода' :
    'К сожалению у вас уровень дохода ниже среднего!';
console.log(getStatusIncome);



// задания четвертого урока

//создаем функцию для рассчета суммы обязательных платежей
let allExpensesOfMonth = 0;

function getExpensesMonth(data1, data2) {
    allExpensesOfMonth = data1 + data2;
}
getExpensesMonth(amount1, amount2);
console.log(allExpensesOfMonth);

//задаем функцию рассчета накполений за месяц

let accumulatedMonth = 0;

function getAccumulatedMonth(data1, data2) {
    accumulatedMonth = data1 - data2;
}
getAccumulatedMonth(money, allExpensesOfMonth);
console.log(accumulatedMonth);

//задаем функцию подсчета периода достижения цели

let timeTarget = 0;

function getTargetMont(data1, data2) {
    timeTarget = data1 / data2;
}

getTargetMont(money, accumulatedMonth);
console.log(Math.ceil(timeTarget));

//удаляем переменную budgetMonth

delete window['budgetMonth'];
alert(budgetMonth);

//рассчитываем budgetDay на основе accumulatedMonth

budgetDay = accumulatedMonth / 30;

// рассчитываем общий доход за месяц