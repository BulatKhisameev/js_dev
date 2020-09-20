'use strict';
let isString = function(n) {
    return isNaN(n) || 0 == n.length;
}
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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    asking: function() {

        if (confirm('Есть ли у вас дополнительный заработок?')) {
            let itemIncome = prompt('Какой дополнительный заработок', 'Репетиторство');


            do {
                let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
                appData.income[itemIncome] = cashIncome;
            }
            while (!isNumber(appData.income[itemIncome]));
        }

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

        };

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

for (let i = 0; i < appData.addExpenses.length; i++) {
    appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].slice(1).toLowerCase();
}
console.log(appData.addExpenses.join(', '));


console.log('Расходы за месяц: ' + appData.expensesMonth);

appData.getBudget = function() {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.Month / 30);
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

appData.getInfoDeposit = function() {
    if (appData.deposit) {
        do {
            appData.percentDeposit = prompt('Какой годовой процент', 10);
        }
        while (!isNumber(appData.percentDeposit));
        do {
            appData.moneyDeposit = prompt('Какая сумма находится в депозите?', 100000);
        }
        while (!isNumber(appData.moneyDeposit));
    }
};
appData.calcSaveMoney = function() {
    return appData.budgetMonth * appData.period;
}


for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + `${key}`);
}


appData.getInfoDeposit();
console.log(appData.calcSaveMoney(), appData.percentDeposit, appData.moneyDeposit);