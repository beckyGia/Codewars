/*
Title:
Array plus array

Description:
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/


//My Solution:

function arrayPlusArray(arr1, arr2) {
  let arrAdded1 = arr1.reduce((acc, c) => +acc + +c, 0);
  let arrAdded2 = arr2.reduce((acc, c) => +acc + +c, 0);
  return arrAdded1 + arrAdded2;
}