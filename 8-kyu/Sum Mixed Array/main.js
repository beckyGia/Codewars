/*
Title:
Sum Mixed Array

Description:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/


//My Solution:

function sumMix(x){
  let y = [];
  for (let i = 0; i < x.length; i++){
    if ((typeof Number(x[i])) === "number") {
      y.push(Number(x[i]));
    }
  }
  let z = y.reduce((acc, c) => +acc + +c, 0);
  
  return z;
}