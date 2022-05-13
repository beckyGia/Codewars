/*
Title:
Convert number to reversed array of digits

Description:
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]

*/


//My Solution:

function digitize(n) {
  //code here
  let myArr= String(n).split('').map(num => {
    return Number(num);
  })
  
  let reveresedArr = myArr.reverse();
  return reveresedArr;
}