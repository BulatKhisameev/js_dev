'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money;

let start = function() {
    do {
        money = Number(prompt('Ваш месячный доход?', 123000));
    }
    while (!isNumber(money))
};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let sum = 0,
            question,
            expenses;

        for (let i = 0; i < 2; i++) {
            do {
                expenses = prompt('Введите обязательную статью расходов?');

                question = Number(prompt('Во сколько это обойдется'));
                appData.expenses[i] = `${expenses}: ` + `${question}`;
                sum += +question;
                console.log(sum);


            }
            while (!isNumber(question));
            for (let expensesMonth in appData) {
                expensesMonth = Number(expensesMonth);
                appData.expensesMonth = sum;
            }

        }
    }
}


//урок 7

//добавляем свойство budget

appData.budget = money;
appData.budgetDay = 0;
appData.budgetMonth;
appData.expensesMonth = 0;

console.log(appData);




appData.asking();

console.log('Расходы за месяц: ' + appData.expensesMonth);

appData.getBudget = function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = appData.Month / 30;
};

let accumulatedMonth = appData.getBudget();

appData.getTargetMonth = function() {
    return appData.mission / appData.budgetMonth;
};


//рассчитываем срок достижения цели
if (appData.getTargetMonth() >= 0) {
    let period = Math.ceil(appData.mission / appData.budgetMonth);
    console.log(`Цель будет достигнета через: ${period} месяца`);
} else {
    console.log(`Цель не будет достигнута`);
}



// сообщаем пользователю его финансовое состояние
appData.getStatusIncome = (appData.budgetDay < 0) ? 'Что-то пошло не так' :
    (appData.budgetDay >= 1200) ? 'У вас высокий уровень дохода!' :
    (appData.budgetDay >= 600) ? 'У вас средний уровень дохода' :
    'К сожалению у вас уровень дохода ниже среднего!';
console.log(appData.getStatusIncome);

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + `${key}`);
}