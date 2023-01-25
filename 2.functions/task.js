'use strict';

// Задание 1

function getArrayParams(...arr) {
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue);

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams(-99, 99, 10)); 
console.log(getArrayParams(1, 2, 3, -100, 10)); 
console.log(getArrayParams(5));  


// Задание 2

function summElementsWorker(...arr) {
  const initialValue = 0;
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue);

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let max = arr.length ? Math.max.apply(null, arr) : 0;
  let min = arr.length ? Math.min.apply(null, arr) : 0;

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    }
    else {
      sumOddElement +=  arr[i];
    }
  }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      countEvenElement++;
      sumEvenElement += arr[i];
    }
  }
  return sumEvenElement / countEvenElement;
}

console.log(summElementsWorker()); 
console.log(summElementsWorker(10, 10, 11, 20, 10)); 

console.log(differenceMaxMinWorker()); 
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); 

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); 
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 


// Задание 3

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    func(arrOfArr[i]);
    let arr2 = arrOfArr[i];
    if (maxWorkerResult < func(...arrOfArr[i])) {
      maxWorkerResult = func(...arrOfArr[i]);
    }
  }
  return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker)); 
console.log(makeWork(arr, differenceEvenOddWorker)); 
console.log(makeWork(arr, averageEvenElementsWorker));