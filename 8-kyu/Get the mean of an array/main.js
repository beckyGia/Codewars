/*
Title:
Get the mean of an array

Description:
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/


//My Solution:

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let sum = marks.reduce((acc, c) => +acc + +c, 0);
  let average = Math.floor(sum/marks.length)
  return average;
}