/*
Title:
Count of positives / sum of negatives

Description:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/


//My Solution:

function countPositivesSumNegatives(input) {
  let positive = 0;
  let negative = 0;
  let arr = [];
  
  if (input < 1) {
    return [];
  } 
  
  for (let i = 0; i < input.length; i++){    
    if (input[i] > 0) {
      positive += 1;
    } else if(input[i] < 0) {
      negative += input[i]
    }
  }  
  
  arr.push(positive)
  arr.push(negative)
  
  return arr;
}