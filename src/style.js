'use strict';

//задания на разборе с Лескиным



// function one() {
//     let x = 10;

//     function two(y) {
//         return x + y;
//     }

//     function three() {
//         let y = 5;
//         return x * y;
//     }

//     return two(15);
// }
// // какой бы аргумент не поставил в консоль лог ниже, 
// // х, все равно, будет считать равны 10, так как пузырьковый эффект
// // функция two не найдет внутри себя значени х и поднимется на уровень выше
// // и найдет там заданный х
// // 
// console.log(one());

// Задание №6.
let randomNumber = Math.round(Math.random() * 100);
let a = prompt('Угадай число от 1 до 100');

a > randomNumber ? 'Доступ запрещен' : a < randomNumber ? 'Загаданное число меньше'
)
console.log(randomNumber);