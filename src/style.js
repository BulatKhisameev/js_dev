// обращаемся к пользователю с вопросами и записываем полученные ответы
let money = prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount1 = Number(prompt(`Во сколько обойдется ${expenses1}?`));
let amount2 = Number(prompt(`Во сколько обойдется ${expenses2}?`));

//рассчитываем месячный бюджет
let budgetMonth = (money - amount1 - amount2);
console.log(budgetMonth);

//рассчитываем срок достижения цели
let mission = 10000000;
let period = Math.ceil(mission / budgetMonth);
console.log(`Цель будет достигнета через: ${period} месяца`);

//рассчитываем дневной бюджет
let budgetDay = Math.floor(budgetMonth / 30);
console.log(`Бюджет на день: ${budgetDay}0`);

// сообщаем пользователю его финансовое состояние
let message = (budgetDay < 0) ? 'Что-то пошло не так' :
    (budgetDay >= 1200) ? 'У вас высокий уровень дохода!' :
    (budgetDay >= 600) ? 'У вас средний уровень дохода' :
    'К сожалению у вас уровень дохода ниже среднего!';
console.log(message);