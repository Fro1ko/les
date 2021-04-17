'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function getRandomNum() {
  return Math.floor(Math.random() * 100);
}

function game() {
  let hiddenNumber = getRandomNum();
  function find() {
  console.log(hiddenNumber);
  let numberPerson = prompt("Угадай число от 1 до 100");

  if (numberPerson === null) {
    alert('До свидания');
    return;
  }
  if (isNumber(numberPerson)) {
    let num = +numberPerson;
    if (num > hiddenNumber) {
      alert('Загаданное число меньше');
      find();
    } else if (num < hiddenNumber) {
      alert('Загаданное число больше');
      find();
    } else  if (num === hiddenNumber) {
      confirm('Вы угадали! Сыграем ещё?');
      game();
    } else {
      alert('До свидания');
      return; 
    }

} else {
  alert('Введите число');
  find();
}
}
find();
}
game();