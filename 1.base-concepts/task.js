"use strict"

// Задача 1

function solveEquation(a, b, c) {
    let arr = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant == 0) {
      arr.push(- b / (2 * a));
    }
    else if (discriminant > 0) {
        arr.push((- b + Math.sqrt(discriminant)) / (2 * a));
        arr.push((- b - Math.sqrt(discriminant)) / (2 * a));
    }

    return arr;
  }

  function testCase() {
    console.log(`Должно вывести одно значение: ${solveEquation(1, 2, 1)}`);
    console.log(`Должно вывести два значения: ${solveEquation(1, 5, 1)}`);
    console.log(`Должно вывести пустой массив: ${solveEquation(10, 2, 1)}`);
  }
testCase();


//  Задача 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let s, payment; 
  let percents = percent;
  if (isNaN(percent)) {
    console.log('Вы неверно ввели процентную ставку');
    return false;
  }
  if (isNaN(contribution)) {
    console.log('Вы неверно ввели сумму первоначального взноса');
    return false;
  }
  if (isNaN(amount)) {
    console.log('Вы неверно ввели сумму кредита');
    return false;
  }


  percent = Number(percent) / 100 / 12;
  s = Number(amount) - Number(contribution);
  payment = s * (percent + (percent / (Math.pow((1 + percent), Number(countMonths)) - 1)));
  payment = Math.round(payment * countMonths * 100) / 100;
  console.log(`Ввод: ${percents}, ${contribution}, ${amount}, ${countMonths}.  Вывод: ${payment}`);
  return payment;
}

calculateTotalMortgage(10, 0, 50000, 12);
calculateTotalMortgage(10, 1000, 50000, 12);
calculateTotalMortgage(10, 20000, 20000, 48);
calculateTotalMortgage(10, 0, 10000, 36);
calculateTotalMortgage(15, 0, 10000, 36);
