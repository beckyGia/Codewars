/*
Title:

Sum of positive

Description:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/


//My Solution:

function positiveSum(arr) {
  let sum = 0;
  let positive = arr.filter(element => element > 0);
  sum = positive.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
  
  return sum;
}
