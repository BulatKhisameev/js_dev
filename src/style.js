let money = prompt('Ваш месячный доход?');
// let income;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt(`Во сколько обойдется ${expenses1}?`);
let amount2 = prompt(`Во сколько обойдется ${expenses2}?`);
let budgetMonth = (money - expenses1 - expenses2);
console.log(budgetMonth);
let mission = 10000000;
let period = Math.ceil(mission / budgetMonth);
console.log(period);
let budgetDay = Math.floor(budgetDay / 30);
console.log(budgetDay);

if (budgetDay => 1200) {
    alert('У вас высокий уровень дохода');
} else {
    if (budgetDay => 600) {
        alert('У вас средний уровень дохлда');
    } else {
        alert('К сожалению у вас уровень дохода ниже среднего');
    }
}
if (budgetDay < 0) {
    alert('Что-то пошло не так');
}

alert('Я стану лучшим на курсе!');
console.log('Я сделаю все для этого!');