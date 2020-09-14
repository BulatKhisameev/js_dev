'use strict';
///////////////////////////////////////////////
// let isNumber = function(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }

// Задание №6.
let randomNumber;

function random() {
    randomNumber = Math.round(Math.random() * 100);
    console.log(randomNumber);;
}

random();

function guessing() {

    let userNumber = prompt('Угадайте число!');

    function messageOut() {

        if (userNumber == null || userNumber == randomNumber) {
            if (userNumber == null) {
                alert('Жаль что отменили игру!');
            } else {
                if (userNumber == randomNumber) {
                    alert('Угадал! Игра закончена');
                }
            }
        } else {
            if (userNumber > randomNumber) {
                alert('Загаданное число меньше! Повторите поптыку!');
                guessing();
            } else {
                if (userNumber < randomNumber) {
                    alert('Загаданное число больше! Повторите попытку!');
                    guessing();
                }
            }
        }

    }

    messageOut();
};

guessing()