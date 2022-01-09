"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  D = Math.pow(b, 2) - (4 * a * c);
  if (D === 0) {
    let x;
    x = -b / (2 * a);
    arr.push(x);
  } else if (D > 0) {
    let x1;
    let x2;
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1, x2);
  } else if (D < 0) {
    console.log("Дискриминант меньше нуля")
  }
  return arr;
}




function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
